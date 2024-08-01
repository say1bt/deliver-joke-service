# Deliver Service

The Deliver Service is a microservice built with NestJS, designed to handle the delivery of jokes within the Jokes Service architecture. It provides functionality for retrieving random jokes and submitting them through the API. This service integrates with other microservices for a seamless joke management experience and is containerized using Docker and deployed to Amazon EC2 instances.

## Features

- **Fetch Random Joke**: Retrieve a random joke from the backend.
- **Submit Joke**: Allow users to submit new jokes.
- **Integration**: Interacts with other microservices for joke management.
- **API Documentation**: Swagger is integrated for API documentation.
- **Dockerized**: The service is containerized using Docker.
- **Deployment**: Deployed to Amazon EC2 instances for scalability and reliability.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Endpoints](#api-endpoints)
4. [Docker](#docker)
5. [Deployment](#deployment)
6. [Contributing](#contributing)
7. [License](#license)
8. [Acknowledgments](#acknowledgments)

## Installation

To get started with the Deliver Service, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/say1bt/deliver-service.git
   ```

2. Navigate to the project directory:
   ```bash
   cd deliver-service
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To start the Deliver Service locally, run:
```bash
npm run start
```

The service will be available at `http://localhost:3000`.

## API Endpoints

### Joke Management

- `GET /jokes/random`: Retrieve a random joke.
- `POST /jokes`: Submit a new joke.

## Docker

The service is containerized using Docker. To build and run the Docker container, follow these steps:

1. Build the Docker image:
   ```bash
   docker build -t deliver-service .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 deliver-service
   ```

## Deployment

The Deliver Service is deployed to Amazon EC2 instances for scalability and reliability. The deployment process includes:

1. Pushing the Docker image to Amazon ECR (Elastic Container Registry).
2. Creating and configuring an EC2 instance.
3. Pulling and running the Docker image on the EC2 instance.

 
 ## Database

- The MySQL database for the Deliver Jokes service is hosted in Azure SQL Server.



## Contributing

We welcome contributions to improve the Deliver Service. Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to adjust this README file according to your specific project needs.
