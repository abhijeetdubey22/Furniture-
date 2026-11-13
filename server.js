import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 8080;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // Add CORS headers for local dev
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost:8080'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Friendly aliases
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  } else if (pathname === '/unix') {
    pathname = '/index.html';
  } else if (pathname === '/presentation') {
    pathname = '/client_presentation.html';
  } else if (pathname === '/admin') {
    pathname = '/admin.html';
  }

  let filePath = path.join(__dirname, pathname);

  // Prevent directory traversal attacks
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      // If file not found, try adding .html
      if (err.code === 'ENOENT' && !path.extname(filePath)) {
        const htmlPath = filePath + '.html';
        if (fs.existsSync(htmlPath)) {
          filePath = htmlPath;
        } else {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
          res.end(`
            <div style="font-family: sans-serif; text-align: center; padding: 4rem;">
              <h2>404 — Page Not Found</h2>
              <p>The requested file <code>${pathname}</code> was not found.</p>
              <div style="margin-top: 2rem;">
                <a href="/index.html" style="margin: 0 10px; color: #c8a256;">UNIX Atelier (Main)</a>
                <a href="/client_presentation.html" style="margin: 0 10px; color: #c8a256;">Presentation Portal</a>
                <a href="/admin.html" style="margin: 0 10px; color: #c8a256;">Admin Portal</a>
              </div>
            </div>
          `);
          return;
        }
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }
    } else if (stats.isDirectory()) {
      filePath = path.join(filePath, 'client_presentation.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error: ' + readErr.message);
        return;
      }

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`
  ══════════════════════════════════════════════════════════════════
  ✦ UNIX Haute Ébénisterie Atelier Server Running!
  ✦ Port: ${PORT}
  ✦ URL:  http://localhost:${PORT}
  ══════════════════════════════════════════════════════════════════
  • Main UNIX Atelier Site: http://localhost:${PORT}/
  • Presentation Portal:    http://localhost:${PORT}/client_presentation.html
  • Admin Dashboard:        http://localhost:${PORT}/admin.html
  ══════════════════════════════════════════════════════════════════
  `);
});

