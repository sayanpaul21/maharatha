﻿using Abp.AutoMapper;
using CAPS.CORPACCOUNTING.Masters;
using CAPS.CORPACCOUNTING.Notes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAPS.CORPACCOUNTING.Notes.Dto
{

    /// <summary>
    /// 
    /// </summary>
    [AutoMapTo(typeof(NotedObjectUnit))]
    public class NotedObjectUnitInput
    {
        /// <summary>Gets or sets the TypeOfObjectId field. </summary>
        public virtual TypeofObject TypeOfObjectId { get; set; }

        /// <summary>Gets or sets the ObjectId field. </summary>
        public virtual long ObjectId { get; set; }

        /// <summary>Gets or sets the Notes field. </summary>
        public virtual string Notes { get; set; }

        ///// <summary>Gets or sets the TenantId field. </summary>
        //public virtual int TenantId { get; set; }

        /// <summary>Gets or sets the IsSharedUpdate field. </summary>
        public virtual bool IsSharedUpdate { get; set; }
    }
}