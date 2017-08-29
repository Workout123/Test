class Account < ActiveRecord::Base
  has_many :posts
  validates_presence_of :username
  validates_length_of :username, :minimum => 5
  validates_uniqueness_of :username
end
