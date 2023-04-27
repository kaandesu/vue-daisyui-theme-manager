import fs from 'fs';

const configContent = `// add the names of the themes you want to use here
// warning: you need to specify them in tailwind.config.js as well
// DO NOT REMOVE: 'default', 'light', 'dark'
export default[
  'default',
  'light',
  'dark',
  'storm',
  'breeze',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
] as const;
`

fs.mkdirSync('./src', { recursive: true })
fs.writeFileSync('./theme-manager.config.ts', configContent)
