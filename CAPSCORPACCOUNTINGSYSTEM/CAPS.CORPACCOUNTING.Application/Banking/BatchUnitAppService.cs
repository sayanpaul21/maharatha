﻿using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.AutoMapper;
using CAPS.CORPACCOUNTING.GenericSearch.Dto;
using CAPS.CORPACCOUNTING.Helpers;
using System.Data.Entity;
using System.Linq.Dynamic;
using Abp.Linq.Extensions;
using AutoMapper;
using System.Collections.Generic;
using CAPS.CORPACCOUNTING.Masters.Dto;
using CAPS.CORPACCOUNTING.Journals;

namespace CAPS.CORPACCOUNTING.Banking.Dto
{
    public class BatchUnitAppService : CORPACCOUNTINGServiceBase, IBatchUnitAppService
    {

        private readonly BatchUnitManager _batchUnitManager;
        private readonly IRepository<BatchUnit, int> _batchUnitRepository;
        private readonly IRepository<JournalEntryDocumentUnit, long> _journalEntryDocumentUnitRepository;
      

        public BatchUnitAppService(BatchUnitManager batchUnitManager, 
                        IRepository<BatchUnit, int> batchUnitRepository,
                         IRepository<JournalEntryDocumentUnit, long> journalEntryDocumentUnitRepository)
        {
            _batchUnitManager = batchUnitManager;
            _batchUnitRepository = batchUnitRepository;
            _journalEntryDocumentUnitRepository = journalEntryDocumentUnitRepository;
        }

        /// <summary>
        /// Create the BatchUnit.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task CreateBatchUnit(CreateBatchUnitInput input)
        {
            var batchUnit = input.MapTo<BatchUnit>();
            await _batchUnitManager.CreateAsync(batchUnit);
            await CurrentUnitOfWork.SaveChangesAsync();
        }

        /// <summary>
        /// Update the BatchUnit based on BatchId.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task UpdateBatchUnit(UpdateBatchUnitInput input)
        {
            var batchUnit = await _batchUnitRepository.GetAsync(input.BatchId);
            //Mapper.CreateMap<UpdateBatchUnitInput, BatchUnit>()
            //              .ForMember(u => u.Id, ap => ap.MapFrom(src => src.BatchId));
            var config = new MapperConfiguration(cfg => {
                cfg.CreateMap<UpdateBatchUnitInput, BatchUnit>();
            });
            Mapper.Map(input, batchUnit);
            await _batchUnitManager.UpdateAsync(batchUnit);
            await CurrentUnitOfWork.SaveChangesAsync();
        }


        /// <summary>
        /// Delete the BatchUnit based on BatchId.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task DeleteBatchUnit(IdInput input)
        {
            await _batchUnitManager.DeleteAsync(input);
            await CurrentUnitOfWork.SaveChangesAsync();
        }


        /// <summary>
        /// Get the list of all Batch List
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<PagedResultOutput<BatchUnitDto>> GetBatchUnits(SearchInputDto input)
        {

            var batchUnitQuery = _batchUnitRepository.GetAll();


            if (!ReferenceEquals(input.Filters, null))
            {
                SearchTypes mapSearchFilters = Helper.MappingFilters(input.Filters);
                if (!ReferenceEquals(mapSearchFilters, null))
                    batchUnitQuery = Helper.CreateFilters(batchUnitQuery, mapSearchFilters);
            }
            var resultCount = await batchUnitQuery.CountAsync();
            var results = await batchUnitQuery
                .AsNoTracking()
                .OrderBy(Helper.GetSort("Description ASC", input.Sorting))
                .PageBy(input)
                .ToListAsync();

            var mapEnumResults = (from value in results
                                  select new BatchUnitDto
                                  {
                                      BatchId=value.Id,
                                      ControlTotal=value.ControlTotal,
                                      DefaultCheckDate=value.DefaultCheckDate,
                                      DefaultTransactionDate=value.DefaultTransactionDate,
                                      Description=value.Description,
                                      IsActive=value.IsActive,
                                      IsBatchFinalized=value.IsBatchFinalized,
                                      IsDefault=value.IsDefault,
                                      IsRetained=value.IsRetained,
                                      IsUniversal=value.IsUniversal,
                                      PostingDate=value.PostingDate,
                                      RecurMonthIncrement=value.RecurMonthIncrement,
                                      TypeOfBatchId=value.TypeOfBatchId,
                                      TypeOfInactiveStatusId=value.TypeOfInactiveStatusId,
                                      TypeOfBatch = value.TypeOfBatchId.ToDisplayName(),
                                      TypeOfInactiveStatus = value.TypeOfInactiveStatusId != null ? value.TypeOfInactiveStatusId.ToDisplayName() : "",
                                      BatchAmount= GetBatchAmount(value.Id,value.TypeOfBatchId)
                                  }).ToList();




            return new PagedResultOutput<BatchUnitDto>(resultCount, mapEnumResults);
        }

        /// <summary>
        /// Get BatchUnit based on BatchId.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<BatchUnitDto> GetBatchUnitsById(IdInput input)
        {
            var batchUnitQuery = await _batchUnitRepository.GetAsync(input.Id);
            var result = batchUnitQuery.MapTo<BatchUnitDto>();
            result.BatchId = batchUnitQuery.Id;
            return result;
        }

        /// <summary>
        /// Get Batch Type
        /// </summary>
        /// <returns></returns>
        public List<NameValueDto> GetBatchTypeList()
        {
            return EnumList.GetBatchTypeList();
        }


        /// <summary>
        /// Get Batch List 
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<List<NameValueDto>> GetBatchList(BatchSearchInput input)
        {
            var batchList = await (from subaccount in _batchUnitRepository.GetAll()
                                    .WhereIf(!string.IsNullOrEmpty(input.Query), p => p.Description.Contains(input.Query))
                                        select new NameValueDto { Name = subaccount.Description, Value = subaccount.Id.ToString() })
                              .ToListAsync();
            return batchList;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="batchId"></param>
        /// <param name="TypeOfBatchId"></param>
        /// <returns></returns>
        private string GetBatchAmount(int? batchId,TypeOfBatch TypeOfBatchId)
        {
            string batchAmount = string.Empty;
            if (TypeOfBatchId == TypeOfBatch.GeneralJournal || TypeOfBatchId == TypeOfBatch.CashJournal || TypeOfBatchId == TypeOfBatch.RecurringJournal || TypeOfBatchId == TypeOfBatch.ReversingJournal)
            {
                var sumOfControlTotal = (from journal in _journalEntryDocumentUnitRepository.GetAll()
                             where journal.BatchId == batchId
                             group journal.ControlTotal by journal.BatchId into g
                             select new { ControlTotal = g.Sum() }).FirstOrDefault();

                batchAmount = sumOfControlTotal != null ? sumOfControlTotal.ControlTotal.ToString() : "";
            }
            else if (TypeOfBatchId == TypeOfBatch.AccountsPayable)
            {


            }
            else if (TypeOfBatchId == TypeOfBatch.AccountsReceivable)
            {




            } else if (TypeOfBatchId == TypeOfBatch.Payroll)
            {




            }
            else if (TypeOfBatchId == TypeOfBatch.PettyCash)
            {




            }
            else if (TypeOfBatchId == TypeOfBatch.CreditCard)
            {




            }


            return batchAmount;
        }

    }
}
