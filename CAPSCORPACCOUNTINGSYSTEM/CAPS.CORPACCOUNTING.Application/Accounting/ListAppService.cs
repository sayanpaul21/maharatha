﻿using System;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using CAPS.CORPACCOUNTING.Helpers;
using System.Data.Entity;
using Abp.Linq.Extensions;
using System.Collections.Generic;
using Abp.Collections.Extensions;
using Abp.Runtime.Caching;
using CAPS.CORPACCOUNTING.JobCosting;
using CAPS.CORPACCOUNTING.Masters;
using CAPS.CORPACCOUNTING.Masters.Dto;
using CAPS.CORPACCOUNTING.Sessions;

namespace CAPS.CORPACCOUNTING.Accounting
{
    public class ListAppService : CORPACCOUNTINGServiceBase, IListAppService
    {

        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IRepository<SubAccountUnit, long> _subAccountUnitRepository;
        private readonly IRepository<JobUnit> _jobUnitRepository;
        private readonly IRepository<AccountUnit, long> _accountUnitRepository;
        private readonly IRepository<VendorUnit> _vendorUnitRepository;
        private readonly IRepository<TaxCreditUnit> _taxCreditUnitRepository;
        private readonly ICacheManager _cacheManager;
        private readonly CustomAppSession _customAppSession;

        public ListAppService(IRepository<SubAccountUnit, long> subAccountUnitRepository, IUnitOfWorkManager unitOfWorkManager,
            IRepository<JobUnit> jobUnitRepository, CustomAppSession customAppSession, IRepository<AccountUnit, long> accountUnitRepository,
            ICacheManager cacheManager, IRepository<VendorUnit> vendorUnitRepository, IRepository<TaxCreditUnit> taxCreditUnitRepository)
        {

            _unitOfWorkManager = unitOfWorkManager;
            _subAccountUnitRepository = subAccountUnitRepository;
            _jobUnitRepository = jobUnitRepository;
            _accountUnitRepository = accountUnitRepository;
            _customAppSession = customAppSession;
            _cacheManager = cacheManager;
            _vendorUnitRepository = vendorUnitRepository;
            _taxCreditUnitRepository = taxCreditUnitRepository;
        }


        /// <summary>
        /// Get Jobs or Divisions List by using OrganizationUnitId
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<List<NameValueDto>> GetJobOrDivisionList(AutoSearchInput input)
        {
            var Joblist = await (from job in _jobUnitRepository.GetAll()
                                 .Where(p=>p.TypeOfJobStatusId != ProjectStatus.Closed)
                                    .WhereIf(!string.IsNullOrEmpty(input.Query), p => p.Caption.Contains(input.Query) || p.JobNumber.Contains(input.Query))
                                    .WhereIf(!ReferenceEquals(input.OrganizationUnitId, null), p => p.OrganizationUnitId == input.OrganizationUnitId.Value)
                                 select new NameValueDto { Name = job.Caption + " " + job.JobNumber, Value = job.Id.ToString() })
                              .ToListAsync();

            return Joblist;
        }

        /// <summary>
        /// Get accounts 
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<List<NameValueDto>> GeAccountsList(AutoSearchInput input)
        {

            var chartOfAccountId = (from job in _jobUnitRepository.GetAll().WhereIf(!ReferenceEquals(input.JobId, null), p => p.Id == input.JobId)
                                    select job.ChartOfAccountId).FirstOrDefault();

            var Accountlist = await (from account in _accountUnitRepository.GetAll()
                                         .WhereIf(!string.IsNullOrEmpty(input.Query), p => p.Caption.Contains(input.Query) || p.AccountNumber.Contains(input.Query))
                                         .WhereIf(!ReferenceEquals(input.OrganizationUnitId, null), p => p.OrganizationUnitId == input.OrganizationUnitId.Value)
                                         .WhereIf(chartOfAccountId != 0, p => p.ChartOfAccountId == chartOfAccountId)
                                     select new NameValueDto
                                     {
                                         Name = account.Caption + " " + account.AccountNumber,
                                         Value = account.Id.ToString()
                                     }
                         ).ToListAsync();
            return Accountlist;
        }

