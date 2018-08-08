var matrix = {
  characters: [{
      id: 0,
      name: "neo",
      sprite: "assets/images/neo.jpg",
      hitPoints: 100,
      attackPower: 10,
      counterAttackPower: 25,
      isChosen: false,
      isDefender: false,
    },
    {
      id: 1,
      name: "morpheus",
      sprite: "assets/images/morpheus.jpeg",
      hitPoints: 75,
      attackPower: 20,
      counterAttackPower: 30,
      isChosen: false,
      isDefender: false,
    },
    {
      id: 2,
      name: "trinity",
      sprite: "assets/images/trinity.jpeg",
      hitPoints: 120,
      attackPower: 15,
      counterAttackPower: 45,
      isChosen: false,
      isDefender: false,
    },
    {
      id: 3,
      name: "agentSmith",
      sprite: "assets/images/agentSmith.jpeg",
      hitPoints: 150,
      attackPower: 20,
      counterAttackPower: 60,
      isChosen: false,
      isDefender: false,
    },
  ],
  player: [],
  enemy: [],
  defender: [],

  //setup avatar div
  setupGame: function() {
    for (var i = 0; i < this.characters.length; i++) {
      $(this).attr("data-characterid");
      var avatarImg = $("<img>");
      avatarImg.addClass("avatar");
      avatarImg.attr("src", this.characters[i].sprite);
      avatarImg.attr("data-characterid", this.characters[i].id);
      $("#avatars").append(avatarImg);
    }
  },
  setupPlayer: function(playerSrc, charid) {
    var playerImg = $("<img>");
    playerImg.addClass("player");
    playerImg.attr("src", playerSrc);
    $("#player").append(playerImg);
    $("#avatars").hide();
    this.updatePlayer(charid);

  },
  updatePlayer: function(charid){
    charid = parseInt(charid);

    for (var i = 0; i < this.characters.length; i++) {
      // console.log(this.characters[i].id);
      // console.log(charid);
      if (charid === this.characters[i].id) {
        this.characters[i].isChosen = true;
        this.player.push(this.characters[i]);
      } else {
        this.enemy.push(this.characters[i]);
      }
    }
  },
  updateEnemy: function(enemySrc) {
    $("#enemies").empty();
    for (var i = 0; i < this.enemy.length; i++) {
      if(!this.enemy[i].isDefender){
        var enemySrc = this.enemy[i].sprite;
        var enemyImg = $("<img>");
        enemyImg.addClass("enemy");
        enemyImg.attr("src", enemySrc);
        enemyImg.attr("data-characterid", [i]);
        $("#enemies").append(enemyImg);
        // matrix.setupEnemy(enemySrc);
      }
    }
  },
  updateDefender : function(charid, defenderSrc){
    // if(this.defender <= 1){
    matrix.spliceEnemy(charid);
    charid = parseInt(charid);
    this.defender.push(this.enemy[charid]);
    console.log(this.defender);
    this.defender.isDefender = true;
    var defenderSrc = defenderSrc;
    var defenderImg = $("<img>");
    defenderImg.addClass("defender");
    defenderImg.attr("src", defenderSrc);
    $("#defender").append(defenderImg);
  // }

  },
  spliceEnemy : function(charid){
    this.enemy.splice(charid, 1);
    console.log(this.enemy);
  },
  updateGameStatus : function(){
    this.player.hitPoints;
    this.defender.hitpoints;
  }
}

$(document).ready(function() {
  //setup game
  matrix.setupGame();
  //on avatar click
  $(".avatar").on("click", function() {
    var charid = ($(this).attr("data-characterid"));
    var playerSrc = $(this).attr('src');
    // matrix.updateIsChosen(charid);
    matrix.setupPlayer(playerSrc, charid);
    matrix.updateEnemy();
  }),




  //on enemy click
  $(document).on("click", '.enemy', function() {
    var charid = ($(this).attr("data-characterid"));
    var defenderSrc = $(this).attr('src');
    matrix.updateDefender(charid, defenderSrc);
    matrix.updateEnemy();
  })


  //on attack click
  $(".attack").on("click", function() {
    if(matrix.defender.isDefender && matrix.player.isChosen)
    {

    }
    else{
      return;
    }


  })
});
