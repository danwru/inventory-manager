# inventory-manager
Full stack web application built on Node with EJS serving as the templating engine and Express 
as the backend with mock data stored and accessed using Mongoose. Frontend and backend connected with a REST API with CRUD functionality.

The application provides a clean platform to manage stock levels, organize categorized inventory, 
and manage prices. 

#### Running the app locally

In command line, clone the Github repository and change into the inventory-manager directory:

```
git clone https://github.com/danwru/inventory-manager.git
cd inventory-manager
```

#### Seeding the database with mock data (optional):
In the populatedb.js file inside the seeds folder, 50 musical instrument items are generated as mock data. 
Run this file to seed mock data into the database. Change the Mongo URI inside app.js if needed.

```
node seeds/populatedb.js
```

Run install and start with npm 

```
npm install
npm start
```
Open http://localhost:3000 in your browser.


