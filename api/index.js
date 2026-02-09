import express from 'express';
import path from 'path';
import os from 'os';

// Use fileURLToPath to get __dirname in ES modules
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In Vercel, the dist folder is at the root, which is one level up from /api
const distPath = path.join(__dirname, '..', 'dist');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(distPath, {
    maxAge: '1d', // Better caching for assets
    etag: true,
}));

import fs from 'fs';

app.get('*', (req, res) => {
    const indexPath = path.join(distPath, 'index.html');
    console.log('Probing for index.html at:', indexPath);

    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        console.error('DIAGNOSTIC: index.html is missing!');
        // List files in the root to help debug
        const rootFiles = fs.readdirSync(process.cwd());
        res.status(404).json({
            error: "index.html not found",
            checkedPath: indexPath,
            cwd: process.cwd(),
            rootFiles: rootFiles
        });
    }
});

function getLocalIP() {
    const ifaces = os.networkInterfaces();
    for (const name of Object.keys(ifaces)) {
        for (const iface of ifaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) return iface.address;
        }
    }
    return 'YOUR_IP';
}

const startServer = () => {
    app.listen(PORT, '0.0.0.0', () => {
        const ip = getLocalIP();
        console.log(`Server: http://localhost:${PORT}`);
        console.log(`iPhone (same WiFi): http://${ip}:${PORT}`);
    });
};

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    startServer();
}

export default app;
