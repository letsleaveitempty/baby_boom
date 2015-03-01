class AddColumnsForCsv < ActiveRecord::Migration
  def change
    create_table :births do |t|
      t.integer :number
      t.string  :month
    end
  end
end
