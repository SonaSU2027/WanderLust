# WanderLust
This is a Project which is similar to airbnb website
WanderLust is a full-stack web application designed for travel enthusiasts to explore, share, and review travel listings. It allows users to browse different locations, view detailed listings with images, descriptions, and prices, and post reviews about their experiences. The platform integrates user authentication, session management, and secure storage of data on MongoDB Atlas.

Key Features:

User Authentication:

Secure signup and login system using Passport.js and local strategy.

Passwords are hashed and stored securely with Mongoose’s passport-local-mongoose.

Listings Management:

Users can create, edit, and delete travel listings.

Each listing can include title, description, images, price, and location.

Integrated Mapbox to display listing locations on an interactive map.

Reviews:

Authenticated users can post reviews for listings.

Reviews are stored in MongoDB and displayed under each listing.

Image Storage:

Integrated Cloudinary for secure image uploads and storage.

Users can upload multiple images for each listing.

Session Management:

User sessions are stored in MongoDB using connect-mongo for persistence.

Secure session cookies with configurable expiration.

Flash Messaging:

Provides feedback to users on actions like successful login, signup, or form errors.

Responsive UI:

Designed with EJS templates and Bootstrap (or your preferred frontend CSS) for a clean, responsive interface.

Search & Filters (Optional/Planned):

Users can search listings and filter by price or location (based on your earlier discussions).

Tech Stack:

Backend: Node.js, Express.js

Database: MongoDB Atlas

Authentication: Passport.js, express-session, connect-mongo

File Storage: Cloudinary

Frontend: EJS, HTML, CSS, Bootstrap

Maps & Location: Mapbox API

Deployment: Render

Project Highlights:

Secure and scalable design using modern Node.js technologies.

Fully deployed on Render, with MongoDB Atlas as the backend database.

Focus on user experience with interactive maps, session persistence, and dynamic content.
