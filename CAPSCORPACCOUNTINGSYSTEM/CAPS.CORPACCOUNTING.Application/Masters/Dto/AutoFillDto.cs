﻿using Abp.Application.Services.Dto;

namespace CAPS.CORPACCOUNTING.Masters.Dto
{
    public class AutoFillDto: NameValueDto
    {
        public string Column1 { get; set; }
       
		public string Column2 { get; set; }

        public string Column3 { get; set; }

        public string Column4 { get; set; }

        public string Column5 { get; set; }
    }
}
