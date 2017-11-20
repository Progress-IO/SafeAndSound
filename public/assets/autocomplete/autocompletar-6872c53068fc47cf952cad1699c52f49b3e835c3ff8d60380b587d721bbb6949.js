$(document).ready(function(){


  var modo = window.location.href.split("#");
  if (modo[1] == "sitp") {
    only_route = { '634': null, 'P49': null, '105': null, '107A': null, '107B': null, '108': null, '111': null, '112': null, '113B': null, '114A': null, '117': null, '119': null, '12': null, '120': null, '121': null, '124': null, '128': null, '13': null, '132': null, '135': null, '136': null, '139': null, '14': null, '142': null, '143': null, '148': null, '15': null, '16': null, '162': null, '165': null, '166': null, '172': null, '183': null, '188': null, '189': null, '191': null, '192': null, '193B': null, '194': null, '200': null, '201': null, '228': null, '23': null, '252': null, '256': null, '257': null, '260': null, '265': null, '266': null, '270': null, '271': null, '283': null, '291': null, '312': null, '314': null, '319': null, '320': null, '330': null, '34': null, '341': null, '344': null, '359': null, '367': null, '37': null, '385': null, '39': null, '4': null, '402': null, '403A': null, '403B': null, '41': null, '421': null, '442': null, '445': null, '465': null, '466': null, '488': null, '489': null, '492': null, '494A': null, '496': null, '505': null, '539': null, '54': null, '540': null, '544A': null, '544B': null, '552': null, '56A': null, '56B': null, '576': null, '577': null, '579': null, '580': null, '593': null, '599': null, '59A': null, '59B': null, '60': null, '603B': null, '607': null, '614': null, '621': null, '624': null, '626A': null, '626B': null, '639': null, '652': null, '661': null, '669': null, '674': null, '680': null, '688': null, '7': null, '701': null, '703': null, '722': null, '731': null, '733': null, '736': null, '738': null, '740': null, '742': null, '781': null, '782': null, '786': null, '787A': null, '795': null, '796A': null, '801': null, '802': null, '806': null, '83': null, '870A': null, '91': null, '910': null, '912': null, '914': null, '921': null, '927': null, '950': null, '953': null, '97': null, '99': null, 'C1': null, 'C100': null, 'C101': null, 'C11': null, 'C110': null, 'C12': null, 'C120': null, 'C123': null, 'C125': null, 'C12A': null, 'C13': null, 'C135': null, 'C142': null, 'C15': null, 'C19': null, 'C201': null, 'C25': null, 'C27': null, 'C29': null, 'C31': null, 'C33': null, 'C36': null, 'C37': null, 'C4': null, 'C41': null, 'C49': null, 'C51': null, 'C52': null, 'C53': null, 'C7': null, 'C701': null, 'C77': null, 'C97': null, 'E16': null, 'E17': null, 'E23': null, 'E25': null, 'E26A': null, 'E26B': null, 'E43': null, 'E44': null, 'E46': null, 'E57': null, 'E60': null, 'E61': null, 'E70': null, 'E72': null, 'N04': null, 'P23': null, 'P24': null, 'P3': null, 'P39': null, 'P44': null, 'P500': null, 'P51': null, 'P56': null, 'P62': null, 'P7': null, 'SE10': null, 'SE14': null, 'SE6': null, 'T02': null, 'T04': null, 'T05': null, 'T06': null, 'T09': null, 'T11': null, 'T21': null, 'T23': null, 'T24': null, 'T31': null, 'T38': null, 'T40': null, 'TC14': null, 'Z12': null, 'Z13': null, 'Z4': null, 'Z7': null, 'Z8': null, '15-1': null, '15-2': null, '15-3': null, '15-4': null, '15-5': null, '15-7': null, '17-1': null, '17-2': null, '17-3': null, '17-7': null, '18-2': null, '18-3': null, '18-5': null, '20-4': null, '22-2': null, '22-3': null, '23-2': null, '8-11': null, 'T10': null, 'T13-2': null, 'T13-4': null, '10-10': null, '10-11': null, '14-5': null, '14-6': null, '18-11': null, '18-12': null, '18-13': null, '18-6': null, '18-7': null, '18-8': null, '18-9': null, '6-18': null, 'T07': null, 'T08': null };
  }
  else if (modo[1] == "transmilenio") {
    only_route = { 'A15': null, 'A50': null, 'A52': null, 'A70': null, 'B10': null, 'B11': null, 'B12': null, 'B13': null, 'B14': null, 'B16': null, 'B18': null, 'B20': null, 'B22': null, 'B23': null, 'B27': null, 'B28': null, 'B34': null, 'B35': null, 'B50': null, 'B52': null, 'B53': null, 'B54': null, 'B55': null, 'B56': null, 'B57': null, 'B61': null, 'B70': null, 'B71': null, 'B72': null, 'B73': null, 'B74': null, 'B78': null, 'B79': null, 'B90': null, 'B92': null, 'B93': null, 'B94': null, 'C15': null, 'C17': null, 'C19': null, 'C29': null, 'C30': null, 'C31': null, 'C61': null, 'C71': null, 'C73': null, 'C84': null, 'C91': null, 'C96': null, 'D10': null, 'D12': null, 'D20': null, 'D21': null, 'D22': null, 'D26': null, 'D50': null, 'D51': null, 'D60': null, 'D70': null, 'D77': null, 'D94': null, 'D95': null, 'E17': null, 'E25': null, 'E26': null, 'E32': null, 'E44': null, 'E76': null, 'F14': null, 'F19': null, 'F22': null, 'F23': null, 'F28': null, 'F29': null, 'F32': null, 'F50': null, 'F51': null, 'F60': null, 'F61': null, 'F62': null, 'F70': null, 'F91': null, 'F99': null, 'G11': null, 'G12': null, 'G22': null, 'G30': null, 'G31': null, 'G33': null, 'G43': null, 'G44': null, 'G45': null, 'G46': null, 'G47': null, 'G52': null, 'G61': null, 'G71': null, 'G90': null, 'G96': null, 'G98': null, 'H13': null, 'H15': null, 'H17': null, 'H19': null, 'H20': null, 'H21': null, 'H25': null, 'H27': null, 'H35': null, 'H50': null, 'H51': null, 'H52': null, 'H54': null, 'H60': null, 'H61': null, 'H70': null, 'H73': null, 'H74': null, 'H81': null, 'H92': null, 'H93': null, 'J23': null, 'J24': null, 'J70': null, 'J72': null, 'J73': null, 'J95': null, 'K10': null, 'K23': null, 'K43': null, 'K54': null, 'K86': null, 'K97': null, 'K98': null, 'L10': null, 'L18': null, 'L80': null, 'L82': null, 'L97': null, 'M47': null, 'M51': null, 'M80': null, 'M81': null, 'M82': null, 'M84': null, 'M86': null, 'M99': null, '1-1': null, '1-10': null, '1-2': null, '1-3': null, '1-4': null, '1-5': null, '1-6': null, '1-7': null, '1-8': null, '1-9': null, '10-1': null, '10-2': null, '10-3': null, '10-4': null, '10-5': null, '10-6': null, '11-1': null, '11-10': null, '11-2': null, '11-3': null, '11-4': null, '11-4': null, '11-5': null, '11-6': null, '11-7': null, '11-8': null, '11-9': null, '12-1': null, '13-10': null, '13-12': null, '13-13': null, '13-16': null, '13-7': null, '13-8': null, '13-9': null, '14-1': null, '14-2': null, '14-7': null, '16-1': null, '16-10': null, '16-13': null, '16-14': null, '16-2': null, '16-3': null, '16-4': null, '16-5': null, '16-6': null, '16-7': null, '16-8': null, '16-9': null, '2-1': null, '2-10': null, '2-11': null, '2-12': null, '2-13': null, '2-2': null, '2-3': null, '2-4': null, '2-5': null, '2-6': null, '2-7': null, '2-8': null, '2-9': null, '3-1': null, '3-10': null, '3-11': null, '3-2': null, '3-3': null, '3-4': null, '3-5': null, '3-6': null, '3-7': null, '3-8': null, '3-9': null, '4-1': null, '4-2': null, '4-3': null, '5-1': null, '5-2': null, '5-2': null, '5-3': null, '5-4': null, '6-1': null, '6-2': null, '6-3': null, '6-4': null, '6-5': null, '6-6': null, '6-7': null, '6-8': null, '6-9': null, '7-1': null, '7-2': null, '7-3': null, '8-1': null, '8-2': null, '8-3': null, '8-4': null, '8-5': null, '8-6': null, '9-1': null, '9-10': null, '9-11': null, '9-2': null, '9-3': null, '9-4': null, '9-5': null, '9-6': null, '9-7': null, '9-8': null, '9-9': null, '1': null, '2': null, '3': null, '4': null, '5': null, '6': null, '7': null, '8': null };
  } else {
    $('input.autocomplete').hide();
    $("#label_auto").hide();
    only_route = {}
  }

  
  $('input.autocomplete').autocomplete({
     data: only_route,
     limit: 5, // The max amount of results that can be shown at once. Default: Infinity.
     onAutocomplete: function(val) {
       // Callback function when value is autcompleted.
     },
     minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
   });
 })
;
