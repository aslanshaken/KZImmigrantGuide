class User < ApplicationRecord
  has_many :get_employees
  has_many :post_by_employees
  has_many :post_houses
  
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end
