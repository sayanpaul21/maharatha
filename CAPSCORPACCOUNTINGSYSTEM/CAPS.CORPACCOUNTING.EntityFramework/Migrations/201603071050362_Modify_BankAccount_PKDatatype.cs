namespace CAPS.CORPACCOUNTING.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Modify_BankAccount_PKDatatype : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.CAPS_BankAccount", "ControllingBankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_BankRecControl", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_PaymentRequestHistory", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_BankAccountPaymentRange", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_BankAccountUser", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_BankStatementDetails", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_CashEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_CashEntryDocument", "SendingBankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_PaymentEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_PurchaseOrderEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_PurchaseOrderEntryDocument", "ControllingBankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_ChargeEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_PettyCashEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount");
            DropIndex("dbo.CAPS_BankAccount", new[] { "ControllingBankAccountId" });
            DropIndex("dbo.CAPS_BankRecControl", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_PaymentRequestHistory", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_BankAccountPaymentRange", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_BankAccountUser", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_BankStatementDetails", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_CashEntryDocument", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_CashEntryDocument", new[] { "SendingBankAccountId" });
            DropIndex("dbo.CAPS_PaymentEntryDocument", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_PurchaseOrderEntryDocument", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_PurchaseOrderEntryDocument", new[] { "ControllingBankAccountId" });
            DropIndex("dbo.CAPS_ChargeEntryDocument", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_PettyCashEntryDocument", new[] { "BankAccountId" });
            DropPrimaryKey("dbo.CAPS_BankAccount");
            AlterColumn("dbo.CAPS_CashEntryDocument", "BankAccountId", c => c.Long(nullable: false));
            AlterColumn("dbo.CAPS_CashEntryDocument", "SendingBankAccountId", c => c.Long());
            AlterColumn("dbo.CAPS_ChargeEntryDocument", "BankAccountId", c => c.Long());
            AlterColumn("dbo.CAPS_APHeaderTransactions", "BankAccountId", c => c.Long());
            AlterColumn("dbo.CAPS_PaymentEntryDocument", "BankAccountId", c => c.Long());
            AlterColumn("dbo.CAPS_PettyCashEntryDocument", "BankAccountId", c => c.Long());
            AlterColumn("dbo.CAPS_PurchaseOrderEntryDocument", "BankAccountId", c => c.Long());
            AlterColumn("dbo.CAPS_PurchaseOrderEntryDocument", "ControllingBankAccountId", c => c.Long());
            AlterColumn("dbo.CAPS_BankAccount", "BankAccountId", c => c.Long(nullable: false, identity: true));
            AlterColumn("dbo.CAPS_BankAccount", "ControllingBankAccountId", c => c.Long());
            AlterColumn("dbo.CAPS_BankRecControl", "BankAccountId", c => c.Long(nullable: false));
            AlterColumn("dbo.CAPS_PaymentRequestHistory", "BankAccountId", c => c.Long());
            AlterColumn("dbo.CAPS_BankAccountPaymentRange", "BankAccountId", c => c.Long(nullable: false));
            AlterColumn("dbo.CAPS_BankAccountUser", "BankAccountId", c => c.Long(nullable: false));
            AlterColumn("dbo.CAPS_BankStatementDetails", "BankAccountId", c => c.Long(nullable: false));
            AddPrimaryKey("dbo.CAPS_BankAccount", "BankAccountId");
            CreateIndex("dbo.CAPS_BankAccount", "ControllingBankAccountId");
            CreateIndex("dbo.CAPS_BankRecControl", "BankAccountId");
            CreateIndex("dbo.CAPS_PaymentRequestHistory", "BankAccountId");
            CreateIndex("dbo.CAPS_BankAccountPaymentRange", "BankAccountId");
            CreateIndex("dbo.CAPS_BankAccountUser", "BankAccountId");
            CreateIndex("dbo.CAPS_BankStatementDetails", "BankAccountId");
            CreateIndex("dbo.CAPS_CashEntryDocument", "BankAccountId");
            CreateIndex("dbo.CAPS_CashEntryDocument", "SendingBankAccountId");
            CreateIndex("dbo.CAPS_PaymentEntryDocument", "BankAccountId");
            CreateIndex("dbo.CAPS_PurchaseOrderEntryDocument", "BankAccountId");
            CreateIndex("dbo.CAPS_PurchaseOrderEntryDocument", "ControllingBankAccountId");
            CreateIndex("dbo.CAPS_ChargeEntryDocument", "BankAccountId");
            CreateIndex("dbo.CAPS_PettyCashEntryDocument", "BankAccountId");
            AddForeignKey("dbo.CAPS_BankAccount", "ControllingBankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
            AddForeignKey("dbo.CAPS_BankRecControl", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId", cascadeDelete: true);
            AddForeignKey("dbo.CAPS_PaymentRequestHistory", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
            AddForeignKey("dbo.CAPS_BankAccountPaymentRange", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId", cascadeDelete: true);
            AddForeignKey("dbo.CAPS_BankAccountUser", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId", cascadeDelete: true);
            AddForeignKey("dbo.CAPS_BankStatementDetails", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId", cascadeDelete: true);
            AddForeignKey("dbo.CAPS_CashEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId", cascadeDelete: true);
            AddForeignKey("dbo.CAPS_CashEntryDocument", "SendingBankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
            AddForeignKey("dbo.CAPS_PaymentEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
            AddForeignKey("dbo.CAPS_PurchaseOrderEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
            AddForeignKey("dbo.CAPS_PurchaseOrderEntryDocument", "ControllingBankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
            AddForeignKey("dbo.CAPS_ChargeEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
            AddForeignKey("dbo.CAPS_PettyCashEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.CAPS_PettyCashEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_ChargeEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_PurchaseOrderEntryDocument", "ControllingBankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_PurchaseOrderEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_PaymentEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_CashEntryDocument", "SendingBankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_CashEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_BankStatementDetails", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_BankAccountUser", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_BankAccountPaymentRange", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_PaymentRequestHistory", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_BankRecControl", "BankAccountId", "dbo.CAPS_BankAccount");
            DropForeignKey("dbo.CAPS_BankAccount", "ControllingBankAccountId", "dbo.CAPS_BankAccount");
            DropIndex("dbo.CAPS_PettyCashEntryDocument", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_ChargeEntryDocument", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_PurchaseOrderEntryDocument", new[] { "ControllingBankAccountId" });
            DropIndex("dbo.CAPS_PurchaseOrderEntryDocument", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_PaymentEntryDocument", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_CashEntryDocument", new[] { "SendingBankAccountId" });
            DropIndex("dbo.CAPS_CashEntryDocument", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_BankStatementDetails", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_BankAccountUser", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_BankAccountPaymentRange", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_PaymentRequestHistory", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_BankRecControl", new[] { "BankAccountId" });
            DropIndex("dbo.CAPS_BankAccount", new[] { "ControllingBankAccountId" });
            DropPrimaryKey("dbo.CAPS_BankAccount");
            AlterColumn("dbo.CAPS_BankStatementDetails", "BankAccountId", c => c.Int(nullable: false));
            AlterColumn("dbo.CAPS_BankAccountUser", "BankAccountId", c => c.Int(nullable: false));
            AlterColumn("dbo.CAPS_BankAccountPaymentRange", "BankAccountId", c => c.Int(nullable: false));
            AlterColumn("dbo.CAPS_PaymentRequestHistory", "BankAccountId", c => c.Int());
            AlterColumn("dbo.CAPS_BankRecControl", "BankAccountId", c => c.Int(nullable: false));
            AlterColumn("dbo.CAPS_BankAccount", "ControllingBankAccountId", c => c.Int());
            AlterColumn("dbo.CAPS_BankAccount", "BankAccountId", c => c.Int(nullable: false, identity: true));
            AlterColumn("dbo.CAPS_PurchaseOrderEntryDocument", "ControllingBankAccountId", c => c.Int());
            AlterColumn("dbo.CAPS_PurchaseOrderEntryDocument", "BankAccountId", c => c.Int());
            AlterColumn("dbo.CAPS_PettyCashEntryDocument", "BankAccountId", c => c.Int());
            AlterColumn("dbo.CAPS_PaymentEntryDocument", "BankAccountId", c => c.Int());
            AlterColumn("dbo.CAPS_APHeaderTransactions", "BankAccountId", c => c.Int());
            AlterColumn("dbo.CAPS_ChargeEntryDocument", "BankAccountId", c => c.Int());
            AlterColumn("dbo.CAPS_CashEntryDocument", "SendingBankAccountId", c => c.Int());
            AlterColumn("dbo.CAPS_CashEntryDocument", "BankAccountId", c => c.Int(nullable: false));
            AddPrimaryKey("dbo.CAPS_BankAccount", "BankAccountId");
            CreateIndex("dbo.CAPS_PettyCashEntryDocument", "BankAccountId");
            CreateIndex("dbo.CAPS_ChargeEntryDocument", "BankAccountId");
            CreateIndex("dbo.CAPS_PurchaseOrderEntryDocument", "ControllingBankAccountId");
            CreateIndex("dbo.CAPS_PurchaseOrderEntryDocument", "BankAccountId");
            CreateIndex("dbo.CAPS_PaymentEntryDocument", "BankAccountId");
            CreateIndex("dbo.CAPS_CashEntryDocument", "SendingBankAccountId");
            CreateIndex("dbo.CAPS_CashEntryDocument", "BankAccountId");
            CreateIndex("dbo.CAPS_BankStatementDetails", "BankAccountId");
            CreateIndex("dbo.CAPS_BankAccountUser", "BankAccountId");
            CreateIndex("dbo.CAPS_BankAccountPaymentRange", "BankAccountId");
            CreateIndex("dbo.CAPS_PaymentRequestHistory", "BankAccountId");
            CreateIndex("dbo.CAPS_BankRecControl", "BankAccountId");
            CreateIndex("dbo.CAPS_BankAccount", "ControllingBankAccountId");
            AddForeignKey("dbo.CAPS_PettyCashEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
            AddForeignKey("dbo.CAPS_ChargeEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
            AddForeignKey("dbo.CAPS_PurchaseOrderEntryDocument", "ControllingBankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
            AddForeignKey("dbo.CAPS_PurchaseOrderEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
            AddForeignKey("dbo.CAPS_PaymentEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
            AddForeignKey("dbo.CAPS_CashEntryDocument", "SendingBankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
            AddForeignKey("dbo.CAPS_CashEntryDocument", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId", cascadeDelete: true);
            AddForeignKey("dbo.CAPS_BankStatementDetails", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId", cascadeDelete: true);
            AddForeignKey("dbo.CAPS_BankAccountUser", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId", cascadeDelete: true);
            AddForeignKey("dbo.CAPS_BankAccountPaymentRange", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId", cascadeDelete: true);
            AddForeignKey("dbo.CAPS_PaymentRequestHistory", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
            AddForeignKey("dbo.CAPS_BankRecControl", "BankAccountId", "dbo.CAPS_BankAccount", "BankAccountId", cascadeDelete: true);
            AddForeignKey("dbo.CAPS_BankAccount", "ControllingBankAccountId", "dbo.CAPS_BankAccount", "BankAccountId");
        }
    }
}
