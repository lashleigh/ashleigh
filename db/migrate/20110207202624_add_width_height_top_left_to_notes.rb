class AddWidthHeightTopLeftToNotes < ActiveRecord::Migration
  def self.up
    add_column :notes, :width, :integer
    add_column :notes, :height, :integer
    add_column :notes, :top, :integer
    add_column :notes, :left, :integer
  end

  def self.down
    remove_column :notes, :left
    remove_column :notes, :top
    remove_column :notes, :height
    remove_column :notes, :width
  end
end
