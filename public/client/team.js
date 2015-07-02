/*
 * The Team class is for everyone other player in the game outside of the user
 * Inherits functions and properties of Player superclass
 * Username, position, player, team ID, flag status, and radius are defined server side and passed to players upon joining the game.
 * Team Id is either 0 or 1
 * Position is an Object with x and y values eg: {x: 50, y:230}
 * canvasContext refers to global canvas node
 */

var Team = function(username, id, position, canvasContext, teamId, radius, model) {
  Player.apply(this, arguments);
  this.team = teamId;
  this.model = createPlayerModel(teamId);
  this.model.position.x = this.position.x;
  this.model.position.y = 10;
  this.model.position.z = this.position.y;
  scene.add(this.model);
};

Team.prototype = Object.create(Player.prototype);
Team.prototype.constructor = Team;
var $teamStatus = $('#team-status');


var redTeam = new THREE.MeshBasicMaterial( {color: 0xff0000} );
var blueTeam = new THREE.MeshBasicMaterial( {color: 0x0000ff} );

var createPlayerModel = function(teamId){

  var geometry = new THREE.SphereGeometry( 5, 32, 32 );

  if (teamId === 0) {
    console.log("you're on the blue team");
    $teamStatus.text("you're on the blue team")
    var material = redTeam;
  } else {
    console.log("you're on the red team");
    $teamStatus.text("you're on the blue team")
    var material = blueTeam;
  }

  var sphere = new THREE.Mesh( geometry, material );
  return sphere;
};
