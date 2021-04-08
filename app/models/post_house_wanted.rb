class PostHouseWanted < ApplicationRecord
  belongs_to :user
  has_one_attached :avatar2
end
