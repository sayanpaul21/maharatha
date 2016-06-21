﻿using System;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using CAPS.CORPACCOUNTING.Accounting.Dto;
using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.AutoMapper;
using CAPS.CORPACCOUNTING.GenericSearch.Dto;
using CAPS.CORPACCOUNTING.Helpers;
using System.Data.Entity;
using System.Linq.Dynamic;
using Abp.Linq.Extensions;
using AutoMapper;
using System.Collections.Generic;
using Abp.Authorization;
using CAPS.CORPACCOUNTING.Authorization;
using CAPS.CORPACCOUNTING.Masters;

namespace CAPS.CORPACCOUNTING.Accounting
{
    /// <summary>
    /// SubAccount AppService
    /// </summary>
    [AbpAuthorize(AppPermissions.Pages_Financials_Accounts_SubAccounts)]
    public class SubAccountUnitAppService : CORPACCOUNTINGServiceBase, ISubAccountUnitAppService
    {

        private readonly SubAccountUnitManager _subAccountUnitManager;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IRepository<SubAccountUnit, long> _subAccountUnitRepository;
        private readonly IRepository<SubAccountRestrictionUnit, long> _subAccountRestrictionUnitRepository;
        private readonly IRepository<AccountUnit, long> _accountUnitRepository;
        private readonly IRepository<CoaUnit> _coaUnitRepository;
        private readonly SubAccountRestrictionUnitManager _subAccountRestrictionUnitManager;
        public SubAccountUnitAppService(SubAccountUnitManager subAccountUnitManager, IRepository<SubAccountUnit, long> subAccountUnitRepository,
            IUnitOfWorkManager unitOfWorkManager, IRepository<SubAccountRestrictionUnit, long> subAccountRestrictionUnitRepository,
            IRepository<AccountUnit, long> accountUnitRepository, IRepository<CoaUnit> coaUnitRepository, SubAccountRestrictionUnitManager subAccountRestrictionUnitManager)
        {
            _subAccountUnitManager = subAccountUnitManager;
            _unitOfWorkManager = unitOfWorkManager;
            _subAccountRestrictionUnitRepository = subAccountRestrictionUnitRepository;
            _accountUnitRepository = accountUnitRepository;
            _coaUnitRepository = coaUnitRepository;
            _subAccountRestrictionUnitManager = subAccountRestrictionUnitManager;
            _subAccountUnitRepository = subAccountUnitRepository;
        }


        /// <summary>
        /// Create the Sub Account.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [AbpAuthorize(AppPermissions.Pages_Financials_Accounts_SubAccounts_Create)]
        [UnitOfWork]
        public async Task<SubAccountUnitDto> CreateSubAccountUnit(CreateSubAccountUnitInput input)
        {
            var subAccountUnit = input.MapTo<SubAccountUnit>();
            await _subAccountUnitManager.CreateAsync(subAccountUnit);
            await CurrentUnitOfWork.SaveChangesAsync();

            SubAccountRestrictionUnitInput x = new SubAccountRestrictionUnitInput()
            {
                AccountId = 1,
                SubAccountId = 4,
                SubAccountRestrictionId = 0,
                OrganizationUnitId = 1
            };
            
            if(!ReferenceEquals(input.SubAccountRestrictionList,null))
            await CreateorUpdateSubAccountRestrictions(input.SubAccountRestrictionList);
            return subAccountUnit.MapTo<SubAccountUnitDto>();
        }

        /// <summary>
        ///  Update Sub Account.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [AbpAuthorize(AppPermissions.Pages_Financials_Accounts_SubAccounts_Edit)]
        public async Task<SubAccountUnitDto> UpdateSubAccountUnit(UpdateSubAccountUnitInput input)
        {
            var subAccountUnit = await _subAccountUnitRepository.GetAsync(input.SubAccountId);
            Mapper.CreateMap<UpdateSubAccountUnitInput, SubAccountUnit>()
                          .ForMember(u => u.Id, ap => ap.MapFrom(src => src.SubAccountId));
            Mapper.Map(input, subAccountUnit);
            await _subAccountUnitManager.UpdateAsync(subAccountUnit);
            await CurrentUnitOfWork.SaveChangesAsync();
            if (!ReferenceEquals(input.SubAccountRestrictionList, null))
                await CreateorUpdateSubAccountRestrictions(input.SubAccountRestrictionList);
            return subAccountUnit.MapTo<SubAccountUnitDto>();
        }

