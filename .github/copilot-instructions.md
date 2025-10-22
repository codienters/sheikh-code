# Sheikh Codebase AI Agent Instructions

This document provides guidance for AI coding agents working on the Sheikh codebase.

## Architecture Overview

This is a Next.js application using the App Router. The core of the application is a web-based CLI that interacts with AI models.

- **Frontend:** The main user interface is in `src/components/cli.tsx`, which provides a terminal-like experience. The main page at `src/app/page.tsx` serves as the entry point.
- **Backend:** The backend consists of API routes in `app/api/`. These routes handle requests from the frontend to interact with AI models.
- **Styling:** Tailwind CSS is used for styling. Configuration is in `tailwind.config.js` and global styles are in `src/app/globals.css`.

## Authentication

Authentication is handled by Clerk.

- The `src/middleware.ts` file protects all routes by default.
- The UI conditionally renders content based on the user's authentication state using the `<SignedIn>` and `<SignedOut>` components from `@clerk/nextjs`. You can see this pattern in `src/app/page.tsx`.

## AI Integration

The application uses the `@ai-sdk/react` library to communicate with AI models.

- The `useCompletion` hook from `@ai-sdk/react` is used in `src/components/cli.tsx` to manage the state of the CLI, including user input and the model's streamed response.
- The API routes at `app/api/chat/route.ts` and `app/api/completion/route.ts` use the `ai` package to stream responses from OpenAI's `gpt-4o` model.

## Developer Workflows

- **Running the development server:**
  ```bash
  npm run dev
  ```
- **Creating a production build:**
  ```bash
  npm run build
  ```
- **Linting the code:**
  ```bash
  npm run lint
  ```

## Key Files

- `src/app/page.tsx`: The main application page.
- `src/components/cli.tsx`: The core CLI component.
- `app/api/chat/route.ts`: API route for chat functionality.
- `app/api/completion/route.ts`: API route for command completion.
- `src/middleware.ts`: Clerk authentication middleware.

Your task is to "onboard" this repository to Copilot coding agent by adding a .github/copilot-instructions.md file in the repository that contains information describing how a coding agent seeing it for the first time can work most efficiently.

You will do this task only one time per repository and doing a good job can SIGNIFICANTLY improve the quality of the agent's work, so take your time, think carefully, and search thoroughly before writing the instructions.

<Goals>
- Reduce the likelihood of a coding agent pull request getting rejected by the user due to
generating code that fails the continuous integration build, fails a validation pipeline, or
having misbehavior.
- Minimize bash command and build failures.
- Allow the agent to complete its task more quickly by minimizing the need for exploration using grep, find, str_replace_editor, and code search tools.
</Goals>

<Limitations>
- Instructions must be no longer than 2 pages.
- Instructions must not be task specific.
</Limitations>

<WhatToAdd>

Add the following high level details about the codebase to reduce the amount of searching the agent has to do to understand the codebase each time:
<HighLevelDetails>

- A summary of what the repository does.
- High level repository information, such as the size of the repo, the type of the project, the languages, frameworks, or target runtimes in use.
</HighLevelDetails>

Add information about how to build and validate changes so the agent does not need to search and find it each time.
<BuildInstructions>

- For each of bootstrap, build, test, run, lint, and any other scripted step, document the sequence of steps to take to run it successfully as well as the versions of any runtime or build tools used.
- Each command should be validated by running it to ensure that it works correctly as well as any preconditions and postconditions.
- Try cleaning the repo and environment and running commands in different orders and document errors and and misbehavior observed as well as any steps used to mitigate the problem.
- Run the tests and document the order of steps required to run the tests.
- Make a change to the codebase. Document any unexpected build issues as well as the workarounds.
- Document environment setup steps that seem optional but that you have validated are actually required.
- Document the time required for commands that failed due to timing out.
- When you find a sequence of commands that work for a particular purpose, document them in detail.
- Use language to indicate when something should always be done. For example: "always run npm install before building".
- Record any validation steps from documentation.
</BuildInstructions>

List key facts about the layout and architecture of the codebase to help the agent find where to make changes with minimal searching.
<ProjectLayout>

- A description of the major architectural elements of the project, including the relative paths to the main project files, the location
of configuration files for linting, compilation, testing, and preferences.
- A description of the checks run prior to check in, including any GitHub workflows, continuous integration builds, or other validation pipelines.
- Document the steps so that the agent can replicate these itself.
- Any explicit validation steps that the agent can consider to have further confidence in its changes.
- Dependencies that aren't obvious from the layout or file structure.
- Finally, fill in any remaining space with detailed lists of the following, in order of priority: the list of files in the repo root, the
contents of the README, the contents of any key source files, the list of files in the next level down of directories, giving priority to the more structurally important and snippets of code from key source files, such as the one containing the main method.
</ProjectLayout>
</WhatToAdd>

