class RemovePartNumberFromProducts < ActiveRecord::Migration
  def self.up
    remove_column :products, :part_number
  end

  def self.down
    add_column :products, :part_number, :string
  end
end
