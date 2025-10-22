# AGENTS.md

This file contains instructions and guidelines for AI agents working in this repository. Please read it carefully before starting any work.

## Table of Contents

1.  [Cline Workflow Creation](#cline-workflow-creation)
2.  [Pull Request Review Process](#pull-request-review-process)
3.  [Self-Improving Cline Reflection](#self-improving-cline-reflection)
4.  [Brainstorming Workspace Rules](#brainstorming-workspace-rules)
5.  [Engineering Principles](#engineering-principles)
6.  [Sequential Thinking Tool Usage](#sequential-thinking-tool-usage)
7.  [Memory Bank Protocol](#memory-bank-protocol)

---

## Cline Workflow Creation

### 1. Define Workflow Purpose

*   Ask the USER for the purpose of the new workflow.
*   Ask the USER for a concise name for the workflow.
*   Determine the appropriate filename using kebab-case format (e.g., `analyze-system-requirements.md`).
*   Inform the USER of the upcoming workflow file creation process and the main steps they will be asked to complete.

### 2. Define Task Objective

*   Ask the USER for the primary objective of the workflow. Remind the user to provide breadcrumbs of the inputs to be used, the output to be generated, and a generalization of the processing to formulate the outputs.
*   Ask the USER if they know what MCP servers will be required at this point by providing a list of Cline's active MCP server names.
*   Ask the USER what the expected output format will be (e.g., markdown file, code file, terminal output).
*   Formulate a clear, concise task objective statement (1-3 sentences) based on the USER's responses.

### 3. Outline Major Steps

*   Ask the USER to list the major steps in the workflow (3-7 steps recommended) and they will have an opportunity to provide more details later or let Cline determine this for them.
*   For each major step, determine the following:
    *   Required tools or resources
    *   Expected outputs or transitions to the next step

### 4. Define Detailed Substeps

*   For each major step identified and analyzed, present the user with how you intend to perform the step and ask for confirmation or clarification.

### 5. Generate Workflow File

*   Determine if the `.clinerules/workflows` directory exists. If not, create it.
*   Create a markdown file named `.clinerules/workflows/{{workflow-filename}}.md` with the following structure: i. Task definition with name attribute ii. Task objective section iii. Detailed sequence steps section with proper formatting iv. Proper tool references and formatting conventions.
*   Read the `.clinerules/workflow-template.md` file to ensure the new workflow follows all conventions.
*   Write the completed workflow file.
*   Present the USER with the completed workflow file and confirmation of its creation.

---

## Pull Request Review Process

### 1. Understand the Context

*   Identify which files were modified in the PR: `gh pr view <PR-number> --json files`
*   Examine the original files in the main branch to understand the context.
*   For specific sections of a file, you can use `search_files`.

### 2. Analyze the Changes

For each modified file, understand:

*   What was changed
*   Why it was changed (based on PR description)
*   How it affects the codebase
*   Potential side effects

Look for:

*   Code quality issues
*   Potential bugs
*   Performance implications
*   Security concerns
*   Test coverage

### 3. Ask for User Confirmation

Before making a decision, ask the user if you should approve the PR, providing your assessment and justification.

### 4. Ask if User Wants a Comment Drafted

After the user decides on approval/rejection, ask if they would like a comment drafted.

### 5. Make a Decision

*   **Approve the PR** if it meets quality standards:
    ```bash
    # For single-line comments:
    gh pr review <PR-number> --approve --body "Your approval message"

    # For multi-line comments:
    cat << EOF | gh pr review <PR-number> --approve --body-file -
    Your multi-line approval message.
    EOF
    ```
*   **Request changes** if improvements are needed:
    ```bash
    # For single-line comments:
    gh pr review <PR-number> --request-changes --body "Your feedback message"

    # For multi-line comments:
    cat << EOF | gh pr review <PR-number> --request-changes --body-file -
    Your multi-line change request.
    EOF
    ```

---

## Self-Improving Cline Reflection

### 1. Applicability Check

Ask whether reflection is warranted for this task.

### 2. Offer Reflection

Confirm the user wants reflection and proposals.

### 3. Identify Active Rules

Attempt to list workspace and global rules.

### 4. Load Accessible Rule Files

Read each accessible rule file you want to consider.

### 5. Review and Synthesize Opportunities

Summarize relevant user feedback and propose targeted improvements.

### 6. Present Proposals

Provide a concise list of suggested changes per file.

### 7. Approval to Act

Ask how to proceed: apply changes or just present recommendations.

### 8. Execute or Report

Implement updates or present a summary for manual application.

### 9. Conclude

Summarize what changed or what to change next, then finish.

---

## Brainstorming Workspace Rules

*   **Project Discovery & Setup Protocol:** Scan for projects and initialize a standard structure.
*   **Rapid Prototyping Standards:** Use time-boxed sessions and minimal setup for experiments.
*   **Cross-Project Knowledge Management:** Maintain a central memory bank and extract reusable patterns.
*   **File Organization Standards:** Maintain clear boundaries between workspace, project, and global rules.
*   **Technology Stack Management:** Use a default stack (Node.js + TypeScript) and consistent tools.
*   **Communication & Documentation:** Maintain a project index and clear READMEs.
*   **Cleanup & Maintenance Protocol:** Archive completed experiments and update templates weekly.
*   **Testing Strategy:** Validate rules and templates on small projects first.
*   **Template Activation Workflow:** Select, customize, and test templates in a project context.
*   **Emergency Protocols:** Workspace rules override project rules, which override global rules.

---

## Engineering Principles

*   **Architecture:** Separation of Concerns, Single Responsibility, DRY, KISS, YAGNI, Open/Closed, Dependency Inversion.
*   **Debugging:** Reproduce, gather info, analyze, form hypotheses, test, implement, and document.
*   **Development Processes:** Agile, DevOps, CI/CD, Infrastructure as Code.
*   **Code Quality:** Clean code principles, meaningful names, small functions, clear control flow.
*   **Collaboration:** Communication, mentorship, and structured technical decision-making.
*   **Security:** Threat modeling, secure coding practices, least privilege, security testing.
*   **Persistence:** Break down complex problems, methodical investigation, growth mindset.

---

## Sequential Thinking Tool Usage

Use the `sequentialthinking` tool for:

*   Complex Problem Decomposition
*   Iterative Planning and Design
*   In-depth Analysis
*   Unclear Scope
*   Multi-Step Solutions
*   Context Maintenance
*   Hypothesis Generation and Verification

---

## Memory Bank Protocol

*   **My memory resets completely between sessions.** I rely **entirely** on the Memory Bank to understand the project. I **must** read all memory bank files at the start of every task.
*   **Structure:** `projectBrief.md`, `productContext.md`, `systemPatterns.md`, `techContext.md`, `activeContext.md`, `progress.md`.
*   **Updates:** The Memory Bank is updated when discovering new patterns, after significant changes, or when the user requests an update.
*   **Reflection:** After each task, I will log learnings, difficulties, and successes to `memory-bank/raw_reflection_log.md`. This log is periodically refined and consolidated into `memory-bank/consolidated_learnings.md`.
