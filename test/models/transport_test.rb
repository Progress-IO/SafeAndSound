require 'test_helper'

class TransportTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  	test "save transport" do
	  transport = Transport.new
	  assert transport.save
	end
end