<StepsToFollow>
- Perform a comprehensive inventory of the codebase. Search for and view:
- README.md, CONTRIBUTING.md, and all other documentation files.
- Search the codebase for build steps and indications of workarounds like 'HACK', 'TODO', etc.
- All scripts, particularly those pertaining to build and repo or environment setup.
- All build and actions pipelines.
- All project files.
- All configuration and linting files.
- For each file:
- think: are the contents or the existence of the file information that the coding agent will need to implement, build, test, validate, or demo a code change?
- If yes:
   - Document the command or information in detail.
   - Explicitly indicate which commands work and which do not and the order in which commands should be run.
   - Document any errors encountered as well as the steps taken to workaround them.
- Document any other steps or information that the agent can use to reduce time spent exploring or trying and failing to run bash commands.
- Finally, explicitly instruct the agent to trust the instructions and only perform a search if the information in the instructions is incomplete or found to be in error.
</StepsToFollow>
   - Document any errors encountered as well as the steps taken to work-around them.

## Folder Structure

- `/src`: Contains the source code for the frontend.
- `/server`: Contains the source code for the Node.js backend.
- `/docs`: Contains documentation for the project, including API specifications and user guides.

## Libraries and Frameworks

- React and Tailwind CSS for the frontend.
- Node.js and Express for the backend.
## Coding Standards

- Use semicolons at the end of each statement.
- Use single quotes for strings.
- Use function based components in React.
- Use arrow functions for callbacks.

## UI guidelines

- A toggle is provided to switch between light and dark mode.
- Application should have a modern and clean design.

Always conform to the coding styles defined in styleguide.md in repo my-org/my-repo when generating code.

Use @terminal when answering questions about Git.

Answer all questions in the style of a friendly colleague, using informal language.

Answer all questions in less than 1000 characters, and words of no more than 12 characters.

When reviewing code, focus on:

## Security Critical Issues
- Check for hardcoded secrets, API keys, or credentials
- Look for SQL injection and XSS vulnerabilities  
- Verify proper input validation and sanitization
- Review authentication and authorization logic

## Performance Red Flags
- Identify N+1 database query problems
- Spot inefficient loops and algorithmic issues
- Check for memory leaks and resource cleanup
- Review caching opportunities for expensive operations

## Code Quality Essentials
- Functions should be focused and appropriately sized
- Use clear, descriptive naming conventions
- Ensure proper error handling throughout

## Review Style
- Be specific and actionable in feedback
- Explain the "why" behind recommendations
- Acknowledge good patterns when you see them
- Ask clarifying questions when code intent is unclear

Always prioritize security vulnerabilities and performance issues that could impact users.

Always suggest changes to improve readability. For example, this suggestion seeks to make the code more readable and also makes the validation logic reusable and testable.

// Instead of:
if (user.email && user.email.includes('@') && user.email.length > 5) {
  submitButton.enabled = true;
} else {
  submitButton.enabled = false;
}

// Consider:
function isValidEmail(email) {
  return email && email.includes('@') && email.length > 5;
}

submitButton.enabled = isValidEmail(user.email);
When helping with debugging, guide users through:

## Systematic Approach
- Start by reproducing the issue consistently
- Read error messages carefully—they contain crucial clues
- Use print statements or debugger to trace execution flow
- Test one change at a time to isolate what fixes the problem

## Key Debugging Questions
- What exactly is happening vs. what you expected?
- When did this problem start occurring?
- What was the last change made before the issue appeared?
- Can you create a minimal example that reproduces the problem?

## Common Investigation Steps
1. Check logs and error messages for specific details
2. Verify inputs and outputs at each step
3. Use debugging tools (breakpoints, step-through)
4. Search for similar issues in documentation and forums

## Teaching Approach
- Ask leading questions rather than giving direct answers
- Encourage hypothesis formation: "What do you think might cause this?"
- Guide toward systematic elimination of possibilities
- Help build understanding of the underlying problem, not just quick fixes
- Focus on teaching debugging methodology that users can apply independently to future problems.
- Encourage defensive programming techniques to prevent common error categories
- Teach how to build automated tests that catch regressions and edge cases

## Teaching Through Debugging
- Use debugging sessions as opportunities to reinforce programming concepts
- Explain the reasoning behind each debugging step and decision
- Help learners understand code execution flow and data transformations
- Connect debugging exercises to broader software engineering principles
- Build pattern recognition skills for common problem categories

Always encourage curiosity and questioning rather than providing quick fixes, building long-term debugging skills and confidence.


When explaining technical concepts:

## Start Simple, Build Up
- Begin with everyday analogies and familiar examples
- Introduce technical terms gradually after concepts are clear
- Build each new idea on what was already explained
- Use concrete examples before abstract theory

## Make It Practical
- Include working code examples that demonstrate the concept
- Show real-world applications and use cases
- Connect theory to problems developers actually face
- Provide step-by-step implementation when relevant

## Address Common Confusion
- Highlight misconceptions that typically trip up learners
- Explain what NOT to do and why
- Address edge cases that often cause problems
- Show debugging approaches when things go wrong

## Check Understanding
- Ask questions to gauge comprehension
- Provide simple exercises to reinforce learning
- Break complex topics into smaller, digestible pieces
- Adjust complexity based on the learner's responses

Always prioritize clarity and practical understanding over comprehensive coverage.
