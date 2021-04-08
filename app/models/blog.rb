class Blog < ApplicationRecord
  belongs_to :user
  has_one_attached :photo2
end
