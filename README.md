



# Symfony Boilerplate


> Replace this title and the following description with your project name and description.


A web application built with Nuxt 3, Symfony 6.4 (LTS), and Docker.


## Get help


```
make help
```
This will display help


## Prerequisites


### Linux


Install the latest version of [Docker](https://docs.docker.com/install/) and
[Docker Compose](https://docs.docker.com/compose/install/).


### macOS


Consider installing [Orbstack](https://orbstack.dev/) as a drop-in replacement of Docker Desktop


## Setup


This boilerplate is best to use at the start of the project


### Starting a new project


Clone the repository
```
https://github.com/jaymodhera/symfony-boilerplate
```




### First setup on local environment


When cloning your project, you need to


- Copy a .env.dist as a .env
- Create expected values into your "/etc/hosts"
- Copy docker-compose.override.yml.template into docker-compose.override.yml


A specific makefile task has been created:


```
make init-dev
```


### Start the project


1. You can start the project with the usual docker-compose command `docker compose up`


2. To run migration and fixture
Go Inside 'back' container `docker exec -it symfony-boilerplate-back-1 sh`


Migration `php bin/console doctrine:migrations:migrate`


fixture `php bin/console do:fi:lo`


### Test the feature


1. Go to `https://front.symfony-boilerplate.orb.local/transactions` Enter your Admin Username and Password


2. Create a new user from Admin


3. After that, update the 'transactions' table with the newest created 'user_id' (that way you can see the transactions of the particular user).


4. Relogin with the new user you created after logging out.


5. Go to `https://front.symfony-boilerplate.orb.local/transactions`


6. The list of transactions will appear, and if transactions don't have a location, a button will appear to add one


7. Once the button is clicked, a modal opens with a list of locations from the mock data (we can use the Google API, but it is not publicly available).


8. Click on location and Update button to update location in DB.











