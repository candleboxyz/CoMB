# CoMB 🍯

> **Co-adaptation of My Brain**

A personal knowledge base, of and for what I have learned and learn.

## About This Project

Knowledge, especially in technical fields, is often learned in isolated fragments, only to be forgotten over time. This project is my active response to that challenge.

CoMB is more than a simple archive; it's a living knowledge graph where foundational principles are connected and cultivated. This digital garden is primarily focused on Computer Science, Artificial Intelligence, and the Mathematics that underpins them.

Inspired by the Zettelkasten method, the goal is not merely to store isolated algorithms or theories, but to discover the latent connections and structural similarities between them. By linking these concepts, this space aims to synthesize foundational axioms into complex models and transform abstract theory into applicable intuition.

While it serves as my personal "second brain," it is written with the hope of being a genuinely useful resource for anyone else exploring these topics.

The name, Co-adaptation of My Brain, reflects this symbiotic relationship: as I learn and tend to this garden, the interconnected knowledge within it helps me understand more deeply, creating a powerful cycle of growth.

> *This site is proudly [![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build), a documentation theme powered by [Astro](https://astro.build/).*

## Development Setup

Follow these instructions to set up the development environment on a local machine.

### 1\. Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v22.x or later recommended)
- [npm](https://www.npmjs.com/) (v10.x or later, included with Node.js)

### 2\. Clone & Configure

First, clone the repository to your local machine.

**Next, run the following command inside the project directory.** This is a **mandatory one-time setup for this specific repository.** It configures Git to be case-sensitive, preventing common cross-platform bugs between the common local OS (e.g., macOS/Windows) and the deployment environment (Linux).

```shell
git config core.ignorecase false
```

> **Note:** This command applies the setting locally to this repository only and **will not affect other projects**.

### 3\. Install & Run

Now that the repository is configured, install the dependencies and start the development server.

```shell
npm install
npm run dev
```

### 4\. Building for Production

To create a production-ready build in the `dist/` directory:

```shell
npm run build
```

If encountering caching issues after changing file paths or configurations, forcing a clean build is an option, which will clear the cache before starting:

```shell
npm run build:force
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
