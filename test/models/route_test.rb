require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

	test "save route" do
	  route = Route.new
	  assert_not route.save
	end
end
