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

testimonios = ["Llegamos con un amigo en su Renault Clio a recoger a dos amigas en la 138, arriba de la 19, a media noche. Mientras las esperábamos apareció un taxi con tres tipos. Dos se bajaron y nos apuntaron con un revólver. ", " Yo tenía una camioneta Mitsubishi Nativa nueva. Fui al Carulla de la 152 en Bogotá, como no llevaba efectivo me acerqué a uno de los cajeros dentro del supermercado. Una señora que estaba barriendo el piso me empujó. Detrás de mí había dos mujeres. Cuando salí y busqué las llaves en el bolsillo del saco no las encontré", "Mi caso es un robo a punta de papeles robados. Mi carro es un Optra 2004 que se utiliza para alquiler. Se le alquiló a un individuo y resultó que los papeles que presentó eran robados a un ciudadano chileno. Al cabo de dos meses no aparecía el carro ni había razón del tipo. Por tal motivo se pidió un certificado de tradición y efectivamente el carro ya estaba a nombre de otra persona, es decir que se hizo traspaso sin siquiera la intervención del verdadero dueño"," El sábado 19 de mayo estacioné mi Toyota Hilux 4x2 modelo 94 en la carrera 36 con calle 36, frente al Colegio Salesiano León XIII. Ingresé al colegio y me demoré 15 minutos; al regresar mi camioneta ya no estaba.","El año pasado, por el mes de febrero, paseaba con mi esposa que estaba embarazada. Al llegar a la calle Vélez y avenida Quito, al ponerse el semáforo en rojo y debido al tráfico de esa hora (17:00 aproximadamente) me detuve. En ese momento se acerca de mi lado esta señora dizque pidiendo caridad, se apega al vidrio del carro y empezó a golpear y a insultar pidiéndome el celular y la radio, del otro lado hacía lo mismo un hombre. ", "Una pareja  mayor de edad compuesta por un hombre de unos 60 años y una mujer  y según testimonios de la víctima , encañonaron su bebé  de un año y medio y le arrebataron el dinero que recién retiraba del cajero. También le robaron a su madre quien recién llegaba a la ciudad y tenía encima otros $1000,00.","Este hombre se acerca a los jóvenes, en especial a aquellos de grados superiores, de una manera amigable. Los saluda, les habla de profesores, de exalumnos y del colegio en general. En pocos minutos se gana la confianza de los menores, crea una relación de cercanía a tal nivel que los muchachos aceptan la invitación a tomarse una gaseosa y seguir la conversación en otro lugar."]
suspects = ["Hombre alto, ronda el barrio Santa Cruz, anda con un perro pitbull", "Mujer de aprox 40 años, pelo tinturado, actua cerca de universidad nacional", "Hombres jovenes aproximandamente 20 años, andan en bicicleta, usan ropa grande y siempre andan con gorra", "Joven de aproximandamente 17 años, frecuenta el barrio san luis, los vecinos dicen que es el responsable de muchos robos, es trigueño y alto, usa ropa ajustada"]
seguridad = ["Se ha instalado nueva iluminacion en ciudadela colsubsidio", "Hay mas policias en el sector de Santa Helena", "Se ha desmantelado banda de apartamenteros en el barrio Chico"]
80.times do
    Suspect.create([{
        fecha: Faker::Date.between(70.days.ago, Date.today),
        latitude: Faker::Number.between(4.487394, 4.759790),
        longitude: Faker::Number.between(-74.209900,-74.051971),
        address: Faker::Address.street_name,
        details: suspects[rand(suspects.size)],
        user_id: users[rand(users.size)]

    }])

end

