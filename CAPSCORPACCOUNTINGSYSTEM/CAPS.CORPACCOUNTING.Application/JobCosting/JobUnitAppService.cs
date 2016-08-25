﻿using System;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using CAPS.CORPACCOUNTING.JobCosting.Dto;
using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.AutoMapper;
using System.Linq;
using System.Data.Entity;
using System.Linq.Dynamic;
using Abp.Linq.Extensions;
using CAPS.CORPACCOUNTING.Masters;
using Abp.Authorization;
using System.Collections.Generic;
using Abp.Collections.Extensions;
using CAPS.CORPACCOUNTING.GenericSearch.Dto;
using CAPS.CORPACCOUNTING.Helpers;
using Abp.Organizations;
using Abp.UI;
using CAPS.CORPACCOUNTING.Authorization;
using CAPS.CORPACCOUNTING.Masters.Dto;
using Abp.Runtime.Caching;
using AutoMapper;
using CAPS.CORPACCOUNTING.Helpers.CacheItems;
using CAPS.CORPACCOUNTING.Sessions;
using CAPS.CORPACCOUNTING.Uploads.Dto;
using System.Data;
using System.Text;
using CAPS.CORPACCOUNTING.Accounts;

namespace CAPS.CORPACCOUNTING.JobCosting
{
    /// <summary>
    /// JobAppService
    /// </summary>
    [AbpAuthorize(AppPermissions.Pages_Projects_ProjectMaintenance_Projects)]
    public class JobUnitAppService : CORPACCOUNTINGServiceBase, IJobUnitAppService
    {
        private readonly JobUnitManager _jobUnitManager;
        private readonly IRepository<JobUnit> _jobUnitRepository;
        private readonly IRepository<JobCommercialUnit> _jobDetailUnitRepository;
        private readonly IRepository<EmployeeUnit> _employeeUnitRepository;
        private readonly IRepository<CustomerUnit> _customerUnitRepository;
        private readonly IJobCommercialAppService _jobCommercialAppService;
        private readonly IRepository<OrganizationUnit, long> _organizationUnitRepository;
        private readonly IRepository<CoaUnit> _coaUnitRepository;
        private readonly IRepository<AccountUnit, long> _accountUnitRepository;
        private readonly IRepository<JobAccountUnit, long> _jobAccountUnitRepository;
        private readonly IRepository<ValueAddedTaxRecoveryUnit> _valueAddedTaxRecoveryUnitRepository;
        private readonly IRepository<ValueAddedTaxTypeUnit> _valueAddedTaxTypeUnitRepository;
        private readonly IRepository<TypeOfCountryUnit, short> _typeOfCountryUnitRepository;
        private readonly IRepository<CountryUnit> _countryUnitRepository;
        private readonly IJobAccountUnitAppService _jobAccountUnitAppService;
        private readonly IRepository<TaxCreditUnit> _taxCreditUnitRepository;
        private readonly IRepository<JobPORangeAllocationUnit> _jobPORangeAllocationUnitRepository;
        private readonly ICacheManager _cacheManager;
        private readonly CustomAppSession _customAppSession;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IRepository<JobLocationUnit> _jobLocationRepository;
        private readonly DivisionCache _divisioncache;
        private readonly AccountCache _accountcache;
        private readonly CustomerCache _customercache;
        private readonly AccountUnitAppService _accountUnitAppService;

