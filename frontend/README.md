🗂 Pages You Need

Think of these as the main routes in your app (e.g., /login, /dashboard).

Login Page

Simple login form (username + password)

Redirect to dashboard after successful login

Dashboard Page

Summary of total tenants, rooms, due dates, unpaid balances

Quick links to other pages

Tenants Page

List of all tenants (name, room, balance, due date)

Buttons for Add / Edit / Delete tenant

Rooms Page

List of rooms (room number, capacity, status: occupied/vacant)

Option to add new room or update room info

Payments Page

Record new payments

View history of payments by tenant

Reports Page (optional but nice)

Summary of income by month

List of overdue tenants

Settings Page (optional)

Change password (your admin account)

Customize room rates

🧩 Components You Need

These are reusable UI parts you can use inside your pages.

Navbar / Sidebar – navigation links to pages

TenantCard – shows tenant info in a card layout

RoomCard – shows room info (occupied/vacant)

Form Components

TenantForm – add/edit tenant

RoomForm – add/edit room

PaymentForm – record payment

Table Component – reusable table for listing tenants/payments

Modal Component – for confirming delete actions

Alert / Toast – for showing success/error messages

🔑 Suggested Flow

Start with Login Page → simple authentication (hardcode user for now)

Create Dashboard Page → show counts (can be fake data first)

Build Tenants Page → CRUD functionality (start with local state before adding backend)

Add Rooms & Payments Pages once tenants page works
