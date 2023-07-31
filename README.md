# E-commerce Back End

[![License Badge](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)

## Description

The E-commerce Back End is a server-side application that serves as the back end for an e-commerce site. The application provides API routes to manage products, categories, and tags in the e-commerce platform's database. It uses Sequelize to interact with a MySQL database and Express.js to handle server-side routing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)

## Installation

1. Clone the repository or download the project files.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the project dependencies by running the following command:

```bash
npm install
```

4. Setup the database using the schema found in the `db` folder.
5. Seed the database by running the following command:

```bash
npm run seed
```

## Usage

To start the server, run the following command in your terminal:

```bash
npm start
```

Once the server is running, you can interact with the API using a tool like Insomnia Core or Postman.

## API Routes

The E-commerce Back End provides the following API routes:

**Product Routes**
- `GET /api/products`: Retrieves all products along with their associated category and tags.
- `GET /api/products/:id`: Retrieves a single product by ID.
- `POST /api/products`: Creates a new product.
- `PUT /api/products/:id`: Updates a product by ID.
- `DELETE /api/products/:id`: Deletes a product by ID.

**Category Routes**
- `GET /api/categories`: Retrieves all categories along with their associated products.
- `GET /api/categories/:id`: Retrieves a single category by ID.
- `POST /api/categories`: Creates a new category.
- `PUT /api/categories/:id`: Updates a category by ID.
- `DELETE /api/categories/:id`: Deletes a category by ID.

**Tag Routes**
- `GET /api/tags`: Retrieves all tags along with their associated products.
- `GET /api/tags/:id`: Retrieves a single tag by ID.
- `POST /api/tags`: Creates a new tag.
- `PUT /api/tags/:id`: Updates a tag by ID.
- `DELETE /api/tags/:id`: Deletes a tag by ID.

## Questions

If you have any questions or issues, feel free to reach out to me via one of the following channels:

Email: [benantonn@gmail.com](mailto:benantonn@gmail.com)

GitHub: [@bantonneau](https://github.com/bantonneau)

## Credits

This project was developed by Ben Antonneau. The E-commerce Back End leverages the following technologies:

- [Express.js](https://expressjs.com/): A fast, unopinionated, minimalist web framework for Node.js.
- [Sequelize](https://sequelize.org/): A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
- [MySQL2](https://www.npmjs.com/package/mysql2): MySQL client for Node.js with focus on performance.

Special thanks to the contributors of the open-source libraries and frameworks used in this project for their valuable work.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for personal or commercial purposes.
