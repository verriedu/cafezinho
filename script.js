var randomNumber = function(low, high) {
    return Math.floor( Math.random() * (1 + high - low) ) + low;
  };
  
  var cube = document.getElementById('cube');
  var outcome = document.getElementById('outcome');
  var outcomeText = document.getElementById('text');
  var messageDelay; //timer
  var fadeout; //timer
  var messages = [
    'Empório daruma',
    'Café barão',
    'Charlotte',
    'Casa Bauducco BB',
    'The coffee',
    'Casa Bauducco Center 3',
    'Kopenhagen center 3',
    'Café Perseu',
    'Libaninho',
    'Café Gorinhamez',
    'Café charuto',
    'Café amigão',
    'Café no MASP',
    'Tostado Coffee Club',
    'Café Cine Marquise',
    'Café Cine Fellini',
    'Cacau Show Conj. Nac.',
    'Ofner Center 3',
    'Rei do mate',
    'Sterna Café Habitat Bra'
  ];
  
  
  var showFace = function() {
  
    var face = randomNumber( 1, 20 );
  
    //if not already at this number
    if (cube.className !== 'show-' + face ) {
  
      cube.className = 'show-' + face;
  
      //delay for spin to finish
      messageDelay = setTimeout( function() {
  
        //show message
        outcomeText.innerHTML = messages[ face - 1 ];
        outcome.className = 'show';
  
        //display message then fade out
        fadeout = setTimeout( function() {
  
          //hide message
          outcome.className = '';
  
        }, 2000);
  
      } , 1000);
  
    } else {
      //repeat number, try again
      return showFace();
    }
  
  };
  
  
  document.getElementById('roll').addEventListener( 'click', function() {
  
    //fade message
    outcome.className = '';
  
    //clear timers if they are there
    if ( typeof messageDelay === "number" ) {
      clearTimeout( messageDelay );
      clearTimeout( fadeout );
    }
  
    showFace();
  
  }, false);
