A barebones Node.js app using Express 4.

This application supports the Getting Started with Node on Heroku article - check it out.

Running Locally

Make sure you have Node.js and the Heroku Toolbelt installed.

$ git clone https://github.com/ankybhagat/aob2869_cse5335-project-1-.git # or clone your own fork
$ cd aob2869_cse5335-project-1-
$ npm install
$ npm start
Your app should now be running on localhost:5000.

Deploying to Heroku

$ heroku login          #login using heroku credentials
$ heroku create
$ git push heroku master
$ heroku open
or

Deploy to Heroku

Run locally,

$ git clone https://github.com/ankybhagat/aob2869_cse5335-project-1-.git # or clone your own fork $ heroku login #login using heroku credentials $ heroku create $ git push heroku master $ heroku local web

Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

Getting Started with Node.js on Heroku
Heroku Node.js Support
Node.js on Heroku
Best Practices for Node.js Development
Using WebSockets on Heroku with Node.js
server framework
I chose nodejs as server framework because it is open source and widely used. Also, I had never worked on this framework so I took it as an opprtunity to learn it.
client framework
I chose Jquery as it is very popular and again a new thing to learn.
What aspect of the implementation did you find easy, if any, and why?
Deploying the application to heroku and using it was something new and it was pretty simple than I thought.
What aspect of the implementation did you find hard, if any, and why?
- Being a layman to web development in client-server framework, I faced challenges which I eventually overcame, in understanding the concepts and integrating the server and client side scripts.

What components OTHER than your client and server framework did you install,
if any, and if so, what is their purpose for your solution?

Nothing else was required. Apart from an Editor- I use Sublime Text.
f. What Ubuntu commands are required to deploy and run your server? $heroku create $git push heroku master

Run Server
$heroku openA barebones Node.js app using Express 4.

This application supports the Getting Started with Node on Heroku article - check it out.

Running Locally

Make sure you have Node.js and the Heroku Toolbelt installed.

$ git clone https://github.com/ankybhagat/aob2869_cse5335-project-1-.git # or clone your own fork
$ cd aob2869_cse5335-project-1-
$ npm install
$ npm start
Your app should now be running on localhost:5000.

Deploying to Heroku

$ heroku login          #login using heroku credentials
$ heroku create
$ git push heroku master
$ heroku open
or

Deploy to Heroku

Run locally,

$ git clone https://github.com/ankybhagat/aob2869_cse5335-project-1-.git # or clone your own fork $ heroku login #login using heroku credentials $ heroku create $ git push heroku master $ heroku local web

Adding Postgres Database:
 heroku addons:create heroku-postgresql:hobby-dev
Adding heroku-postgresql:hobby-dev... done, v3 (free)

If Postgres installed locally, use the heroku pg:psql command to connect to the remote database.

Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

Getting Started with Node.js on Heroku
Heroku Node.js Support
Node.js on Heroku
Best Practices for Node.js Development
Using WebSockets on Heroku with Node.js

○ What aspect of the implementation did you find easy, if any, and why?
  Configuring database and adding animations.
  
○ What aspect of the implementation did you find hard, if any, and why?
 None.
 
○ If you were to use these technologies professionally, what would be your biggest
concern?

Scope of the application and thus the technologies to be used to serve as server-side and client-side.
