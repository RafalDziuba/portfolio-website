# Quickstart Guide: Local MDX Blog

This guide covers how to write and publish a new blog post locally using MDX and Astro Content Collections.

## Prerequisites

- Local clone of the repository.
- Node.js (v24+ recommended).
- MDX language support installed in your IDE (e.g., VSCode MDX extension).

## Writing a New Post

1. **Create the post directory**:
   The blog is split by language. Choose `en` or `pl`. Create a folder inside `src/content/blog/[lang]/` with your post slug.

   ```bash
   mkdir src/content/blog/en/my-new-post
   ```

2. **Add the MDX file and images**:
   Create an `index.mdx` file inside the new directory. Place any images you want to use in the same folder.

   ```text
   src/content/blog/en/my-new-post/
   ├── index.mdx
   └── cover.jpg
   ```

3. **Fill the Frontmatter**:
   At the top of `index.mdx`, add the required YAML frontmatter:

   ```mdx
   ---
   title: 'My New Post'
   excerpt: 'A brief summary of what this post is about.'
   publishedAt: '2026-02-21'
   ---

   # Introduction

   Write your content here...
   ```

4. **Add Images**:
   Inside the MDX file, import your colocated images and use the Astro Image component (or standard markdown syntax if configured to optimize).

   ```mdx
   import { Image } from 'astro:assets';
   import coverImg from './cover.jpg';

   <Image src={coverImg} alt="Cover image description" />
   ```

5. **Preview Locally**:
   Run the development server to check your formatting:

   ```bash
   npm run dev
   ```

   Visit `http://localhost:4321/en/blog/my-new-post`.

6. **Publish**:
   Commit the folder and push to the main branch. The CI/CD pipeline will automatically build and deploy the new static page.
