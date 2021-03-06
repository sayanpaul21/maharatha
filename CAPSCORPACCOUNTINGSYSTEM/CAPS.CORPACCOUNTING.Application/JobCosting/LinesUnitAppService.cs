﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using CAPS.CORPACCOUNTING.Masters;
using CAPS.CORPACCOUNTING.Masters.Dto;
using Abp.Linq.Extensions;
using System.Linq.Dynamic;
using System.Text;
using CAPS.CORPACCOUNTING.Helpers;
using CAPS.CORPACCOUNTING.Accounting;
using CAPS.CORPACCOUNTING.Helpers.CacheItems;
using CAPS.CORPACCOUNTING.Uploads.Dto;

namespace CAPS.CORPACCOUNTING.JobCosting
{
    public class LinesUnitAppService : CORPACCOUNTINGAppServiceBase, ILinesUnitAppService
    {
        private readonly AccountUnitManager _accountUnitManager;
        private readonly IRepository<AccountUnit, long> _accountUnitRepository;
        private readonly IRepository<TypeOfAccountUnit, int> _typeOfAccountRepository;
        private readonly IRepository<TypeOfCurrencyUnit, short> _typeOfCurrencyRepository;
        private readonly IRepository<JobUnit, int> _jobRepository;
        private readonly IRepository<JobAccountUnit, long> _jobaccontRepository;
        private readonly AccountCache _accountcache;
        private readonly IAccountUnitAppService _accountUnitAppService;
        private readonly IJobUnitAppService _jobUnitAppService;
        private readonly IRepository<CoaUnit, int> _coaRepository;



        public LinesUnitAppService(AccountUnitManager accountUnitManager,
            IRepository<AccountUnit, long> accountUnitRepository,
            IRepository<TypeOfAccountUnit, int> typeOfAccountRepository,
            IRepository<TypeOfCurrencyUnit, short> typeOfCurrencyRepository,
            IRepository<JobUnit, int> jobRepository,
            IRepository<JobAccountUnit, long> jobaccontRepository, AccountCache accountcache,
            IAccountUnitAppService accountUnitAppService,
            IJobUnitAppService jobUnitAppService, IRepository<CoaUnit, int> coaRepository)
        {
            _accountUnitManager = accountUnitManager;
            _accountUnitRepository = accountUnitRepository;
            _typeOfAccountRepository = typeOfAccountRepository;
            _typeOfCurrencyRepository = typeOfCurrencyRepository;
            _jobRepository = jobRepository;
            _jobaccontRepository = jobaccontRepository;
            _accountcache = accountcache;
            _accountUnitAppService = accountUnitAppService;
            _jobUnitAppService = jobUnitAppService;
            _coaRepository = coaRepository;
        }

        /// <summary>
        /// Get the Records by ProjectCoaId with paging sorting
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<PagedResultOutput<AccountUnitDto>> GetLinesByCoaId(GetAccountInput input)
        {
            var query =
                from au in _accountUnitRepository.GetAll()
                join typeOfAccount in _typeOfAccountRepository.GetAll() on au.TypeOfAccountId equals typeOfAccount.Id
                into accounts
                from accunit in accounts.DefaultIfEmpty()
                join currencytype in _typeOfCurrencyRepository.GetAll() on au.TypeOfCurrencyId equals currencytype.Id
                into currencyt
                from currency in currencyt.DefaultIfEmpty()
                join rollupacc in _accountUnitRepository.GetAll() on au.RollupAccountId equals rollupacc.Id
               into rollupaccount
                from rollupaccounts in rollupaccount.DefaultIfEmpty()
                join rollupdiv in _jobRepository.GetAll() on au.RollupJobId equals rollupdiv.Id
                into rollupAccount
                from rollupAccounts in rollupAccount.DefaultIfEmpty()
                select new
                {
                    Account = au,
                    TypeOfAccount = accunit.Description,
                    TypeOfCurrency = currency.Description,
                    RollUpAccountCaption = rollupaccounts.AccountNumber,
                    RollUpDivision = rollupAccounts.JobNumber
                };

            if (!ReferenceEquals(input.Filters, null))
            {
                SearchTypes mapSearchFilters = Helper.MappingFilters(input.Filters);
                if (!ReferenceEquals(mapSearchFilters, null))
                    query = Helper.CreateFilters(query, mapSearchFilters);
            }
            query = query.Where(item => item.Account.ChartOfAccountId == input.CoaId);

            var resultCount = await query.CountAsync();
            var results = await query
                .AsNoTracking()
                .OrderBy(Helper.GetSort("Account.AccountNumber ASC", input.Sorting))
                .PageBy(input)
                .ToListAsync();

            return new PagedResultOutput<AccountUnitDto>(resultCount, results.Select(item =>
                 {
                     var dto = item.Account.MapTo<AccountUnitDto>();
                     dto.AccountId = item.Account.Id;
                     dto.TypeofConsolidation = item.Account.TypeofConsolidationId != null ? item.Account.TypeofConsolidationId.ToDisplayName() : "";
                     dto.TypeOfAccount = item.TypeOfAccount;
                     dto.TypeOfCurrency = item.TypeOfCurrency;
                     dto.RollUpAccountCaption = item.RollUpAccountCaption;
                     dto.RollUpDivision = item.RollUpDivision;
                     return dto;
                 }).ToList());
        }

        /// <summary>
        /// Crating the Lines
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [UnitOfWork]
        public async Task<AccountUnitDto> CreateLineUnit(CreateAccountUnitInput input)
        {
            var accountUnit = input.MapTo<AccountUnit>();
            accountUnit.ParentId = input.ParentId != 0 ? input.ParentId : null;
            accountUnit.OrganizationUnitId = input.OrganizationUnitId;
            await _accountUnitManager.CreateAsync(accountUnit);
            await CurrentUnitOfWork.SaveChangesAsync();
            return accountUnit.MapTo<AccountUnitDto>();
        }
        /// <summary>
        /// Updating the Line
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<AccountUnitDto> UpdateLineUnit(UpdateAccountUnitInput input)
        {
            var accountUnit = await _accountUnitRepository.GetAsync(input.AccountId);

            #region Setting the values to be updated

            accountUnit.AccountNumber = input.AccountNumber;
            accountUnit.Caption = input.Caption;
            accountUnit.ChartOfAccountId = input.ChartOfAccountId;
            accountUnit.ParentId = input.ParentId != 0 ? input.ParentId : null;
            accountUnit.RollupAccountId = input.RollupAccountId;
            accountUnit.TypeOfCurrencyId = input.TypeOfCurrencyId;
            accountUnit.TypeofConsolidationId = input.TypeofConsolidationId;
            accountUnit.RollupJobId = input.RollupJobId;
            accountUnit.TypeOfAccountId = input.TypeOfAccountId;
            #endregion

            await _accountUnitManager.UpdateAsync(accountUnit);

            await CurrentUnitOfWork.SaveChangesAsync();

            return accountUnit.MapTo<AccountUnitDto>();
        }
        /// <summary>
        /// Deleting the Line by Id
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [UnitOfWork]
        public async Task DeleteLineUnit(IdInput<long> input)
        {
            //deleting the jobaccounts based on accountId
            await _jobaccontRepository.DeleteAsync(p => p.AccountId == input.Id);
            await _accountUnitManager.DeleteAsync(input.Id);
        }
        
    }
}

