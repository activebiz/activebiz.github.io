## Enterprise Model

​	ActiveBiz is a multi-company multi-location supported business accounting solution that supports enterpuners who are doing their business with multiple entities & having different branches manages by single management group/person. This specific feature set makes ActiveBiz Enterprise Model more versetile and powerful such that one can easily manage multiple Companies under one manageble group called Enterprise. Relationship of Enterprise , Company & Branch can be reviewed in figure (1) below.

​	Fundamentally there are four pillars of ActiveBiz Enterprise model. These 4 major blocks are Enterprise, Company, AcYear & Branch. These four blocks are related in hirarchy & this hirarchy can be described as

Enterprise -> Company -> A/c Year -> Branch

This hierarchy is important when we manage top level business entities in ActiveBiz. In this hirarchy Enterprise is the top most block for this model. In Enterprise block there may be multiple companies blocks & in every company there may be multiple A/c Years as block & finally every A/c  year containes min 1 or more branches. Further detail explanation for all four blocks can be explained as below.

- **Enterprise:** In this hierarchy Top most Block which represents Group Of Companies is called Enterprise. Here Like term represents Group Of Companies where one or more then one companes belongs to single group which is used as management group is known as Enterprise. 
- **Company:** This is the actual block which is managing & functioning business operations. This company has its statutary requirements such as Registration No. or other Government statutary requirement. This is the main and key important block among the hirarchy. There are various Types of Companes that can be open in ActiveBiz. Here it is to be noted that every Enterprise has at least Single Company or more that one Company within it of any Company Type mentioned below. User can share chart of Accounts or Chart Of Items between these Companies. For more details on sharied resources see below. These Types are
  - Properitorship
  - Partnership
  - Private Limited
  - Public Limited
  - Trust
  - Limited Liability Partnership
- **A/c Year:** As we know that every thing in business is managed in a financial year which is for every Company which is being created in ActiveBiz no matter what is its Company Type is. 
- Branch: Branch is belongs to a Company & an A/c Year under which at least Single Branch is managed which is known as HeadOffice. Where as in case of requirement where multiple branches which is used to run the same business of Company is also identified as profit center or a seperate manageble unit for same business whose owners are same but only phusical location and staff who are managing that branch are seperate. Branch has its own set of  Financial Statements which gets consolidated at company level & makes final Financial Statement.



### Shared Resources

​	In ActiveBiz resources are shared between companies which must be under a single Enterprise. Here this sharing is done for Masters only for following masters & degree of sharing.

- Chart Of Account:  One can create shared chart of account between more then one companies but prerequsite for the same is that all companies must be belongs to same Enterprise. We can create a chart of Account for Company A, Company B & Company C as shared Chart of Account  Here we can share Schedule , Accounts, Books (Contra Accounts) as shared resources. During sharing there will be two types of information which can be understand with the following details.
  - **Shared among Companies:** This type of information is shared among companies & changing these details in any company will immulate these changes to all companies chart of account in which it is shared.
  - **Non-Shared (Specific to Company):** Some details are non shared and always remains specific to company even if its pricipal identity is shared among companies. This will make Chart of Account more configurable which riping the fruits of Shared Resources.

Applicable usage is when more then one companies deal with same customers and all these companies are managed by single managerial group. One can set shared chart of Accounts and use this feature in order to reduce the overhead of managing same master records for all companies. In the Following table we see which peoperties of Chart Of Account can be shared & Non-Shared in case of Shared Chart Of Account Case.

#### Shared Chart Of Account Properties

| Property Name            | Shared Type         |
| ------------------------ | ------------------- |
| Name                     | Shared              |
| Address Details          | Shared              |
| Tax Registration Details | Shared              |
| Credit Limit (Days)      | Specific to Company |
| Credit Limit (Amount)    | Specific to Company |

*Note:* *Above list represents sample set of properties for complete list check Account section inwhich for every Account Type page will represent its properties.*





