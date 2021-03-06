﻿using Abp.Authorization;
using Abp.Configuration.Startup;
using Abp.Localization;
using Abp.MultiTenancy;

namespace CAPS.CORPACCOUNTING.Authorization
{
    /// <summary>
    /// Application's authorization provider.
    /// Defines permissions for the application.
    /// See <see cref="AppPermissions"/> for all permission names.
    /// </summary>
    public class AppAuthorizationProvider : AuthorizationProvider
    {
        private readonly bool _isMultiTenancyEnabled;

        public AppAuthorizationProvider(bool isMultiTenancyEnabled)
        {
            _isMultiTenancyEnabled = isMultiTenancyEnabled;
        }

        public AppAuthorizationProvider(IMultiTenancyConfig multiTenancyConfig)
        {
            _isMultiTenancyEnabled = multiTenancyConfig.IsEnabled;
        }
        public override void SetPermissions(IPermissionDefinitionContext context)
        {
            //COMMON PERMISSIONS (FOR BOTH OF TENANTS AND HOST)

            var pages = context.GetPermissionOrNull(AppPermissions.Pages) ?? context.CreatePermission(AppPermissions.Pages, L("Pages"));

            var administration = pages.CreateChildPermission(AppPermissions.Pages_Administration, L("Administration"));

            var roles = administration.CreateChildPermission(AppPermissions.Pages_Administration_Roles, L("Roles"));
            roles.CreateChildPermission(AppPermissions.Pages_Administration_Roles_Create, L("CreatingNewRole"));
            roles.CreateChildPermission(AppPermissions.Pages_Administration_Roles_Edit, L("EditingRole"));
            roles.CreateChildPermission(AppPermissions.Pages_Administration_Roles_Delete, L("DeletingRole"));

            var users = administration.CreateChildPermission(AppPermissions.Pages_Administration_Users, L("Users"));
            users.CreateChildPermission(AppPermissions.Pages_Administration_Users_Create, L("CreatingNewUser"));
            users.CreateChildPermission(AppPermissions.Pages_Administration_Users_Edit, L("EditingUser"));
            users.CreateChildPermission(AppPermissions.Pages_Administration_Users_Delete, L("DeletingUser"));
            users.CreateChildPermission(AppPermissions.Pages_Administration_Users_ChangePermissions, L("ChangingPermissions"));
            users.CreateChildPermission(AppPermissions.Pages_Administration_Users_Impersonation, L("LoginForUsers"));

            var languages = administration.CreateChildPermission(AppPermissions.Pages_Administration_Languages, L("Languages"));
            languages.CreateChildPermission(AppPermissions.Pages_Administration_Languages_Create, L("CreatingNewLanguage"));
            languages.CreateChildPermission(AppPermissions.Pages_Administration_Languages_Edit, L("EditingLanguage"));
            languages.CreateChildPermission(AppPermissions.Pages_Administration_Languages_Delete, L("DeletingLanguages"));
            languages.CreateChildPermission(AppPermissions.Pages_Administration_Languages_ChangeTexts, L("ChangingTexts"));

            administration.CreateChildPermission(AppPermissions.Pages_Administration_AuditLogs, L("AuditLogs"));

            var organizationUnits = administration.CreateChildPermission(AppPermissions.Pages_Administration_OrganizationUnits, L("OrganizationUnits"), multiTenancySides: MultiTenancySides.Host);
            organizationUnits.CreateChildPermission(AppPermissions.Pages_Administration_OrganizationUnits_ManageOrganizationTree, L("ManagingOrganizationTree"));
            organizationUnits.CreateChildPermission(AppPermissions.Pages_Administration_OrganizationUnits_ManageMembers, L("ManagingMembers"));


            //TENANT-SPECIFIC PERMISSIONS

            pages.CreateChildPermission(AppPermissions.Pages_Tenant_Dashboard, L("Dashboard"), multiTenancySides: MultiTenancySides.Tenant);

            administration.CreateChildPermission(AppPermissions.Pages_Administration_Tenant_Settings, L("Settings"), multiTenancySides: MultiTenancySides.Tenant);

            //HOST-SPECIFIC PERMISSIONS

            var editions = pages.CreateChildPermission(AppPermissions.Pages_Editions, L("Editions"), multiTenancySides: MultiTenancySides.Host);
            editions.CreateChildPermission(AppPermissions.Pages_Editions_Create, L("CreatingNewEdition"), multiTenancySides: MultiTenancySides.Host);
            editions.CreateChildPermission(AppPermissions.Pages_Editions_Edit, L("EditingEdition"), multiTenancySides: MultiTenancySides.Host);
            editions.CreateChildPermission(AppPermissions.Pages_Editions_Delete, L("DeletingEdition"), multiTenancySides: MultiTenancySides.Host);

            var tenants = pages.CreateChildPermission(AppPermissions.Pages_Tenants, L("Tenants"), multiTenancySides: MultiTenancySides.Host);
            tenants.CreateChildPermission(AppPermissions.Pages_Tenants_Create, L("CreatingNewTenant"), multiTenancySides: MultiTenancySides.Host);
            tenants.CreateChildPermission(AppPermissions.Pages_Tenants_Edit, L("EditingTenant"), multiTenancySides: MultiTenancySides.Host);
            tenants.CreateChildPermission(AppPermissions.Pages_Tenants_ChangeFeatures, L("ChangingFeatures"), multiTenancySides: MultiTenancySides.Host);
            tenants.CreateChildPermission(AppPermissions.Pages_Tenants_Delete, L("DeletingTenant"), multiTenancySides: MultiTenancySides.Host);
            tenants.CreateChildPermission(AppPermissions.Pages_Tenants_Impersonation, L("LoginForTenants"), multiTenancySides: MultiTenancySides.Host);

            administration.CreateChildPermission(AppPermissions.Pages_Administration_Host_Settings, L("Settings"), multiTenancySides: MultiTenancySides.Host);
            administration.CreateChildPermission(AppPermissions.Pages_Administration_Host_Maintenance, L("Maintenance"), multiTenancySides: MultiTenancySides.Host);

            #region financials Tab
            // PERMISSIONS FOR CHARTOFACCOUNTS

            var financials = pages.CreateChildPermission(AppPermissions.Pages_Financials, L("Financials"), multiTenancySides: MultiTenancySides.Tenant);
            var accounts = financials.CreateChildPermission(AppPermissions.Pages_Financials_Accounts, L("Accounts"), multiTenancySides: MultiTenancySides.Tenant);

            var chartOfAccounts = accounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_ChartOfAccounts, L("ChartOfAccount"), multiTenancySides: MultiTenancySides.Tenant);
            chartOfAccounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_ChartOfAccounts_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            chartOfAccounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_ChartOfAccounts_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            chartOfAccounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_ChartOfAccounts_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);

