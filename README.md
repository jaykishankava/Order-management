Order Management System
This project is a React-based Order Management System that includes user authentication, product catalog browsing, a cart, and an admin panel for managing products. It is built using Redux for state management and React Router for navigation.

Features
User Authentication:

Users can sign up and log in using their credentials.
Admins and customers have different roles with specific access control (admin panel for admins and product catalog for customers).
Product Catalog:

A product catalog where customers can view available products.
Customers can add products to their cart and view stock availability.
Admin Panel:

Admins can manage products (add, edit, and delete).
Admins are alerted to low-stock products (stock below a set threshold).
All product data is stored and retrieved from localStorage.
Cart:

Customers can add items to their cart and view them in a separate cart page.
Prevents duplicate products from being added to the cart.
Private Routes:

Certain pages like the admin panel and cart are restricted and accessible only to authenticated users.
Tech Stack
Frontend: React, Redux, React Router, Bootstrap (for styling)
State Management: Redux with createSlice for product and cart handling
Storage: localStorage for storing user, product, and cart information
Key Features and Walkthrough
User Authentication
Sign Up: New users can sign up, and their details are stored in localStorage. If an email is already registered, an alert is shown.
Login: Users can log in by providing their credentials. Depending on the user role, the app redirects them to either the product catalog or the admin panel.
Product Catalog
Customers can browse the catalog and view product details, such as price and stock availability.
A customer can add a product to the cart, but duplicate products are prevented from being added.
Admin Panel
Product Management: Admins can add new products, update existing ones, or delete products.
Low Stock Alert: Admins are notified about products that have a low stock threshold (set to 5 by default).
Cart Management
The cart allows customers to review the items they've added, remove them, or proceed to checkout (if implemented).
Private Routes
Certain routes like /admin and /cart are protected and require the user to be authenticated.
Future Enhancements
Implementing a backend for real-time data management.
Adding order placement and tracking functionality.
Enhancing the user interface with more animations and features.
Adding tests using Jest and React Testing Library.