        public JobUnitAppService(JobUnitManager jobUnitManager, IRepository<JobUnit> jobUnitRepository, IRepository<JobCommercialUnit> jobDetailUnitRepository,
            IRepository<EmployeeUnit> employeeUnitRepository, IRepository<CustomerUnit> customerUnitRepository, IJobCommercialAppService jobCommercialAppService,
            IRepository<OrganizationUnit, long> organizationUnitRepository, IRepository<JobAccountUnit, long> jobAccountUnitRepository,
            IRepository<CoaUnit> coaUnitRepository, IRepository<AccountUnit, long> accountUnitRepository, IRepository<ValueAddedTaxRecoveryUnit> valueAddedTaxRecoveryUnitRepository,
        IRepository<ValueAddedTaxTypeUnit> valueAddedTaxTypeUnitRepository, IRepository<TypeOfCountryUnit, short> typeOfCountryUnitRepository,
        IRepository<CountryUnit> countryUnitRepository, IJobAccountUnitAppService jobAccountUnitAppService, IRepository<TaxCreditUnit> taxCreditUnitRepository,
             IRepository<JobPORangeAllocationUnit> jobPORangeAllocationUnitRepository, ICacheManager cacheManager, CustomAppSession customAppSession,
             IUnitOfWorkManager unitOfWorkManager, IRepository<JobLocationUnit> jobLocationRepository, DivisionCache divisioncache, AccountCache accountcache, CustomerCache customercache, AccountUnitAppService accountUnitAppService)
        {
            _jobUnitManager = jobUnitManager;
            _jobUnitRepository = jobUnitRepository;
            _jobDetailUnitRepository = jobDetailUnitRepository;
            _employeeUnitRepository = employeeUnitRepository;
            _customerUnitRepository = customerUnitRepository;
            _jobCommercialAppService = jobCommercialAppService;
            _organizationUnitRepository = organizationUnitRepository;
            _coaUnitRepository = coaUnitRepository;
            _accountUnitRepository = accountUnitRepository;
            _jobAccountUnitRepository = jobAccountUnitRepository;
            _valueAddedTaxRecoveryUnitRepository = valueAddedTaxRecoveryUnitRepository;
            _valueAddedTaxTypeUnitRepository = valueAddedTaxTypeUnitRepository;
            _typeOfCountryUnitRepository = typeOfCountryUnitRepository;
            _countryUnitRepository = countryUnitRepository;
            _jobAccountUnitAppService = jobAccountUnitAppService;
            _taxCreditUnitRepository = taxCreditUnitRepository;
            _jobPORangeAllocationUnitRepository = jobPORangeAllocationUnitRepository;
            _cacheManager = cacheManager;
            _customAppSession = customAppSession;
            _unitOfWorkManager = unitOfWorkManager;
            _jobLocationRepository = jobLocationRepository;
            _divisioncache = divisioncache;
            _accountcache = accountcache;
            _customercache = customercache;
            _accountUnitAppService = accountUnitAppService;
        }
        /// <summary>
        /// To create the Job.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [UnitOfWork]
        [AbpAuthorize(AppPermissions.Pages_Projects_ProjectMaintenance_Projects_Create)]
        public async Task<IdOutputDto<int>> CreateJobUnit(CreateJobUnitInput input)
        {

            //validating the  BudgetFormat(ChartofAccountId)
            if (input.ChartOfAccountId == 0)
            {
                throw new UserFriendlyException(L("BudgetFormat is Required"));
            }
            CreateJobCommercialInput jobcommercialunit = new CreateJobCommercialInput
            {
                JobNumber = input.JobNumber,
                Caption = input.Caption,
                RollupCenterId = input.RollupCenterId,
                IsCorporateDefault = input.IsCorporateDefault,
                ChartOfAccountId = input.ChartOfAccountId,
                RollupAccountId = input.RollupAccountId,
                TypeOfCurrencyId = input.TypeOfCurrencyId,
                RollupJobId = input.RollupJobId,
                TypeOfJobStatusId = input.TypeOfJobStatusId,
                TypeOfBidSoftwareId = input.TypeOfBidSoftwareId,
                IsApproved = input.IsApproved,
                IsActive = input.IsActive,
                IsICTDivision = input.IsICTDivision,
                TypeofProjectId = input.TypeofProjectId,
                TaxRecoveryId = input.TaxRecoveryId
            };
            IdOutputDto<int> response = await _jobCommercialAppService.CreateJobDetailUnit(jobcommercialunit);



            //Get the accounts of appropriate coa and constructing CreateJobAccountUnitInput
            List<CreateJobAccountUnitInput> jobAccounts = await (from account in _accountUnitRepository.GetAll()
                                                                 join rollUpAccount in _accountUnitRepository.GetAll() on account.RollupAccountId equals rollUpAccount.Id into rollUpAccount
                                                                 from rollUpAccounts in rollUpAccount.DefaultIfEmpty()
                                                                 join rollUpDivision in _jobUnitRepository.GetAll().Where(u => u.IsDivision == true) on account.RollupJobId equals rollUpDivision.Id into rollUpDivision
                                                                 from rollUpDivisions in rollUpDivision.DefaultIfEmpty()
                                                                 where account.ChartOfAccountId == input.ChartOfAccountId
                                                                 select new CreateJobAccountUnitInput
                                                                 {
                                                                     JobId = response.JobId,
                                                                     AccountId = account.Id,
                                                                     RollupAccountId=account.RollupAccountId,
                                                                     RollupJobId=account.RollupJobId,
                                                                     Description = account.Caption,
                                                                     RollupAccountDescription=rollUpAccounts.Caption,
                                                                     RollupJobDescription=rollUpDivisions.Caption
                                                                 }).ToListAsync();


            #region Inserting JobId,AccountId,Description in JobAccount Table
            //bulk insert
            foreach (var jobAccount in jobAccounts)
            {
                await _jobAccountUnitAppService.CreateJobAccountUnit(jobAccount);
            }
            #endregion

            _unitOfWorkManager.Current.Completed += (sender, args) =>
            {

            };

            await CurrentUnitOfWork.SaveChangesAsync();
            return response;

        }

