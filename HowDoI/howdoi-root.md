<img src="./../Images/ab_short_01.png" width="80" height="80" />



## How Do I....?

<!-- toc -->



<!-- tocstop -->







#### How Do I Prevent a master record from being used in other Masters or Transactions ?

Some times when we no longer uses a master record we may think to delete it. But since it was used earlier we cannot delete that record. At the same time we want to prevent other users to use that record accidently in to other master or transactions. In this scenario we can make this master record Inactive by disebling IsEnable property of that master record by editing it and then Save that changes. This will makes all other property of that master record as read-only so no other user can change it and in same master search this master record will not appear for selection. However in earlier records where it was used no effects were took place. So thus now next time when you sear that master next time in other master or transaction you will no longer find that Disebled master record.

