# MyOrderBox-Razorpay Payment Gateway Integration

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/razorpay-myorderbox-pgp)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ujjwalsittu/razorpay-myorderbox-pgp)

A modern, secure payment gateway integration that connects Razorpay with MyOrderBox payment processing system. Built with Next.js, TypeScript, and Tailwind CSS for a seamless payment experience.

## 🌟 Live Demo

**🚀 [View Live Application](https://razorpay-myorderbox-pgp.vercel.app/)**

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Payment Flow](#payment-flow)
- [Development](#development)
- [Deployment](#deployment)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🎯 Core Features

- **Secure Payment Processing** - Razorpay integration with signature verification
- **MyOrderBox Integration** - Complete checksum-based validation system
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Type Safety** - Full TypeScript implementation
- **Modern UI** - shadcn/ui component library integration

### 🔒 Security Features

- **Checksum Verification** - MD5 hash validation for transaction integrity
- **Payment Signature Validation** - Razorpay webhook signature verification
- **Environment Security** - Sensitive data stored in environment variables
- **Input Sanitization** - Proper data validation and sanitization

### 🚀 User Experience

- **Auto-redirect** - 5-second countdown with manual override option
- **Loading States** - Clear feedback during payment processing
- **Error Handling** - Comprehensive error messages and fallbacks
- **Mobile Optimized** - Seamless experience across all devices

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with Pages Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Payment Gateway**: [Razorpay](https://razorpay.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Razorpay account (test/live credentials)
- MyOrderBox secure key

### Installation

1. **Clone the repository**:

```
git clone  [https://github.com/yourusername/razorpay-myorderbox-pgp.git](https://github.com/yourusername/razorpay-myorderbox-pgp.git)
cd razorpay-myorderbox-pgp
```

2. **Install dependencies**:

```
npm install
```

3. **Set up environment variables**:

```
cp .env.example .env.local
```

Update `.env.local` with your credentials:

```
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
MYORDERBOX_KEY=your_32_bit_secure_key
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
```

4. **Run the development server**:

```
npm run dev

```

5. **Open your browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

| Variable                      | Description                       | Required | Example                |
| ----------------------------- | --------------------------------- | -------- | ---------------------- |
| `RAZORPAY_KEY_ID`             | Razorpay API Key ID               | ✅       | `rzp_test_1234567890`  |
| `RAZORPAY_KEY_SECRET`         | Razorpay API Secret               | ✅       | `secret_key_here`      |
| `MYORDERBOX_KEY`              | 32-bit MyOrderBox secure key      | ✅       | `your_32_bit_key_here` |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Public Razorpay Key (client-side) | ✅       | `rzp_test_1234567890`  |

## 📁 Project Structure

```
razorpay-myorderbox-pgp/
├── 📁 components/
│ ├── 📁 ui/ # shadcn/ui components
│ │ ├── button.tsx # Button component
│ │ ├── card.tsx # Card components
│ │ ├── input.tsx # Input component
│ │ └── label.tsx # Label component
│ └── navbar.tsx # Navigation component
├── 📁 lib/
│ └── utils.ts # Utility functions & checksum logic
├── 📁 pages/
│ ├── 📁 api/ # API endpoints
│ │ ├── create-order.ts # Razorpay order creation
│ │ └── verify-payment.ts # Payment verification
│ ├── index.tsx # Home page (payment form)
│ ├── pay.tsx # MyOrderBox payment processing
│ ├── status.tsx # Payment status & redirect
│ └── thanks.tsx # Success/failure page
├── 📁 styles/
│ └── globals.css # Global styles & Tailwind
├── 📁 public/ # Static assets
├── .env.local # Environment variables
├── next.config.js # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json # Dependencies & scripts
```

## 🔌 API Endpoints

### POST `/api/create-order`

Creates a new Razorpay order for payment processing.

**Request Body**:

```
{
"amount": 1000,
"currency": "INR",
"receipt": "receipt_123"
}
```

**Response**:

```
{
"id": "order_123",
"amount": 100000,
"currency": "INR",
"receipt": "receipt_123"
}
```

### POST `/api/verify-payment`

Verifies Razorpay payment signature for security.

**Request Body**:

```
{
"razorpay_order_id": "order_123",
"razorpay_payment_id": "pay_123",
"razorpay_signature": "signature_123"
}
```

**Response**:

````{
"success": true,
"message": "Payment verified successfully"
}```


## 💳 Payment Flow

### 1. Direct Payment (Home Page)
```User Input → Razorpay Order → Payment → Verification → Thanks Page
````

### 2. MyOrderBox Integration

```MyOrderBox → /pay → Checksum Verification → Razorpay → /status → Auto Redirect

```

## 🔄 Detailed Payment Process

### MyOrderBox Integration Flow

1. **Incoming Request**: MyOrderBox sends payment parameters to `/pay`
2. **Checksum Verification**: Server validates the request integrity
3. **Payment Display**: User sees payment details and amount
4. **Razorpay Processing**: User completes payment via Razorpay
5. **Status Page**: Shows payment result with 5-second countdown
6. **Auto Redirect**: Sends result back to MyOrderBox with proper checksum

### Parameters for `/pay` endpoint:

| Parameter                  | Description                   | Required |
| -------------------------- | ----------------------------- | -------- |
| `paymenttypeid`            | Payment type identifier       | ✅       |
| `transid`                  | Unique transaction ID         | ✅       |
| `userid`                   | User identifier               | ✅       |
| `usertype`                 | Customer or Reseller          | ✅       |
| `transactiontype`          | Type of transaction           | ✅       |
| `sellingcurrencyamount`    | Amount in selling currency    | ✅       |
| `accountingcurrencyamount` | Amount in accounting currency | ✅       |
| `redirecturl`              | URL to redirect after payment | ✅       |
| `checksum`                 | MD5 hash for verification     | ✅       |
| `description`              | Payment description           | ❌       |

## 🔨 Development

### Available Scripts

Development server

`npm run dev`

Production build
`npm run build`

Start production server
`npm start`

Run linter
`npm run lint`

### Development Guidelines

1. **Code Style**: Follow TypeScript best practices
2. **Components**: Use shadcn/ui components when possible
3. **Styling**: Use Tailwind CSS utility classes
4. **API Routes**: Keep API logic separate from components
5. **Error Handling**: Always provide user-friendly error messages

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main branch

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/razorpay-myorderbox-pgp)

### Manual Deployment

Build the application

```npm run build

```

Start production server

```npm start

```

## 🔒 Security

### Security Measures Implemented

- **Checksum Validation**: All MyOrderBox transactions verified with MD5 hash
- **Payment Signature Verification**: Razorpay webhooks validated
- **Environment Variables**: Sensitive data never exposed to client
- **Input Sanitization**: All user inputs properly validated
- **HTTPS Only**: All payment processing over secure connections

### Security Best Practices

1. **Never expose** API secrets to the frontend
2. **Always validate** payment signatures on the server
3. **Use environment variables** for all sensitive configuration
4. **Implement proper** error handling without exposing internal details
5. **Regular security audits** of dependencies

## 🧪 Testing

### Test the Application

1. **Home Page Testing**:

   - Visit `/` and test the payment form
   - Use Razorpay test credentials for safe testing

2. **MyOrderBox Integration Testing**:

   - Use the `/pay` endpoint with proper parameters
   - Verify checksum validation works correctly

3. **Mobile Testing**:
   - Test on various screen sizes
   - Verify touch interactions work properly

### Test Credentials

Use Razorpay test environment:

- **Test Card**: 4111 1111 1111 1111
- **CVV**: Any 3 digits
- **Expiry**: Any future date

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **Bundle Size**: Minimized with tree shaking
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic route-based splitting

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Setup for Contributors

Clone your fork
`git clone https://github.com/yourusername/razorpay-myorderbox-pgp.git`

Install dependencies

```npm install

```

Create environment file

```cp .env.example .env.local

```

Start development server
`npm run dev`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: [Create an issue](https://github.com/yourusername/razorpay-myorderbox-pgp/issues)
- **Discussions**: [Join discussions](https://github.com/yourusername/razorpay-myorderbox-pgp/discussions)

## 🙏 Acknowledgments

- [Razorpay](https://razorpay.com/) for the excellent payment gateway API
- [MyOrderBox](https://myorderbox.com/) for the integration specifications
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Vercel](https://vercel.com/) for seamless deployment

---

<div align="center">
  <p>Built with ❤️ using Next.js and TypeScript</p>
  <p>
    <a href="https://razorpay-myorderbox-pgp.vercel.app/">View Live Demo</a> •
    <a href="#quick-start">Get Started</a> •
    <a href="#contributing">Contribute</a>
  </p>
</div>
