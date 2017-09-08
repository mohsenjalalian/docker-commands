
# docker-commands

* docker ps
* docker ps -a
* docker run  => "run a command in new container" "create container from image"
* docker run -it "image name"
* docker run -it --name "our name" "image name"
* docker rm "container id" or "container name"
* docker help
* docker help "command name"
* docker images
* docker pull "image name"
* docker ps -a -q "list only container id"
* docker rm $(sudo docker ps -aq) "remove all containers"
* docker search ubuntu
* docker rmi "image name" or "image id"
* docker commit  "container id"(7dbb4486d7f5) centos:mohsen_custom_txtfile  "create image from container"
* docker save -o centos_mohsen_custom_txtfile.tar.gz centos:mohsen_custom_txtfile "Save one or more images to a tar archive"
* docker load -i centos_mohsen_custom_txtfile.tar.gz "Load an image from a tar archive or STDIN"
* docker exec -it mohsen_mongo mongo "Run a command in a running container"
* docker exec -it mohsen_mongo /bin/bash  "go to terminal"
* docker run -d --name mohsen_mongo mongo "run a docker in background"
* docker volume create --name data "create volume"
* docker volume ls "list volumes"
* docker volume inspect data "display information about volume"
* docker run -d --name m_mongo -v data:/data/db mongo "mount data volume to /data/db path of mongo container"
* docker logs m_mongo "log of a container"
* docker inspect m_mongo "information container"
* docker network ls "list networks"
* docker network inspect bridge "info"
* docker run -d -v data:/data/db --name m_mongo -p 28001:27017 mongo "run a m_mongo container from mongo image as deamon(- d) with volume(- v) and with bind port(- p)" 
* docker build -t name:tag .=>('current directory search')

* note : in docker we should work with ports or containers and we should not work with ip because it always change
