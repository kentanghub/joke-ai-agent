import {copyFileSync,mkdirSync}from'node:fs';
mkdirSync('/output',{recursive:true});
copyFileSync(new URL('./joke.txt',import.meta.url),'/output/entry.txt');