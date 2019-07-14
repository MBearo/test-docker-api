var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});
docker.listImages().then(res=>{
  console.log(res)
})
