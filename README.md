# AI CSS Generator

An intelligent CSS styles generator that helps developers create and preview CSS styles in real-time. Try it live at [ai-css-styles-generator.vercel.app](https://ai-css-styles-generator.vercel.app/).

Built with ❤️ by the [RuleCMS](https://rulecms.com) team.

## Features

- Real-time CSS generation
- Live preview functionality
- Option to add to existing styles or replace them
- Instant style validation
- Modern, user-friendly interface

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager
- Git

### Installation & Setup

#### Development Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ai-css-generator.git
```

2. Navigate to the project directory:

```bash
cd ai-css-generator
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Create a `.env.local` file in the root directory and add your environment variables:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

5. Start the development server:

```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Production Build

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

### Docker Support

If you prefer using Docker:

1. Build the Docker image:

```bash
docker build -t ai-css-generator .
```

2. Run the container:

```bash
docker run -p 3000:3000 ai-css-generator
```

### Project Structure

```
ai-css-generator/
├── components/        # React components
├── pages/            # Next.js pages
├── public/           # Static files
├── styles/           # CSS styles
├── utils/            # Utility functions
├── .env.local        # Environment variables
├── next.config.js    # Next.js configuration
└── package.json      # Project dependencies
```

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint for code linting
- `npm run test` - Runs the test suite (if configured)

### Deployment

This project is optimized for deployment on Vercel. To deploy:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure your environment variables
4. Deploy!

For other platforms, ensure you:

- Set up environment variables
- Configure build commands (`npm run build`)
- Set the Node.js version to 18.17 or later