        /// <summary>
        ///  delete Sub Account.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [AbpAuthorize(AppPermissions.Pages_Financials_Accounts_SubAccounts_Delete)]
        public async Task DeleteSubAccountUnit(IdInput<long> input)
        {
            await _subAccountUnitManager.DeleteAsync(input);
        }


        /// <summary>
        /// Get the list of all Sub Accounts
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [AbpAuthorize(AppPermissions.Pages_Financials_Accounts_SubAccounts)]
        public async Task<PagedResultOutput<SubAccountUnitDto>> GetSubAccountUnits(SearchInputDto input)
        {
            var subAccountUnitQuery = CreateSubAccountQuery(input);
            subAccountUnitQuery = subAccountUnitQuery.Where(item => item.OrganizationUnitId == input.OrganizationUnitId || item.OrganizationUnitId == null);
            var resultCount = await subAccountUnitQuery.CountAsync();
            var results = await subAccountUnitQuery
                .AsNoTracking()
                .OrderBy(Helper.GetSort(SubAccountUnit.DefaultSortColumn + " " + "ASC", input.Sorting))
                .PageBy(input)
                .ToListAsync();


            var mapEnumResults = (from value in results
                                  select new SubAccountUnitDto
                                  {

                                      AccountingLayoutItemId = value.AccountingLayoutItemId,
                                      Caption = value.Caption,
                                      Description = value.Description,
                                      DisplaySequence = value.DisplaySequence,
                                      EntityId = value.EntityId,
                                      GroupCopyLabel = value.GroupCopyLabel,
                                      IsAccountSpecific = value.IsAccountSpecific,
                                      IsActive = value.IsActive,
                                      IsApproved = value.IsApproved,
                                      IsBudgetInclusive = value.IsBudgetInclusive,
                                      IsCorporateSubAccount = value.IsCorporateSubAccount,
                                      IsEnterable = value.IsEnterable,
                                      IsMandatory = value.IsMandatory,
                                      IsProjectSubAccount = value.IsProjectSubAccount,
                                      OrganizationUnitId = value.OrganizationUnitId,
                                      SearchNo = value.SearchNo,
                                      SearchOrder = value.SearchOrder,
                                      SubAccountId = value.SubAccountId,
                                      SubAccountNumber = value.SubAccountNumber,
                                      TypeOfInactiveStatusId = value.TypeOfInactiveStatusId,
                                      TypeOfInactiveStatus = value.TypeOfInactiveStatusId != null ? value.TypeOfInactiveStatusId.ToDisplayName() : "",
                                      TypeofSubAccount = value.TypeofSubAccountId.ToDisplayName(),
                                      TypeofSubAccountId = value.TypeofSubAccountId
                                  }).ToList();
            return new PagedResultOutput<SubAccountUnitDto>(resultCount, mapEnumResults);
        }

        /// <summary>
        /// Get Sub Account based on Id
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<SubAccountUnitDto> GetSubAccountUnitsById(IdInput input)
        {
            var SubAccountUnitItem = await _subAccountUnitRepository.GetAsync(input.Id);
            return SubAccountUnitItem.MapTo<SubAccountUnitDto>();
        }

        private IQueryable<SubAccountUnitDto> CreateSubAccountQuery(SearchInputDto input)
        {

            var subAccountUnitQuery = from subAccount in _subAccountUnitRepository.GetAll()
                                      select new SubAccountUnitDto
                                      {
                                          AccountingLayoutItemId = subAccount.AccountingLayoutItemId,
                                          Caption = subAccount.Caption,
                                          Description = subAccount.Description,
                                          DisplaySequence = subAccount.DisplaySequence,
                                          EntityId = subAccount.EntityId,
                                          GroupCopyLabel = subAccount.GroupCopyLabel,
                                          IsAccountSpecific = subAccount.IsAccountSpecific,
                                          IsActive = subAccount.IsActive,
                                          IsApproved = subAccount.IsApproved,
                                          IsBudgetInclusive = subAccount.IsBudgetInclusive,
                                          IsCorporateSubAccount = subAccount.IsCorporateSubAccount,
                                          IsEnterable = subAccount.IsEnterable,
                                          IsMandatory = subAccount.IsMandatory,
                                          IsProjectSubAccount = subAccount.IsProjectSubAccount,
                                          OrganizationUnitId = subAccount.OrganizationUnitId,
                                          SearchNo = subAccount.SearchNo,
                                          SearchOrder = subAccount.SearchOrder,
                                          SubAccountId = subAccount.Id,
                                          SubAccountNumber = subAccount.SubAccountNumber,
                                          TypeOfInactiveStatusId = subAccount.TypeOfInactiveStatusId.Value,
                                          TypeofSubAccountId = subAccount.TypeofSubAccountId
                                      };

            if (!ReferenceEquals(input.Filters, null))
            {
                SearchTypes mapSearchFilters = Helper.MappingFilters(input.Filters);
                if (!ReferenceEquals(mapSearchFilters, null))
                    subAccountUnitQuery = Helper.CreateFilters(subAccountUnitQuery, mapSearchFilters);
            }
            return subAccountUnitQuery;
        }

