
# Team Project 2 - TheBarkBook

TheBarkBook is social media blog application for dogs. The atmosphere is fun and lighthearted encouraging pet owners to contribute as represenatives of their canine friends. As such in this parallel universe Dogs can post about their humans and life activities in first person and other users can like, comment on your post and you can respond to them.

## Technologies Used
MySQL 
Heroku 
Sequalizer 
Express 
Handlebars 
Bootstrap
Adobe XD
Google Docs
Google Slides


## Link to deployed site in Heroku
https://barkbook.herokuapp.com/

## Link to Mock ups
https://xd.adobe.com/view/07fb6abc-8747-4aeb-9da5-b7d0e12afd0e-52a8/


## Acceptance Criteria MVP
GIVEN: A Blog social media site

WHEN: I go to the application homepage
THEN: I am presented with a blog type page 

WHEN: I have I do not yet have an account
THEN: I will be prompted to create one

WHEN: Once I have access to the blog feed
THEN: I can type and comment and upload an image

WHEN: I have access to the blog feed.
THEN: I can read other peoples post and comment


WHEN: I dont have an account, 
THEN: I can see the blog but I cannot comment until i make an account

# UPDATE: July 4,2021 - 1:24pm pst (ONE OF OUR GROUP MEMBERS WAS ABLE TO FIX THE ISSUE):

One of our team members (Andrea) was able to get help and advice from a relative we were able to fix the bugs plaguing our previous build thanks to her effortsthanks to her efforts. We now have a mostly functional website. While some of the issues still stand, We will go over one key issue that needs to be addressed in this update section

# Screenshots of the project working

## Screenshots

![LocalHostDemo2](./images/BarkBookFixed.gif)

This is the application running 

## Update notes

 Andrea was able to get some support from a knowledgeable family member and was able to go through our code and fix errors we made in syntax and in our routes, our design and handlebar logic. With that we were able to get to a point where we are now able to login and logout, register a user, post comments, post posts. The only error/ issues that remain that we don't have time to fix are styling issues as well as an issue where we cant get the unique pictures whe apply to each post. The solution to this was something we went over in class, but it was too late in the sprint to implement. 


# Screenshots of the project 

## Notes on Local Host demo

![LocalHostDemo](./images/TheBarkBookLocalHost.gif)

In the local host we were working on trying to iron out things, we finally got our seed data to load in and finally fixed our public javascript to a certain extent. However, we faced an issue which sort of became a permanent road block, that issue was that we couldnt find a specific route login is meant to use to log a user in. When trying to figure out a fix one of the group members tried to compare it with the mvc hwk assignment they got a 100% on and when testing it in the local host they found that they had the same error on their hwk/challenge assignment that we were having for our local host copy of the app. This error made it hard to troubleshoot the login and register logic because we would get a 404 error and not errors that we were expecting from both projects. This caused work on the project to stagnate due to hitting this brick wall. Without any sort of firm guidance as to how to troubleshoot this issue and because most TA's stopped their office hours for the fourth of july weekend we had to do the best we can with the situation we had and just submit what we could finish. 

## Notes on Heroku Demo

![HerokuDemo](./images/TheBarkBookHeroku.gif)

In the heroku app there is no seed data stored, however we can showcase the page routing present as well as what we were able to get accomplished with a close to standard final product. We will discuss the project in further detail in the issue's section as well as our individual notes in the comments section.

# Notes on the project

## Overview

As a whole this project did face weird bugs that were hard to troubleshoot. As a group working on this project initially alot of things were sort of underestimated, in particular the types of errors we would face, the time crunch due to our personal schedules and the lack of foresight for the upcoming holidays that lead to a lack of support for troubleshooting these errors with TA's. Now for starters, we should highlight the positives, we were able to test our api calls using the seed data to show that post and comments are being pulled, and had our handlebars setup pretty nicely for our front end. We did our best to emulate the MVC design pattern thanks to the help of tutors and the instructor. Lastly we were able to deploy something to heroku to show that we learned how to use heroku. While we had these success we also had issues with the project as well.

## Issues

