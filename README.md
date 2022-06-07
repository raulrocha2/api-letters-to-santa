## Pre-requisites
    - Install Node.js
# Getting started
    - git clone  <git lab template url> <project_name>
### Install dependencies
    - cd <project_name>
    - npm install
### Run the project
    - npm run dev
    
### Build the project
    - npm build
#### Navigate to http://localhost:3333
    - API Document endpoints
    - swagger-ui Endpoint : http://localhost:3333/v1/api-docs

## Endpoints
- POST http://localhost:3333/api/v1/santa/new
- POST http://localhost:3333/api/v1/santa/login 
- POST http://localhost:3333/api/v1/letter/new
- GET http://localhost:3333/api/v1/letter
- GET http://localhost:3333/api/v1/letter/read
- GET http://localhost:3333/api/v1/letter/read/not
- GET http://localhost:3333/api/v1/letter/approved
- GET http://localhost:3333/api/v1/letter/approved/not
- PUT http://localhost:3333/api/v1/letter/read/:id
- PUT http://localhost:3333/api/v1/letter/approved/:id
- DELETE http://localhost:3333/api/v1/letter/delete/:id