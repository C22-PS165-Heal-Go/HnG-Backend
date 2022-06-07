#!/bin/bash

git pull 

docker network create api-net

docker-compose -f ./docker-compose-prod.yml up -d --build

sleep 10

curl localhost:5000/api/v1/seed