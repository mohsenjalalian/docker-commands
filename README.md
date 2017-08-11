# docker-commands

docker ps
docker ps -a
docker run  => "run a command in new container" "create container from image"
docker run -it "image name"
docker run -it --name "our name" "image name"
docker rm "container id" or "container name"
docker help
docker help "command name"
docker images
docker pull "image name"
docker ps -a -q "list only container id"
docker rm $(sudo docker ps -aq) "remove all containers"
docker search ubuntu
docker rmi "image name" or "image id"