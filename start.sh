#!/bin/bash
imageName=rizalibnu/react-marketo-id
containerName=react-marketo-id

echo Building image...
time docker build -t $imageName -f Dockerfile  .

echo Delete old container...
docker rm -f $containerName

echo Run new container...
#docker run -dit -p 5000:5000 --name $containerName $imageName
docker-compose up -d

echo Prune images...
docker image prune -f
