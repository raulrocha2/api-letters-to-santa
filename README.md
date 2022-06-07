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
  - Body example 
   {
  "login": "string",
  "password": "string"
}
- POST http://localhost:3333/api/v1/santa/login 
    - Body example 
       {
      "login": "string",
      "password": "string"
    }
- POST http://localhost:3333/api/v1/letter/new
  - Body example 
  "first_name": "string",
  "last_name": "string",
  "address": "string",
  "zip_code": "string",
  "state": "string",
  "city": "string",
  "country": "string",
  "body_letter": "string"
}
- GET http://localhost:3333/api/v1/letter
- GET http://localhost:3333/api/v1/letter/read
- GET http://localhost:3333/api/v1/letter/read/not
- GET http://localhost:3333/api/v1/letter/approved
- GET http://localhost:3333/api/v1/letter/approved/not
- PUT http://localhost:3333/api/v1/letter/read/:id
    - Body example
    {
  "read": true
}
- PUT http://localhost:3333/api/v1/letter/approved/:id
    - Body example
     {
    "approved": true
    }
- DELETE http://localhost:3333/api/v1/letter/delete/:id