        /// <summary>
        ///To update the Job
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [AbpAuthorize(AppPermissions.Pages_Projects_ProjectMaintenance_Projects_Edit)]
        [UnitOfWork]
        public async Task<IdOutputDto<int>> UpdateJobUnit(UpdateJobUnitInput input)
        {
            if (input.ChartOfAccountId == 0)
            {
                throw new UserFriendlyException(L("BudgetFormat is Required"));
            }
            var jobUnit = await _jobUnitRepository.GetAsync(input.JobId);
            #region Setting the values to be updated
            jobUnit.JobNumber = input.JobNumber;
            jobUnit.Caption = input.Caption;
            jobUnit.IsCorporateDefault = input.IsCorporateDefault;
            jobUnit.RollupAccountId = input.RollupAccountId;
            jobUnit.TypeOfCurrencyId = input.TypeOfCurrencyId;
            jobUnit.RollupJobId = input.RollupJobId;
            jobUnit.TypeOfJobStatusId = input.TypeOfJobStatusId;
            jobUnit.TypeOfBidSoftwareId = input.TypeOfBidSoftwareId;
            jobUnit.IsApproved = input.IsApproved;
            jobUnit.IsActive = input.IsActive;
            jobUnit.IsICTDivision = input.IsICTDivision;
            jobUnit.TypeofProjectId = input.TypeofProjectId;
            jobUnit.TaxRecoveryId = input.TaxRecoveryId;
            jobUnit.ChartOfAccountId = input.ChartOfAccountId;
            jobUnit.RollupCenterId = input.RollupCenterId;
            #endregion


            await _jobUnitManager.UpdateAsync(jobUnit);


            //disable the SoftDelete Filter
            #region Adding the new lines to jobAccount
            using (UnitOfWorkManager.Current.DisableFilter(AbpDataFilters.SoftDelete))
            {
                //get all jobaccounts and Lines 
                var jobaccountsList = (from lines in _accountUnitRepository.GetAll().Where(p => p.ChartOfAccountId == input.ChartOfAccountId)
                                       join jobacc in _jobAccountUnitRepository.GetAll() on lines.Id equals jobacc.AccountId into jobaccount
                                       from jobaccounts in jobaccount.DefaultIfEmpty()
                                       join rollUpAccount in _accountUnitRepository.GetAll() on lines.RollupAccountId equals rollUpAccount.Id into rollUpAccount
                                       from rollUpAccounts in rollUpAccount.DefaultIfEmpty()
                                       join rollUpDivision in _jobUnitRepository.GetAll().Where(u => u.IsDivision == true) on lines.RollupJobId equals rollUpDivision.Id into rollUpDivision
                                       from rollUpDivisions in rollUpDivision.DefaultIfEmpty()
                                       select new { lines,
                                           jobaccounts,
                                           rollUpAccountDescription = rollUpAccounts.Caption,
                                           rollUpDivisionDescription = rollUpDivisions.Caption
                                       }).ToList();
                //bulkinsertion
                foreach (var jobaccount in jobaccountsList)
                {
                    if (ReferenceEquals(jobaccount.jobaccounts, null) && !jobaccount.lines.IsDeleted)
                    {
                        CreateJobAccountUnitInput jobAccount = new CreateJobAccountUnitInput
                        {
                            JobId = input.JobId,
                            AccountId = jobaccount.lines.Id,
                            RollupAccountId = input.RollupAccountId,
                            RollupJobId = input.RollupJobId,
                            Description = jobaccount.lines.Caption,
                            RollupJobDescription = jobaccount.rollUpDivisionDescription,
                            RollupAccountDescription = jobaccount.rollUpAccountDescription,
                        };

                        await _jobAccountUnitAppService.CreateJobAccountUnit(jobAccount);

                    }
                }

            }
            #endregion



            #region updating all JobAccounts of Job
            //bulk update
            if (!ReferenceEquals(input.JobAccountList, null))
            {
                foreach (var jobAccounts in input.JobAccountList)
                {
                    await _jobAccountUnitAppService.UpdateJobAccountUnit(jobAccounts);
                }
            }
            IdOutputDto<int> responseDto = new IdOutputDto<int>
            {
                JobId = jobUnit.Id
            };
            return responseDto;

            #endregion
        }

