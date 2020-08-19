<img src="./../Images/ab_short_01.png" width="80" height="80" />



## How Do I....?

<!-- toc -->



<!-- tocstop -->





<details> <summary><b>
How Do I Prevent a master record from being used in other Masters or Transactions ?
</b></summary>
Some times when we no longer uses a master record we may think to delete it. But since it was used earlier we cannot delete that record. At the same time we want to prevent other users to use that record accidently in to other master or transactions. In this scenario we can make this master record Inactive by disebling IsEnable property of that master record by editing it and then Save that changes. This will makes all other property of that master record as read-only so no other user can change it and in same master search this master record will not appear for selection. However in earlier records where it was used no effects were took place. So thus now next time when you sear that master next time in other master or transaction you will no longer find that Disebled master record.  
</details>
<br>

<details><br>
<summary><b>
How can I know if current Record I am looking at (Any) is changed by some other user or not?
</b></summary>
To Detect that wheather the current record (Any Master such as Customer or Product , Any Trenasaction such as Cash Voucher or Sales Invoice) is already modified can be checked with that record's Version No that is present inside  Icon on top right side of Page. On clicking it you can see Version No , Last Action & Last Date & Time of Action & User who performed this Last Action in a tooltip windows.Here Version No represents No of times Record changed. So based on this Version No you can check for how many times this record is being changed. In Tooltip windows you can also see last action, Date & Time and User who performed this operation is displayed.
</details><br>