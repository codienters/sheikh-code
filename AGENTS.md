# Sheikh CLI Project

## Project Overview
A Next.js-based web CLI application using AI SDK and Clerk for authentication.

## Development Setup
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Environment Variables
Required environment variables:
- OPENAI_API_KEY: Your OpenAI API key
- CLERK_SECRET_KEY: Your Clerk secret key
- CLERK_PUBLISHABLE_KEY: Your Clerk publishable key

## Project Structure
- `/app`: Next.js App Router pages and API routes
- `/src`: Core application code
  - `/components`: React components
  - `/app`: App-specific components and layouts

## Testing Instructions
Run tests with:
```bash
pnpm lint
```

## Code Style Guidelines
- Use TypeScript for all new code
- Follow existing component patterns
- Use Tailwind CSS for styling
- Keep components modular and reusable

## Pull Request Guidelines
1. Ensure all tests pass
2. Follow semantic commit messages
3. Update documentation as needed
4. Add appropriate tests for new features