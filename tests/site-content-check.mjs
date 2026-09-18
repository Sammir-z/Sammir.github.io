import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => readFileSync(resolve(root, file), 'utf8');
const websiteFiles = [
  'index.html',
  'contents/config.yml',
  'contents/home.md',
  'contents/projects.md',
  'contents/experience.md',
  'contents/publications.md',
  'contents/awards.md',
  'static/js/scripts.js',
];
const siteText = websiteFiles
  .filter((file) => existsSync(resolve(root, file)))
  .map((file) => read(file))
  .join('\n');

for (const forbidden of [
  'zhanggb928@163.com',
  '3022949790@qq.com',
  '18883892941',
  'ByteDance',
  'XX University',
  'GPA: XX/XX',
  'XXXXXXX',
]) {
  assert.equal(siteText.includes(forbidden), false, `forbidden content found: ${forbidden}`);
}

for (const required of [
  'https://github.com/Sammir-z/DeepSearch-Agent',
  'https://github.com/Sammir-z/NL2SQL',
  'id="projects"',
  'id="research"',
  'id="awards"',
  "{ id: 'projects', file: 'projects.md' }",
]) {
  assert.equal(siteText.includes(required), true, `required content missing: ${required}`);
}

for (const file of ['contents/projects.md', 'contents/home.md', 'contents/experience.md']) {
  assert.equal(existsSync(resolve(root, file)), true, `content file missing: ${file}`);
}

console.log('site content contract passed');
