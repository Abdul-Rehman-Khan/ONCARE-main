Created by [Abdul Rehman Khan](https://github.com/Abdul-Rehman-Khan "Abdul Rehman Khan") using `React, Node, Sequelize, MySQL`.


## ON CARE. User Management System
A web app that allows users to get registered for managing users. 


## System/Tools Requirements

- git v2.13 or greater
- NodeJS, npm
- A MySQL Database
 
All of these must be available in your PATH. To verify things are set up properly, you can run this:

    git --version
    node --version
    npm --version

## Setup
    git clone https://github.com/Abdul-Rehman-Khan/ONCARE-main.git
    cd ONCARE-main
    
Add ".env" file in your root. 
Add the following environmental variables that will be used to connect to the database
```shell
DB_PASSWORD=yourpassword
DB_HOST=127.0.0.1
DB_USER=root
DB_NAME=yourDBname
```
#### Running the server
Just run a follwing commands to get the server running up:
```shell
npm install
npm start
```
#### Running the client
```shell
cd client
npm install
npm start
```


## High Level Repo Architecture 
```rst
├── client
|   ├── public            # fonts, icons and images
|   |   ├── fonts
|   |   ├── icons
|   ├── src	
|   │   ├── api           # APIs are defined here
|   |   └── components    # Components + Reuseable Components
|   |   ├── pages         # App Screens/Containers. 
|   |   ├── context       # Defined a Auth context/state
|   |   ├── App           # App wrapper &  routes   
|   |   ├── styles        # App global styles + constants
├── config                # App config + helper functions
├── routes                # REST API routes
├── server                # Express server
```
## What's Done ? 🚀
Till now I have implemented the following features

#### Login & Regitration and Authorized State
- [x] Login Page UI + Functionality.
- [x] Regitration Page UI + Functionality.
- [x] Login/Regitration Form Implementation and Validation.
- [x] User is being able to authenticate and authorize using APIs.
- [x] After logging in, users should be redirected to a list of all users
- [x] Implement logout functionality

#### User List
- [x] Implement UI with custom table view
- [x] Hook up API
- [x] Implement DELETE/EDIT user functionality

#### Edit User
- [x] Implement UI with modal.
- [x] Implement form functionality + validations
- [x] Hook up API

#### 404 Page
- [x] Implement UI.

#### Issues ⚠️
There is one issue that needs be addressed before getting started with the project, I haven't looked at it due to time constraints.

- [ ] Docker image, the MySQL Database should be installed manually.
  I have tried downloading MySQL images and run migrations over it, but I think I'll be needing a bit more time to actually implement that.
## Queries ?
Reach out to me I will be more than happy to help you out.
`email : yz.abdulrehman.khan@gmail.com`

