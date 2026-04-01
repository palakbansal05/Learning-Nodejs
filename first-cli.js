#!/usr/bin/env node
import chalk from "chalk"
import fs from "fs"
const temp=process.argv.slice(2);
console.log(chalk.underline(chalk.bgGreen(`HII ${temp[0]} ${temp[1]}!! I created a cli`)));
