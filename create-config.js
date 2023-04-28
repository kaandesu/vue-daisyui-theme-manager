import fs from 'fs';
import path from 'path';
console.log('Current working directory:', process.cwd());
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


const projectDir = process.env.INIT_CWD;
process.chdir(projectDir);
console.log('Changed working directory:', projectDir);
const filePath = path.join(projectDir, 'theme-manager.config.ts');

fs.mkdirSync('./src', { recursive: true });
fs.writeFileSync(filePath, configContent);

console.log(`Created ${filePath}`);