        /// <summary>
        /// Get SubAccountTypes
        /// </summary>
        /// <returns></returns>
        public List<NameValueDto> GetTypeofSubAccountList()
        {
            return EnumList.GetTypeofSubAccountList();
        }

        /// <summary>
        /// Get SubAccountRestrictions By SubAccountId
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<List<SubAccountRestrictionUnitDto>> GetAccountRestrictionList(GetAccountRestrictionInput input)
        {
            var query = from subaccountrestriction in _subAccountRestrictionUnitRepository.GetAll()
                        join account in _accountUnitRepository.GetAll() on subaccountrestriction.AccountId equals account.Id
                        select new { subaccountrestriction, Caption = account.Caption };

            var subAccountRestrictionList = await query.Where(p => p.subaccountrestriction.SubAccountId == input.SubAccountId && p.subaccountrestriction.IsActive == true).ToListAsync();
            return subAccountRestrictionList.Select(item =>
            {
                var dto = item.subaccountrestriction.MapTo<SubAccountRestrictionUnitDto>();
                dto.SubAccountRestrictionId = item.subaccountrestriction.Id;
                dto.Caption = item.Caption;
                return dto;
            }).ToList();

        }


        /// <summary>
        /// Get SubAccountRestrictions By SubAccountId
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<List<SubAccountRestrictionUnitDto>> GetAccountList(GetAccountRestrictionInput input)
        {

            var query = from account in _accountUnitRepository.GetAll()
                        join coa in _coaUnitRepository.GetAll().Where(p => p.IsCorporate == true) on account.ChartOfAccountId equals coa.Id
                        join subaccontrestriction in _subAccountRestrictionUnitRepository.GetAll() on account.Id equals
                            subaccontrestriction.AccountId
                            into subaccrestriction
                        from subaccrestrictionunits in subaccrestriction.DefaultIfEmpty()
                        where subaccrestrictionunits == null || subaccrestrictionunits.SubAccountId!=input.SubAccountId.Value 
                        select new
                        {

                            account.Caption,
                            account.Description,
                            accountId = account.Id,
                            IsActive= subaccrestrictionunits!=null && subaccrestrictionunits.IsActive,
                            SubAccountId= subaccrestrictionunits != null ? subaccrestrictionunits.SubAccountId:0,
                            SubAccountRestrictionId = subaccrestrictionunits != null ? subaccrestrictionunits.Id:0,
                            account.OrganizationUnitId
                        };
          
            var result = await query.ToListAsync();

            return result.Select(item =>
            {
                var dto = new SubAccountRestrictionUnitDto();
                dto.AccountId = item.accountId;
                dto.SubAccountId = item.SubAccountId;
                dto.OrganizationUnitId = item.OrganizationUnitId;
                dto.SubAccountRestrictionId = item.SubAccountRestrictionId;
                dto.IsActive = item.IsActive;
                dto.Caption = item.Caption;
                dto.Description = item.Description;
                return dto;
            }).ToList();
        }

        /// <summary>
        /// Create or Update SubAccountRestrictions
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>

        private async Task CreateorUpdateSubAccountRestrictions(List<SubAccountRestrictionUnitInput> input)
        {
            foreach (var subaccountrestriction in input)
            {
                if (subaccountrestriction.SubAccountRestrictionId == 0)
                {
                    var subAccountRestrictionUnit = subaccountrestriction.MapTo<SubAccountRestrictionUnit>();
                    subAccountRestrictionUnit.IsActive = true;
                    await _subAccountRestrictionUnitManager.CreateAsync(subAccountRestrictionUnit);
                    await CurrentUnitOfWork.SaveChangesAsync();

                }
                else
                {
                    var subrestrictionAccountUnit = await _subAccountRestrictionUnitRepository.GetAsync(subaccountrestriction.SubAccountRestrictionId);
                    subaccountrestriction.IsActive = false;
                    Mapper.Map(subaccountrestriction, subrestrictionAccountUnit);
                    await _subAccountRestrictionUnitManager.UpdateAsync(subrestrictionAccountUnit);
                    await CurrentUnitOfWork.SaveChangesAsync();

                }
            }



        }
    }
}
