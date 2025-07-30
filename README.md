# 💳 Razorpay + MyOrderBox Integration Gateway

A seamless payment gateway built using **Next.js (App Router)** that integrates **Razorpay** as a custom payment method for **MyOrderBox / ResellerClub / LogicBoxes** domains and hosting platforms.

---

## ✨ Features

- ✅ **Custom Razorpay Checkout** integration for MyOrderBox
- 🔐 **Checksum validation** (incoming and outgoing) using secure hashing
- 📦 **Full payment lifecycle**:
  - Pre-payment order summary
  - Razorpay Checkout popup
  - Post-payment `/status` page with confirmation
  - Auto and manual redirect to MyOrderBox using secure checksum
- 📱 Fully **responsive UI**, designed using **shadcn/ui** + **Tailwind CSS**
- 🖼️ Razorpay logo in navbar on all pages
- 💫 (Optional) Fancy 3D animated space scene background (React Three Fiber)

---

## 🧱 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS + shadcn/ui**
- **Razorpay Node SDK**
- **Crypto (Node.js) for checksum**
- **React Three Fiber (Optional Visuals)**

---

## 📁 Project Structure

```
/app
  /pay            # Payment form page (/pay)
  /status         # Payment status + post-payment checksum redirect
  /success        # Optional thank you page
  /api
    /razorpay
      route.ts    # Razorpay order creation (server action)
    /verify-checksum
      route.ts    # MyOrderBox checksum validation

/components
  Navbar.tsx      # Razorpay logo navbar
  RazorpayForm.tsx # Payment initiation form
  StatusScreen.tsx # Payment verification & status display
  SpaceTrailBackground.tsx # (Optional) 3D space scene

/lib
  razorpay.ts     # Razorpay instance setup
  checksum.ts     # Checksum utilities (create, verify)

.env.local        # Razorpay keys + MyOrderBox secret
```

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/yourname/razorpay-myorderbox-gateway.git
cd razorpay-myorderbox-gateway
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure .env.local

Create a `.env.local` file:

```env
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
MYORDERBOX_SECRET_KEY=your_myorderbox_secret_key
```

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```
git clone https://github.com/yourname/razorpay-myorderbox-gateway.git
```

```
cd razorpay-myorderbox-gateway
```

2. Install dependencies

```npm install

```

3. Configure .env.local
   Create a .env.local file:

```
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

## 🧪 How the Flow Works

### 🔗 MyOrderBox redirects the user to:

```
https://yourdomain.com/pay?order_id=xxxx&amount=999&name=John&email=x&phone=...
```

### 🧾 /pay page:

- Verifies checksum (optional for incoming)
- Shows order summary and amount
- Loads Razorpay Checkout when user clicks "Pay Now"

### 💸 After payment:

- Razorpay callback or redirect hits /status
- Server verifies Razorpay payment ID and signature
- Prepares checksum using your MYORDERBOX_SECRET_KEY
- Auto + manual redirect back to MyOrderBox with payment_status=success&checksum=...

### ✅ Example Success Redirect

```
https://yourdomain.com/status?razorpay_payment_id=...&razorpay_order_id=...
```

### ✅ Then redirects to:

```
https://publicapi.myorderbox.com/servlet/CustomPaymentReceiptServlet?payment_status=success&checksum=generatedChecksum&order_id=...
```

## 🧪 Local Development

Run your dev server:

```bash
npm run dev
```

Open:

```
http://localhost:3000/pay?order_id=1234&amount=1000&name=Test+User&email=test@example.com&phone=9999999999
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🔒 Security

- All checksums are created using HMAC SHA-256
- Razorpay signature verification is server-side
- Never expose secrets on the client

## 🎨 Optional Visual Add-on

To add the animated space background with stars, planets, and trails:

```tsx
<SpaceTrailBackground />
```

📦 Requires:

```bash
npm install @react-three/fiber @react-three/drei @react-three/postprocessing three
```

## 📄 License

MIT

## 🙋 Support

If you're integrating with LogicBoxes or ResellerClub and need custom support or domain-specific logic, feel free to open an issue or contact the maintainer.
