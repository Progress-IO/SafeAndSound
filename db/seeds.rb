# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [1,2,3,4]

100.times do
    Discussion.create([{
        headline: Faker::Lorem.word,
        content:  Faker::Lorem.paragraph,
        created_at: Faker::Time.between(2.days.ago, Date.today, :all),
        user_id: users[rand(users.size)]

    }])
end

types = ["Robo violento", "Asesinato", "Estafa", "Raponazo"]



80.times do
    Suspect.create([{
        fecha: Faker::Date.between(70.days.ago, Date.today),
        latitude: Faker::Number.between(4.5091, 4.8091),
        longitude: Faker::Number.between(-74.077, -74.377),
        address: Faker::Address.street_name,
        details: Faker::Lorem.paragraphs,
        user_id: users[rand(users.size)]

    }])

end

rutas =  ["Z4","Z7","J72","J70","320","18-3","C37", "T11", "399", "T163", "B13","H13","G12","192","SE14","K23","L18","B28","F28","108","107","731","C11","Z12","593"]

50.times do
    Report.create([{
        fecha: Faker::Date.between(70.days.ago, Date.today),
        latitude: Faker::Number.between(4.5091, 4.8091),
        longitude: Faker::Number.between(-74.077, -74.377),
        address: Faker::Address.street_name,
        details: Faker::Lorem.paragraphs,
        tipo_transp: "sitp",
        id_route: rutas[rand(rutas.size)],
        user_id: users[rand(users.size)]


    }])
end
tipo_t = ["bicicleta","carro","peaton","taxi"]
50.times do
    Report.create([{
        fecha: Faker::Date.between(100.days.ago, Date.today),
        tipo: types[rand(types.size)],
        latitude: Faker::Number.between(4.5091, 4.8091),
        longitude: Faker::Number.between(-74.077, -74.377),
        address: Faker::Address.street_name,
        details: Faker::Lorem.paragraphs,
        tipo_transp: tipo_t[rand(tipo_t.size)],
        user_id: users[rand(users.size)]

    }])



end

50.times do
    SecurityNews.create([{
        dia: Faker::Date.between(100.days.ago, Date.today),
        latitude: Faker::Number.between(4.5091, 4.8091),
        longitude: Faker::Number.between(-74.077, -74.377),
        address: Faker::Address.street_name,
        details: Faker::Lorem.paragraphs,
       

    }])



end