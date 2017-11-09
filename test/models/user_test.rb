require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

	test "save user" do
		user = User.new
		assert_not user.save
		user.email = 'Test@test.com'
		assert_not user.save
		user.username = 'Testuname'
		assert_not user.save
		user.password = '234234Testuname'
		assert user.save
	end

	test "check cops method" do
		user = User.new
		user.email = 'Test@test.com'
		user.username = 'Testuname'
		user.password = '234234Testuname'
		user.Ispolice = true
		assert user.save
		cops = User.cops_users
		assert  cops.include? user
		user2 = User.new
		user2.username = 'Testuname'
		user2.password = '234234Testuname'
		user2.Ispolice = false
		assert user.save
		cops2 = User.cops_users
		assert_not  cops.include? user2

	end

	test "check admin method" do
		user = User.new
		user.email = 'Test@test.com'
		user.username = 'Testuname'
		user.password = '234234Testuname'
		user.Isadmin = true
		assert user.save
		admins = User.admin_users
		assert  admins.include? user
		user2 = User.new
		user2.username = 'Testuname'
		user2.password = '234234Testuname'
		user2.Isadmin = false
		assert user.save
		admin2 = User.admin_users
		assert_not  admins.include? user2

	end
end