        /// <summary>
        /// To Delete the Job
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [UnitOfWork]
        [AbpAuthorize(AppPermissions.Pages_Projects_ProjectMaintenance_Projects_Delete)]
        public async Task DeleteJobUnit(IdInputExtensionDto input)
        {
            await _jobLocationRepository.DeleteAsync(p => p.JobId == input.Id);
            await _jobAccountUnitRepository.DeleteAsync(p => p.JobId == input.Id);
            await _jobUnitManager.DeleteAsync(input.Id);
        }
        /// <summary>
        /// To Get the Job with JobDetails to show in the Grid With searching and sorting
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [AbpAuthorize(AppPermissions.Pages_Projects_ProjectMaintenance_Projects)]
        public async Task<PagedResultOutput<JobCommercialUnitDto>> GetJobUnits(SearchInputDto input)
        {
            var query = from job in _jobDetailUnitRepository.GetAll()
                        join emp in _employeeUnitRepository.GetAll() on job.DirectorEmployeeId equals emp.Id
                                 into employee
                        from em in employee.DefaultIfEmpty()
                        join cust in _customerUnitRepository.GetAll() on job.AgencyId equals cust.Id
                                into tempcust
                        from cs in tempcust.DefaultIfEmpty()
                        select new { Job = job, DirectorName = em.LastName, Agency = cs.LastName };
            if (!ReferenceEquals(input.Filters, null))
            {
                SearchTypes mapSearchFilters = Helper.MappingFilters(input.Filters);
                query = Helper.CreateFilters(query, mapSearchFilters);
            }
            query = query.Where(item => item.Job.IsDivision == false);
            var resultCount = await query.CountAsync();
            var results = await query
                .AsNoTracking()
                .OrderBy(Helper.GetSort("Job.JobNumber ASC", input.Sorting))
                .PageBy(input)
                .ToListAsync();

            return new PagedResultOutput<JobCommercialUnitDto>(resultCount, results.Select(item =>
            {
                var dto = item.Job.MapTo<JobCommercialUnitDto>();
                dto.JobId = item.Job.Id;
                if (item.DirectorName != null)
                    dto.DirectorName = item.DirectorName;
                if (item.Agency != null)
                    dto.Agency = item.Agency;
                dto.JobStatusName = item.Job.TypeOfJobStatusId != null ? item.Job.TypeOfJobStatusId.ToDisplayName() : "";
                dto.TypeofProjectName = item.Job.TypeofProjectId != null ? item.Job.TypeofProjectId.ToDisplayName() : "";
                return dto;
            }).ToList());
        }
        public async Task<JobCommercialUnitDto> GetJobUnitById(IdInputExtensionDto<bool, int> input)
        {
            if (input.Value)
            {
                var jobitem = await _jobUnitRepository.GetAsync(input.Id);
                //Mapper.CreateMap<JobUnit, JobCommercialUnitDto>()
                //    .ForMember(u => u.JobId, ap => ap.MapFrom(src => src.Id));
                var config = new MapperConfiguration(cfg => {
                    cfg.CreateMap<JobUnit, JobCommercialUnitDto>().ForMember(u => u.JobId, ap => ap.MapFrom(src => src.Id));
                });

                JobCommercialUnitDto result = new JobCommercialUnitDto();
                Mapper.Map(jobitem, result);
                return result;

            }
            else
            {
                var jobitem = await _jobDetailUnitRepository.GetAsync(input.Id);
                JobCommercialUnitDto result = jobitem.MapTo<JobCommercialUnitDto>();
                result.JobId = jobitem.Id;
                return result;

            }

        }

