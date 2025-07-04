# Overview

BetterJobMatch is a learning project with several goals in mind:

* To learn various web technologies.

When I started this project my skill set was limited to C/C++ and web development using Microsoft stacks. I wanted to learn other technologies, and more importantly have something to show prospective employers that I have learned them well enough to deliver a useful product; in this case a job search site.

* To create a job search site that does not suck.

Most of the job search sites I've tried using match on the job title, or maybe a few key words, and I found myself combing through searches and finding that most of them had show-stoppers; either the pay was too low, or there was a requirement I was not able to meet, or the job location was outside of my commuting range. I can't escape the notion that I can develop a web site where HR people can post their opening, specify their requirements, and then see only applicants who meet those requirements, and likewise, a site where a job seeker can enter his/her qualifications and experiences, and see only those jobs for which he/she is qualified. This will reduce time wasted due to unqualified candidates being matched to positions.

# Current state

The root level folders in the repository are:

* `bjm-angular`: This contains the code for the app, built in Angular. Presently the user can:

  * Register new users
  * Log in (note that the password is not required, as this is a work-in-progress).
  * Edit his/her basic profile data.
  * Administrative users can add new industries and delete existing industries.
  * Job seekers can add to their work histories, including the functions performed in each job.

And that's where I'm stopping with the Angular version of this, because Angular is simply too much trouble. I'll be working the React version from here on, and once I've implemented everything in React that's already been done in Angular, I'll be removing the Angular portion from this repo.

* `bjm-api-express`: This contains the code for a RESTful API written using Node.js Express. It interfaces the front end with the database. At the moment is supports CRUD operations for industries, employers, and positions.

* `bjm-mysql`: This contains SQL scripts for creating the MySQL database used by the web site. It is very incomplete.

* `bjm-react`: This contains the code for the app, built in React. At the moment it has only the barest functionality.

# Deployment

The project is not readily deployable in its present condition; one of my goals is to get it into a fully automated and deployable state.

The best way is to clone the repo to your local directory, ensure that the required framework is installed for the front end and back end, and then launch their respective servers.

To set up the DB you will need to:

* Create a MySQL DB named `bjm`;
* Configure a user to match the credentials expected in `bjm-api-express/app.js`
* Run the scripts in `bjm-mysql` against that database.

To run the Angular version, open up a command prompt, CD to the `bjm-api-express` folder, and run `node app`, and then in a separate command prompt CD to the `bjm-angular` folder, and run `ng serve`. You can then access the site via the URL `http:\\localhost:4200`. The user credentials are stored in the table Users in the MySql database.

