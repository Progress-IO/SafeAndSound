# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
100.times do
    Report.create([{
        fecha: Faker::Date.between(100.days.ago, Date.today),
        tipo: "Robo",
        latitude:Faker::Number.between(4.4635, 4.89747),
        longitude:Faker::Number.between(4.4635, 4.89747),
        address:
        details:
        
    }])
end

100.times do 
    Discussion.create([{
        headline: Faker::Lorem.word,
        content:  Faker::Lorem.paragraph,
        created_at: Faker::Time.between(2.days.ago, Date.today, :all),
        user_id: 1
        
    }])
    
end