$(document).ready(function(){

//Autocomplete
var only_route =['634','P49','105','107A','107B','108','111','112','113B','114A','117','119','12','120','121','124','128','13','132','135','136','139','14','142','143','148','15','16','162','165','166','172','183','188','189','191','192','193B','194','200','201','228','23','252','256','257','260','265','266','270','271','283','291','312','314','319','320','330','34','341','344','359','367','37','385','39','4','402','403A','403B','41','421','442','445','465','466','488','489','492','494A','496','505','539','54','540','544A','544B','552','56A','56B','576','577','579','580','593','599','59A','59B','60','603B','607','614','621','624','626A','626B','639','652','661','669','674','680','688','7','701','703','722','731','733','736','738','740','742','781','782','786','787A','795','796A','801','802','806','83','870A','91','910','912','914','921','927','950','953','97','99','C1','C100','C101','C11','C110','C12','C120','C123','C125','C12A','C13','C135','C142','C15','C19','C201','C25','C27','C29','C31','C33','C36','C37','C4','C41','C49','C51','C52','C53','C7','C701','C77','C97','E16','E17','E23','E25','E26A','E26B','E43','E44','E46','E57','E60','E61','E70','E72','N04','P23','P24','P3','P39','P44','P500','P51','P56','P62','P7','SE10','SE14','SE6','T02','T04','T05','T06','T09','T11','T21','T23','T24','T31','T38','T40','TC14','Z12','Z13','Z4','Z7','Z8','15-1','15-2','15-3','15-4','15-5','15-7','17-1','17-2','17-3','17-7','18-2','18-3','18-5','20-4','22-2','22-3','23-2','8-11','T10','T13-2','T13-4','10-10','10-11','14-5','14-6','18-11','18-12','18-13','18-6','18-7','18-8','18-9','6-18','T07','T08'];
var route_comp = ['634 - Bosa Palestina - Calle 182','P49 - Villa Gladys - Lijacá','105 - El Cortijo - La Cuchua','107A - Puente Aranda - Jaqueline','107B -Colina - Pq. Central Bavaria','108 - Bachué - Ciudad Kennedy','111 - San Rafael Sur Or - Metrovivienda','112 - Cortijo - El Porvenir','113B - Villa Alexandra - Paloquemao','114A - Altos del Zuque – Paloquemao','117 - San Berdardino - Libertadores','119 - Cortijo - Carvajal','12 - Z. Ind. Eldorado - Porciúncula','120 - Bosa San José - Egipto','121 - Metrovivienda - Paloquemao','124 - Bosa San José – Toberín','128 - Paloquemao - Villa Gladys','13 - Brasilia - Germania','132 - Metrovivienda - Chapinero Central','135 - Bosque Popular - Jacqueline','136 - 7 de Agosto - Laguna','139 - Bosa la Primavera - Juan Rey','14 - Betania - Chapinero','142 - Florida - Centro','143 - Germania - Las Acacias','148 - Villa Teresita – Doña Liliana','15 - Franja Seca - Marly','16 - Portal Américas - Portal Usme','162 - Catalina II - Las Cruces','165 - Arbolizadora Alta - Jardines del Recuerdo','166 - Centro Internacional - Metrovivienda','172 - Paloquemao - Porvenir','183 - Roma - Unicentro','188 - Paloquemao - Bosa Santafé','189 - Casablanca - Cerros de Oriente','191 - Unicentro - Las Delicias','192 - Catalina - Unicentro','193B  - Bonanza - Marly','194 - Casablanca Norte - Cerros de Oriente','200 - AV. C. de Cali - Unicentro','201 - La Fiscala - Lisboa','228 - Aguas Claras - Villa Teresita','23 - Olarte - Chapinero','252 - Jaqueline - Paloquemao','256 - Ricaurte - Tihuaque','257 - Puente Grande - Germania','260 - La Estrellita - Arabia','265 - Chicó Norte - Tierra Buena','266 - Tesoro - La Estrellita','270 - Riveras de Occ. - La Estrellita','271 - Gran Granada - Marco Fidel Suárez','283 - Chicó Norte - Albán','291 - Lijacá - Tierra Buena','312 - Villa Cindy - Álamos Norte','314 - Germania - Villa Cindy','319 - Galerías - Lomas','320 - Usaquén - Villa Cindy','330 - La Estrellita - Puerta al Llano','34 - Lomas - Fontanar del Río','341 - Metrovivienda - La Estrellita','344 - Bilbao - Cantón Norte','359 - Paloquemao - El Encanto','367 - San Bernardino - Porciúncula','37 - El Palmar - Unicentro','385 - Cortijo - Germania','39 - Palmitas - Diana Turbay','4 - HBella Vista - San Luis','402 - Verbenal - Sabana del Dorado','403A - Sabana del Dorado - Unicentro','403B - Sabana del Dorado - Unicentro','41 - El Cortijo - Alpes','421 - Porciúncula - San Cipriano','442 - Verbenal - Sabana el Dorado','445 - Los Tres Reyes - Terminal','465 - Bosa la Primavera - San Antonio Norte','466 - Sabana del Dorado - Unicentro','488 - Unicentro - Lomas','489 - Unicentro - La Resurrección','492 - Zona Industrial Álamos - Madelena','494A - Metrovivienda - Pq. Ctral Bavaria','496 - Charles de Gaulle - Paloquemao','505 - El Nogal - Kasandra','539 - El Uval - Engativá Centro','54 - Unicentro - Villas de Granada','540 - San Vicente - Bachué','544A  - Teusaquillo - Bosa Palestina','544B  - Teusaquillo - Verbenal','552 - Galicia - Centro','56A - Boita - Teusaquillo','56B - El Cortijo - Chapinero','576 - Bosa Santafé - Salitre el Greco','577 - El Palmar - Diana Turbay','579 - Centro Internacional - El Recreo','580 - Bosa San Diego - Cartagena','593 - Metrovivienda - Chicó','599 - Bosa San Diego - Suba Gaitana','59A - Boita - Tercer Milenio','59B - El Cortijo - Chapinero','60 - Cortijo - Lomas','603B - Patio Bonito - Germania','607 - San Bernardino - San Antonio Norte','614 - Montevideo - La Fiscala','621 - Santo Domingo - Simón Bolívar','624 - Verbenal del Sur - 20 de Julio','626A - La Estancia - Puente Aranda','626B - Villa Gladys - Puente Aranda','639 - Calle 182 - Santo Domingo','652 - El Uval - Germania','661 - Andalucía - Diana Turbay','669 - Galán - Gran Granada','674 - Florida - Puerta al Llano','680 - El Tuno - Calle 182','688 - La Magdalena - Germania','7 - HConsuelo - Palmitas','701 - Olaya - San Bernardino','703 - Galicia - Germania','722 - Palmitas - San Cristóbal Nte.','731 - Bosa San José - Palermo','733 - Tierra Buena - San Carlos','736 - Paraíso - Calle 222','738 - Jazmín Occidental - San Cristóbal Sur','740 - Engativá La Tortigua - Canadá Guira','742 - Calle 222 - Paraíso','781 - Bosa San José - Lijacá','782 - Bosa San José - Lijacá','786 - 20 de Julio - Metrovivienda','787A - Metrovivienda - Teusaquillo','795 - Pinar - Tuna Baja a San Joaquín','796A - Mochuelo Bajo - Teusaquillo','801 - Sabana del Dorado - Torca','802 - Sabana del Dorado - Usme Centro','806 - Sabana del Dorado - Providencia','83 - Perdomo – La Estrada','870A - Cantón Norte - Patio Bonito','91 - Bosa San José - Porciúncula','910 - La Rivera - Usme Pueblo','912 - Lijacá - La Rivera','914 - Usme Centro - Las Ferias','921 - Puente Grande - Acacias','927 - Bosa Estación - Bachué','950 - El Tuno - Terminal','953 - La Fiscala Alta - Suba Salitre','97 - Muzú – Galerías','99 - Germania - La Primavera','C1 - Germania - Roma','C100 - Teusaquillo - La Magdalena','C101 - Providencia - El Palmar','C11 - Porciúncula - Villa del Río','C110 - Bello Horizonte - Bosa la Esperanza','C12 - SanBlas– Parque Nacional','C120  - Santa Inés Sur - Villas de Granada','C123  - Chicó - La Magdalena','C125  - Villa Alsacia - El Consuelo','C12A  - San Blas - Parque Nacional','C13 - CAI Compartir - Marly','C135 - Bosa San José - Germania','C142 - Aures II - San Cristóbal Norte','C15 - Bosa San Pedro - Chapinero','C19 - Germania - Jardines de Castilla','C201 - Patio Bonito - Paraíso','C25 - Sabana del Dorado - Unicentro','C27 - La Estancia - Normandía','C29 - La Estancia - Las cruces','C31 - Chapinero - Boitá','C33 - Mundo Aventura - Colina','C36 - Bachué - Montes','C37 - Villas de Granada - Mazurén','C4 - Juan XXIII - Puente Grande','C41 - Quirigua – Teusaquillo','C49 - San Bernardo - Bachué','C51 - Germania -','C52 - Villa del Río - El Retiro','C53 - Unicentro - Acacias Sur','C7 - Juan José Rondón - Germania','C701  - Metrovivienda - Restrepo','C77 - Tintalá - Tibabita','C97 - Los Pijaos - San Cipriano','E16 - Bosa San José - Calle 222','E17 - Villa Gloria - Chicó','E23 - Villa Gloria - Santa Bárbara','E25 - Lourdes - Engativá Centro','E26A  - La Chucua - Chapinero','E26B  - AC 170 - Calle 127','E43 - Villa Gloria - Chicó','E44 - Verbenal - El Virrey','E46 - Metrovivienda - San Antonio Nte.','E57 - Casablanca - El Uval','E60 - Bosa Palestina - Calle 222','E61 - Casablanca - Porciúncula','E70 - Casaloma Usme - Portales del Norte','E72 - Catalina 2 - Chicó norte','N04 - Terminal Sur - Puente de Gudaua','P23 - Bosa Carbonell - San Blas','P24 - Charles de Gaulle / San Blas','P3 - Canadá Guira - San Joaquín','P39 - Arabia - Zona Franca','P44 - Bosa Santafé - Arabia','P500 - Aeropuerto - Centro Andino','P51 - Nogales de Tibabuyes - Caracolí','P56 - El Charco - Quirigua','P62 - Bosa Santafé - Los Alpes','P7 - Porvenir - Pinares','SE10  - Engativá Centro - Teusaquillo','SE14  - Diana Turbay - Engativá Centro','SE6 - Villa Gladys - La Roca','T02 - Villa Alexandra - Portal Américas','T04 - Tres Esquinas - Portal Sur','T05 - Calle 80 - Calle 72','T06 - La Sureña - Porciúncula','T09 - Chorrillos - Portal de Suba','T11 - Calle 222 - Alpes','T21 - Compartir - Cantón Norte','T23 - Fontanar del Río - Centro','T24 - Yomasa Betania - Ciudadela El Recreo','T31 - Gran Granada - Est. AV. Rojas','T38 - Metrovivienda - Chapinero Central','T40 - Catalina II - Marly','TC14 - Nueva Roma - Portal Sur','Z12 - Teusaquillo - Metrovivienda','Z13 -Toberín - Metrovivienda','Z4 -  Toberín - Metrovivienda','Z7 -  Toberín - Zn. Ind. Álamos','Z8 -  Toberín - Metrovivienda','15-1 - Primero de Mayo','15-2 - San Cristóbal','15-3 - Horacio Orjuela','15-4 - Ramajal','15-5 - La María','15-7 - Calle 11 Sur','17-1 - Villa Luz','17-2 - Santa Helenita','17-3 - Modelia','17-7 - La Esmeralda','18-2 - Barrancas - Porciúncula','18-3 - Carrera 7 - Tibabita','18-5 - Capri','20-4 - Estación Comuneros','22-2 - Marsella','22-3 - San Gabriel','23-2 - Perseverancia','8-11 - Galán','T10 -  Est.C.C. Santafé','T13-2 s - MARRUECOS','T13-4 s - Diana Turbay - Lomas','10-10 - Cazucá','10-11 - Bella Flor','14-5 - Centro Histórico','14-6 - El Verjón','18-11 - Unicerros','18-12 - El Paraíso','18-13 - Lomitas y Capilla','18-6 - Serrezuela','18-7 - Soratama','18-8 - Bosque Calderón','18-9 - Cerro Norte','6-18 - Pasquilla','T07 - Sidel','T08 - Est. 21 Ángeles - Tuna Alta'];
data = [];
for (var i = 0; i< only_route.length;i++)
{
    data.push({
       "only_route[i] ":null
    });
}



// $('input.autocomplete').autocomplete({
//   data:
//   {
//       "null":null
//   } ,
//   limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
//   onAutocomplete: function(val) {
//     // Callback function when value is autcompleted.
//   },
//   minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
// });

// $('input.autocomplete').autocomplete({

//   source: {
//     "Apple": null,
//     "Microsoft": null,
//     "Google": 'https://placehold.it/250x250'
//   },
//   limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
//   onAutocomplete: function(val) {
//     // Callback function when value is autcompleted.
//   },
//   minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
// });

var fakedata = ['test1','test2','test3','test4','ietsanders'];
$('input.autocomplete').autocomplete({source:fakedata});
      
// $(function () {
//   $('input.autocomplete').autocomplete({
//     autocompleteOptions:  {
//     data: {
//       "Apple":null,
//       "Microsoft":null,
//       "Google":null
//     }
//   }
//   });
// });


})