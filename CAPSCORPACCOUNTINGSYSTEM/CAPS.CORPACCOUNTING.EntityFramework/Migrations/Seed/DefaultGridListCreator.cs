﻿using System.Linq;
using CAPS.CORPACCOUNTING.EntityFramework;
using CAPS.CORPACCOUNTING.Masters;
using System.Collections.Generic;

namespace CAPS.CORPACCOUNTING.Migrations.Seed
{
    public class DefaultGridListCreator
    {
        public static List<GridListUnit> InitialGridList { get; private set; }

        private readonly CORPACCOUNTINGDbContext _context;

        static DefaultGridListCreator()
        {
            InitialGridList = new List<GridListUnit>
            {
                new GridListUnit(gridid:1,name:"Tenants",description:"Tenants Information Showing in Grid",isactive:true),
                new GridListUnit(gridid:2,name:"Editions",description:"Editions Information Showing in Grid",isactive:true),
                new GridListUnit(gridid:3,name:"Languages",description:"Languages Information Showing in Grid",isactive:true),
                 new GridListUnit(gridid:4,name:"LanguageTexts",description:"LanguageTexts Information Showing in Grid",isactive:true),
                new GridListUnit(gridid:5,name:"AuditLogs",description:"AuditLogs Information Showing in Grid",isactive:true),
                new GridListUnit(gridid:6,name:"Roles",description:"Roles Information Showing in Grid",isactive:true),
                new GridListUnit(gridid:7,name:"Users",description:"Users Information Showing in Grid",isactive:true),
                 new GridListUnit(gridid:8,name:"LinkedAccounts",description:"LinkedAccounts Information Showing in Grid",isactive:true),
                  new GridListUnit(gridid:9,name:"ChartOfAccounts",description:"Chart Of Accounts Information Showing in Grid",isactive:true),
            };
        }

        public DefaultGridListCreator(CORPACCOUNTINGDbContext context)
        {
            _context = context;
        }


        public void Create()
        {
            CreateGridList();
        }

        private void CreateGridList()
        {
            foreach (var gridList in InitialGridList)
            {
                AddGridListIfNotExists(gridList);
            }
        }

        private void AddGridListIfNotExists(GridListUnit gridList)
        {
            if (_context.GridListUnit.Any(l =>l.Name == gridList.Name))
            {
                return;
            }

            _context.GridListUnit.Add(gridList);

            _context.SaveChanges();
        }

    }
}
