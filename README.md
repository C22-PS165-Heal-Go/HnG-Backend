# Heal&Go App Backend

Monolithic Backend for Rapid Development of Heal&Go Application.

## Built Using

- Express
- Typescript
- Mongoose
- JWT
- Joi
- Winston 🐒

## TODO

- [x] Basic Backend Scaffold
- [x] Authentication Scaffold
- [X] Dockerized 
- [X] Communicate with AI Sub-system 
- [X] Recommendation Feature
- [X] Home Feature

## API Documentation
All available API Endpoints could be accessed in https://www.postman.com/orange-star-402317/workspace/ac735df4-e5c7-4a3d-8184-324867767c4c/overview
Live server address: http://34.101.142.73:5000/api/v1

## Development

### Requirements

- Node v14+
- Yarn

### Getting Started

- Pull this repo
- Setup `.env` (please refer to `.env.example`)
- Run `yarn dev` to start developing


## Deployment

### Docker

- Clone this repo to target machine
- Use provided docker-compose here
#### Option 1
- Run `chmod +x deploy.sh`
- Run `./deploy.sh`
#### Option 2
- Run `docker network create api-net` to create the network
- Run `docker-compose -f ./docker-compose-prod.yml up -d --build` to start using default config
- Run `curl localhost:5000/api/v1/seed` for seeding the destination data 
#### Final step
- Setup a reverse proxy for default port 5000

### Anything else

- Don't forget to setup any required environment for MongoDB
- Run `yarn build` to get distributon js files
- Run `yarn start` to start dist server

