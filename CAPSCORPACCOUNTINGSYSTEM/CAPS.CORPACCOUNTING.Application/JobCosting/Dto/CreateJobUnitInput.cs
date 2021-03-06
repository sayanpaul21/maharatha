﻿using System;
using Abp.Application.Services.Dto;
using System.ComponentModel.DataAnnotations;
using Abp.AutoMapper;

namespace CAPS.CORPACCOUNTING.JobCosting.Dto
{

    /// /// <summary>
    /// InputDto for CreateAccount
    /// </summary>
    [AutoMapTo(typeof(JobUnit))]
    public class CreateJobUnitInput : IInputDto
    {
        /// <summary>Gets or sets the JobNumber field. </summary>
        [Required(ErrorMessage = "Number Field is required.")]
        [StringLength(JobUnit.MaxJobNumberLength)]
        public string JobNumber { get; set; }

        /// <summary>Gets or sets the Caption field. </summary>
        [StringLength(JobUnit.MaxCaptionLength)]
        [Required(ErrorMessage = "Description Field is required.")]
        public string Caption { get; set; }

        /// <summary>Gets or sets the RollupCenterId field. </summary>       
        public int? RollupCenterId { get; set; }       

        /// <summary>Gets or sets the IsCorporateDefault field. </summary>
        public bool IsCorporateDefault { get; set; }

        /// <summary>Gets or sets the ChartOfAccountId field. </summary>  
        public int? ChartOfAccountId { get; set; }       

        /// <summary>Gets or sets the RollupAccountId field. </summary>
        public long? RollupAccountId { get; set; }        

        /// <summary>Gets or sets the TypeOfCurrencyId field. </summary>
        public int? TypeOfCurrencyId { get; set; }

        /// <summary>Gets or sets the RollupJobId field. </summary>
        public int? RollupJobId { get; set; }        

        /// <summary>Gets or sets the TypeOfJobStatusId field. </summary>
        public ProjectStatus? TypeOfJobStatusId { get; set; }

        /// <summary>Gets or sets the TypeOfBidSoftwareId field. </summary>
        public BudgetSoftware? TypeOfBidSoftwareId { get; set; }

        /// <summary>Gets or sets the IsApproved field. </summary>
        public bool IsApproved { get; set; }

        /// <summary>Gets or sets the IsActive field. 
        /// When checked- this division is available for selection on entry and history pages and posting to this division is allowed.     
        ///	When unchecked- this division cannot be posted to and WILL NOT be available for selection on Entry and History Pages.
        /// But Will be available for selection on reporting filter pages, and searchable in inquiry grids.
        /// </summary>
        public bool IsActive { get; set; } = true;

        /// <summary>Gets or sets the IsICTDivision field. </summary>
        public bool IsICTDivision { get; set; }

        /// <summary>Gets or sets the TypeofProject field. </summary>
        public TypeofProject? TypeofProjectId { get; set; }

        /// <summary>Gets or sets the TaxRecovery field. </summary>
        public int? TaxRecoveryId { get; set; }


        /// <summary>Gets or sets the CompanyId field. </summary>
        public long? OrganizationUnitId { get; set; }
        /// <summary>
        /// Isdivision is true then this job is a Division
        /// IsDivision is false then the job is Project
        /// </summary>
        public bool IsDivision { get; set; }

        /// <summary>Gets or sets the TaxCreditId field. </summary>
        public int? TaxCreditId { get; set; }


        /// <summary>Gets or sets the TypeOfCurrencyId field. </summary>
        public string TypeOfCurrency { get; set; }

        /// <summary>Gets or sets the TaxCredit field. </summary>
        public string TaxCreditName { get; set; }


        /// <summary>Gets or sets the RollupAccount field. </summary>
        public string AccountNumber { get; set; }
       

        /// <summary>Gets or sets the budgetFormatCaption field. </summary>
        public string BudgetFormatCaption { get; set; }

        /// <summary>
        ///  Gets or sets the JobStatusName 
        /// </summary>
        public string JobStatusName { get; set; }
        /// <summary>
        ///  Gets or sets the TypeofProjectName
        /// </summary>
        public string TypeofProjectName { get; set; }

        /// <summary>Gets or sets the DivisionJobNumber field. </summary>
        public string DivisionJobNumber { get; set; }

        /// <summary>
        ///Gets or sets the  ExcelRowNumber
        /// </summary>
        public int ExcelRowNumber { get; set; }
    }
}
