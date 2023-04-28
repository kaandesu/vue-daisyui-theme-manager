import fs from 'fs'
import path from 'path'

const projectDir = process.env.INIT_CWD;
process.chdir(projectDir);
const configFile = `${projectDir}/../../theme-manager.config`;

const content = `
import config from ${JSON.stringify(configFile)};
export default config;
`;

const packageDir = process.cwd();
const filePath = path.join(packageDir, 'dist', 'theme-config.ts');

fs.mkdirSync(path.join(packageDir, 'dist'), { recursive: true });
fs.writeFileSync(filePath, content);

console.log(`Created ${filePath}`);