rutas =  ['A15', 'A50', 'A52', 'A70', 'B10', 'B11', 'B12', 'B13', 'B14', 'B16', 'B18', 'B20', 'B22', 'B23', 'B27', 'B28', 'B34', 'B35', 'B50', 'B52', 'B53', 'B54', 'B55', 'B56', 'B57', 'B61', 'B70', 'B71', 'B72', 'B73', 'B74', 'B78', 'B79', 'B90', 'B92', 'B93', 'B94', 'C15', 'C17', 'C19', 'C29', 'C30', 'C31', 'C61', 'C71', 'C73', 'C84', 'C91', 'C96', 'D10', 'D12', 'D20', 'D21', 'D22', 'D26', 'D50', 'D51', 'D60', 'D70', 'D77', 'D94', 'D95', 'E17', 'E25', 'E26', 'E32', 'E44', 'E76', 'F14', 'F19', 'F22', 'F23', 'F28', 'F29', 'F32', 'F50', 'F51', 'F60', 'F61', 'F62', 'F70', 'F91', 'F99', 'G11', 'G12', 'G22', 'G30', 'G31', 'G33', 'G43', 'G44', 'G45', 'G46', 'G47', 'G52', 'G61', 'G71', 'G90', 'G96', 'G98', 'H13', 'H15', 'H17', 'H19', 'H20', 'H21', 'H25', 'H27', 'H35', 'H50', 'H51', 'H52', 'H54', 'H60', 'H61', 'H70', 'H73', 'H74', 'H81', 'H92', 'H93', 'J23', 'J24', 'J70', 'J72', 'J73', 'J95', 'K10', 'K23', 'K43', 'K54', 'K86', 'K97', 'K98', 'L10', 'L18', 'L80', 'L82', 'L97', 'M47', 'M51', 'M80', 'M81', 'M82', 'M84', 'M86', 'M99', '1-1', '1-10', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8', '1-9', '10-1', '10-2', '10-3', '10-4', '10-5', '10-6', '11-1', '11-10', '11-2', '11-3', '11-4', '11-4', '11-5', '11-6', '11-7', '11-8', '11-9', '12-1', '13-10', '13-12', '13-13', '13-16', '13-7', '13-8', '13-9', '14-1', '14-2', '14-7', '16-1', '16-10', '16-13', '16-14', '16-2', '16-3', '16-4', '16-5', '16-6', '16-7', '16-8', '16-9', '2-1', '2-10', '2-11', '2-12', '2-13', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8', '2-9', '3-1', '3-10', '3-11', '3-2', '3-3', '3-4', '3-5', '3-6', '3-7', '3-8', '3-9', '4-1', '4-2', '4-3', '5-1', '5-2', '5-2', '5-3', '5-4', '6-1', '6-2', '6-3', '6-4', '6-5', '6-6', '6-7', '6-8', '6-9', '7-1', '7-2', '7-3', '8-1', '8-2', '8-3', '8-4', '8-5', '8-6', '9-1', '9-10', '9-11', '9-2', '9-3', '9-4', '9-5', '9-6', '9-7', '9-8', '9-9', '1', '2', '3', '4', '5', '6', '7', '8' ,'634', 'P49', '105', '107A', '107B', '108', '111', '112', '113B', '114A', '117', '119', '12', '120', '121', '124', '128', '13', '132', '135', '136', '139', '14', '142', '143', '148', '15', '16', '162', '165', '166', '172', '183', '188', '189', '191', '192', '193B', '194', '200', '201', '228', '23', '252', '256', '257', '260', '265', '266', '270', '271', '283', '291', '312', '314', '319', '320', '330', '34', '341', '344', '359', '367', '37', '385', '39', '4', '402', '403A', '403B', '41', '421', '442', '445', '465', '466', '488', '489', '492', '494A', '496', '505', '539', '54', '540', '544A', '544B', '552', '56A', '56B', '576', '577', '579', '580', '593', '599', '59A', '59B', '60', '603B', '607', '614', '621', '624', '626A', '626B', '639', '652', '661', '669', '674', '680', '688', '7', '701', '703', '722', '731', '733', '736', '738', '740', '742', '781', '782', '786', '787A', '795', '796A', '801', '802', '806', '83', '870A', '91', '910', '912', '914', '921', '927', '950', '953', '97', '99', 'C1', 'C100', 'C101', 'C11', 'C110', 'C12', 'C120', 'C123', 'C125', 'C12A', 'C13', 'C135', 'C142', 'C15', 'C19', 'C201', 'C25', 'C27', 'C29', 'C31', 'C33', 'C36', 'C37', 'C4', 'C41', 'C49', 'C51', 'C52', 'C53', 'C7', 'C701', 'C77', 'C97', 'E16', 'E17', 'E23', 'E25', 'E26A', 'E26B', 'E43', 'E44', 'E46', 'E57', 'E60', 'E61', 'E70', 'E72', 'N04', 'P23', 'P24', 'P3', 'P39', 'P44', 'P500', 'P51', 'P56', 'P62', 'P7', 'SE10', 'SE14', 'SE6', 'T02', 'T04', 'T05', 'T06', 'T09', 'T11', 'T21', 'T23', 'T24', 'T31', 'T38', 'T40', 'TC14', 'Z12', 'Z13', 'Z4', 'Z7', 'Z8', '15-1', '15-2', '15-3', '15-4', '15-5', '15-7', '17-1', '17-2', '17-3', '17-7', '18-2', '18-3', '18-5', '20-4', '22-2', '22-3', '23-2', '8-11', 'T10', 'T13-2', 'T13-4', '10-10', '10-11', '14-5', '14-6', '18-11', '18-12', '18-13', '18-6', '18-7', '18-8', '18-9', '6-18', 'T07', 'T08' ,]

50.times do
    Report.create([{
        fecha: Faker::Date.between(70.days.ago, Date.today),
        latitude: Faker::Number.between(4.487394, 4.759790),
        longitude: Faker::Number.between(-74.209900,-74.051971),
        address: Faker::Address.street_name,
        details: testimonios[rand(testimonios.size)],
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
        latitude: Faker::Number.between(4.487394, 4.759790),
        longitude: Faker::Number.between(-74.209900,-74.051971),
        address: Faker::Address.street_name,
        details: testimonios[rand(testimonios.size)],
        tipo_transp: tipo_t[rand(tipo_t.size)],
        user_id: users[rand(users.size)]

    }])



end

50.times do
    SecurityNews.create([{
        dia: Faker::Date.between(100.days.ago, Date.today),
        latitude: Faker::Number.between(4.487394, 4.759790),
        longitude: Faker::Number.between(-74.209900,-74.051971),
        address: Faker::Address.street_name,
        details: seguridad[rand(seguridad.size)],
       

    }])



end