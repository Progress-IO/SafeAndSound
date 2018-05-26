require 'test_helper'

class UserPanelControllerTest < ActionDispatch::IntegrationTest
  # test "should get index" do
  #   get user_panel_index_url
  #   assert_response :success
  # end

  test "should get about" do
    get user_panel_url
    assert_response :found
  end

end
