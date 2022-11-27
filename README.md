## Project Name
Family Gains Business Website

## Project Description
**General App Idea/Purpose:**<br /> 
I have a small business called Family Gains that makes educational products for kids and I will create the first version of a business website for it. The website will allow users to learn about the business, browse current products, and contact us. The administrator for the website will have full CRUD abilities for the products, in a basic version of a content management system.

 **What technology stack(s) are you using for your frontend / backend?**:<br />
I will take an **MVC** approach to structuring my application, as follows:

**Front End:**
- React will be used for **views**, with hooks useState and createContext, plus React Router npm package. This will allow for reusable and efficient components.
- Tailwind will be used for the CSS framework, along with some light custom CSS styling as appropriate. This will allow for efficient, responsive design.
- Javascript will be used for the front end language, as it is highly flexible and can be well-supported by others as the team grows.

**Back End:**
- Mongoose will be used to create the **model** for data in the database, and the database will be MongoDB Atlas (cloud version of MongoDB, a non-relational database). This will provide great flexibility to update the structure and contents of the database as the business needs change over time.
- Express (web application restful route framework) and Node (web server framework) will be used together for the **controller** functionality. This combination is well-supported and efficient, and allows me to make use of many useful NPM packages as well.
- Javascript will be used for the back-end language as it is built-into Express and Node.

 **Models including field names and their datatypes:**<br />
There will be one model for the MVP, a file named products.js file in models folder with the following schema:
const productSchema = new mongoose.Schema({
name: { type: String, required: true },
description: { type: String, required: true },
image: { type: String, required: true },
price: { type: Number, required: true },
instock: { type: Boolean, required: true, default: true }
});

**A list of routes:**<br />
- GET / is the homepage with info about the business
- GET /store provides page with a list of products
- GET /admin provides a signin page that redirects to /admin/dashboard
- GET /admin/dashboard provides page with access to the admin create, update, delete product features listed below -- only visible if signed in
- NEW /store/new allows to add new product via a form **- Admin feature**
- POST /store saves new product to the database **- Admin feature**
- SHOW /store/:id shows the details page for a product
- EDIT /store/:id/edit gives form to edit existing product in database **- Admin feature**
- PUT /store/:id updates the edited product in the database **- Admin feature**
- DELETE /store/:id deletes that product from the database **- Admin feature**
- GET /contact provides contact info (or possibly form) to get in touch

## Wireframes
I have created wireframes in Figma here:
https://www.figma.com/file/MozQVZgOuLJcgDHr9d0K1h/Family-Gains-Website-Launch?node-id=0%3A1

## Feasibility Study
- My big stretch goal is to include a cart and checkout for products. I am anticipating this will be a challenge to do within the time assigned for this project, but will likely complete the MVP ahead of time and then can start a branch to work on these big stretch features. It's a really great learning experience so I would like to set it as a stretch goal, and if unable to complete in the time I'll continue working on it after graduation. 
- There is a good online tutorial video I've looked into to set up Context-based cart and Stripe-based checkout here: https://www.youtube.com/watch?v=4mOkFXyxfsU
- Stripe provides helpful sample code for checkout using React front end + Node backend here (specifically the POST method to send a payment request to the Stripe API is shown in this example):
https://stripe.com/docs/checkout/quickstart?client=react&lang=node
- I would reference a combination of this online tutorial and Stripe documentation to set up the cart + checkout functionality

## User Stories
- As a customer of Family Gains, I want to be able to learn about the business and its products, so that I can find the right products for me to help raise and educate my children about important academic topics and life skills.
- As a customer of Family Gains, I want an easy to use and visually engaging site, to know that this is a professional business I can trust to help me in my busy life as a parent.
- As a customer of Family Gains, I want to have the same great experience navigating the website on my desktop, tablet, or phone, so no matter where I am (at home or out at my kid's sporting event for example), I can find what I need.

### MVP Goals
- Public read-only routes for about, products, and contact
- Admin signin and admin dashboard route for create, update, delete of products 
- Able to view clearly on desktop, tablet, or mobile

### Stretch Goals
- Add login for admin and require auth to view admin dashboard route
- Add products to Context-based shopping cart (keeps state anywhere on site)
- Checkout and pay for products with Stripe API integration
- Custom domain on Heroku called familygains.com