﻿
namespace CAPS.CORPACCOUNTING.Helpers
{
    public class CacheKeyStores
    {
        //Division Keys
        public const string CacheDivisionStore = "SUMITDIVISION";
        public const string DivisionKey = "DIVISION";

        //AccountKeys
        public const string CacheAccountStore = "SUMITACCOUNT";
        public const string AccountKey = "ACCOUNT";
        
        //CustomerKeys
        public const string CacheCustomerStore = "SUMITCUSTOMER";
        public const string CustomerKey = "CUSTOMER";

        //VendorKeys
        public const string CacheVendorStore = "SUMITVENDOR";
        public const string VendorKey = "VENDOR";



        public static string CalculateCacheKey(string sourceName, int tenantId, long? OrganizationUnitId)
        {
            OrganizationUnitId = ReferenceEquals(OrganizationUnitId, null) ? 0 : OrganizationUnitId;
            return (tenantId + "#" + OrganizationUnitId + "#" + sourceName);
        }
    }
}
