# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
To add the foreign key, we would have to generate a migration and go into the Student model and add "belongs_to" in the method. In the Cohort model we add "has_many" into the method. Once the association has been made between the tables we can migrate the information to the database using db:migrate. The name of the foreign key would be cohort_id. The foreign key would be on the Student model.

Researched answer:
To create an association between the Cohort and the Students tables a foreign key is needed. To add the foreign key, we would need to generate a migration that will add a column to the Student model. In the terminal run "rails g migration add_column_name". This will create a new migration file in the application. In the migration file add "add_column :students, :cohort_id, :integer" into the method. To update the database run "db:migrate" in the terminal. The Student database table should now have a column for the foreign key cohort_id with a datatype of integer. This can be seen in the schema of our application. The foreign key will be on the Student (belongs_to) model and it references the primary key of the Cohort model.


2. Which RESTful routes must always be passed params? Why?

Your answer:
The RESTful routes that must be passed params are show, update, and destroy. These methods require params because we need to know what information we need to motify or add to the database. 

Researched answer:
The RESTful routes that must always be passed params are show, create, update, and destroy. Params allow us to take information from the user and pass it to our application. When we call on these methods params allows us to either show, create, update, or destroy information in the database. Params allow the routes in our url to be more dynamic.


3. Name three rails generator commands. What is created by each?

  Your answer:
  rails generate model: will create a model in the database
  rails generate migration: will allow modifications to a database
  rails generate rspec:install: will add dependencies for RSPEC testing

  Researched answer:
  rails generate model: will create a model in the database. When generating a model we can specify column names and datatypes that will go into the database. In the application/models folder a new file will be created for the model. It also creates a migration file in the db folder. The table information can be seen in the schema of the application. 
  rails generate migration: allows you to modify the information in the database. This will be reflected in the schema of the application.
  rails generate rspec:install: will add dependencies for RSPEC testing. In order to add dependencies for RSPEC testing we would need to run "bundle add rspec-rails" before running "rails generate rspec:install". Together these commands will add dependencies for RSPEC testing in Active Record models.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          
This Rails route would call the index controller method and it will display a list of all the students.

action: "POST"   location: /students       
This Rails route would call on the create method and it will create a new instance of student by adding the data to the database.

action: "GET"    location: /students/new
This Rails route would call on the new method and it will display a form to a user where they can input data. This method is used in conjunction with the create method to create a new instance of student.

action: "GET"    location: /students/2  
This Rails route would call on the show method and it will display the student information with the id of 2.

action: "GET"    location: /students/2/edit  
This Rails route would call on the edit method and it will display a form to a user where they can edit information about the student with id 2. This method is used in conjunction with the update method.  

action: "PATCH"  location: /students/2   
This Rails route would call on the update method and it will take the information edited about the student with id 2 in the form and update the database.  

action: "DELETE" location: /students/2      
This Rails route would call on the destroy method and it will delete the student entry with id 2.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user, I can see an application titled "To Do List"
As a user, I can see all items in my list.
As a user, I can see the status of my list items.
As a user, I can add items by clicking a button that takes me to a page with a form.
As a user, I can create a new item using the form.
As a user, I will be redirected to the homepage once a new item is created.
As a user, I can submit changes to my to do list by clicking a button that displays a form.
As a user, I can update a list item using the form.
As a user, I will be redirected to the homepage once an item is updated.
As a user, I can destroy a list item.
As a user, I will be redirected to the homepage.
