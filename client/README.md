
# Workout Logs

This is an app created for those who like to keep track of their workouts by logging them, as well as add new workouts to the routine! 
As a user of my app, I can:

* Sign up for an account,
* Log in to the site & remain logged in,
* Log out,
* View a list of all exercises and my logs of these exercises,
* Create a log for one specific exercise,
* Modify or delete a log that I created,
* Create a new exercise!


## Description

* When you open up an app, you will see a login page which will give you an option to log in or sign up, if you don't already have an account.
* Once you login, you will be taken to the page where you can create a new log for that exercise that you just finished working on. If this is a new exercise for you, there will be an option to add it to your list of exercises, and then create a log for it. 
* Once you create a log, it will automatically take you to the page with all of your logs, with the latest one proudly displayed there.
* You also have an option to view a list of all available exercises, with their full description.
* Your logs will only be specific to you, and a different user will not be able to see, add, update, or delete your logs. 

## Behind the scenes

It is a full-stack application where I applied my knowledge of:

* Rails API backend that uses Active Record to access and persist data in the database, with React frontend
* User authentication and authorization
* Active Record validations
* Many-to-many relationship implemented by using two has-many-through relationships (user, exercises, and logs as the joins table)
* Full CRUD capabilities for the logs model
* Following RESTful routing conventions for backend routes
* Frontend State management


## Usage

```react

npm start

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
