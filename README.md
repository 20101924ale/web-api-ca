# Assignment 2 - Web API.

Name: Alexandra Dinea

## Features.

User registration and login

JWT-based authentication

Create, read, update, delete (CRUD) movies and reviews

Search movies by title

## Setup requirements.

"git clone https://github.com/20101924ale/web-api-ca.git
cd web-api-ca"


## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=(mongourl)
seedDb=true
secret=lovecake
______________________

## API Design

| Endpoint                   | Method | Description                 |
| -------------------------- | ------ | --------------------------- |
| `/api/movies`              | GET    | Get all movies              |
| `/api/movies/{id}`         | GET    | Get a single movie          |
| `/api/movies/{id}/reviews` | GET    | Get all reviews for a movie |
| `/api/movies/{id}/reviews` | POST   | Add a review to a movie     |
| `/api/users/register`      | POST   | Register a new user         |
| `/api/users/login`         | POST   | Login and get JWT token     |

## Security and Authentication

JWT authentication is used for protected routes
Only logged-in users can add reviews

## Integrating with React App

- this React app fetches movies and reviews from the API
- User registration and login views now use the API, in place of external services
 
