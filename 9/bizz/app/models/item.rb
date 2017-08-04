class Item < ActiveRecord::Base
  validates_presence_of :name, :mrp
  validates_length_of :name, :minimum => 5
  validates_numericality_of :mrp, :greater_than_or_equal_to => 0
  validates_numericality_of :price, :greater_than_or_equal_to => 0
  validate :price_should_be_lesser_or_equal_to_mrp

  def price_should_be_lesser_or_equal_to_mrp()
    if(mrp < price)
      errors.add(:price, "cannot be greater than MRP")
    end
  end
end
