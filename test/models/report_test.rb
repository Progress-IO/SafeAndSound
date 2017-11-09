require 'test_helper'

class ReportTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  	test "save report" do
		report = Report.new
		assert_not report.save
		report.longitude = 4.645456765756
		assert_not report.save
		report.latitude = 3.945867
		assert_not report.save
		report.tipo = "dfkjghdf"
		assert_not report.save
	end
end
