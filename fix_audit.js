const fs = require('fs');
const path = require('path');

const base = 'c:\\Users\\HP\\Desktop\\vayuholidays\\vayu-holiday';
const exts = ['.js', '.html'];
const skip = ['.git', 'node_modules', 'fix_audit.js', 'fix_audit.py'];

const replacements = [
  ['+91-755-492-8899', '+91-888-975-4969'],
  ['+91-98260-12345', '+91-888-975-4969'],
  ['+91 755 492 8899', '+91 888 975 4969'],
  ['+91 98260 12345', '+91 888 975 4969'],
  ['7554928899', '8889754969'],
  ['919826012345', '918889754969'],
  ['9826012345', '8889754969'],
  ['Tatkaal', 'Tatkal'],
  ['GST: 23XXXXX0000X1ZX \u00a0|\u00a0 IATA Accredited Agent', 'IATA Accredited Agent'],
  ['GST: 23XXXXX0000X1ZX &nbsp;|&nbsp; IATA Accredited Agent', 'IATA Accredited Agent'],
  ['462030', '462031'],
  ['Raksha Vihar, Vayu Pride Residency, Airport Road, Bhopal', 'Vayu Pride Residency, Raksha Vihar, Bhopal'],
  ['Raksha Vihar, Vayu Pride Residency, Airport Road', 'Vayu Pride Residency, Raksha Vihar'],
  ['9 AM \u201c\u201d 9 PM', '9 AM \u2013 9 PM'],
  ['\u201c\u201d', '\u2013'],
  ['" "', '\u2013'],
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    if (skip.some(s => e.name.includes(s))) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files = files.concat(walk(full));
    else if (exts.includes(path.extname(e.name))) files.push(full);
  }
  return files;
}

const files = walk(base);
let fixedCount = 0;

for (const file of files) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;
    for (const [from, to] of replacements) {
      while (content.includes(from)) content = content.split(from).join(to);
    }
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Fixed:', path.basename(file));
      fixedCount++;
    }
  } catch(e) {
    console.log('ERROR:', file, e.message);
  }
}
console.log('\nDone. Fixed', fixedCount, 'files.');