        public async Task<List<NameValueDto>> GetOrganizationUnits(IdInput input)
        {
            var organizations = await _organizationUnitRepository.GetAll().Where(p => p.Id != input.Id)
                .Select(u => new NameValueDto { Name = u.DisplayName, Value = u.Id.ToString() }).ToListAsync();
            return organizations;
        }
        /// <summary>
        /// Get DivisionsList
        /// </summary>
        /// <returns></returns>
        public async Task<List<DivisionCacheItem>> GetDivisionList(AutoSearchInput input)
        {
            var cacheItem = await _divisioncache.GetDivisionCacheItemAsync(
                CacheKeyStores.CalculateCacheKey(CacheKeyStores.DivisionKey, Convert.ToInt32(_customAppSession.TenantId)));
            return cacheItem.ToList().Where(p => p.IsDivision == true)
                .WhereIf(!string.IsNullOrEmpty(input.Query), p => p.JobNumber.EmptyIfNull().ToUpper().Contains(input.Query.ToUpper()) ||
            p.Caption.EmptyIfNull().ToUpper().Contains(input.Query.ToUpper())).ToList();
        }

        public async Task<List<NameValueDto>> GetProjectCoaList(AutoSearchInput input)
        {
            var divisions = await _coaUnitRepository.GetAll().Where(p => p.IsCorporate == false)
               .WhereIf(!string.IsNullOrEmpty(input.Query), p => p.Caption.Contains(input.Query))
               .Select(u => new NameValueDto { Name = u.Caption, Value = u.Id.ToString() }).ToListAsync();
            return divisions;
        }
        /// <summary>
        ///  Get BudgetSoftwareList
        /// </summary>
        /// <returns></returns>
        public async Task<List<NameValueDto>> GetBudgetSoftwareList()
        {
            return EnumList.GetBudgetSoftwareList();
        }
        /// <summary>
        /// Get ProjectStatusList
        /// </summary>
        /// <returns></returns>
        public async Task<List<NameValueDto>> GetProjectStatusList()
        {
            return EnumList.GetProjectStatusList();
        }

        /// <summary>
        /// Get ProjectTypeList
        /// </summary>
        /// <returns></returns>
        public async Task<List<NameValueDto>> GetProjectTypeList()
        {
            return EnumList.GetProjectTypeList();
        }

        /// <summary>
        /// Get AllFinancialRollupAccountList 
        /// </summary>
        /// <returns></returns>
        public async Task<List<AccountCacheItem>> GetRollupAccountList(AutoSearchInput input)
        {
            var accountList = await _accountcache.GetAccountCacheItemAsync(
                CacheKeyStores.CalculateCacheKey(CacheKeyStores.AccountKey, Convert.ToInt32(_customAppSession.TenantId)));

            return accountList.ToList().WhereIf(!string.IsNullOrEmpty(input.Query),
                p => p.Caption.EmptyIfNull().ToUpper().Contains(input.Query.ToUpper()) || p.AccountNumber.EmptyIfNull().ToUpper().Contains(input.Query.ToUpper())
                || p.Description.EmptyIfNull().ToUpper().Contains(input.Query.ToUpper())).Where(p => p.IsCorporate == true && p.IsRollupAccount == true).ToList();
        }

