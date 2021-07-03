# Questions

## Bug Report!

Q: What is an excellent bug report you created at a previous company which was of a high priority, high severity in a build about to be deployed to production? (Please write the bug report below)


A:
First, for generic feature context:
Sequences: Legacy feature that was intended to be sunset, but was still in use by many customers.
Experiences: New feature to replace Sequences, in beta at this time.
VA Portal: An area of the application where customer replies to both Sequences and Experiences feed into.

Essentially, a Sequence or Experience will send out a question to a customer. The customer's answer will go to the VA Portal, where their answer will be tagged and the appropriate next question or message will be sent back to the customer.

I will obfuscate specific details from the bug report as appropriate.


# Bug report:
Title: Customer responses to Sequences are failing to reach VA Portal with error: “`integer` is not of type 'string'”

Environment: `release testing environment`
Example credentials to reproduce: `example credentials`
Example sequence to opt in to: `Sequence name`

Reproduction steps:
1) Create a new Sequence or opt in to an existing one.
2) After receiving the question from the sequence, send in a reply.

Expected result:
The Sequence reply will be shown in the VA Portal.

Actual result:
Sequence replies are not reaching the VA Portal. An error is logged in Sentry, “`integer` is not of type 'string'”.

Logs:
`Error log`
`Link to error in Sentry`

Additional Notes:
In ticket `ticket number`, we updated the ID column for the Experiences table `experiences table name` from int to UUID. To make VA Portal work with this change, we changed the code to cast UUIDs to string. We did not update any code for Sequences or the Sequences table `sequences table name`, which still has type int for its ID.



## Bug Report Follow up

Q: For the created bug report example you created in the previous question, what happened and how did you navigate the bug lifecycle, bug discussion?

A: We were just about ready to deploy our release candidate to production when I found this error. As soon as I saw it, I immediately raised it as a release blocker, since an important feature of our application was rendered unusable. I understood the context of the change we had made and was able to provide that in the bug report. This helped the dev understand what change they needed to make to fix Sequences faster.

I worked with the dev and followed the bug through its lifecycle. Once the dev provided a fix, I was able to test that fix, ensuring I covered the happy path for both Sequences and Experiences in this retest. After validating that the fix worked, we were able to merge it into our release branch, rerun automation for sanity, and finally proceed with the deploy to production.

As far as discussion around this bug and how it made it through initial QA and steps to prevent in the future-
Since all of the changes we were making for this release were for the new feature, that was where the majority of my testing efforts had been focused. I did have regression test cases as far as Sequence CRUD was concerned; however, at the time of this bug, I had only one test case dedicated to testing the VA Portal and had executed it using the new feature.

My immediate course of action was to create an additional test case in TestRail for our regression suite to make sure we tested the VA Portal with the legacy feature as well until the feature was fully sunset. This bug was an important lesson for me in not neglecting legacy features just because code changes aren’t being directly made to them - as long as customers are still using the feature, it’s important to continue testing those happy paths in case related code is changed and indirectly affects the functionality.
