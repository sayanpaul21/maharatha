﻿using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAPS.CORPACCOUNTING.Accounting.Dto
{
    [AutoMapTo(typeof(TypeOfAccountUnit))]
    public class UpdateTypeOfAccountInputUnit
    {
        /// <summary>Gets or sets the TypeOfAccountID field</summary>
        public int TypeOfAccountId { get; set; }

        /// <summary>Gets or sets the Description field. </summary>
        [Required]
        [StringLength(TypeOfAccountUnit.MaxDescLength)]
        public string Description { get; set; }

        /// <summary>Gets or sets the Caption field. </summary>
        [StringLength(TypeOfAccountUnit.MaxCaptionLength)]
        public string Caption { get; set; }

        /// <summary>Gets or sets the DisplaySequence field. </summary>
        public short? DisplaySequence { get; set; }

        /// <summary>Gets or sets the Notes field. </summary>
        public string Notes { get; set; }

        /// <summary>Gets or sets the TypeOfAccountClassificationID field. </summary>
        public short? TypeOfAccountClassificationId { get; set; }

        /// <summary>Gets or sets the IsCurrencyCodeRequired field. </summary>
        public bool IsCurrencyCodeRequired { get; set; }

        /// <summary>Gets or sets the IsPaymentType field. </summary>
        public bool IsPaymentType { get; set; }
    }
}
