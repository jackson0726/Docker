# Docker

[Link Doc](https://docs.google.com/document/d/18tihkl7GzamOj-8jhmwmeOOlW9scqrUY-hFZql2VB2U/edit?usp=sharing)

## Installing Docker

[Link install](https://docs.docker.com/engine/install)

```
sudo apt-get update <br/>

sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release <br/>

sudo mkdir -p /etc/apt/keyrings <br/>

curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg <br/>

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
 <br/>

sudo apt-get update <br/>

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin <br/>

sudo docker run hello-world <br/>

sudo usermod -a -G docker [user] && newgrp docker <br/>
```

## Build the container image

```
docker build -t image_name:version <path> <br/>
ex: docker build -t kubia:latest .
```

## Listing images
  
```
docker images
```

## Displaying the layers of a container image
  
```
docker history image_name:version <br/>
ex: docker history kubia:latest
```

## Running the container image
  
```
docker run --name container_name -p mapping_port:container_port -d image_name <br/>
ex: docker run --name kubia-container -p 1234:8080 -d kubia
```

## Listing running containers
  
```
docker ps
```

## Getting additional information about a container
  
```
docker inspect container_name <br/>
ex: docker inspect kubia-container
```

## Displaying the container's log
  
```
docker logs container_name <br/>
ex: docker logs kubia-container
```

## Tagging an image under an additional tag
  
```
docker tag image_name docker_hub_id/image_name:version <br/>
ex: docker tag kubia luksa/kubia:1.0
```

## A container image with multiple tags
  
```
docker images | head
```

## Pushing the image to Docker Hub
  
```
docker login -u docker_hub_id -p password hub_url <br/>
docker push docker_hub_id/image_name:version
```

## Running the image on other hosts
  
```
docker run -p mapping_port:container_port -d docker_hub_id/image_name:version <br/>
ex: docker run -p 1234:8080 -d luksa/kubia:1.0
```

## Stopping a container
  
```
docker stop container_name <br/>
ex: docker stop kubia-container
```

## Deleting a container
  
```
docker rm container_name <br/>
ex: docker rm kubia-container
```

## Deleting an image
  
```
docker rmi image_name:version <br/>
ex: docker rmi kubia:latest
```

## Running a Shell inside an existing container

```
docker exec -it container_name bash
```

## Listing processes running in the container

```
ps aux
```

## Limiting a container's use of the CPU

```
docker run --cpuset-cpus="1,2" ...  <br/>
docker run ---cpus="0.5" ... <br/>
docker run --memory="100m" ... <br/>
```


## VS Code

```
curl -sSL https://packages.microsoft.com/keys/microsoft.asc -o microsoft.asc <br/>
gpg --no-default-keyring --keyring ./ms_vscode_key_temp.gpg --import ./microsoft.asc <br/>
gpg --no-default-keyring --keyring ./ms_vscode_key_temp.gpg --export > ./ms_vscode_key.gpg <br/>
sudo mv ms_vscode_key.gpg /etc/apt/trusted.gpg.d/ <br/>
echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" | sudo tee /etc/apt/sources.list.d/vscode.list  <br/>
sudo apt update <br/>
sudo apt install code <br/>
```