1) Time crunches due to our work schedules.
2) Weird technical issues we faced when trying to work on our sections of the project.
3) Things not being interconnected correctly due to people using different variables for different parts.
4) Errors with our routes and trying to login a user and register a user.
5) Some errors with logic that caused the program to break in a way that made it hard to continue.
6) Probably some other minor issues that caused a cascade of issues that led to the previous issues
7) Good chance that after these sets of issues are resolved there are also other sets of issues.


### What happened

We will go over each of the issues in order and provide a quick summary of what happened.

1) We were unable to schedule ample time to meet up and work on this project. While we still met up every day or at least four - five times a week to go over our work and try to fix issues, three of us (Aniruddha, Andrea, Tricia) have new jobs and are/were going through training for said jobs which led them to prioritize their job related work. This led to schedules being not as flexible as most would hope for scheduling meetings, however they did work still work immensly on the project as often as they could. 

2) There were some technical issues or weird niche errors that we faced when running our project. Inevitably we faced an error that was caused by the login logic that left our group completely stumped. The reason why we were so confused by this error is because one of our group members got a 100% on the MVC challenge and we based our work off of the work we studied for the challenge. When we tried to do the same thing in the Challenge assignment to compare between this project and the 100% working challenge, we were facing the same error in the challenge assignment as well, however this error was only present in the local host, not in the heroku build of the challenge. That made it hard to troubleshoot for us and figure out what was going on. 

3) Everyone seperated and worked on different portions of the project, while this is standard for a big project there are aspects of this project that were interconnected that we didn't know about which led to us seperating assignments incorrectly, which in turn led to more conflicts when merging as well as issues with variables and classes not aligning correctly. An example is someone worked on the public/javascript and another person worked on the handlebars, when it would have been better for the frontend developer to work on both or closely work with another group member to coordinate the variables between the public/javascript and the handlebars. Or the login logic and the login routes, instead of having someone work on the login logic alone and someone else work on all of the routes, we should have had them work closely together to make sure the routes are all connected.

4) As explained in three, we had people focusing on the routes and one person focused on the login logic because of their prior experience setting up login. While this was a good idea, without coordination between the people working on the routes and the person working on login logic, this led to one person building the login logic and its support files in a way that it would only work with what they individually set up, and the routes being set up in a way where it was ready to set up the login logic, but caused conflicts with what the individual set up. Normally it would have been better if the team worked together to troubleshoot all of this but due to lack of communication, this was never resolved in the correct manner.

5) As mentioned in number two, We had an error when trying to troubleshoot login and its routes, we set up register and it was able to create a user, but when we tried to do the same with login, it would not work properly. Since we used the previous MVC challenge as a template we tried to see why it was working and not this project build, but we faced the same error, which was hard to troubleshoot because it was working just fine on heroku.

6) Issues like the ones listed above pretty much cascaded throughout the project and this led to alot of issues that pretty much were hard to deal with or refactor. Eventually we did all that we could with the alloted time available and just tried to deploy as much as we could.

7) If we had more time to fix all of the current issues, we expect to face other issues, issues as major as logging in and posting posts with the correct data or comments with the correct data, currently we tested with postman/insomnia as well as our seed data and initially it looks fine, however we would probably debug it to make sure it is working properly. And lastly we would fix up some styling. To sum this section up, we were trying to troubleshoot register and login, and as far as we can tell we are able to create an user with our register page, but we can't properly login to any users.

## Individual summaries of work done.

### Tricia
I worked on the Pixel Comps to help us ideate, handlbars and style sheets.
I also needed to add to work in the api routes, most importantly the home routes to help render the handlebars.


### Andrea
I worked on the api routes and the javascript for the various buttons and handlebars. I also worked on the models for the Comment.js and User.js.

### Nitin

I worked on Login, Logout and Create Account JS and somewhat helped with the handlebars for those as well. I also did the Post.js and some minor work in the post-routes and user-routes as well.

### Aniruddha
I worked on managing and dealing with git merge conflicts as well as making the seed data for the application to use when testing, I also helped a bit with trying to figure out how to get our seed data into the application to be visible for a user to see. I tried to help the others in the group wherever I could by pair programming with them in areas like the public/javascript the login and logout and the routes. Lastly I also worked on documentation like setting up the powerpoint presentation and the presentation and writing this readme.md (barring individual sections, those sections are meant to be filled by each teammate).
