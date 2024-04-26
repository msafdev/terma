// These are the responses that will return a template literal string to the terminal
// You can use these on lib/utils.js
const help = [
  `<span class="text-neon-red dark:text-neon-yellow">help</span>            Available commands
<span class="text-neon-red dark:text-neon-yellow">whatis</span>          Summary about terma
<span class="text-neon-red dark:text-neon-yellow">clear, cls</span>      Clear the commands
<span class="text-neon-red dark:text-neon-yellow">social</span>          My social links
<span class="text-neon-red dark:text-neon-yellow">template</span>        Get this template
<span class="text-neon-red dark:text-neon-yellow">theme</span>           Change the theme
<span class="text-neon-red dark:text-neon-yellow">footer</span>          Show Terma's footer`,
];

const whatis = [
  `<span class="text-neon-red dark:text-neon-yellow">Terma</span> is a terminal-styled portfolio template built with Next.
It is inspired by the terminal design of the 90s.`,
];

const theme = [
  `<span class="text-neon-red dark:text-neon-yellow">Theme changed</span>`,
];

const social = [
  `twitter       <a target="_blank" href="https://twitter.com/msafdev"><span class="text-neon-red dark:text-neon-yellow">https://twitter.com/msafdev</span></a>
github        <a target="_blank" href="https://github.com/msafdev"><span class="text-neon-red dark:text-neon-yellow">https://github.com/msafdev</span></a>
linkedin      <a target="_blank" href="https://www.linkedin.com/in/muhammadsalmoon"><span class="text-neon-red dark:text-neon-yellow">https://www.linkedin.com/in/muhammadsalmoon</span></a>
instagram     <a target="_blank" href="https://www.instagram.com/msalman_af"><span class="text-neon-red dark:text-neon-yellow">https://www.instagram.com/msalman_af</span></a>
Portfolio     <a target="_blank" href="https://www.msaf.tech"><span class="text-neon-red dark:text-neon-yellow">https://www.msaf.tech</span></a>`,
];

const template = [
  `Click <a href="https://github.com/msafdev/terma" class="text-neon-red dark:text-neon-yellow">here</a> to get the template.`,
];

const resume = [
  `-> 2024 - present
<span class="text-neon-red dark:text-neon-yellow">Start of Terma</span> at <span class="text-neon-red dark:text-neon-yellow">Earth-200</span>`,
];

const footer = [
  `<div class="flex w-full items-center justify-between"><p class="dark:text-neon-purple text-neon-purple">msafdev</p><p class="dark:text-neon-yellow text-neon-red" style="margin-left: auto;">2023 All rights reserved</p></div>`,
];

const hello = [`Hello :D`];

export { help, whatis, social, resume, theme, footer, hello, template };
