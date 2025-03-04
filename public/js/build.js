import { copyFile, mkdir } from 'fs/promises';
import path from 'path';

async function build() {
  try {
    // Create required directories
    await mkdir('dist', { recursive: true });
    
    // Copy static assets
    await copyFile('public', 'dist/public');
    await copyFile('views', 'dist/views');
    
    console.log('Build completed successfully');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();