class BlogsController < ApplicationController
  before_action :set_blog, only: [:show]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /blogs
  def index
    @blogs = Blog.all

    posts = @blogs.map do |blog| { 
      :blog => blog,
      :image => if blog.photo2.present?
      {
        filename: blog.photo2.filename,
        content_type: blog.photo2.content_type,
        created_at: blog.photo2.created_at,
        url: url_for(blog.photo2)
      }
    end
    }
    end

    render json: posts

  end

  # GET /blogs/1
  def show
    render :json => { 
      :blog => @blog,
      :image => {
        filename: @blog.photo2.filename,
        content_type: @blog.photo2.content_type,
        created_at: @blog.photo2.created_at,
        url: url_for(@blog.photo2)
      }
    } 
  end

  # POST /blogs
  def create
    @blog = Blog.new(blog_params)
    @blog.user = @current_user
    if @blog.save

      @blog.photo2.attach(params[:image]) # Active Storage

      render json: @blog, status: :created, location: @blog
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blogs/1
  def update
    @blog = @current_user.blogs.find(params[:id])
    if @blog.update(blog_params)

      @blog.photo2.destroy  if @blog.photo2.present?  # Active Storage
      @blog.photo2.attach(params[:image]) # Active Storage


      render :json => { 
        :blog => @blog,
        :image =>if @blog.photo2.present?
          {
          filename: @blog.photo2.filename,
          content_type: @blog.photo2.content_type,
          created_at: @blog.photo2.created_at,
          url: url_for(@blog.photo2)
        }
      end
      } 
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blogs/1
  def destroy
    @blog = @current_user.blogs.find(params[:id])
    @blog.photo2.destroy  if @blog.photo2.present?  # Active Storage
    @blog.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog
      @blog = Blog.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blog_params
      params.require(:blog).permit(:title, :name, :description, :email, :user_id)
    end
end
