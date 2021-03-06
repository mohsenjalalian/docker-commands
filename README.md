
# docker-commands

* docker version => "Display docker version"
* docker info => "Display docker system info"
* docker ps => "List running containers"
* docker container ls => "List running containers"
* docker ps -a => "List all containers"
* docker container ls -a => "List all containers"
* docker run  => "run a command in new container" "create and container from image" "if not exist download it"
* docker run -it  => "run a container from an image interactive"
* docker run "image name" –it /bin/bash  => "/bin/bash is used to run the bash shell once image is up and running"
* docker run -it --name "our name" => "run a container from an image interactive with given name"
* docker run -p 8080:8080 jenkins "run a container  - p map the port number of the internal Docker image to our main server" 
* docker run -d --name mohsen_mongo mongo "run a docker in background"
* docker run -d -v data:/data/db --name m_mongo -p 28001:27017 mongo "run a m_mongo container from mongo image as deamon(- d) with volume(- v) and with bind port(- p)"
* docker container start -ai ubuntu  => "start a container run bash interactive. default command in ubuntu is bash" 
* docker logs
* docker top
* docker port "container name"
* docker container inspect --format {{.NetworkSettings.IPAddress}} "container name" => "return ip"
* docker rm "container id" or "container name" => "remove a container"
* docker --help
* docker --help "command name"
* docker images => "list all images"
* docker image ls => "list all images"
* docker images -q => "return only image id"
* docker history ImageID 
* docker pull "image name" "pull an image from docker hub"
* docker ps -aq "list only container id"
* docker rm $(sudo docker ps -aq) "remove all containers"
* docker search ubuntu => "search ubuntu in docker hub"
* docker rmi "image name" or "image id" => "remove an image"
* docker commit  "container id"(7dbb4486d7f5) centos:mohsen_custom_txtfile  "create image from container"
* docker save -o centos_mohsen_custom_txtfile.tar.gz centos:mohsen_custom_txtfile "Save one or more images to a tar archive"
* docker load -i centos_mohsen_custom_txtfile.tar.gz "Load an image from a tar archive or STDIN"
* docker exec -it mohsen_mongo mongo "Run a command in a running container. here run mongo command"
* docker exec -it mohsen_mongo /bin/bash  "go to terminal"
* docker volume create --name data "create volume"
* docker volume ls "list volumes"
* docker volume inspect data "display information about volume"
* docker run -d --name m_mongo -v data:/data/db mongo "mount data volume to /data/db path of mongo container"
* docker logs m_mongo "log of a container"
* docker inspect m_mongo "information container or image"
* docker network ls "list networks"
* docker network create "name"
* docker network connect
* docker network disconnect
* docker network inspect bridge "information about bridge network"
* docker build -t name:tag .=>('current directory search') "create an image from docker file"
* docker stop => "stop running container"
* docker stats => "Display a live stream of container(s) resource usage statistics"

* note : in docker we should work with ports or containers and we should not work with ip because it always change
