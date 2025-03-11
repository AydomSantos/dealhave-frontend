# DealHave E-commerce - UML Use Case Documentation

## Overview
This document describes the Use Case model for the DealHave E-commerce system, detailing the interactions between actors and the system's functionalities.

## Actors

### Primary Actors
- **Customer**: End-user who browses products, makes purchases, and manages their account
- **Administrator**: System manager who manages products, users, and monitors system operations
- **Payment System**: External system (Mercado Pago) that processes payments

## Use Cases

### Customer Use Cases

1. **User Account Management**
   - **Register Account**
     - Actor: Customer
     - Description: New users can create an account
     - Pre-conditions: User is not registered
     - Basic Flow:
       1. User provides personal information
       2. System validates information
       3. System creates account
       4. System sends confirmation email

   - **Login**
     - Actor: Customer
     - Description: Registered users can access their account
     - Pre-conditions: User has registered account
     - Basic Flow:
       1. User enters credentials
       2. System validates credentials
       3. System grants access

2. **Shopping Operations**
   - **Browse Products**
     - Actor: Customer
     - Description: Users can view available products
     - Basic Flow:
       1. User accesses product catalog
       2. System displays products
       3. User can filter and sort products

   - **Manage Cart**
     - Actor: Customer
     - Description: Users can add/remove items from cart
     - Pre-conditions: User is logged in
     - Basic Flow:
       1. User selects products
       2. System updates cart
       3. User can modify quantities

   - **Checkout**
     - Actor: Customer, Payment System
     - Description: Users can complete purchase
     - Pre-conditions: Cart has items, User is logged in
     - Basic Flow:
       1. User reviews cart
       2. User provides shipping information
       3. User selects payment method
       4. System processes payment via Mercado Pago
       5. System confirms order

### Administrator Use Cases

1. **Product Management**
   - **Add/Edit Products**
     - Actor: Administrator
     - Description: Manage product catalog
     - Pre-conditions: Admin is authenticated
     - Basic Flow:
       1. Admin enters product details
       2. System validates information
       3. System updates catalog

2. **Order Management**
   - **Process Orders**
     - Actor: Administrator
     - Description: Handle customer orders
     - Basic Flow:
       1. Admin reviews orders
       2. Updates order status
       3. Manages shipping information

## Relationships

### Include Relationships
- Checkout → Validate Cart
- Register Account → Validate User Data
- Add Product → Update Inventory

### Extend Relationships
- Login → Password Recovery
- Checkout → Apply Discount
- Browse Products → Advanced Search

### Generalizations
- Guest User → Registered Customer
- Basic Admin → Super Admin

## System Boundaries

### Internal System
- User Interface
- Product Catalog
- Shopping Cart
- Order Management

### External Systems
- Payment Processing (Mercado Pago)
- Email Service
- Shipping Service

## Notes
- All use cases assume the system is operational
- Security measures are implemented for all authenticated operations
- System maintains audit logs for all administrative actions
- Real-time inventory updates are performed for all product-related operations

## Constraints
- Users must be authenticated for sensitive operations
- Payment processing must be completed before order confirmation
- Product inventory must be checked before order completion
- Admin actions require appropriate authorization levels

This Use Case documentation follows standard UML notation and provides a comprehensive overview of the DealHave E-commerce system's functionality and actor interactions.