        /// <summary>
        /// Get SubAccounts List based on OrganizationUnitId
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<List<NameValueDto>> GetSubAccountList(AutoSearchInput input)
        {
            var cacheItem = await GetSubAccountsCacheItemAsync(
              CacheKeyStores.CalculateCacheKey(CacheKeyStores.SubAccountKey, Convert.ToInt32(_customAppSession.TenantId), input.OrganizationUnitId), input);
            return cacheItem.ItemList.ToList()
                .WhereIf(!string.IsNullOrEmpty(input.Query), p => p.Name.ToUpper().Contains(input.Query.ToUpper())).ToList();
        }
        /// <summary>
        /// Get SubAccounts From DataBase
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        private async Task<List<NameValueDto>> GetSubAcoountsFromDb(AutoSearchInput input)
        {
            var query = from subaccounts in _subAccountUnitRepository.GetAll()
                        select new { subaccounts };
            return await query.WhereIf(!ReferenceEquals(input.OrganizationUnitId, null), p => p.subaccounts.OrganizationUnitId == input.OrganizationUnitId.Value)
                            .Select(u => new NameValueDto { Name = u.subaccounts.Caption + " " + u.subaccounts.SubAccountNumber, Value = u.subaccounts.Id.ToString() }).ToListAsync();

        }

        private async Task<CacheItem> GetSubAccountsCacheItemAsync(string subaccountkey, AutoSearchInput input)
        {
            return await _cacheManager.GetCacheItem(CacheStoreName: CacheKeyStores.CacheSubAccountStore).GetAsync(subaccountkey, async () =>
            {
                var newCacheItem = new CacheItem(subaccountkey);
                var subaccountList = await GetSubAcoountsFromDb(input);
                foreach (var subaccount in subaccountList)
                {
                    newCacheItem.ItemList.Add(subaccount);
                }
                return newCacheItem;
            });
        }


        /// <summary>
        /// Get Vendors
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<List<NameValueDto>> GetVendorList(AutoSearchInput input)
        {
            var cacheItem = await GetVendorsCacheItemAsync(
               CacheKeyStores.CalculateCacheKey(CacheKeyStores.VendorKey, Convert.ToInt32(_customAppSession.TenantId), input.OrganizationUnitId), input);
            return cacheItem.ItemList.ToList().WhereIf(!string.IsNullOrEmpty(input.Query), p => p.Name.ToUpper().Contains(input.Query.ToUpper())).ToList();
        }

        private async Task<List<NameValueDto>> GetVendorsFromDb(AutoSearchInput input)
        {
            var query = from vendors in _vendorUnitRepository.GetAll()
                        select new { vendors };
            return await query.WhereIf(!ReferenceEquals(input.OrganizationUnitId, null), p => p.vendors.OrganizationUnitId == input.OrganizationUnitId.Value)
                            .Select(u => new NameValueDto { Name = u.vendors.FirstName + " " + u.vendors.LastName, Value = u.vendors.Id.ToString() }).ToListAsync();

        }

        private async Task<CacheItem> GetVendorsCacheItemAsync(string vendorkey, AutoSearchInput input)
        {
            return await _cacheManager.GetCacheItem(CacheStoreName: CacheKeyStores.CacheVendorStore).GetAsync(vendorkey, async () =>
            {
                var newCacheItem = new CacheItem(vendorkey);
                var vendorList = await GetVendorsFromDb(input);
                foreach (var vendors in vendorList)
                {
                    newCacheItem.ItemList.Add(vendors);
                }
                return newCacheItem;
            });
        }

        /// <summary>
        /// Get TaxCreditList
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<List<NameValueDto>> GetTaxCreditList(AutoSearchInput input)
        {
            var taxCreditList = await _taxCreditUnitRepository.GetAll()
                 .WhereIf(!ReferenceEquals(input.OrganizationUnitId, null), p => p.OrganizationUnitId == input.OrganizationUnitId)
                 .WhereIf(!string.IsNullOrEmpty(input.Query), p => p.Description.Contains(input.Query))
                 .Select(u => new NameValueDto { Name = u.Description, Value = u.Id.ToString() }).ToListAsync();
            return taxCreditList;
        }


        /// <summary>
        /// Get Typeof1099T4
        /// </summary>
        /// <returns></returns>
        public List<NameValueDto> GetTypeof1099T4List()
        {
            return EnumList.GetTypeof1099T4List();
        }
    }
}