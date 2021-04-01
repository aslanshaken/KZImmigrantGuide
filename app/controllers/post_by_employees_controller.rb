class PostByEmployeesController < ApplicationController
  before_action :set_post_by_employee, only: [:show]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /post_by_employees
  def index
    @post_by_employees = PostByEmployee.all

    render json: @post_by_employees
  end

  # GET /post_by_employees/1
  def show
    render json: @post_by_employee
  end

  # POST /post_by_employees
  def create
    @post_by_employee = PostByEmployee.new(post_by_employee_params)
    @post_by_employee.user = @current_user 
    if @post_by_employee.save
      render json: @post_by_employee, status: :created, location: @post_by_employee
    else
      render json: @post_by_employee.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /post_by_employees/1
  def update
    @post_by_employee = @current_user.post_by_employees.find(params[:id])  # ?????
    if @post_by_employee.update(post_by_employee_params)
      render json: @post_by_employee
    else
      render json: @post_by_employee.errors, status: :unprocessable_entity
    end
  end

  # DELETE /post_by_employees/1
  def destroy
    @post_by_employee = @current_user.post_by_employees.find(params[:id]) # ?????
    @post_by_employee.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post_by_employee
      @post_by_employee = PostByEmployee.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_by_employee_params
      params.require(:post_by_employee).permit(:name, :about, :category, :city, :cellphone, :email, :user_id, :title) # Added title in the end?
    end
end
