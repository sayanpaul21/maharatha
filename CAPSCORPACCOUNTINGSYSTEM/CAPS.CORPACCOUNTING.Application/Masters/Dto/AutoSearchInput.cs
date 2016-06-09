﻿using Abp.Application.Services.Dto;


namespace CAPS.CORPACCOUNTING.Masters.Dto
{
    public class AutoSearchInput: IInputDto
    {
        public long? Id { get; set; }

        public string Query { get; set; }

        public bool? Value { get; set; }
        public long? OrganizationUnitId { get; set; }
        public  int VendorAliasId { get; set; }
        public  int VendorId { get; set; }
        public int JobId { get; set; }

        public string Property { get; set; }
    }
}
