# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



100.times do
    Discussion.create([{
        headline: Faker::Lorem.word,
        content:  Faker::Lorem.paragraph,
        created_at: Faker::Time.between(2.days.ago, Date.today, :all),
        user_id: 1

    }])
end

types = ["Robo violento", "Asesinato", "Estafa", "Raponazo"]

50.times do
    Report.create([{
        fecha: Faker::Date.between(100.days.ago, Date.today),
        tipo: types[rand(types.size)],
        latitude: Faker::Number.between(4.5091, 4.8091),
        longitude: Faker::Number.between(-74.077, -74.377),
        address: Faker::Address.street_name,
        details: Faker::Lorem.paragraphs

    }])



end

80.times do
    Suspect.create([{
        fecha: Faker::Date.between(70.days.ago, Date.today),
        latitude: Faker::Number.between(4.5091, 4.8091),
        longitude: Faker::Number.between(-74.077, -74.377),
        address: Faker::Address.street_name,
        details: Faker::Lorem.paragraphs


    }])



end
