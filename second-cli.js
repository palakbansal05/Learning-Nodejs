#!/usr/bin/env node
const fs=require("fs");
const temp=process.argv.slice(2);
for(let i=0;i<temp.length;i++){
    fs.writeFileSync(`${temp[i]}.js`,"");
}