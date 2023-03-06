var username;

$('#login').on('click', function() {
  username = $('#username').val();
  console.log('default.js is here');
  
  if (username.length > 0) {
      $('#userLabel').text(username);
      socket.emit('login', username);
      
      $('#page-login').hide();
      $('#page-lobby').show();

      //createNewGame();
  } 
});

//do i need?
var createNewGame = function() {
  document.getElementById('gamesList').innerHTML = '';
  //new to add new button under games
  $('#gamesList').append($('<button>')
                  .text('NEW')
                  .on('click', function() {
                    username = $('#username').val();
                    socket.emit('newGame');
                  }));
                };

//new faction clicking+++++++++++++++++
$('#har').on('click', function() {
  username = $('#username').val();
  factionNum = 0;
  
      factionTable.members[0].user = username; 
      $('#h').html(factionTable.members[0].user);
      $('#harU').html(factionTable.members[0].user);
      $('#title').html(factionTable.members[0].factionName);
      $('.item2').html($('<img src="/img/Harkonnen.png" z-index= "10" width="100%" height="auto">'));

      updateStatus(factionNum);
      //console.log(stormTable);

      socket.emit('fTable', factionTable);
      
});

$('#atr').on('click', function() {
  username = $('#username').val();
  factionNum = 1;

      factionTable.members[1].user = username; 
      $('#a').html(factionTable.members[1].user);
      $('#atrU').html(factionTable.members[1].user);
      $('#title').html(factionTable.members[1].factionName);
      $('.item2').html($('<img src="/img/Atreides.png" width="100%" height="auto">'));

        updateStatus(factionNum);
       socket.emit('fTable', factionTable);
});

$('#fre').on('click', function() {
  username = $('#username').val();
  factionNum = 2;

      factionTable.members[factionNum].user = username; 
      $('#f').html(factionTable.members[factionNum].user);
      $('#freU').html(factionTable.members[factionNum].user);
      $('#title').html(factionTable.members[factionNum].factionName);
      $('.item2').html($('<img src="/img/Freemen.jpg" width="100%" height="auto">'));

        updateStatus(factionNum);
        socket.emit('fTable', factionTable);
});

$('#gui').on('click', function() {
  username = $('#username').val();
  factionNum = 3;

  factionTable.members[factionNum].user = username; 
  $('#g').html(factionTable.members[factionNum].user);
  $('#guiU').html(factionTable.members[factionNum].user);
  $('#title').html(factionTable.members[factionNum].factionName);
  $('.item2').html($('<img src="/img/Guild.png" width="100%" height="auto">'));

      updateStatus(factionNum);
      socket.emit('fTable', factionTable);
});

$('#emp').on('click', function() {
  username = $('#username').val();
  factionNum = 4;

  factionTable.members[factionNum].user = username; 
  $('#e').html(factionTable.members[factionNum].user);
  $('#empU').html(factionTable.members[factionNum].user);
  $('#title').html(factionTable.members[factionNum].factionName);
  $('.item2').html($('<img src="/img/Emperor.jpg" width="100%" height="auto">'));

      updateStatus(factionNum);
      socket.emit('fTable', factionTable);
});

$('#ben').on('click', function() {
  username = $('#username').val();
  factionNum = 5;

  factionTable.members[factionNum].user = username; 
  $('#b').html(factionTable.members[factionNum].user);
  $('#benU').html(factionTable.members[factionNum].user);
  $('#title').html(factionTable.members[factionNum].factionName);
  $('.item2').html($('<img src="/img/BeneGesserit.jpg" width="100%" height="auto">'));

      updateStatus(factionNum);
      socket.emit('fTable', factionTable);
});

//new above ++faction+++buttons++++++++++++++++++++++++++++++++++++

$('#start').on('click', function() {
  $('#page-lobby').hide();
  $('#page-game').show();
  factionTable.numPlayers ++;
  updateTables();

  gameInit();
});


var gameInit = function(){

        console.log("Game init");
        console.log("factionNum =", factionNum);

        if(factionNum == 0){
          
          populateStormT();
          console.log("stormStart", stormTable.members[0].stormStart);
          populateSpiceT();
          populateTreacheryT();
          populateLeaderT(); 
          updateTables();
        }
        
        updateStatus(factionNum);
        renderMap();
        stormRound(factionNum);
      }

      window.updateTables=function(){

        socket.emit('fTable', factionTable);
        socket.emit('stormTable', stormTable);
        socket.emit('spiceTable', spiceTable);
        socket.emit('tTable', treacheryTable);
        socket.emit('mTable', mapTable);
        socket.emit('bTable', bidTable);
        socket.emit('lTable', leaderTable);
        //console.log(battleTable.members[0].faction);
        socket.emit('battleTable', battleTable);
        socket.emit('collectionTable', collectionTable);
        socket.emit('moveTable', moveT);

        renderTablesNew();

        console.log("init update tables");

      };            