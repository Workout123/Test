class CreateProducts < ActiveRecord::Migration
  def self.up
    create_table :products do |t|
      t.string :name
      t.text :description
    


      t.timestamps
    end

change_table :products do |t|
  t.text :name
end

  end

  def self.down
    drop_table :products
  end
end
