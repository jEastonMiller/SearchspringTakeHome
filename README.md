
![alt text](https://i.imgur.com/u0QKheF.png)

For [Midwest Farmhouse](https://jeastonmiller.github.io/SearchspringTakeHome/) I was asked to create a product display page using the Searchspring API and deploy it. The site includes the following features: 

- A functioning searchbar that utilizes Searchspring API with user queries to fetch results with the input element's value by either clicking the search button or on pressing "Enter".
- Display the resulting products specifically including the thumbnail, product name, price, and if the MSRP was greater than the price, the MSRP with a strikethrough as well.
- Dynamic pagination with forward and backward buttons that would disable at appropriate times.


Other features I added include: 

- More dynamic pagination with skip buttons rendering conditionally based on totalPages field returned from the API call.
- A landing page with dynamically rendered "trends" populated by a random search of the entire site catalogue.
- A cart save feature that will actually populate a cart with items and quanities. While there isn't a cart display, clicking the cart button will log the cart object in the console.
- Custom assets including logos, banners, icons, and backgrounds I personally developed in photoshop.
- Limited component testing using Cypress.
- Implemented break points using CSS media queries for mobile friendly viewing.
- Responsive 

<!-- https://ileriayo.github.io/markdown-badges/#markdown-badges -->

## General Approach

When thinking about how I wanted to approach building out this functionality, I considered a few options. I thought about using Vanilla Javascript but once I decided on the features I wanted to include regarding the pagination, React.js made more sense for conditionally rendering the forward, back, forwardSkip, and backSkip buttons as well as dynamically building out the product display using flexbox. I quickly whiteboarded out a general design and named some components to get an idea of the file structure and architecture. This is also where I started to consider how the handlers would be dispersed efficiently throughout the application with minimal prop drilling. I wanted faster load times and smaller file sizes so I decided to use Webpack as a bundler. I've used vite before but didn't like it's abstraction so I went with Webpack 5.

After building out the basic architecture, I then considered how I would deploy it. I have deployed on aws in the past but I wanted to use a free option. I have used vercel before but decided I wanted to use github pages for their integrated deployment support and the process seemed very straightforward. 

Once I had a successful deployment, all there was left to do was build out all the features and that is what you see here. 

## How To Run

- npm install
- npm build 
- npm run dev


<div align='center'>

## Made Using

</div>
<!-- https://ileriayo.github.io/markdown-badges/#markdown-badges -->
<div align='center'>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

</div>

</br>
With a bit more time, I would do a couple things:

- Add more testing.
- Implement routing using react router and build out a few simple static pages for the "About Us" and "Contact" links in the navigation bar.
- Create a dropdown for the "Products" link in the navigation bar that would display categories scraped from the Searchspring API.
- More accessibility for screen readers, refining the semantic HTML, and adding more robust "tab" navigation.


Connect with me on LinkedIn
</br>
[![LinkedIn](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/j-easton-miller/) 