class AddAdminToUser < ActiveRecord::Migration
  def self.up
    add_column :users, :admin, :bool, :default => false
  end

  def self.down
    remove_column :users, :admin
  end
end
