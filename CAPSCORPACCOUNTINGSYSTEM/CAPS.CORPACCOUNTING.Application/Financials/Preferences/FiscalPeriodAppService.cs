﻿using System;
using System.Data.Entity;
using System.Linq;
using System.Linq.Dynamic;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Repositories;
using Abp.Linq.Extensions;
using Abp.UI;
using CAPS.CORPACCOUNTING.GenericSearch.Dto;
using CAPS.CORPACCOUNTING.Helpers;
using CAPS.CORPACCOUNTING.JobCosting;
using CAPS.CORPACCOUNTING.Financials.Preferences.Dto;

namespace CAPS.CORPACCOUNTING.Financials.Preferences
{
    public class FiscalPeriodAppService : CORPACCOUNTINGServiceBase, IFiscalPeriodAppService
    {
        private readonly FiscalPeriodUnitManager _fiscalPeriodUnitManager;
        private readonly IRepository<FiscalPeriodUnit> _fiscalPeriodUnitRepository;

        public FiscalPeriodAppService(FiscalPeriodUnitManager fiscalPeriodUnitManager,
          IRepository<FiscalPeriodUnit> fiscalPeriodUnitRepository)
        {
            _fiscalPeriodUnitManager = fiscalPeriodUnitManager;
            _fiscalPeriodUnitRepository = fiscalPeriodUnitRepository;
        }

        /// <summary>
        /// Creating FiscalPeriod
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task CreateFiscalPeriodUnit(CreateFiscalPeriodUnitInput input)
        {
            var fiscalPeriodUnit = input.MapTo<FiscalPeriodUnit>();
            #region Convering Month and Year to StartDateof Period and EndDate of Period
            input.PeriodStartDate = new DateTime(input.Year, input.Month, 1);
            input.PeriodEndDate = new DateTime(input.Year, input.Month, DateTime.DaysInMonth(input.Year, input.Month));
            #endregion
            await _fiscalPeriodUnitManager.CreateAsync(fiscalPeriodUnit);
            await CurrentUnitOfWork.SaveChangesAsync();
        }
        /// <summary>
        /// Deleting FiscalPeriof By FiscalPeriod By Id
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>

        public async Task DeleteFiscalPeriodUnit(IdInput input)
        {
            await _fiscalPeriodUnitManager.DeleteAsync(input);
            await CurrentUnitOfWork.SaveChangesAsync();
        }

        public async Task<PagedResultOutput<FiscalPeriodUnitDto>> GetFiscalPeriodUnits(SearchInputDto input)
        {
            var query = from fiscalPeriod in _fiscalPeriodUnitRepository.GetAll()
                        select new { FiscalPeriod = fiscalPeriod };

            if (!ReferenceEquals(input.Filters, null))
            {
                SearchTypes mapSearchFilters = Helper.MappingFilters(input.Filters);
                if (!ReferenceEquals(mapSearchFilters, null))
                    query = Helper.CreateFilters(query, mapSearchFilters);
            }
            query = query.Where(p => p.FiscalPeriod.OrganizationUnitId == input.OrganizationUnitId);

            var resultCount = await query.CountAsync();
            var results = await query
                .AsNoTracking()
                .OrderBy(Helper.GetSort("FiscalPeriod.PeriodStartDate ASC", input.Sorting))
                .PageBy(input)
                .ToListAsync();


            return new PagedResultOutput<FiscalPeriodUnitDto>(resultCount, results.Select(item =>
            {
                var dto = item.FiscalPeriod.MapTo<FiscalPeriodUnitDto>();
                dto.FiscalPeriodId = item.FiscalPeriod.Id;
                return dto;
            }).ToList());
        }

        /// <summary>
        /// Updating FiscalPeriod
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task UpdateFiscalPeriodUnit(UpdateFiscalPeriodUnitInput input)
        {
            var fiscalPeriodUnit = input.MapTo<FiscalPeriodUnit>();
            fiscalPeriodUnit.Id = input.FiscalPeriodId;
            #region Convering Month and Year to StartDateof Period and EndDate of Period
            input.PeriodStartDate = new DateTime(input.Year, input.Month, 1);
            input.PeriodEndDate = new DateTime(input.Year, input.Month, DateTime.DaysInMonth(input.Year, input.Month));
            #endregion
            await _fiscalPeriodUnitManager.UpdateAsync(fiscalPeriodUnit);
            await CurrentUnitOfWork.SaveChangesAsync();
        }
    }
}