<img src="./../../Images/ab_short_01.png" width="80" height="80" />

[Home](httosL//activebiz.github.in)

## Accounts Master



Masters for Account section are essential as foundational entity for strong account system base. Here like when we construct any building as we know foundation for that build is curtail for that building likewise Master in Account section is equally important because it helps users to perform their routine activity without repeating an activity. We will explain in detail Importance of Master in detail below. 

### Importance 

Like we see every element in nature has a role to play and its own importance masters in any Information system has its own place and importance. Basically masters were introduce in Information System to reduce repetitive work, eliminate errors, share knowledge base. More details on these importance can be explained as

- **Reduce repetitive work:** In Accounts there are many things which are reputative in nature such as Customer Name, Address, GST No etc. In manual system whenever we prepare any Invoice or write Cash Receipt or prepares a Journal Voucher we write customer account name in these transactions. Here we repeat same account name for multiple transactions. As this type of reputative work can be eliminated by introducing Account Master in which we can maintain Single record for a customer and later we can use the same in various types of transaction. This will eliminate repetitive work of writing same Account Name & Other details again and again on various transactions.

- **Eliminate Errors:** As we eliminate repetitive type of work in-directly we eliminate chances of errors that happens during every transaction. So Masters will help users to reduce chances of errors and improves confidence level for work which user is performing. 

- **Shared Knowledge Base:**  We know that generation of knowledge base is a time consuming process. When we define Masters we indirectly sharing knowledge base among various discipline of users such as Sales Person, Jr. Account Clerk, Manager, Stores Incharge etc. All these various users when use same master then everyone need not to know internals of these masters they will simply use them wherever it is required. So, in an organization single person with this domain knowledge is required. Others will use this knowledge as shared knowledge base.

- **Single Source of Truth:** When we implement Master in any Information system it will become the single source of truth. This is crucial when more then one person is involved in the process. We can assure since we will use Master record as a single source of truth there is no other chances of getting multiple source of information for same entity. This increases more confidence and efficiency for Information System.   

  Here are List of Masters for Accounts in ActiveBiz.

  ### Related Links

      1. [Area](./AreaMaster.md)
      2. Route
      3. [Sales Person](./acc/master/SalesPerson.md)
      4. Transporter
      5. Chart Of Accounts
         1. Schedule
         2. Account
            1. General Ledger
            2. Income Accounts
            3. Expense Accounts
            4. Customer Accounts
            5. Supplier Accounts


    

### System Based Master

​	This master is designed and developed by Architects of ActiveBiz at the tome of designing and developing the software system as a whole. This is the base master which will be used in other Masters & Transactions mentioned above. Values of these system Based Masters cannot be changed by anyone. List & usesage of these System Master is mentioned below.

#### List of Systme Based Master for Accounts

- **Account Type:** Account Type is the base type which helps to define basic components of Chart Of Accounts. This Includes Schedule, Account, Book (also knows as Contra Account). These premetive components then in hirarchy builds complete functional chart of account.  
- **Account Catagory:** Account Catagory is special Type which is used to segrigate various Accounts inside Chart of account no matter they are belongs to which Schedule / Group. This Account Catagory can be of Customer, Supplier, Customer & Supplier Both, Income, Expense, Sales, Purchase, Assets, Liabilities. 
- **Transaction Type:** Transaction Type is used to define when a Book / Contra Account is created. ActiveBiz supports Transactions types such as Cash, Bank, Sales, Purchase, Journal Voucher, Sales Return, Purchase Return.
- 



