# Family Gains Business Website
## Project Description
A fullstack MERN website create by Phil Garbrecht, for his small business Family Gains. Users can view different products, and the admin has full crud capabilities for the products once logged into the admin dashboard.

## 1. Technologies Used
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## 2. Approach Taken
After planning the application, I began building out the backend and completed it + deployed it. I then worked on the front end, using a component-based design approach primarily with functional components in React. I handled authorization and authentication for the admin dashboard by saving the signing username and password to local storage, then checking that it matches the admin info on file (protected in .env so it is not visible). In order for the user to see the admin dashboard their login info in local storage must match the .env info. I wrapped up the front end work with responsiveness work to allow for may devices to view.

## 3. Unsolved Problems
I solved for all of the MVP problems, the admin login stretch goal, and continue work on the remaining stretch goals.

## 4. User Stories
* As a customer of Family Gains, I want to be able to learn about the business and its products, so that I can find the right products for me to help raise and educate my children about important academic topics and life skills.
* As a customer of Family Gains, I want an easy to use and visually engaging site, to know that this is a professional business I can trust to help me in my busy life as a parent.
* As a customer of Family Gains, I want to have the same great experience navigating the website on my desktop, tablet, or phone, so no matter where I am (at home or out at my kid's sporting event for example), I can find what I need.

### Stretch goal user stories
* Add login for admin and require auth to view admin dashboard route
* Add products to Context-based shopping cart (keeps state anywhere on site)
* Checkout and pay for products with Stripe API integration
* Custom domain on Heroku called familygains.com

## 5. Additional Notes
I have created wireframes in Figma here:
https://www.figma.com/file/MozQVZgOuLJcgDHr9d0K1h/Family-Gains-Website-Launch?node-id=0%3A1

## 6. Project Links
* Link to GitHub Repository (Backend): https://github.com/pgarbrecht/family-gains-backend
* Link to GitHub Repository (Frontend): https://github.com/pgarbrecht/family-gains-frontend
* Link to Deployed Application (Backend): https://family-gains-backend.herokuapp.com/products
* Link to Deployed Application (Frontend): https://family-gains.herokuapp.com/