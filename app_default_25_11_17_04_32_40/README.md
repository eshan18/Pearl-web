# PearlyGlow Innovations Pvt Ltd - Dental Instruments Ecommerce Frontend

## Project Description
This is the frontend application for PearlyGlow Innovations Pvt Ltd, a leading ecommerce platform specializing in high-quality dental instruments. Built with Next.js 13 using the App Router, React, and Tailwind CSS, this application delivers a fast, responsive, and accessible user experience. It includes features such as tiered product listings, detailed product pages, city and state based landing pages, a checkout flow, order tracking, feedback, and contact forms, along with interactive UI components.

## Features
- Responsive design optimized for mobile and desktop
- Tiered product catalog with filtering and detailed product pages
- City and state landing pages with localized products and events
- Checkout flow with validation and order summary
- Payment result pages with clear success/failure states
- Order tracking with visual timeline stepper
- User feedback and contact forms with validation
- Sticky header with mega-menu and mobile drawer navigation
- Brand-themed UI using Tailwind CSS with custom colors and fonts
- Floating chatbot widget placeholder for future integration
- SEO-friendly structure with accessible navigation

## Prerequisites
- Node.js version 18 or higher
- npm (comes with Node.js) or yarn package manager

## Installation
1. Clone the repository:
   
       git clone https://github.com/yourusername/pearlyglow-innovations-frontend.git
2. Navigate into the project directory:
   
       cd pearlyglow-innovations-frontend
3. Install dependencies:
   
       npm install
   or if you prefer yarn:
   
       yarn install

## Configuration
- Copy `.env.example` to `.env.local` and update environment variables as needed. For example:
  
      API_URL=https://api.pearlyglow.com

- Currently, the app uses static placeholder data for products and events. To integrate with a backend API, extend the data fetching logic in the respective pages.

## Running the Application

### Development Mode
Start the development server with hot reloading:

    npm run dev

or

    yarn dev

Open your browser and visit `http://localhost:3000`.

### Production Build
Build the application for production:

    npm run build

Start the production server:

    npm start

The app will be available at `http://localhost:3000`.

## Folder Structure
- `app/` - Contains Next.js App Router pages, layouts, and components
  - `components/` - Reusable UI components (Header, Footer, ProductCard, TierCard, etc.)
  - `product/`, `city/`, `state/` - Dynamic routes for product details and location-based pages
  - `checkout/`, `payment/`, `track-order/`, `feedback/`, `contact/` - Feature pages
  - `page.tsx` - Homepage component
  - `layout.tsx` - Root layout wrapping all pages
- `styles/` - Global CSS and Tailwind CSS imports and configurations
- `.env.example` - Example environment configuration

## Styling and Theming
- Tailwind CSS is used with a custom brand color palette:
  - brandBlue: #0068B5
  - brandBlueDark: #0A3E8C
  - brandGreen: #00A88F
  - brandAqua: #15DADC
  - brandGold: #F5A623
  - brandRed: #D42A2A
  - brandBg: #F6F8FA
  - brandText: #1C1C1C
  - brandMuted: #707070
  - white: #FFFFFF
- Fonts:
  - Headings use Poppins and Montserrat imported from Google Fonts
  - Body text uses Inter and Roboto fonts
- Focus outlines are styled consistently with brandBlue color for accessibility

## Extending Product Data
- Placeholder data is used in product and event pages.
- To integrate real data:
  - Implement API calls in page components or server actions using environment variables for API URLs.
  - Replace product and event placeholders with fetched data.
  - Ensure proper error handling and loading states are added.

## Troubleshooting
- **Styles not loading?**
  - Make sure Tailwind CSS is installed correctly and the content paths in `tailwind.config.js` include all component and page files.
- **Images not displaying?**
  - Check the `next.config.js` for allowed external image domains. Add any new image source domains you use.
- **TypeScript errors?**
  - Run `npm run build` or `yarn build` to see detailed error messages and fix accordingly.
- **API issues?**
  - Verify your `.env.local` configuration and backend API availability.

## License
This project is licensed under the MIT License.

---

Thank you for choosing PearlyGlow Innovations Pvt Ltd frontend application.
For support, please contact support@pearlyglow.com.
