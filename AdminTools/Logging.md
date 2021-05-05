<img src="./../Images/ab_short_01.png" width="80" height="80" />

[Home](https://activebiz.github.io)

## Logging

### Introduction

In any distibuted application environment where more then one users are operating on a single set of data it is highlt essential that administrator or a user should able to see all operations that are being performed on that set of data any point of time in future. This requirement can be fulfilled by Logging every sucessful or Failed operation on that set of Data that is being controlled by Application. In our case ActiveBiz controlls and manages data among different users upon their request it is necessary that ActiveBiz should rcord these logs inside its Logging mechenism. With the use of this Logging anyone can see who performed which operation when and what was the state of that operation sucess or fail. Generally these Logging records are recorded in order which they occur. 

When any user review this logging records it is shown in descending order in whcich they occur. Thus from these log records all users can see who performed what operation and wheather that operation is sucessful or failed. 

### Who can see these Logs

In ActiveBiz everyone can see basic logs where every event is recorded. The only difference is when someone wants to see more edtails of logs and at that time ActiveBiz will check for the permissions given to that user is enough or not. If that user has sufficient permission he can see more details other wise he can see only basic logs. This permissions are set and set by Application Administrator who controls users and its permissions.

### Where can I see Basic Logging ?

Every user can see basic logging once he is sucessfully login into ActiveBiz and then on top there is View Log button on clicking this button user can list top 10 logs in descending order. For Advance log view option click on Advance view link on right of Log View Button.

### How Logging can be helpful ?

Logging is helpful to answer many basic queries and need not ask to other user everytime. It generally answers following question of any User. Logging is helpful as basic Audit tools to answer certain premitive queries regarding daily interaction of users with the system.
- Wheather Mr. X has performed certain operations or not if yes when ?
- How many Operations of a specific type is being performed since morning ?
- Who are (Users) involved in certain type operations since morning ?
- How many total sucessful or failed operations performed since morning ?
- How many Delete Operations performed for a specific operations since morning ?

These are some of the usescases where logging is helpful to general users. In case of Administrators Advanced usesage of Logging is helpful by answering below questions.Note all below questions can be asked for duration of daywise, weekwise, monthwise , quarterwise, halfyearwise or yearwise.
  
- How many total operations sucessful and failed perfomed inside system ?
- What are all operations performed by a spcific user summary & then details ?
- Who are engaged in specific set of operations summary & details ?
  