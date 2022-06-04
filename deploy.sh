#!/bin/bash

docker network create api-net

docker-compose -f ./docker-compose-prod.yml up -d --build

curl localhost:5000/api/v1/seed