        /// <summary>
        /// Get JobAccounts by CoaId and JobId
        /// </summary>
        /// <returns></returns>
        public async Task<List<JobAccountUnitDto>> GetLineListByProjectCoa(GetJobAccountInputDto input)
        {
            var accounts = await (from jobaccount in _jobAccountUnitRepository.GetAll()
                                  join account in _accountUnitRepository.GetAll() on jobaccount.AccountId equals account.Id
                                  join rollUpAccount in _accountUnitRepository.GetAll() on jobaccount.RollupAccountId equals rollUpAccount.Id into rollUpAccount
                                  from rollUpAccounts in rollUpAccount.DefaultIfEmpty()
                                  join rollUpDivision in _jobUnitRepository.GetAll().Where(u => u.IsDivision == true) on jobaccount.RollupJobId equals rollUpDivision.Id into rollUpDivision
                                  from rollUpDivisions in rollUpDivision.DefaultIfEmpty()
                                  where jobaccount.JobId == input.JobId && account.ChartOfAccountId == input.ChartofAccountId
                                  select new
                                  {
                                      jobaccount,
                                      accountNumber = account.AccountNumber,
                                      rollUpAccountNumber = rollUpAccounts.AccountNumber,
                                      rollUpDivisionNumber=rollUpDivisions.JobNumber
                                  }).ToListAsync();
            return accounts.Select(
                result =>
                {
                    var dto = result.jobaccount.MapTo<JobAccountUnitDto>();
                    dto.JobAccountId = result.jobaccount.Id;
                    dto.AccountNumber = result.accountNumber;
                    dto.RollupAccountNumber = result.rollUpAccountNumber;
                    dto.RollupJobNumber = result.rollUpDivisionNumber;
                    return dto;
                }).ToList();

        }
        /// <summary>
        /// Get TaxRecovery
        /// </summary>
        /// <returns></returns>
        public async Task<List<NameValueDto>> GetTaxRecovery()
        {
            var accounts = await (from valuetaxrecovery in _valueAddedTaxRecoveryUnitRepository.GetAll()
                                  join taxtype in _valueAddedTaxTypeUnitRepository.GetAll() on valuetaxrecovery.ValueAddedTaxTypeId equals taxtype.Id
                                  //join typeofcountry in _typeOfCountryUnitRepository.GetAll() on taxtype.TypeOfCountryId equals typeofcountry.Id
                                  join country in _countryUnitRepository.GetAll() on taxtype.CountryID equals country.Id
                                  select new { valuetaxrecovery }).ToListAsync();
            return accounts.Select(
                result =>
                {
                    NameValueDto dto = new NameValueDto();
                    dto.Name = result.valuetaxrecovery.TypeOfVatRecoveryId.ToDisplayName();
                    dto.Value = result.valuetaxrecovery.Id.ToString();
                    return dto;
                }).ToList();
        }
        /// <summary>
        /// Get TaxCreditList
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<List<AutoFillDto>> GetTaxCreditList(AutoSearchInput input)
        {
            var taxCreditList = await _taxCreditUnitRepository.GetAll()
                 .WhereIf(!string.IsNullOrEmpty(input.Query), p => p.Description.Contains(input.Query) || p.Number.Contains(input.Query))
                 .Select(u => new AutoFillDto { Name = u.Description, Value = u.Id.ToString(), Column1 = u.Number }).ToListAsync();
            return taxCreditList;
        }

        /// <summary>
        /// Get Customers
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<List<CustomerCacheItem>> GetCustomersList(AutoSearchInput input)
        {
            var customerList = await _customercache.GetCustomersCacheItemAsync(
                CacheKeyStores.CalculateCacheKey(CacheKeyStores.CustomerKey, Convert.ToInt32(_customAppSession.TenantId)));

            return customerList.ToList().WhereIf(!string.IsNullOrEmpty(input.Query),
                p => p.LastName.EmptyIfNull().ToUpper().Contains(input.Query.ToUpper()) || p.FirstName.EmptyIfNull().ToUpper().Contains(input.Query.ToUpper())
                || p.CustomerNumber.EmptyIfNull().ToUpper().Contains(input.Query.ToUpper())).ToList();
        }



