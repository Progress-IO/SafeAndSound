require 'test_helper'

class SecurityNewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @security_news = security_news(:one)
  end

  test "should get index" do
    get security_news_index_url
    assert_response :success
  end

  test "should get new" do
    get new_security_news_url
    assert_response :success
  end

  test "should create security_news" do
    assert_difference('SecurityNews.count') do
      post security_news_index_url, params: { security_news: { address: @security_news.address, details: @security_news.details, dia: @security_news.dia, latitude: @security_news.latitude, longitude: @security_news.longitude, tipo: @security_news.tipo } }
    end

    assert_redirected_to security_news_url(SecurityNews.last)
  end

  test "should show security_news" do
    get security_news_url(@security_news)
    assert_response :success
  end

  test "should get edit" do
    get edit_security_news_url(@security_news)
    assert_response :success
  end

  test "should update security_news" do
    patch security_news_url(@security_news), params: { security_news: { address: @security_news.address, details: @security_news.details, dia: @security_news.dia, latitude: @security_news.latitude, longitude: @security_news.longitude, tipo: @security_news.tipo } }
    assert_redirected_to security_news_url(@security_news)
  end

  test "should destroy security_news" do
    assert_difference('SecurityNews.count', -1) do
      delete security_news_url(@security_news)
    end

    assert_redirected_to security_news_index_url
  end
end
