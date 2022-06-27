# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The model BlogPostsController is a class that is inheriting from the ApplicationController class. This model handles the logic for the table in the database. 
class BlogPostsController < ApplicationController
  def index
    # ---2) The index method is what we see on a homepage of a website and it will show us everything in the database.The instance variable @post is assigned to all the BlogPosts in the database and it will return an array of all the information in the database. 
    @posts = BlogPost.all
  end

  # ---3) The show method is used when we need to see one BlogPost in the database.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The new method is used in conjunction with the create method. In order to create a new BlogPost entry we need the new method to display a form to the user where new information can be added.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The create method will take the information entered in the new method form and add it to the database. The @post instance variable is calling on the model to create a new entry. The strong params (blog_post_params) is used to ensure only data we specify is entered. The if/else statement is used to see if the information entered is valid and will return a boolean value. If the entry was valid the user will be redirected to the page with the new entry or will be redirected to the page with the form made in the new method.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) The edit method is used in conjunction with the update method. In order to update a BlogPost entry we need the edit method to display a form to the user where an entry in the database can be edited. In the instance variable @post we are calling on the model to find an entry by id.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)The update method will take the edited information entered in the edit method form and add it to the database. The @post instance variable is calling on the model to update a new entry. The strong params (blog_post_params) is used to ensure only data we specify is entered. The if/else statement is used to see if the information entered is valid and will return a boolean value. The user will be redirected to the page with the updated information if the entry was valid or will be redirected to the page with the form that was made in the edit method.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) The destroy method is used to remove an entry from the database. The if/else statement is used to see if the entry was destroyed. The user will be redirected to the index page if the entry was deleted or will be redirected to the page that has the entry that was not destroyed.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) The private keyword here is adding an extra layer of protection to the strong params. We want to use the private keyword at the very end of our code because any methods below the private keyword will not be accessible outside of the class. 
  private
  def blog_post_params
    # ---10)The strong params method is requiring the blog_post table and is only permiting access to the columns of title and content. Limiting what can be entered on forms allows us to protect the information in our database.
    params.require(:blog_post).permit(:title, :content)
  end
end