        public async Task<List<UploadErrorMessagesOutputDto>> ImportJobs(DataTable jobsTable)
        {
            var projectTypelist = EnumList.GetProjectTypeList();
            var statuslist = EnumList.GetProjectStatusList();
            var currencylist = await _accountUnitAppService.GetTypeOfCurrencyList();

            var rollupAccountList = (await GetRollupAccountList(new AutoSearchInput() { Value = false })).ConvertAll(u => new NameValueDto()
            {
                Value = u.AccountId.ToString(),
                Name = u.AccountNumber
            });

            var rollupDivisionList = (await GetRollupAccountList(new AutoSearchInput() { Value = true })).ConvertAll(u => new NameValueDto()
            {
                Value = u.AccountId.ToString(),
                Name = u.AccountNumber
            });

            var budgetformatList = await (GetProjectCoaList(new AutoSearchInput() { }));
            var taxCreditList = (await GetTaxCreditList(new AutoSearchInput() { })).ConvertAll(u => new NameValueDto()
            {
                Value = u.Value,
                Name = u.Name
            });
            List<UploadErrorMessagesOutputDto> uploadErrorMessagesList = new List<UploadErrorMessagesOutputDto>();
            List<CreateJobUnitInput> createJobList = new List<CreateJobUnitInput>();
            Dictionary<int, CreateJobUnitInput> jobsList = new Dictionary<int, CreateJobUnitInput>();
            foreach (DataRow datarow in jobsTable.Rows)
            {

                short? currencyId = null;
                TypeofProject? typeofProjectId = null;
                ProjectStatus? projectStatusId = null;
                int budgetFormatId = 0;
                long? rollupAccountId = null;
                int? rollupdivisionId = null;
                int? taxCreditId = null;
                var projectType = projectTypelist.FirstOrDefault(p => p.Name == datarow[L("ProjectType")].ToString());
                if (projectType != null)
                {
                    typeofProjectId = (TypeofProject)Convert.ToInt32(projectType.Value);
                }
                var status = statuslist.FirstOrDefault(p => p.Name == datarow[L("Status")].ToString());
                if (status != null)
                {
                    projectStatusId = (ProjectStatus)Convert.ToInt32(status.Value);
                }
                var currency = currencylist.FirstOrDefault(p => p.Name == datarow[L("Currency")].ToString());
                if (currency != null)
                {
                    currencyId = Convert.ToInt16(currency.Value);
                }
                var rollupAccount = rollupAccountList.FirstOrDefault(p => p.Name == datarow[L("RollUpAccount")].ToString());
                if (rollupAccount != null)
                {
                    rollupAccountId = Convert.ToInt32(rollupAccount.Value);
                }
                var rollupDivision = rollupDivisionList.FirstOrDefault(p => p.Name == datarow[L("RollUpDivision")].ToString());
                if (rollupDivision != null)
                {
                    rollupdivisionId = Convert.ToInt32(rollupDivision.Value);
                }
                var budgetFormat = budgetformatList.FirstOrDefault(p => p.Name == datarow[L("BudgetFormat")].ToString());
                if (budgetFormat != null)
                {
                    budgetFormatId = Convert.ToInt32(budgetFormat.Value);
                }
                var taxCredit = taxCreditList.FirstOrDefault(p => p.Name == datarow[L("TaxCredit")].ToString());
                if (taxCredit != null)
                {
                    taxCreditId = Convert.ToInt32(taxCredit.Value);
                }
                var input = new CreateJobUnitInput()
                {
                    JobNumber = datarow[L("JobNumber")].ToString(),
                    Caption = datarow[L("JobName")].ToString(),
                    TypeofProjectId = typeofProjectId,
                    TypeOfJobStatusId = projectStatusId,
                    TypeOfCurrencyId = currencyId,
                    RollupAccountId = rollupAccountId,
                    RollupJobId = rollupdivisionId,
                    TaxCreditId = taxCreditId,
                    ChartOfAccountId = budgetFormatId,
                    IsDivision = false
                };
                UploadErrorMessagesOutputDto errorMessageDto = ValidateUploadedData(input, Convert.ToInt32(datarow["No"]), budgetFormatId);
                if (!ReferenceEquals(errorMessageDto, null))
                    uploadErrorMessagesList.Add(errorMessageDto);
                createJobList.Add(input);
                jobsList.Add(Convert.ToInt32(datarow["No"]), input);
            }
            await CheckDuplicatesinExcel(createJobList, uploadErrorMessagesList);
            await ValidateDuplicateRecords(jobsList, uploadErrorMessagesList);
            if (uploadErrorMessagesList.Count < 1)
                await InsertUploadedJobs(createJobList);
            return uploadErrorMessagesList;
        }

