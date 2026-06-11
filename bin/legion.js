#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0] || 'dev';

const viteBin = path.resolve(__dirname, '../node_modules/.bin/vite');

if (command === 'dev') {
  console.log('🚀 Starting Death legion team in development mode...');
  spawn(viteBin, [], { stdio: 'inherit', shell: true });
} else if (command === 'build') {
  console.log('🏗️ Building Death legion team for production...');
  spawn(viteBin, ['build'], { stdio: 'inherit', shell: true });
} else if (command === 'preview') {
  console.log('👀 Previewing production build...');
  spawn(viteBin, ['preview'], { stdio: 'inherit', shell: true });
} else {
  console.log(`Unknown command: ${command}`);
  console.log('Available commands: dev, build, preview');
}
