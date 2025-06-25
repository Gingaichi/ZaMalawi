# 🛒 Za Malawi – E-commerce Platform for Malawian Businesses

Visit website over here
https://za-malawi.vercel.app/
![image](https://github.com/user-attachments/assets/89301cc8-503c-48a0-8585-adc9a8fe74f4)


Za Malawi is an e-commerce web application built to support and empower local businesses in Malawi. It has secue authentication and Stripe-powered payments.

## 🌍 Purpose

This project aims to digitize local commerce in Malawi by giving small businesses an easy way to sell online.

---

## 🛠️ Tech Stack Used

- **Next.js** – React framework for server-side rendering and routing
- **Supabase** – Backend-as-a-service for authentication
- **Stripe** – Secure payment gateway integration
- **Zustand** – Lightweight state management (used for cart functionality)
- **Tailwind CSS** – Used forrapid UI development

---

## ✨ Features

- ✅ User registration & login (Supabase Auth)
- ✅ Browse & view featured products
- ✅ Add to cart & checkout flow
- ✅ Stripe payment and checkout integration

---


## 🚀 Getting Started Locally

### 1. Clone the repo

### 2. Install dependencies

npm install

### 3. Set up environment variables
Create a .env.local file with the following values
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
STRIPE_SECRET_KEY=your-stripe-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key

You can find your Supabase keys in your Supabase project's dashboard under Project Settings

### 4. Run the development server
npm run dev



```bash
git clone https://github.com/your-username/za-malawi.git
cd za-malawi
