<img src="./../Images/ab_short_01.png" width="80" height="80" />

[Home](https://activebiz.github.io)

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

- **Chart Of Account:**  One can create shared chart of account between more then one companies but prerequsite for the same is that all companies must be belongs to same Enterprise. We can create a chart of Account for Company A, Company B & Company C as shared Chart of Account  Here we can share Schedule , Accounts, Books (Contra Accounts) as shared resources. During sharing there will be two types of information which can be understand with the following details.
  - **Shared among Companies:** This type of information is shared among companies & changing these details in any company will immulate these changes to all companies chart of account in which it is shared.
  - **Non-Shared (Specific to Company):** Some details are non shared and always remains specific to company even if its pricipal identity is shared among companies. This will make Chart of Account more configurable which ripping the fruits of Shared Resources.

Applicable usage is when more then one companies deal with same customers and all these companies are managed by single managerial group. One can set shared chart of Accounts and use this feature in order to reduce the overhead of managing same master records for all companies. In the Following table we see which peoperties of Chart Of Account can be shared & Non-Shared in case of Shared Chart Of Account Case.

#### Shared Chart Of Account Properties

| Property Name            | Shared Type         |
| ------------------------ | ------------------- |
| Name                     | Shared              |
| Address Details          | Shared              |
| Tax Registration Details | Shared              |
| Account Balance          | Specific to Company |
| Credit Limit (Days)      | Specific to Company |
| Credit Limit (Amount)    | Specific to Company |

*Note:* *Above list represents sample set of properties for complete list check Account section in which for every Account Type page will represent its properties.*



- **Chart Of Item:** Sharing for Item which is also known as Trading or Manufactureing Product is required when same Item / Product is being tranded among more then one company and all company is managed by single group.It is mostly used in FMCG (Fast Moveble Consumer Goods) Sector where single group manages more then one suppliers among different companies for same type of Item. For Example Edeble Oil is being sold by Company A as Item X which is Manufacrued by P where as Same Edeble Oil is traded by Company B as Item Y which is Manufacturd by Q Where as Company C deals in Item Z which is Manufactured by R. Here in this case when user want to take online order from customer customers can see all these 3 Items A,B,C whenever customer picks Edeble Oil no matter it belongs to different companies but  since same group is managing these companies they can take orders and execute it. In this case also like Chart Of Account user can easily manage same Item between all companies with Shared & Non-Shared Properties. 
  - Shared among Companies:** This type of information is shared among companies & changing these details in any company will immulate these changes to all companies chart of Item in which it is shared.
  - **Non-Shared (Specific to Company):** Some details are non shared and always remains specific to company even if its pricipal identity is shared among companies. This will make Chart of Item more configurable which ripping the fruits of Shared Resources.

#### Shared Chart Of Item Properties

| Property Name            | Shared Type         |
| ------------------------ | ------------------- |
| Product Name             | Shared              |
| Groups                   | Shared              |
| Tax Rete Details         | Shared              |
| Stock On Hand            | Specific to Company |
| Scheme / Offers          | Specific to Company |
| Sales Rate               | Specific to Company |

*Note:* *Above list represents sample set of properties for complete list check Inventory section in which for every Item Type page will represent its properties.*




### Use Case for Shared Resources

​	In this Use case Mr. Rakesh is in FMCG Agency business with more then 1500 Items in trading and having 3 Companies (firms) to manage his whole business activities. He has grouped his all 1500 Items into 25 Groups. These 25 Groups are all same in all 3 Companies. Indeed he is having 3 Companies he is having single set of Infrastrure resources such as SalesPerons, Delivery Vans & Other Back Office staff among all 3 Companies. His workflow for Supply Chain is as below.

### Scenario: When Sales Person Takes Order on Tablet

-  Sales Person has a Daily schedule which is planned on weekly basis. This Plan is set for every Route on which there will be multiple customers in their respective sequence of order in which they are actually being attended. 
- When Sales Person A Begins his day he takes his Tablet and prepare his Route to begin. Since Route is fixed and so sequence of customers is also fixed he will be presented with Customer in a sequence that is going to be next. 
- On Reaching Customer he open Customer's profile and collects his new order. During the same process he can also review customer's Due amount Balance, Last 5 Orders,Current Offers & Schemes, Item wise order summary. As this details helps him to take max order from the customer.
- While taking order Sales Person can take order for all 3 Companies in a single Order Operation. He can locate same Items which is available in different Company in Different Brand to customer and take order. This is possible only necause of Shared Resources.
- As soon as he submit his order and order reaches ActiveBiz Server Back Office staff can see & process this order immediately even when SalesPerson is on his way.

### Scenatio: When Customer places online order

​	In This scenario each customer is given a unique userName,e so that he can user ActiveBiz Application to login and place an order on his own. He can also check his account ledger and due balance . 

- As soon as user gets login to ActiveBiz using user  and his credentials supplied by his verndor whoc is a ActiveBiz subscriber. Crustomer can use those credentials to login to his account and place an order which will be directly delivered to Vendor.
- In this process Customer can browse from ActiveBiz using e-Commerece like user Interface where he can explore & add Items to Order Basket. 
- During the Item Exploration Customer has a view of all 3 Companies all 1500 Items. Customer will filter which is given and set by Vendor as per his criteria he can view all Items from all 3 Companies. Based on selection Customer can Add his selection to Basket & later process the order for final delivery. Here it is to be noted that all 1500 Items which actually belongs to 3 different companies can be viewed as single set of Items insted of 3 seperate companies. Items can be viewed with other details such as Unit Of Measurement, MRP, Sales Rate, Offers if any , Packing etc. details when customer reviews individual Item. 
- After selection is over Customer can finally process his Basket and ActiveBiz will prepare 3 Sales Order based on Item selection made by Customer and place it to Vendor. 
- Once Order is placed Vendor can immediately process these new orders & prepare Delivery Note & Sales Unvoice from these Sales Orders which were placed by customer online.  



##### Related Topics

