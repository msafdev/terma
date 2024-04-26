<!-- Improved compatibility of back to top link: See: https://github.com/msafdev/terma/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/msafdev/terma">
    <h3 align="center">Terma</h3>
  </a>



  <p align="center">
    A terminal-styled portfolio for those who love the command line interfaces!
    <br />
    <a href="https://terma-demo.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/msafdev/terma/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/msafdev/terma/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://terminal.msaf.tech)

Bippity boppity, **Terma** is a terminal-styled portfolio with a cool command-line interface. With **Terma**, you can create a sleek, professional-looking portfolio that's easy to customize, deploy, and host using your own domain.

Here's why **Terma** is for you:

* A cool dark and light theme with transition effects.
* By default, you only need to modify 5 pages to get your portfolio up and running (each functionality will be listed below).
* Free **hosting** using *Vercel* and add a personal touch with your own custom domain.

We're constantly improving on **Terma** to meet your needs. Got any issues, ideas, or a feedback? We're all ears!

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This project is built with the following tech-stack:

* [![JavaScript][JavaScript]][JavaScript-url]
* [![Next][Next.js]][Next-url]
* [![TailwindCSS][Tailwind.com]][Tailwind-url]

For a full list of dependencies, see `package.json`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

_Below is the step-by-step guide on how to install and setup this project efficiently._

#### Setup

1. Clone the repo
   ```sh
   git clone https://github.com/msafdev/terma.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

#### Development

1. Run the project
   ```sh
   npm run dev
   ```
2. Open your browser and go to `http://localhost:PORT`


#### File Structure

##### components/cmd
* **banner.js** - Contains the banner text that appears on the terminal. Use [Manytools](https://manytools.org/hacker-tools/ascii-banner/) to generate your own.
* **header.js** - Contains the header text that appears on the terminal. (e.g. `demo@terma:~$`)
* **input.js** - Will be where you add custom function handlers. (e.g. *Copy to clipboard functionality*)

##### lib

* **cmd.js** - Will be where you store your responses for each command. (e.g. `about`, `projects`, `contact`, etc.)
* **utils.js** - Switch-case function that handles the command input and returns the appropriate response.
   
#### Deployment

1. Change everything you need then try building the project.
2. If the build returns success, deploy it to Vercel (or any other hosting service actually)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Add theme switcher with session storage
- [ ] Add Changelog

See the [open issues](https://github.com/msafdev/terma/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/feature-name`)
3. Commit your Changes (`git commit -m 'Add a feature-name'`)
4. Push to the Branch (`git push origin feature/feature-name`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [Linkedin](https://linkedin.com/in/muhammadsalmoon) - faris.kocak@gmail.com

Project Link: [https://github.com/msafdev/terma](https://github.com/msafdev/terma)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

These are the resources that helped me build this project:

* [Choose an Open Source License](https://choosealicense.com)
* [Img Shields](https://shields.io)
* [Vercel](https://vercel.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/msafdev/terma.svg?style=for-the-badge
[contributors-url]: https://github.com/msafdev/terma/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/msafdev/terma.svg?style=for-the-badge
[forks-url]: https://github.com/msafdev/terma/network/members
[stars-shield]: https://img.shields.io/github/stars/msafdev/terma.svg?style=for-the-badge
[stars-url]: https://github.com/msafdev/terma/stargazers
[issues-shield]: https://img.shields.io/github/issues/msafdev/terma.svg?style=for-the-badge
[issues-url]: https://github.com/msafdev/terma/issues
[license-shield]: https://img.shields.io/github/license/msafdev/terma.svg?style=for-the-badge
[license-url]: https://github.com/msafdev/terma/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/muhammadsalmoon
[product-screenshot]: public/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Tailwind.com]: https://img.shields.io/badge/Tailwind-0769AD?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com 
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://www.javascript.com