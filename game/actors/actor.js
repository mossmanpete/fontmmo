var importer = require('../world/import.js');
var actorMaterial = new THREE.MeshStandardMaterial({ color: 0x6DA0A5, roughness:1.0, metalness:0.0 });

module.exports.create = function(data) {
  var actor = new THREE.Object3D();
  var model = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1, 0.5), actorMaterial);
  model.castShadow = true;
  model.receiveShadow = true;
  actor.add(model);

  var light = new THREE.PointLight(actorMaterial.color, 1, 100, 2);
  light.position.y = 0.5;
  //actor.add(light);

  actor.position.y = 0.5;
  actor.parts = [];
  actor.addPart = (p) => actor.parts.push(p);
  actor.isActor = true;

  return actor;
}
