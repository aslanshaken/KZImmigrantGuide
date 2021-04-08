class PostHouse < ApplicationRecord
  belongs_to :user
  has_many_attached :photos
  # validates :photos, presence: true, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg'], }, message: => "can't be empty" #size_range: 1..5.megabytes 
end
