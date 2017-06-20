class AddPartNumberToProducts < ActiveRecord::Migration
  def self.up
  	add_column :products, :part_number, :number
  end

  def self.down
  	remove_column :products, :part_number
  end
end
