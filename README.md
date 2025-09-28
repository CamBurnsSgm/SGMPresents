SGM Presents – Site Skeleton

This repository contains a minimal skeleton for the SGM Presents website. It is built with Next.js and Tailwind CSS. The structure is configured for the App Router (/app directory) and ready to be extended with dynamic content via a headless CMS such as Sanity.

Getting started

Install dependencies

Ensure that you have Node.js installed. Then run the following commands in the project root:

npm install
npm run dev
Open the app

Navigate to http://localhost:3000 in your browser to view the development version of the site.

Customise your content

Replace the placeholder text in the pages inside app/ with your own copy. You can also modify the navigation, colours and layout in app/layout.tsx and tailwind.config.js.

Integrate a CMS

This scaffold is designed to work with a headless CMS. To use Sanity:

Create a new Sanity project (see Sanity docs for help).
Define your content schema (e.g., posts, authors, services) in a sanity folder at the project root.
Use the Sanity client in your Next.js pages to fetch and display data.
Deploy

Deploy the site to a provider such as Vercel. The package.json scripts are configured for automatic builds and static optimisation.

Next steps

Add dynamic routes for blog posts and articles.
Replace the grid placeholders on the home page with images from your content.
Hook up the contact form to an email provider (e.g., Resend or Formspree).
Configure analytics and tracking IDs in next.config.js or environment variables as needed.
Feel free to build upon this foundation to create a polished, content‑driven site for the SGM Presents network.
