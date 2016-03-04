﻿using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.Zero;
using Abp.Application.Services.Dto;
using Abp.Domain.Uow;
using System;

namespace CAPS.CORPACCOUNTING.Journals
{
    public class JournalEntryDocumentUnitManager : DomainService
    {
        protected IRepository<JournalEntryDocumentUnit> JournalEntryDocumentUnitRepository { get; }
        public JournalEntryDocumentUnitManager(IRepository<JournalEntryDocumentUnit> journalEntryDocumentUnitrepository)
        {
            JournalEntryDocumentUnitRepository = journalEntryDocumentUnitrepository;

            LocalizationSourceName = AbpZeroConsts.LocalizationSourceName;
        }

        [UnitOfWork]
        public virtual async Task CreateAsync(JournalEntryDocumentUnit accountUnit)
        {
            await JournalEntryDocumentUnitRepository.InsertAsync(accountUnit);
        }


        public virtual async Task UpdateAsync(JournalEntryDocumentUnit accountUnit)
        {
            await JournalEntryDocumentUnitRepository.UpdateAsync(accountUnit);
        }

        public virtual async Task DeleteAsync(IdInput input)
        {
            await JournalEntryDocumentUnitRepository.DeleteAsync(input.Id);
        }

    }
}
