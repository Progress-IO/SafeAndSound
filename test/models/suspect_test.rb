require 'test_helper'

class SuspectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  	test "save suspect" do
		suspect = Suspect.new
		assert_not suspect.save
		suspect.longitude = 3.675654
		assert_not suspect.save
		suspect.latitude = 4.8765432
		assert_not suspect.save
	end
end
