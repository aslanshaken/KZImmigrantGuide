class GetEmployeesController < ApplicationController
  before_action :set_get_employee, only: [:show]
  before_action :authorize_request, only: [:create, :update, :destroy]


  # GET /get_employees
  def index
    @get_employees = GetEmployee.all

    render json: @get_employees
  end

  # GET /get_employees/1
  def show
    render json: @get_employee
  end

  # POST /get_employees
  def create
    @get_employee = GetEmployee.new(get_employee_params)
    @get_employee.user = @current_user 
    if @get_employee.save
      render json: @get_employee, status: :created, location: @get_employee
    else
      render json: @get_employee.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /get_employees/1
  def update
    @get_employee = @current_user.get_employees.find(params[:id])#???
    if @get_employee.update(get_employee_params)
      render json: @get_employee
    else
      render json: @get_employee.errors, status: :unprocessable_entity
    end
  end

  # DELETE /get_employees/1
  def destroy 
    @get_employee = @current_user.get_employees.find(params[:id]) #???
    @get_employee.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_get_employee
      @get_employee = GetEmployee.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def get_employee_params
      params.require(:get_employee).permit(:job_name, :category, :description, :city, :cellphone, :email, :user_id)
    end
end
