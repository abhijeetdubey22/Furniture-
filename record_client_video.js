import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 4568;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TEMP_USER_DATA = path.join(process.env.TEMP || 'C:\\Windows\\Temp', 'chrome_video_profile_' + Date.now());

// Read base64 screenshots to embed directly into the video recorder
const mobileImgBase64 = fs.readFileSync(path.join(process.cwd(), 'client_photo_mobile.png')).toString('base64');
const desktopImgBase64 = fs.readFileSync(path.join(process.cwd(), 'client_photo_desktop.png')).toString('base64');
const catalogImgBase64 = fs.readFileSync(path.join(process.cwd(), 'client_photo_catalog.png')).toString('base64');
const estimatorImgBase64 = fs.readFileSync(path.join(process.cwd(), 'client_photo_estimator.png')).toString('base64');

const recorderHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Video Generator</title>
  <style>
    body { margin: 0; background: #000; overflow: hidden; display: flex; align-items: center; justify-content: center; height: 100vh; }
    canvas { width: 1280px; height: 720px; background: #0a0908; }
  </style>
</head>
<body>
  <canvas id="stage" width="1280" height="720"></canvas>
  <script>
    const canvas = document.getElementById('stage');
    const ctx = canvas.getContext('2d');

    const imgDesktop = new Image();
    imgDesktop.src = "data:image/png;base64,${desktopImgBase64}";
    const imgMobile = new Image();
    imgMobile.src = "data:image/png;base64,${mobileImgBase64}";
    const imgCatalog = new Image();
    imgCatalog.src = "data:image/png;base64,${catalogImgBase64}";
    const imgEstimator = new Image();
    imgEstimator.src = "data:image/png;base64,${estimatorImgBase64}";

    Promise.all([
      new Promise(r => imgDesktop.onload = r),
      new Promise(r => imgMobile.onload = r),
      new Promise(r => imgCatalog.onload = r),
      new Promise(r => imgEstimator.onload = r)
    ]).then(startRecording);

    function startRecording() {
      const stream = canvas.captureStream(30);
      const mime = MediaRecorder.isTypeSupported('video/webm;codecs=vp9') ? 'video/webm;codecs=vp9' : 'video/webm';
      const recorder = new MediaRecorder(stream, { mimeType: mime });
      const chunks = [];

      recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        await fetch('/save-video', {
          method: 'POST',
          headers: { 'Content-Type': 'video/webm' },
          body: blob
        });
        window.close();
      };

      recorder.start();

      const totalFrames = 30 * 12; // 12 seconds video @ 30fps
      let frame = 0;

      function draw() {
        const progress = frame / totalFrames; // 0.0 to 1.0
        const timeSec = frame / 30;

        // Clear canvas
        ctx.fillStyle = '#0a0908';
        ctx.fillRect(0, 0, 1280, 720);

        // Background subtle ambient glow
        const grad = ctx.createRadialGradient(640, 360, 50, 640, 360, 600);
        grad.addColorStop(0, 'rgba(212, 175, 55, 0.12)');
        grad.addColorStop(1, 'rgba(10, 9, 8, 1)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 1280, 720);

        if (timeSec < 3.0) {
          // Scene 1: Desktop Luxury Hero
          const t = timeSec / 3.0;
          ctx.save();
          const scale = 1.0 + t * 0.05;
          ctx.translate(640, 360);
          ctx.scale(scale, scale);
          ctx.drawImage(imgDesktop, -550, -320, 1100, 640);
          ctx.restore();

          drawOverlayBadge("SCENE 1: LUXURY DESKTOP SHOWROOM", "Ekveera Super Furniture & Interior Design");
        } else if (timeSec < 6.0) {
          // Scene 2: Phone-First Mobile Experience with smartphone frame
          const t = (timeSec - 3.0) / 3.0;
          
          // Draw Desktop blurred in background
          ctx.save();
          ctx.filter = 'blur(10px) brightness(0.4)';
          ctx.drawImage(imgDesktop, 0, 0, 1280, 720);
          ctx.restore();

          // Phone Device Mockup centered
          const phoneW = 320;
          const phoneH = 650;
          const phoneX = (1280 - phoneW) / 2;
          const phoneY = 35;

          // Shadow
          ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
          ctx.shadowBlur = 30;
          ctx.fillStyle = '#161310';
          roundRect(ctx, phoneX - 10, phoneY - 10, phoneW + 20, phoneH + 20, 36);
          ctx.fill();
          ctx.shadowBlur = 0;

          // Phone Gold Rim
          ctx.strokeStyle = '#d4af37';
          ctx.lineWidth = 2.5;
          roundRect(ctx, phoneX - 10, phoneY - 10, phoneW + 20, phoneH + 20, 36);
          ctx.stroke();

          // Mobile screen content
          ctx.save();
          roundRect(ctx, phoneX, phoneY, phoneW, phoneH, 28);
          ctx.clip();
          const scrollY = t * 180;
          ctx.drawImage(imgMobile, 0, scrollY, 390, 800, phoneX, phoneY, phoneW, phoneH);
          ctx.restore();

          drawOverlayBadge("SCENE 2: PHONE-FIRST RESPONSIVE UI", "Sticky Bottom Quick Action Bar • Fast WhatsApp & Direct Call");
        } else if (timeSec < 9.0) {
          // Scene 3: Masterpiece Collections Catalog
          const t = (timeSec - 6.0) / 3.0;
          ctx.save();
          const zoom = 1.0 + t * 0.04;
          ctx.translate(640, 360);
          ctx.scale(zoom, zoom);
          ctx.drawImage(imgCatalog, -550, -320, 1100, 640);
          ctx.restore();

          drawOverlayBadge("SCENE 3: CURATED COLLECTIONS", "Handcrafted Solid Teak, Marble Dining, Velvet Chesterfield");
        } else {
          // Scene 4: Interactive 3D & Furniture Cost Estimator
          const t = (timeSec - 9.0) / 3.0;
          ctx.save();
          const zoom = 1.0 + t * 0.04;
          ctx.translate(640, 360);
          ctx.scale(zoom, zoom);
          ctx.drawImage(imgEstimator, -550, -320, 1100, 640);
          ctx.restore();

          drawOverlayBadge("SCENE 4: INTERACTIVE 3D COST ESTIMATOR", "Real-Time Factory Pricing & 1-Tap WhatsApp Quotation");
        }

        // Top Branding Bar
        ctx.fillStyle = 'rgba(14, 12, 10, 0.85)';
        ctx.fillRect(0, 0, 1280, 54);
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
        ctx.strokeRect(0, 0, 1280, 54);

        ctx.font = 'bold 16px sans-serif';
        ctx.fillStyle = '#d4af37';
        ctx.fillText('EKVEERA SUPER FURNITURE & INTERIOR', 30, 34);

        ctx.font = '13px sans-serif';
        ctx.fillStyle = '#b8b1a5';
        ctx.fillText('• Client Video Walkthrough Preview • Phone: +91 98765 43210', 370, 34);

        // Progress line
        ctx.fillStyle = '#d4af37';
        ctx.fillRect(0, 52, 1280 * progress, 3);

        frame++;
        if (frame < totalFrames) {
          requestAnimationFrame(draw);
        } else {
          recorder.stop();
        }
      }

      function drawOverlayBadge(title, subtitle) {
        ctx.fillStyle = 'rgba(16, 13, 10, 0.88)';
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
        ctx.lineWidth = 1;
        roundRect(ctx, 40, 610, 680, 80, 12);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 16px sans-serif';
        ctx.fillStyle = '#f6e6b4';
        ctx.fillText(title, 60, 642);

        ctx.font = '13px sans-serif';
        ctx.fillStyle = '#b8b1a5';
        ctx.fillText(subtitle, 60, 668);
      }

      function roundRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
      }

      requestAnimationFrame(draw);
    }
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/save-video') {
    const videoPath = path.join(process.cwd(), 'client_showcase_video.webm');
    const writeStream = fs.createWriteStream(videoPath);
    req.pipe(writeStream);
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('OK');
      console.log(`✓ Video successfully rendered & saved: ${videoPath} (${fs.statSync(videoPath).size} bytes)`);
      setTimeout(() => {
        server.close();
        process.exit(0);
      }, 500);
    });
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(recorderHtml);
});

server.listen(PORT, () => {
  console.log(`Video render server active at http://127.0.0.1:${PORT}`);
  const args = [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    `--user-data-dir=${TEMP_USER_DATA}`,
    '--window-size=1280,720',
    `http://127.0.0.1:${PORT}`
  ];

  console.log('Rendering high-definition video walkthrough with headless Chrome...');
  spawn(CHROME_PATH, args);
});
