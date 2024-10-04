![Screenshot (415)](https://github.com/user-attachments/assets/aff09054-a3cd-4012-93be-445ad4e2171f)
![Screenshot (416)](https://github.com/user-attachments/assets/7b9e5bb7-6b0a-4f64-ae64-31a68bafbbad)
![Screenshot (417)](https://github.com/user-attachments/assets/0ce9c56a-cd6c-4612-b18d-b1d16c04ed40)
![Screenshot (418)](https://github.com/user-attachments/assets/331cd0c3-9d37-49a6-9345-6ab910365c5c)
![Screenshot (419)](https://github.com/user-attachments/assets/c534eeb0-3508-43a2-8f2d-a9038ece8b84)
![Screenshot (420)](https://github.com/user-attachments/assets/7398b6c4-b9c9-4558-b44c-0b4d08fc2761)
![Screenshot (421)](https://github.com/user-attachments/assets/266b77ef-0f84-4320-97fb-9263c04022d5)
![Screenshot (422)](https://github.com/user-attachments/assets/8f8c518b-5137-4e4e-828d-9d15aeeb2626)
![Screenshot (423)](https://github.com/user-attachments/assets/50a21c2e-a862-44f0-972c-47bdd76941a9)
![Screenshot (424)](https://github.com/user-attachments/assets/a6382a24-2438-4d42-8fc2-0c513455c680)
![Screenshot (425)](https://github.com/user-attachments/assets/f0089be6-24a1-4862-9600-ff43b2c13251)
![Screenshot (426)](https://github.com/user-attachments/assets/3c02f169-c2e9-439f-a6e2-cead79e7f8e8)
![Screenshot (428)](https://github.com/user-attachments/assets/ef2134e6-b925-401a-aa20-116dc54bc7ff)
![Screenshot (430)](https://github.com/user-attachments/assets/7552bd48-17f4-4603-b9d5-34ed8cc21a07)
![Screenshot (431)](https://github.com/user-attachments/assets/4d014fdd-5ade-478e-9031-e70c479c582f)
![Screenshot (432)](https://github.com/user-attachments/assets/ffb7cc44-d728-46c0-9f30-d7179eb9eea5)
![Screenshot (433)](https://github.com/user-attachments/assets/6f7b94aa-2f2f-492f-9b6f-d95538ab7416)
![Screenshot (434)](https://github.com/user-attachments/assets/954a3832-db3f-4483-b612-8f9285467a18)
![Screenshot (435)](https://github.com/user-attachments/assets/3ac5b48d-e3c2-482a-9882-a18535ee62e2)
![Screenshot (436)](https://github.com/user-attachments/assets/52579efa-df9b-428e-a5d1-fb400e53c212)
![Screenshot (429)](https://github.com/user-attachments/assets/789d0810-5bd6-4154-ac54-5fc09a9e6583)
# ET Gebeya eCommerce Platform (v2)

> E-Commerce platform built with the MERN stack & Redux.


- [Features](#features)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies (frontend & backend)](#install-dependencies-frontend--backend)
  - [Run](#run)
- [Build & Deploy](#build--deploy)
  - [Seed Database](#seed-database)
    - [A final note:](#a-final-note)


## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

yofinat@email.com (Admin)
1234

yosi@email.com (Customer)
1234

nati@email.com (Customer)
1234
```

## A final note:

Vite requires you to name React component files using the `.jsx` file
type, so you won't be able to use `.js` for your components. The entry point to
your app will be in `main.jsx` instead of `index.js`

And that's it! You should be good to go with the course using Vite.

