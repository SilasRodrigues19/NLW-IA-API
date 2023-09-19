[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<samp>
<p align="center">
  <a href="https://github.com/SilasRodrigues19/NLW-IA">
    <img src="./public/logo.svg" alt="Logo" width="100" height="80">
  </a>

  <h3 align="center" id="upload-ai">upload.ai</h3>

  <p align="center">
    Transcribe videos and generate efficient texts and scripts
    <br />
    <a href="https://ai-videotranscription.vercel.app/">Demo</a>
    <a href="https://github.com/SilasRodrigues19/NLW-IA/issues">Report Bug</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

| Light Desktop                                   | Dark Desktop                                    |
| ----------------------------------------------- | ----------------------------------------------- |
| [![Preview][product-screenshot]][project-link]  | [![Preview][product-screenshot2]][project-link] |
| Light Mobile                                    | Dark Mobile                                     |
| [![Preview][product-screenshot3]][project-link] | [![Preview][product-screenshot4]][project-link] |

<hr>

Project built during NLW AI, consists of an application for transcribing videos. The application flow is to receive an mp4 as input, which will be converted into mp3 to obtain the transcription of this audio and later the user can choose one of the pre-configured Prompts and optionally insert some keywords mentioned in the video, then they can execute it to allow AI to generate the response

### Built With

Technologies used in the project.

### Frameworks

- [Fastify](https://fastify.dev/)
  Fast and low overhead web framework, for Node.js.

### Technologies

- [TypeScript](https://www.typescriptlang.org/)
  A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

- [Prisma](https://www.prisma.io/)
  Next-generation Node.js and TypeScript ORM.

### Tools

- [Zod](https://zod.dev/)
  TypeScript-first schema validation with static type inference.

<!-- GETTING STARTED -->

## Prerequisites

1. Create an OpenAI account in this link:

```sh
https://platform.openai.com/signup?launch
```

2. Access the following link and generate your apiKey

```sh
https://platform.openai.com/account/api-keys
```

3. After cloning the repo, rename `.env.example` to `.env` and paste your apiKey value

```sh
  # .env file
  DATABASE_URL="file:./dev.db" # paste the address of your bank inside the quotation marks if it is not local
  OPENAI_KEY="" # paste your apiKey inside the quotes
```

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SilasRodrigues19/NLW-IA-API.git
   ```
2. Install dependencies (you can use npm, pnpm, yarn or anything else)
   ```sh
   pnpm install
   ```
3. In the project directory, you can run with the following
   ```sh
   pnpm start
   ```
4. Open the link below to view the app it in your browser.
   ```sh
     http://localhost:3333/
   ```
5. To run database seed

```sh
  pnpm prisma db seed
```

6. Initialize the prism, generate and run the migrations
   ```sh
     pnpm prisma init && pnpm prisma generate && pnpm prisma migrate dev
   ```
7. To run prisma studio and view the database
   ```sh
     pnpm prisma studio
   ```
   <!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Silas Rodrigues - [@jinuye1](https://twitter.com/jinuye1) - silasrodrigues.fatec@gmail.com

Project Link: [https://github.com/SilasRodrigues19/NLW-IA](https://github.com/SilasRodrigues19/NLW-IA) <br>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/SilasRodrigues19/NLW-IA.svg?style=for-the-badge
[contributors-url]: https://github.com/SilasRodrigues19/NLW-IA/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SilasRodrigues19/NLW-IA.svg?style=for-the-badge
[forks-url]: https://github.com/SilasRodrigues19/NLW-IA/network/members
[stars-shield]: https://img.shields.io/github/stars/SilasRodrigues19/NLW-IA.svg?style=for-the-badge
[stars-url]: https://github.com/SilasRodrigues19/NLW-IA/stargazers
[issues-shield]: https://img.shields.io/github/issues/SilasRodrigues19/NLW-IA.svg?style=for-the-badge
[issues-url]: https://github.com/SilasRodrigues19/NLW-IA/issues
[license-shield]: https://img.shields.io/github/license/SilasRodrigues19/NLW-IA.svg?style=for-the-badge
[license-url]: https://github.com/SilasRodrigues19/NLW-IA/blob/master/LICENSE
[license-url]: https://github.com/SilasRodrigues19/NLW-IA/blob/master/LICENSE.txt
[product-screenshot]: ./public/screenshots/dark-desktop.png
[product-screenshot2]: ./public/screenshots/light-desktop.png
[product-screenshot3]: ./public/screenshots/dark-mobile.png
[product-screenshot4]: ./public/screenshots/light-mobile.png
[project-link]: https://ai-videotranscription.vercel.app/

<br><hr>
[🔼 Back to top](#upload-ai)
