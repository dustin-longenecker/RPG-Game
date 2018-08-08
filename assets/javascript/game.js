var player = [];
var enemy = [];
var defender = [];

var isChosen = false;
var isEnemy = false;
var isDefender = false;


var matrix = {
    id : [0, 1, 2, 3],
    name : ["neo", "morpheus", "trinity", "agentSmith"],
    sprite : ["assets/images/neo.jpg", "assets/images/morpheus.jpeg", "assets/images/trinity.jpeg", "assets/images/agentSmith.jpeg"],
    hitPoints : [100, 75, 120, 150],
    attackPower : [10, 20, 15, 20],
    counterAttackPower : [25, 30, 45, 60],
    isChosen: [false, false, false, false],
    isDefender:[],
    isEnemy:[]
}
$(document).ready(function(){
    console.log(matrix.sprite.length)
    for (var i = 0; i < matrix.sprite.length; i++) {
      $(this).attr("data-crystalvalue");
      var avatarImg = $("<img>");
      avatarImg.addClass("avatar");
      avatarImg.attr("src", matrix.sprite[i]);
      avatarImg.attr("data-crystalvalue", matrix.id[i]);
      enemy.push(matrix.sprite[i])
      $("#avatars").append(avatarImg);
    }
    console.log(enemy);

    $(".avatar").on("click", function(){
      var playerImg = $("<img>");
      var playerSrc = $(this).attr('src');
      var thisData = ($(this).attr("data-crystalvalue"));
      var idIndex = matrix.characters.id[thisData];
      console.log(playerSrc);
      playerImg.addClass("player");
      playerImg.attr("src", playerSrc);
      $("#player").append(playerImg);
      $("#avatars").hide();
      player.push(matrix.sprite[matrix.id[idIndex]]);
      matrix.isChosen[idIndex] = true;
      console.log(matrix.isChosen);
      console.log(player);

    })
    $(".enemy").on("click", function() {

    })
    $("#attack").on("click", function() {

    })

});

function populatePlayer(){

}
function populateEnemy(){

}
function populateDefender(){

}
