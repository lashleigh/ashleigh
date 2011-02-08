class AddDraggableResizableToNotes < ActiveRecord::Migration
  def self.up
    add_column :notes, :draggable, :boolean, :default => true
    add_column :notes, :resizable, :boolean, :default => true
  end

  def self.down
    remove_column :notes, :resizable
    remove_column :notes, :draggable
  end
end
