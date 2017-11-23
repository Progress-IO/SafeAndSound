require 'test_helper'

class MyZonesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @my_zone = my_zones(:one)
  end

  test "should get index" do
    get my_zones_url
    assert_response :success
  end

  test "should get new" do
    get new_my_zone_url
    assert_response :success
  end

  test "should create my_zone" do
    assert_difference('MyZone.count') do
      post my_zones_url, params: { my_zone: { color: @my_zone.color, latitude: @my_zone.latitude, longitude: @my_zone.longitude, name: @my_zone.name, radius: @my_zone.radius } }
    end

    assert_redirected_to my_zone_url(MyZone.last)
  end

  test "should show my_zone" do
    get my_zone_url(@my_zone)
    assert_response :success
  end

  test "should get edit" do
    get edit_my_zone_url(@my_zone)
    assert_response :success
  end

  test "should update my_zone" do
    patch my_zone_url(@my_zone), params: { my_zone: { color: @my_zone.color, latitude: @my_zone.latitude, longitude: @my_zone.longitude, name: @my_zone.name, radius: @my_zone.radius } }
    assert_redirected_to my_zone_url(@my_zone)
  end

  test "should destroy my_zone" do
    assert_difference('MyZone.count', -1) do
      delete my_zone_url(@my_zone)
    end

    assert_redirected_to my_zones_url
  end
end
