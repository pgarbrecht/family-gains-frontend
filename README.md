# Family Gains Business Website
## Project Description
A fullstack MERN website create by Phil Garbrecht, for his small business Family Gains. Users can view different products, and the admin has full CRUD capabilities for the products once logged into the admin dashboard.

## Project Links
* Link to GitHub Repository (Backend): https://github.com/pgarbrecht/family-gains-backend
* Link to GitHub Repository (Frontend): https://github.com/pgarbrecht/family-gains-frontend
* Link to Deployed Application (Backend): https://family-gains-backend.herokuapp.com/products
* Link to Deployed Application (Frontend): https://family-gains.herokuapp.com/

## Technologies Used
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Installation Steps
If you will view the application locally (instead of the live deployed version), Please follow these steps to install and run it:

* Fork, and then git clone both the front end git link and back end git link to  local remotes on your computer. You may find it helpful to create a root folder, then git clone each into it, for easy access / opening both in your code editor.
* CD into the back end repo location. Open the back end repo in your code editor from the CLI, for example code . if using VS code. You will need to add an .env file at the root level and in it put:
PORT=3001
MONGODB_URI=mongodb+srv://admin:fIorGT2x0I5EZFlo@philscluster.6gpmpcs.mongodb.net/family-gains?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:3000
* Using your CLI, while still in the back end remote location. Enter the command npm i which will install the dependencies in the package.json. Then enter the command nodemon server.js to activate the server. You should see it appear in your browser at localhost:3001/products
* CD into the back end repo location. Open the back end repo in your code editor from the CLI, for example code . if using VS code. You will need to add an .env file at the root level and in it put:
REACT_APP_BACKEND_URL=http://localhost:3001/products

NOTE: There is also an admin username and password that should be added to the front end env if you will be doing create, update, or delete of products. That is not listed here for security purposes. Reach out to me please if you would like a demonstration of that.

* Using your CLI, CD into the front end remote location on your computer. Enter the command npm i which will install the dependencies in the package.json. Then enter the command npm start to activate the app. You should see it appear in your browser at localhost:3000
* You should now be able to use the app locally, interacting through the front end local URL in your browser

## Approach Taken
After planning the application, I began building out the backend and completed it + deployed it. I then worked on the front end, using a component-based design approach primarily with functional components in React. I handled authorization and authentication for the admin dashboard by saving the signing username and password to local storage, then checking that it matches the admin info on file (protected in .env so it is not visible). In order for the user to see the admin dashboard their login info in local storage must match the .env info. I wrapped up the front end work with responsiveness work to allow for may devices to view.

## User Stories
* As a customer of Family Gains, I want to be able to learn about the business and its products, so that I can find the right products for me to help raise and educate my children about important academic topics and life skills.
* As a customer of Family Gains, I want an easy to use and visually engaging site, to know that this is a professional business I can trust to help me in my busy life as a parent.
* As a customer of Family Gains, I want to have the same great experience navigating the website on my desktop, tablet, or phone, so no matter where I am (at home or out at my kid's sporting event for example), I can find what I need.

### Stretch goal user stories
* Add login for admin and require auth to view admin dashboard route
* Add products to Context-based shopping cart (keeps state anywhere on site)
* Checkout and pay for products with Stripe API integration
* Custom domain on Heroku called familygains.com

## Wireframes
I have created wireframes in Figma here:
https://www.figma.com/file/MozQVZgOuLJcgDHr9d0K1h/Family-Gains-Website-Launch?node-id=0%3A1

## Data Relationships
The front end is built with a series of components that have the following relationships and pass the following data:
Index.js > App.js
            App.js > Nav.js
            App.js > Home.js
            App.js (passes product list from state) > Store.js (passes each property of the product) > ProductPreview.js 
            App.js (passes product list from state) > Product.js > backToStoreBtn.js 
            App.js > Contact.js
            App.js > AdminLogin.js
            App.js > AdminDashboard.js (passes product list and admin info from state)

## Unsolved Problems
I solved for all of the MVP problems, the admin login stretch goal, and continue work on the remaining stretch goals.