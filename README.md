# Trek Snout - Dog Adoption & Rehoming Platform

A modern, accessible web platform dedicated to responsible dog rehoming with a focus on protection, prevention, and thorough vetting of potential adopters.

## Features

- 🐕 **Adoptable Dogs Showcase**: Browse available dogs with detailed profiles
- 🏠 **Rehoming Services**: Responsible rehoming process with thorough screening
- 🔍 **Lost Dog Network**: Community-powered lost dog search and reporting system
- 📱 **Mobile-First Design**: Fully responsive across all devices
- ♿ **Accessibility**: WCAG 2.1 Level AA compliant
- 🌙 **Dark Mode**: Optimized dark theme for better visibility

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Components**: Radix UI primitives with shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **State Management**: React Hooks
- **Deployment**: Netlify (with middleware support)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/trek-snout.git
   cd trek-snout
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file to set the required values:
   ```
   # Application
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # Netlify webhooks (if using)
   NETLIFY_WEBHOOK_SECRET=your_webhook_secret
   WEBHOOK_URL=http://localhost:3000/api/webhooks/netlify
   
   # Deployment
   NETLIFY_SITE_ID=your_netlify_site_id
   NETLIFY_AUTH_TOKEN=your_netlify_auth_token
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Make sure the required images are in the public directory:
   ```bash
   mkdir -p public/images
   # Download the hero image (you can use any dog image from Unsplash)
   curl -L "https://images.unsplash.com/photo-1552053831-71594a27632d" --output public/images/hero-dog.jpg
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
trek-snout/
├── app/                   # Next.js 13 app directory
│   ├── about/            # About page
│   ├── dogs/             # Adoptable dogs listings
│   ├── apply/            # Adoption application
│   ├── lost-dogs/        # Lost dog reporting system
│   └── rehoming/         # Rehoming services
├── components/           # Reusable components
│   ├── features/        # Feature-specific components
│   └── ui/              # UI components
├── lib/                 # Utility functions
├── hooks/              # Custom React hooks
├── public/             # Static assets
│   └── images/         # Images including hero-dog.jpg
├── data/               # Data files like adoptables.ts
└── types/              # TypeScript type definitions
```

## Deployment

This project is set up for deployment with Netlify:

1. The site automatically builds and deploys when changes are pushed to the main branch
2. Build configuration is specified in `netlify.toml`
3. Make sure to configure the Environment Variables in Netlify settings

### Manual Deployment

If needed, you can manually trigger a build from the command line:

```bash
npm run build
netlify deploy --prod
```

## Key Features

### Adoption System
- Detailed dog profiles with medical history
- Multi-step application process
- Reference checking system
- Post-adoption support

### Lost Dog Network
- Real-time sighting reports
- Map-based search
- Alert system
- Community engagement tools

### Rehoming Services
- Thorough screening process
- Behavioral assessment
- Home compatibility matching
- Ongoing support

## Troubleshooting

If you encounter issues:

1. **Image loading errors**: Make sure the required images are in the `public/images` directory
2. **Middleware errors**: This project uses Next.js middleware, which is not compatible with static export. Make sure `output: 'export'` is not in your `next.config.js`
3. **API errors**: Check that your environment variables are set correctly

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Dog photos from [Unsplash](https://unsplash.com)
- Icons from [Lucide Icons](https://lucide.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)

## Contact

For questions or support, please email [help@treksnout.com](mailto:help@treksnout.com).