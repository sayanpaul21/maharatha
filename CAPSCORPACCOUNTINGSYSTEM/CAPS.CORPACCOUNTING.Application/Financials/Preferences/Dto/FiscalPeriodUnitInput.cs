﻿using System;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Runtime.Validation;
using CAPS.CORPACCOUNTING.Banking;
using System.Collections.Generic;

namespace CAPS.CORPACCOUNTING.Financials.Preferences.Dto
{
    [AutoMapTo(typeof(FiscalPeriodUnit))]
    public class FiscalPeriodUnitInput : IInputDto, ICustomValidate
    {
        /// <summary>Gets or sets the FiscalPeriodId field. </summary>
        public int FiscalPeriodId { get; set; }
        /// <summary>Gets or sets the FiscalYearId field. </summary>
        public int FiscalYearId { get; set; }

        /// <summary>Gets or sets the PeriodStartDate field. </summary>
        [Required]
        public DateTime? PeriodStartDate { get; set; }

        /// <summary>Gets or sets the PeriodEndDate field. </summary>
        [Required]
        public DateTime? PeriodEndDate { get; set; }

        /// <summary>Gets or sets the IsPeriodOpen field. </summary>
        public bool IsClose { get; set; }

        /// <summary>Gets or sets the IsActive field. </summary>
        public bool IsActive { get; set; }

        /// <summary>Gets or sets the TypeOfInactiveStatusID field. </summary>
        public TypeOfInactiveStatus? TypeOfInactiveStatusId { get; set; }

        /// <summary>Gets or sets the IsCPAClosed field. </summary>
        public bool? IsCpaClosed { get; set; }

        /// <summary>Gets or sets the DateCPAClosed field. </summary>
        public DateTime? DateCpaClosed { get; set; }

        /// <summary>Gets or sets the CPAUserID field. </summary>
        public int? CpaUserId { get; set; }

        /// <summary>Gets or sets the IsYearEndAdjustmentsAllowed field. </summary>
        public bool? IsYearEndAdjustmentsAllowed { get; set; }

        /// <summary>Gets or sets the IsPreClose field. </summary>
        public bool? IsPreClose { get; set; }


        /// <summary>Gets or sets the CompanyId field. </summary>
        public long? OrganizationUnitId { get; set; }
        
        /// <summary>Gets or sets the MonthYear field. </summary>
        public string MonthYear { get; set; }

        public void AddValidationErrors(List<ValidationResult> results)
        {
            if (IsClose && IsPreClose==true)
            {
                results.Add(new ValidationResult("FiscalStartDate should not be greaterthan FiscalEndDate"));
            }
        }
    }
}