            // PERMISSIONS FOR SUBACCOUNTS
            var subAccounts = accounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_SubAccounts, L("SubAccounts"), multiTenancySides: MultiTenancySides.Tenant);
            subAccounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_SubAccounts_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            subAccounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_SubAccounts_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            subAccounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_SubAccounts_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);



            #region Accounts
            var financialsAccounts = accounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_Accounts, L("Accounts"), multiTenancySides: MultiTenancySides.Tenant);
            financialsAccounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_Accounts_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            financialsAccounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_Accounts_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            financialsAccounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_Accounts_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            financialsAccounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_Accounts_Import, L("Import"), multiTenancySides: MultiTenancySides.Tenant);
            financialsAccounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_Accounts_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);
            #endregion

            // PERMISSIONS FOR DIVISIONS
            var divisions = accounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_Divisions, L("Divisions"), multiTenancySides: MultiTenancySides.Tenant);
            divisions.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_Divisions_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            divisions.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_Divisions_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            divisions.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_Divisions_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            divisions.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_Divisions_Import, L("Import"), multiTenancySides: MultiTenancySides.Tenant);
            divisions.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_Divisions_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);


            //PERMISSIONS FOR TYPEOFCLASSIFICATION
            var Typeofclassification = accounts.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_TypeofClassification, L("Classifications"), multiTenancySides: MultiTenancySides.Tenant);
            Typeofclassification.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_TypeofClassification_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            Typeofclassification.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_TypeofClassification_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            Typeofclassification.CreateChildPermission(AppPermissions.Pages_Financials_Accounts_TypeofClassification_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);

            var journals = financials.CreateChildPermission(AppPermissions.Pages_Financials_Journals, L("Journals"), multiTenancySides: MultiTenancySides.Tenant);
            var entry = journals.CreateChildPermission(AppPermissions.Pages_Financials_Journals_Entry, L("Entry"), multiTenancySides: MultiTenancySides.Tenant);
            entry.CreateChildPermission(AppPermissions.Pages_Financials_Journals_Entry_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            entry.CreateChildPermission(AppPermissions.Pages_Financials_Journals_Entry_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            entry.CreateChildPermission(AppPermissions.Pages_Financials_Journals_Entry_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            entry.CreateChildPermission(AppPermissions.Pages_Financials_Journals_Entry_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);

            var inquiry = financials.CreateChildPermission(AppPermissions.Pages_Financials_Inquiry, L("Inquiry"), multiTenancySides: MultiTenancySides.Tenant);
            var searchTransactions = inquiry.CreateChildPermission(AppPermissions.Pages_Financials_Inquiry_SearchTransactions, L("SearchTransactions"), multiTenancySides: MultiTenancySides.Tenant);
            var inquiryFinancials = inquiry.CreateChildPermission(AppPermissions.Pages_Financials_Inquiry_Financials, L("Financials"), multiTenancySides: MultiTenancySides.Tenant);
            var journalHistory = inquiry.CreateChildPermission(AppPermissions.Pages_Financials_Inquiry_JournalHistory, L("JournalHistory"), multiTenancySides: MultiTenancySides.Tenant);
            var assetTracking = inquiry.CreateChildPermission(AppPermissions.Pages_Financials_Inquiry_AssetTracking, L("AssetTracking"), multiTenancySides: MultiTenancySides.Tenant);



            var fiscalPeriod = financials.CreateChildPermission(AppPermissions.Pages_Financials_FiscalPeriod, L("FiscalPeriod"), multiTenancySides: MultiTenancySides.Tenant);
            fiscalPeriod.CreateChildPermission(AppPermissions.Pages_Financials_FiscalPeriod_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            fiscalPeriod.CreateChildPermission(AppPermissions.Pages_Financials_FiscalPeriod_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            fiscalPeriod.CreateChildPermission(AppPermissions.Pages_Financials_FiscalPeriod_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);


            #endregion

            #region Projects Tab
            var projects = pages.CreateChildPermission(AppPermissions.Pages_Projects, L("Projects"), multiTenancySides: MultiTenancySides.Tenant);

            var projectMaintenance = projects.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance, L("ProjectMaintenance"), multiTenancySides: MultiTenancySides.Tenant);
            var projectMaintenanceProjects = projectMaintenance.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Projects, L("Projects"), multiTenancySides: MultiTenancySides.Tenant);
            projectMaintenanceProjects.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Projects_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            projectMaintenanceProjects.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Projects_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            projectMaintenanceProjects.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Projects_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            projectMaintenanceProjects.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Projects_Import, L("Import"), multiTenancySides: MultiTenancySides.Tenant);
            projectMaintenanceProjects.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Projects_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);

            //Lines
            var lines = projectMaintenance.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Lines, L("Lines"), multiTenancySides: MultiTenancySides.Tenant);
            lines.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Lines_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            lines.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Lines_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            lines.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Lines_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            lines.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Lines_Import, L("Import"), multiTenancySides: MultiTenancySides.Tenant);
            lines.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Lines_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);

            var projectCOAs = projectMaintenance.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_ProjectCOAs, L("ProjectCOAs"), multiTenancySides: MultiTenancySides.Tenant);
            projectCOAs.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_ProjectCOAs_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            projectCOAs.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_ProjectCOAs_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            projectCOAs.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_ProjectCOAs_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);

            var contracts = projectMaintenance.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Contracts, L("Contracts"), multiTenancySides: MultiTenancySides.Tenant);
            contracts.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Contracts_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            contracts.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Contracts_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            contracts.CreateChildPermission(AppPermissions.Pages_Projects_ProjectMaintenance_Contracts_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);

            var projectInquiry = projects.CreateChildPermission(AppPermissions.Pages_Projects_Inquiry, L("Inquiry"), multiTenancySides: MultiTenancySides.Tenant);
            #endregion

            #region Receivables Tab
            var receivables = pages.CreateChildPermission(AppPermissions.Pages_Receivables, L("Receivables"), multiTenancySides: MultiTenancySides.Tenant);
            var customers = receivables.CreateChildPermission(AppPermissions.Pages_Receivables_Customers, L("Customers"), multiTenancySides: MultiTenancySides.Tenant);
            customers.CreateChildPermission(AppPermissions.Pages_Receivables_Customers_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            customers.CreateChildPermission(AppPermissions.Pages_Receivables_Customers_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            customers.CreateChildPermission(AppPermissions.Pages_Receivables_Customers_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            customers.CreateChildPermission(AppPermissions.Pages_Receivables_Customers_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);

            var history = customers.CreateChildPermission(AppPermissions.Pages_Receivables_Customers_History, L("History"), multiTenancySides: MultiTenancySides.Tenant);
            var invoices = receivables.CreateChildPermission(AppPermissions.Pages_Receivables_Invoices, L("Invoices"), multiTenancySides: MultiTenancySides.Tenant);

            var invoicesEntry = invoices.CreateChildPermission(AppPermissions.Pages_Receivables_Invoices_Entry, L("Entry"), multiTenancySides: MultiTenancySides.Tenant);
            invoicesEntry.CreateChildPermission(AppPermissions.Pages_Receivables_Invoices_Entry_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            invoicesEntry.CreateChildPermission(AppPermissions.Pages_Receivables_Invoices_Entry_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            invoicesEntry.CreateChildPermission(AppPermissions.Pages_Receivables_Invoices_Entry_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            invoicesEntry.CreateChildPermission(AppPermissions.Pages_Receivables_Invoices_Entry_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);

            var receivablesInquiry = receivables.CreateChildPermission(AppPermissions.Pages_Receivables_Inquiry, L("Inquiry"), multiTenancySides: MultiTenancySides.Tenant);
            var aRInvoiceInquiry = receivablesInquiry.CreateChildPermission(AppPermissions.Pages_Receivables_Inquiry_ARInvoiceInquiry, L("ARInvoiceInquiry"), multiTenancySides: MultiTenancySides.Tenant);
            var customerSummary = receivablesInquiry.CreateChildPermission(AppPermissions.Pages_Receivables_Inquiry_CustomerSummary, L("CustomerSummary"), multiTenancySides: MultiTenancySides.Tenant);
            var invoiceDetail = receivablesInquiry.CreateChildPermission(AppPermissions.Pages_Receivables_Inquiry_InvoiceDetail, L("InvoiceDetail"), multiTenancySides: MultiTenancySides.Tenant);
            var receivablesPreferences = receivables.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences, L("Preferences"), multiTenancySides: MultiTenancySides.Tenant);

            var billingTypes = receivables.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_BillingTypes, L("BillingTypes"), multiTenancySides: MultiTenancySides.Tenant);
            billingTypes.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_BillingTypes_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            billingTypes.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_BillingTypes_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            billingTypes.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_BillingTypes_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);

            var territories = receivables.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_Territories, L("Territories"), multiTenancySides: MultiTenancySides.Tenant);
            territories.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_Territories_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            territories.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_Territories_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            territories.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_Territories_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);

            var paymentTerms = receivables.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_PaymentTerms, L("PaymentTerms"), multiTenancySides: MultiTenancySides.Tenant);
            paymentTerms.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_PaymentTerms_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            paymentTerms.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_PaymentTerms_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            paymentTerms.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_PaymentTerms_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);

            var aRInvoiceTemplate = receivables.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_ARInvoiceTemplate, L("ARInvoiceTemplate"), multiTenancySides: MultiTenancySides.Tenant);
            aRInvoiceTemplate.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_ARInvoiceTemplate_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            aRInvoiceTemplate.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_ARInvoiceTemplate_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            aRInvoiceTemplate.CreateChildPermission(AppPermissions.Pages_Receivables_Preferences_ARInvoiceTemplate_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);

            #endregion
           
            #region Payables Tab
            var payables = pages.CreateChildPermission(AppPermissions.Pages_Payables, L("Payables"), multiTenancySides: MultiTenancySides.Tenant);
            var vendors = payables.CreateChildPermission(AppPermissions.Pages_Payables_Vendors, L("Vendors"), multiTenancySides: MultiTenancySides.Tenant);
            vendors.CreateChildPermission(AppPermissions.Pages_Payables_Vendors_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            vendors.CreateChildPermission(AppPermissions.Pages_Payables_Vendors_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            vendors.CreateChildPermission(AppPermissions.Pages_Payables_Vendors_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            vendors.CreateChildPermission(AppPermissions.Pages_Payables_Vendors_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);

            var payablesInvoices = payables.CreateChildPermission(AppPermissions.Pages_Payables_Invoices, L("Invoices"), multiTenancySides: MultiTenancySides.Tenant);
            payablesInvoices.CreateChildPermission(AppPermissions.Pages_Payables_Invoices_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            payablesInvoices.CreateChildPermission(AppPermissions.Pages_Payables_Invoices_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            payablesInvoices.CreateChildPermission(AppPermissions.Pages_Payables_Invoices_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            payablesInvoices.CreateChildPermission(AppPermissions.Pages_Payables_Invoices_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);

            var payablesInquiry = payables.CreateChildPermission(AppPermissions.Pages_Payables_Inquiry, L("Inquiry"), multiTenancySides: MultiTenancySides.Tenant);
            var aPInvoiceInquiry = payablesInquiry.CreateChildPermission(AppPermissions.Pages_Payables_Inquiry_APInvoiceInquiry, L("APInvoiceInquiry"), multiTenancySides: MultiTenancySides.Tenant);
            var paymentHistory = payablesInquiry.CreateChildPermission(AppPermissions.Pages_Payables_Inquiry_PaymentHistory, L("PaymentHistory"), multiTenancySides: MultiTenancySides.Tenant);
            var vendorSummary = payablesInquiry.CreateChildPermission(AppPermissions.Pages_Payables_Inquiry_VendorSummary, L("VendorSummary"), multiTenancySides: MultiTenancySides.Tenant);
            var payablesInvoiceDetail = payablesInquiry.CreateChildPermission(AppPermissions.Pages_Payables_Inquiry_InvoiceDetail, L("InvoiceDetail"), multiTenancySides: MultiTenancySides.Tenant);

            var payablesPreferences = payables.CreateChildPermission(AppPermissions.Pages_Payables_Preferences, L("Preferences"), multiTenancySides: MultiTenancySides.Tenant);
            var payables1099T4Codes = payablesPreferences.CreateChildPermission(AppPermissions.Pages_Payables_Preferences_1099T4Codes, L("1099T4Codes"), multiTenancySides: MultiTenancySides.Tenant);

            var vendorPaymentTerms = payablesPreferences.CreateChildPermission(AppPermissions.Pages_Payables_Preferences_VendorPaymentTerms, L("VendorPaymentTerms"), multiTenancySides: MultiTenancySides.Tenant);
            vendorPaymentTerms.CreateChildPermission(AppPermissions.Pages_Payables_Preferences_VendorPaymentTerms_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            vendorPaymentTerms.CreateChildPermission(AppPermissions.Pages_Payables_Preferences_VendorPaymentTerms_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            vendorPaymentTerms.CreateChildPermission(AppPermissions.Pages_Payables_Preferences_VendorPaymentTerms_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);

            var yEProcesses = payables.CreateChildPermission(AppPermissions.Pages_Payables_YEProcesses, L("YEProcesses"), multiTenancySides: MultiTenancySides.Tenant);
            var yEProcessesVendor1099s = yEProcesses.CreateChildPermission(AppPermissions.Pages_Payables_YEProcesses_1099s, L("1099s"), multiTenancySides: MultiTenancySides.Tenant);


            #endregion

            #region  Purchase Orders Tab
            var purchaseOrders = pages.CreateChildPermission(AppPermissions.Pages_PurchaseOrders, L("PurchaseOrders"), multiTenancySides: MultiTenancySides.Tenant);
            var purchaseOrdersEntry = purchaseOrders.CreateChildPermission(AppPermissions.Pages_PurchaseOrders_Entry, L("Entry"), multiTenancySides: MultiTenancySides.Tenant);
            purchaseOrdersEntry.CreateChildPermission(AppPermissions.Pages_PurchaseOrders_Entry_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            purchaseOrdersEntry.CreateChildPermission(AppPermissions.Pages_PurchaseOrders_Entry_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            purchaseOrdersEntry.CreateChildPermission(AppPermissions.Pages_PurchaseOrders_Entry_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            purchaseOrdersEntry.CreateChildPermission(AppPermissions.Pages_PurchaseOrders_Entry_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);
            #endregion

            #region Purchasing Tab
            var purchasing = pages.CreateChildPermission(AppPermissions.Pages_Purchasing, L("Purchasing"), multiTenancySides: MultiTenancySides.Tenant);
            var purchasingInquiry = purchasing.CreateChildPermission(AppPermissions.Pages_Purchasing_Inquiry, L("Inquiry"), multiTenancySides: MultiTenancySides.Tenant);
            var purchaseOrderHistory = purchasingInquiry.CreateChildPermission(AppPermissions.Pages_Purchasing_Inquiry_PurchaseOrderHistory, L("PurchaseOrderHistory"), multiTenancySides: MultiTenancySides.Tenant);
            var searchPurchaseOrders = purchasingInquiry.CreateChildPermission(AppPermissions.Pages_Purchasing_Inquiry_SearchPurchaseOrders, L("SearchPurchaseOrders"), multiTenancySides: MultiTenancySides.Tenant);
            #endregion

            #region Petty Cash Tab
            var pettyCash = pages.CreateChildPermission(AppPermissions.Pages_PettyCash, L("PettyCash"), multiTenancySides: MultiTenancySides.Tenant);
            var pettyCashEntry = pettyCash.CreateChildPermission(AppPermissions.Pages_PettyCash_Entry, L("Entry"), multiTenancySides: MultiTenancySides.Tenant);
            pettyCashEntry.CreateChildPermission(AppPermissions.Pages_PettyCash_Entry_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            pettyCashEntry.CreateChildPermission(AppPermissions.Pages_PettyCash_Entry_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            pettyCashEntry.CreateChildPermission(AppPermissions.Pages_PettyCash_Entry_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            pettyCashEntry.CreateChildPermission(AppPermissions.Pages_PettyCash_Entry_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);

            var pCVendors = pettyCash.CreateChildPermission(AppPermissions.Pages_PettyCash_PCVendors, L("PCVendors"), multiTenancySides: MultiTenancySides.Tenant);
            var pettyCashInquiry = pettyCash.CreateChildPermission(AppPermissions.Pages_PettyCash_Inquiry, L("Inquiry"), multiTenancySides: MultiTenancySides.Tenant);
            #endregion

            #region Credit Card Tab
            var creditCard = pages.CreateChildPermission(AppPermissions.Pages_CreditCard, L("CreditCard"), multiTenancySides: MultiTenancySides.Tenant);
            var creditCardEntry = creditCard.CreateChildPermission(AppPermissions.Pages_CreditCard_Entry, L("Entry"), multiTenancySides: MultiTenancySides.Tenant);
            creditCardEntry.CreateChildPermission(AppPermissions.Pages_CreditCard_Entry_CreditCardHistory, L("CreditCardHistory"), multiTenancySides: MultiTenancySides.Tenant);
            creditCardEntry.CreateChildPermission(AppPermissions.Pages_CreditCard_Entry_OpenStatements, L("CreditCardOpenStatement"), multiTenancySides: MultiTenancySides.Tenant);
            var creditCardCompanies = creditCardEntry.CreateChildPermission(AppPermissions.Pages_CreditCard_Entry_CreditCardCompanies, L("CreditCardCompany"), multiTenancySides: MultiTenancySides.Tenant);
            creditCardCompanies.CreateChildPermission(AppPermissions.Pages_CreditCard_Entry_CreditCardCompanies_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            creditCardCompanies.CreateChildPermission(AppPermissions.Pages_CreditCard_Entry_CreditCardCompanies_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            creditCardCompanies.CreateChildPermission(AppPermissions.Pages_CreditCard_Entry_CreditCardCompanies_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            creditCardCompanies.CreateChildPermission(AppPermissions.Pages_CreditCard_Entry_CreditCardCompanies_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);

            var creditCardInquiry = creditCard.CreateChildPermission(AppPermissions.Pages_CreditCard_Inquiry, L("Inquiry"), multiTenancySides: MultiTenancySides.Tenant);
            var creditCardPreferences = creditCard.CreateChildPermission(AppPermissions.Pages_CreditCard_Preferences, L("Preferences"), multiTenancySides: MultiTenancySides.Tenant);
            #endregion

            #region Payroll Tab
            var payroll = pages.CreateChildPermission(AppPermissions.Pages_Payroll, L("Payroll"), multiTenancySides: MultiTenancySides.Tenant);
            var payrollEntry = payroll.CreateChildPermission(AppPermissions.Pages_Payroll_Entry, L("Entry"), multiTenancySides: MultiTenancySides.Tenant);
            payrollEntry.CreateChildPermission(AppPermissions.Pages_Payroll_Entry_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            payrollEntry.CreateChildPermission(AppPermissions.Pages_Payroll_Entry_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            payrollEntry.CreateChildPermission(AppPermissions.Pages_Payroll_Entry_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            payrollEntry.CreateChildPermission(AppPermissions.Pages_Payroll_Entry_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);


            var payrollInquiry = payroll.CreateChildPermission(AppPermissions.Pages_Payroll_Inquiry, L("Inquiry"), multiTenancySides: MultiTenancySides.Tenant);
            var payrollPreferences = payroll.CreateChildPermission(AppPermissions.Pages_Payroll_Preferences, L("Preferences"), multiTenancySides: MultiTenancySides.Tenant);
            #endregion

            #region Batch Posting Tab
            var batchPosting = pages.CreateChildPermission(AppPermissions.Pages_BatchPosting, L("BatchPosting"), multiTenancySides: MultiTenancySides.Tenant);
            var batched = batchPosting.CreateChildPermission(AppPermissions.Pages_BatchPosting_Batches, L("Batches"), multiTenancySides: MultiTenancySides.Tenant);
            batched.CreateChildPermission(AppPermissions.Pages_BatchPosting_Batches_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            batched.CreateChildPermission(AppPermissions.Pages_BatchPosting_Batches_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            batched.CreateChildPermission(AppPermissions.Pages_BatchPosting_Batches_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            #endregion

            #region Banking
            var banking = pages.CreateChildPermission(AppPermissions.Pages_Banking, L("Banking"), multiTenancySides: MultiTenancySides.Tenant);
            var receiptsOrTransfers = banking.CreateChildPermission(AppPermissions.Pages_Banking_ReceiptsOrTransfers, L("ReceiptsOrTransfers"), multiTenancySides: MultiTenancySides.Tenant);
            receiptsOrTransfers.CreateChildPermission(AppPermissions.Pages_Banking_ReceiptsOrTransfers_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            receiptsOrTransfers.CreateChildPermission(AppPermissions.Pages_Banking_ReceiptsOrTransfers_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            receiptsOrTransfers.CreateChildPermission(AppPermissions.Pages_Banking_ReceiptsOrTransfers_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);

            var ach = banking.CreateChildPermission(AppPermissions.Pages_Banking_ACH, L("ACH"), multiTenancySides: MultiTenancySides.Tenant);
            ach.CreateChildPermission(AppPermissions.Pages_Banking_ACH_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            ach.CreateChildPermission(AppPermissions.Pages_Banking_ACH_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            ach.CreateChildPermission(AppPermissions.Pages_Banking_ACH_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);

            var reconciliation = banking.CreateChildPermission(AppPermissions.Pages_Banking_Reconciliation, L("BankReconciliation"), multiTenancySides: MultiTenancySides.Tenant);
            reconciliation.CreateChildPermission(AppPermissions.Pages_Banking_Reconciliation_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            reconciliation.CreateChildPermission(AppPermissions.Pages_Banking_Reconciliation_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            reconciliation.CreateChildPermission(AppPermissions.Pages_Banking_Reconciliation_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            reconciliation.CreateChildPermission(AppPermissions.Pages_Banking_Reconciliation_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);

            var postivepay = banking.CreateChildPermission(AppPermissions.Pages_Banking_PostivePay, L("PostivePay"), multiTenancySides: MultiTenancySides.Tenant);
            postivepay.CreateChildPermission(AppPermissions.Pages_Banking_PostivePay_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            postivepay.CreateChildPermission(AppPermissions.Pages_Banking_PostivePay_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            postivepay.CreateChildPermission(AppPermissions.Pages_Banking_PostivePay_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);

            var bankSetup = banking.CreateChildPermission(AppPermissions.Pages_Banking_BankSetup, L("BankSetup"), multiTenancySides: MultiTenancySides.Tenant);
            bankSetup.CreateChildPermission(AppPermissions.Pages_Banking_BankSetup_Create, L("Create"), multiTenancySides: MultiTenancySides.Tenant);
            bankSetup.CreateChildPermission(AppPermissions.Pages_Banking_BankSetup_Edit, L("Edit"), multiTenancySides: MultiTenancySides.Tenant);
            bankSetup.CreateChildPermission(AppPermissions.Pages_Banking_BankSetup_Delete, L("Delete"), multiTenancySides: MultiTenancySides.Tenant);
            bankSetup.CreateChildPermission(AppPermissions.Pages_Banking_BankSetup_Attach, L("Attach"), multiTenancySides: MultiTenancySides.Tenant);

            #endregion


        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, CORPACCOUNTINGConsts.LocalizationSourceName);
        }
    }
}
