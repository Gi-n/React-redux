# React + Redux codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the RealWorld spec and API.
Exemplary real world application built with React + Redux

# Getting started
To get the frontend running locally:

Clone this repo
* npm install to install all req'd dependencies
* npm start to start the local server (this project uses create-react-app)

Local web server will use port 4100 instead of standard React's port 3000 to prevent conflicts with some backends like Node or Rails. You can configure port in scripts section of package.json: we use cross-env to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.

Alternatively, you can add .env file in the root folder of project to set environment variables (use PORT to change webserver's port). This file will be ignored by git, so it is suitable for API keys and other sensitive stuff. Refer to dotenv and React documentation for more details. Also, please remove setting variable via script section of package.json - dotenv never override variables if they are already set.

# Making requests to the backend API

The source code for the backend server (available for Node).

If you want to change the API URL to a local server, simply edit .env and change API_ROOT to the local server's URL (i.e. http://localhost:3000/api)

# Functionality overview

General functionality:

* Authenticate users via JWT (login/signup pages + logout button on settings page)
* CRUD users
* CRUD Notes
* CRUD Comments on Notes (no updating required)
* GET and display paginated lists of Notes
