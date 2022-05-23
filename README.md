# Heal&Go App Backend

Monolithic Backend for Rapid Development of Heal&Go Application.

## Built Using

- Express
- Typescript
- TypeORM
- JWT
- Joi
- Winston 🐒
- pgSQL 

## TODO

- [x] Basic Backend Scaffold
- [x] Authentication Scaffold
- [ ] Add Refresh Token
- [X] Dockerized 
- [ ] Communicate with AI Sub-system 
- [ ] Add Continuous Deployment to Server
- [ ] Refactor Code + Standardization

## API Documentation
All available API Endpoints could be accessed in https://www.postman.com/orange-star-402317/workspace/ac735df4-e5c7-4a3d-8184-324867767c4c/overview


## Development

### Requirements

- Node v14+
- Yarn

### Getting Started

- Pull this repo
- Setup `.env` (please refer to `.env.example`)
- Run `yarn migration:run:win` (for Windows) or `yarn migration:run` (for Linux) // if haven't migrate yet
- Run `yarn dev` to start developing


## Deployment

### Docker (Coming soon)

- Don't forget to setup any required environment for PostgreSql
- You can use Dockerfile and docker-compose here
- Run `docker-compose -f ./docker-compose.prod.yml up -d` to start using default config
- Setup a reverse proxy for default port 5000

### Anything else

- Don't forget to setup any required environment for CockroachDB
- Run `yarn build` to get distributon js files
- Run `yarn start` to start dist server