        private async Task CheckDuplicatesinExcel(List<CreateJobUnitInput> accountsList, List<UploadErrorMessagesOutputDto> uploadErrorMessagesList)
        {
            UploadErrorMessagesOutputDto uploadErrorMessages;
            var duplicateaccountNumberList = (from p in accountsList
                                              group p by p.JobNumber into g
                                              where g.Count() > 1
                                              select new { g.Key }).ToList();
            var duplicateAccountnumbers = string.Join(",", duplicateaccountNumberList.Select(p => p.Key).ToArray());
            if (duplicateaccountNumberList.Count > 0)
            {
                uploadErrorMessages = new UploadErrorMessagesOutputDto()
                {
                   // ErrorMessage = L("DuplicateJobNumbers") + duplicateAccountnumbers
                };
                uploadErrorMessagesList.Add(uploadErrorMessages);
            }
            var duplicateDescriptionList = (from p in accountsList
                                            group p by p.Caption into g
                                            where g.Count() > 1
                                            select new { g.Key }).ToList();
            var duplicateAccountdescriptions = string.Join(",", duplicateDescriptionList.Select(p => p.Key).ToArray());
            if (duplicateDescriptionList.Count > 0)
            {
                uploadErrorMessages = new UploadErrorMessagesOutputDto()
                {
                   // ErrorMessage = L("DuplicateJobNames") + duplicateAccountdescriptions
                };
                uploadErrorMessagesList.Add(uploadErrorMessages);
            }
        }
        private async Task InsertUploadedJobs(List<CreateJobUnitInput> jobList)
        {
            foreach (var job in jobList)
            {
                await CreateJobUnit(job);
            }
        }

        private async Task ValidateDuplicateRecords(Dictionary<int, CreateJobUnitInput> accountsList, List<UploadErrorMessagesOutputDto> uploadErrorMessagesList)
        {
            var jobs = accountsList.ToList().Select(p => p.Value).ToList();
            var jobNumberList = string.Join(",", jobs.Select(p => p.JobNumber).ToArray());
            var jobNameList = string.Join(",", jobs.Select(p => p.Caption).ToArray());

            var duplicatejobList = await _jobUnitRepository.GetAll().Where(p => jobNumberList.Contains(p.JobNumber)
             || jobNameList.Contains(p.Caption)).ToListAsync();

            if (duplicatejobList.Count == 0)
                return;

            var duplicatejob1 = (from p in accountsList
                                 join p2 in duplicatejobList on p.Value.Caption equals p2.Caption
                                 select new { JobName = p.Value.Caption, JobNumber = p.Value.JobNumber, RowNumber = p.Key }).ToList();
            var duplicatejob2 = (from p in accountsList
                                 join p2 in duplicatejobList on p.Value.JobNumber equals p2.JobNumber
                                 select new { JobName = p.Value.Caption, JobNumber = p.Value.JobNumber, RowNumber = p.Key }).ToList();


            var duplicatejobs = duplicatejob1.Union(duplicatejob2).ToList();

            foreach (var job in duplicatejobs)
            {
                var error = new StringBuilder();
                error = error?.Append(!string.IsNullOrEmpty(job.JobNumber) ? job.JobNumber + L("DuplicateJobNumber") : "");
                error = error?.Append(!string.IsNullOrEmpty(job.JobName) ? job.JobName + L("DuplicateJobName") : "");
                var uploadErrorMessages = new UploadErrorMessagesOutputDto()
                {
                    //ErrorMessage = error.ToString().TrimEnd(','),
                    RowNumber = job.RowNumber
                };
                uploadErrorMessagesList.Add(uploadErrorMessages);
            }
        }


        private UploadErrorMessagesOutputDto ValidateUploadedData(CreateJobUnitInput input, int rowNumber, int budgetFormatId)
        {
            UploadErrorMessagesOutputDto uploadErrorMessages = new UploadErrorMessagesOutputDto { RowNumber = rowNumber };
            ////DataValidator.CheckLength(input.JobNumber.Length, JobUnit.MaxJobNumberLength, L("JobNumber"), uploadErrorMessages);
            ////DataValidator.CheckLength(input.Caption.Length, JobUnit.MaxJobNumberLength, L("JobName"), uploadErrorMessages);
            ////DataValidator.RequiredValidataion(input.JobNumber, L("JobNumber"), uploadErrorMessages);
            ////DataValidator.RequiredValidataion(input.Caption, L("JobName"), uploadErrorMessages);
            ////DataValidator.RequiredValidataion(budgetFormatId, L("BudgetFormat"), uploadErrorMessages);
            //if (string.IsNullOrEmpty(uploadErrorMessages.ErrorMessage))
            //    uploadErrorMessages = null;
            //else
            //    uploadErrorMessages.ErrorMessage = uploadErrorMessages.ErrorMessage.TrimStart(',');
            return uploadErrorMessages;

        }




    }
}
