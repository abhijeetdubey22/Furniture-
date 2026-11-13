import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 4567;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TEMP_USER_DATA = path.join(process.env.TEMP || 'C:\\Windows\\Temp', 'chrome_showcase_profile_' + Date.now());

// 1. Static file server
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(process.cwd(), reqPath.replace(/^\//, ''));

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.json': 'application/json',
      '.png': 'image/png',
      '.svg': 'image/svg+xml'
    };
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

function captureScreenshot(url, outputPath, width, height) {
  return new Promise((resolve, reject) => {
    const args = [
      '--headless=new',
      '--no-sandbox',
      '--disable-gpu',
      `--user-data-dir=${TEMP_USER_DATA}`,
      `--window-size=${width},${height}`,
      '--virtual-time-budget=4000',
      `--screenshot=${outputPath}`,
      url
    ];

    const proc = spawn(CHROME_PATH, args);
    proc.on('close', (code) => {
      if (fs.existsSync(outputPath) && fs.statSync(outputPath).size > 1000) {
        console.log(`✓ Saved screenshot: ${path.basename(outputPath)} (${fs.statSync(outputPath).size} bytes)`);
        resolve(outputPath);
      } else {
        reject(new Error(`Failed to capture ${outputPath}, exit code: ${code}`));
      }
    });
  });
}

server.listen(PORT, async () => {
  console.log(`Preview server running at http://127.0.0.1:${PORT}`);
  try {
    const mobilePhoto = path.join(process.cwd(), 'client_photo_mobile.png');
    const desktopPhoto = path.join(process.cwd(), 'client_photo_desktop.png');
    const catalogPhoto = path.join(process.cwd(), 'client_photo_catalog.png');
    const estimatorPhoto = path.join(process.cwd(), 'client_photo_estimator.png');

    console.log('Capturing client photos...');
    // Mobile iPhone view (Phone-first!)
    await captureScreenshot(`http://127.0.0.1:${PORT}/index.html`, mobilePhoto, 390, 844);
    // Desktop 1440p view
    await captureScreenshot(`http://127.0.0.1:${PORT}/index.html`, desktopPhoto, 1440, 900);
    // Catalog view
    await captureScreenshot(`http://127.0.0.1:${PORT}/index.html#catalog`, catalogPhoto, 1280, 800);
    // 3D Estimator view
    await captureScreenshot(`http://127.0.0.1:${PORT}/index.html#calculator`, estimatorPhoto, 1280, 800);

    console.log('All client showcase photos captured successfully!');
  } catch (err) {
    console.error('Capture error:', err);
  } finally {
    server.close();
    process.exit(0);
  }
});
