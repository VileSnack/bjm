# Overview

BetterJobMatch is a learning project with several goals in mind:

* To learn various web technologies.

When I started this project my skill set was limited to C/C++ and web development using Microsoft stacks. I wanted to learn other technologies, and more importantly have something to show prospective employers that I have learned them well enough to deliver a useful product; in this case a job search site.

* To create a job search site that does not suck.

Most of the job search sites I've tried using match on the job title, or maybe a few key words, and I found myself combing through searches and finding that most of them had show-stoppers; either the pay was too low, or there was a requirement I was not able to meet, or the job location was outside of my commutting range. I can't escape the notion that I can develop a web site where HR people can post their opening, specify their requirements, and then see only applicants who meet those requirements, and likewise, a site where a job seeker can enter his/her qualifications and experiences, and see only those jobs for which he/she is qualified.

# Current state

The root level folders in the repository are:

* `bjm-angular`: This contains the code for an app built in Angular. Presently the only thing the user can do is to log in and edit his/her profile.

* `bjm-api-express`: This contains the code for an API written using Node.js Express. It interfaces the front end with the 

* `bjm-mysql`: This contains SQL scripts for creating the MySQL database used by the web site. It is very incomplete.

The project is not readily deployable in its present condition; one of my goals is to get it into a fully automated and deployable state.

Among other things, I also want to get around to learning React, and implementing the site functionality in React, in parallel with the Angular implementation, such that either one of the two can be deployed with no difference to the UX, and in a similar line I might also create a Java API layer to duplicate the behavior.


