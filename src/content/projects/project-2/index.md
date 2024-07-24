---
title: "Jarvis"
description: "An AI search bar for your site."
date: "July 16 2024"
demoURL: "https://jarvis-demo.vercel.app/"
repoURL: "https://github.com/Mshra/Jarvis"
---

Large Language Models or LLM's is comfortably at the forefront of the AI today or tech in general. With every big tech giant and AI labs is in race for AGI they are being utilised and integrated in every facet of our lifestyle, although some controversial.

But there is a limitation, the interaction through these LLM's are limited. The common option is to use the interface provided. This is limiting if we want to harness the powers of LLM in our project to extend the functionality using these LLM's.

This is why I present [Jarvis](https://www.npmjs.com/package/@tarzi/jarvis). It is a search bar component which you can integrate in your own node project and allow text generation through prompts.

<div align='center'>
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2R0dWZ6bTluaHRvNzY4YTcwank1MGd5ZmQ1b29xNG1vMWt1OG9jdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cHbAqyIGyc96OLUcd8/giphy.gif" alt="Demo" />
</div>

## How does this work?

- The frontend of the component is built using React and TailwindCSS for styling.
- The process of text generation through prompts is powered by [Gemini](https://blog.google/technology/ai/google-gemini-ai/) API.
- The backend is deployed as a [Cloudflare](https://www.cloudflare.com/) worker for low latency and fast text generation all across the globe.

## Tech stack

Install it through npm using.

```shell
npm i @tarzi/jarvis
```

and import in your project using

```javascript
import { SearchBar } from "@tarzi/jarvis";
```

## Theme

The component comes with two themes for **Light** and **Dark** Mode.

<img src="https://i.ibb.co/JdgZc22/light-mode.png" alt="light-mode" border="0">
<img src="https://i.ibb.co/MPXxLkB/dark-mode.png" alt="dark-mode" border="0">
