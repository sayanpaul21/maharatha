﻿using System.Linq;
using System.Security.Claims;
using System.Threading;
using Abp.Dependency;
using System;
using CAPS.CORPACCOUNTING.CoreHelper;

namespace CAPS.CORPACCOUNTING.Sessions
{
    public class CustomAppSession:ITransientDependency
    {
        public string OrganizationId   
        {
            get
            {
                var claimsPrincipal = Thread.CurrentPrincipal as ClaimsPrincipal;

                var organizationClaim = claimsPrincipal?.Claims.FirstOrDefault(c => c.Type == ClaimKeys.ApplicationUserOrgId);
                if (string.IsNullOrEmpty(organizationClaim?.Value))

                {
                    return null;
                }

                return organizationClaim.Value;
            }
        }
      
        public string TenantId
        {
            get
            {
                var claimsPrincipal = Thread.CurrentPrincipal as ClaimsPrincipal;

                var tenantClaim = claimsPrincipal?.Claims.FirstOrDefault(c => c.Type == "http://www.aspnetboilerplate.com/identity/claims/tenantId");
                if (string.IsNullOrEmpty(tenantClaim?.Value))
                {
                    return null;
                }

                return tenantClaim.Value;
            }
        }


        /// <summary>
        /// 
        /// </summary>
        public bool HasGLRestrictions
        {
            get
            {
                var claimsPrincipal = Thread.CurrentPrincipal as ClaimsPrincipal;

                var tenantClaim = claimsPrincipal?.Claims.FirstOrDefault(c => c.Type == ClaimKeys.HasGLRestrictions);

                return Convert.ToBoolean(tenantClaim.Value);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public bool HasLineRestrictions
        {
            get
            {
                var claimsPrincipal = Thread.CurrentPrincipal as ClaimsPrincipal;

                var tenantClaim = claimsPrincipal?.Claims.FirstOrDefault(c => c.Type == ClaimKeys.HasLineRestrictions);

                return Convert.ToBoolean(tenantClaim.Value);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public bool HasProjectRestriction
        {
            get
            {
                var claimsPrincipal = Thread.CurrentPrincipal as ClaimsPrincipal;

                var tenantClaim = claimsPrincipal?.Claims.FirstOrDefault(c => c.Type == "HasGLRestrictions");

                return Convert.ToBoolean(tenantClaim.Value);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public bool HasDivisionRestriction
        {
            get
            {
                var claimsPrincipal = Thread.CurrentPrincipal as ClaimsPrincipal;

                var tenantClaim = claimsPrincipal?.Claims.FirstOrDefault(c => c.Type == "HasGLRestrictions");

                return Convert.ToBoolean(tenantClaim.Value);
            }
        }
        /// <summary>
        /// 
        /// </summary>
        public bool HasBankRestriction
        {
            get
            {
                var claimsPrincipal = Thread.CurrentPrincipal as ClaimsPrincipal;

                var tenantClaim = claimsPrincipal?.Claims.FirstOrDefault(c => c.Type == "HasGLRestrictions");

                return Convert.ToBoolean(tenantClaim.Value);
            }
        }
    }
}
