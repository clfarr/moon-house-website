# Moon House - Coffee, Games & Grub

A modern, responsive website for Moon House, a board game cafe in Weaverville, CA. Built with Next.js, React, and Tailwind CSS.

## About Moon House

Moon House is a board game cafe serving local organic produce filled rice/quinoa bowls, Moon Pitas, sweet and savory protein waffles & a full organic coffee bar!

**Location:** 30891 State HWY 3, Weaverville, CA
**Contact:** 530-784-0408 | moonhousetrinity@gmail.com

## Features

### 1. Image Gallery
- Beautiful grid layout showcasing food photos
- Lightbox modal for viewing full-size images
- Responsive design for all device sizes
- Click-to-enlarge functionality

### 2. Online Ordering System
- Browse menu by categories (Pitas, Bowls, Waffles, Soups, Coffee, Tea, Drinks)
- Add items to cart with quantity controls
- Customer information form for order pickup
- Shopping cart with order summary
- Real-time total calculation

### 3. Rewards Program
- Sign up with name and email
- Earn 10 points per coffee/tea/drink purchase
- Redeem free drinks at 100 points
- Progress tracking with visual progress bar
- Persistent storage using localStorage
- Points and purchase history tracking

### 4. Responsive Navigation
- Sticky header with logo
- Mobile-friendly hamburger menu
- Smooth scrolling to sections
- Brand colors (teal and yellow)

### 5. Contact Section
- Location and hours information
- Phone and email contact
- Google Maps integration
- List of offerings

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Image Optimization:** Next.js Image component

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd moon-house-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Google Cloud Platform

1. Install Google Cloud SDK
2. Build the Next.js app:
```bash
npm run build
```

3. Create an `app.yaml` file:
```yaml
runtime: nodejs20
env: standard
handlers:
  - url: /.*
    script: auto
    secure: always
```

4. Deploy to App Engine:
```bash
gcloud app deploy
```

### Alternative: Docker on Google Cloud Run

1. Create a `Dockerfile`:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

2. Build and deploy:
```bash
gcloud builds submit --tag gcr.io/[PROJECT-ID]/moon-house
gcloud run deploy moon-house --image gcr.io/[PROJECT-ID]/moon-house --platform managed
```

## Project Structure

```
moon-house-website/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Top navigation bar
│   │   ├── Hero.tsx          # Hero section with logo
│   │   ├── Gallery.tsx       # Food photo gallery
│   │   ├── Order.tsx         # Online ordering system
│   │   ├── Rewards.tsx       # Loyalty rewards program
│   │   ├── Contact.tsx       # Contact information
│   │   └── Footer.tsx        # Footer component
│   ├── globals.css           # Global styles and theme
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── public/
│   └── images/
│       ├── food/             # Food photos
│       ├── menus/            # Menu images
│       ├── about/            # Restaurant photos
│       └── Moon House Logo.jpg
└── README.md
```

## Brand Colors

- **Primary Teal:** `#1e5a5a`
- **Teal Dark:** `#154545`
- **Teal Light:** `#2d7a7a`
- **Yellow:** `#f5d547`
- **Yellow Dark:** `#e6c436`
- **Cream:** `#fefdf8`

## Features to Add (Future)

- Backend API for order management
- Payment integration
- User authentication for rewards
- Admin dashboard
- Email notifications
- Online reservation system for board game tables
- Board game library catalog

## License

© 2025 Moon House. All rights reserved.

## Contact

For questions or support regarding this website, contact:
- Email: moonhousetrinity@gmail.com
- Phone: 530-784-0408
