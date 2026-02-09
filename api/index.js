import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '..', 'dist');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(distPath, {
    maxAge: '1d',
    etag: true,
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
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

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT, '0.0.0.0', () => {
        const ip = getLocalIP();
        console.log(`\n🚀 Server started locally:`);
        console.log(`- Web:    http://localhost:${PORT}`);
        console.log(`- Network: http://${ip}:${PORT} (Access this on your iPhone)\n`);
    });
}

export default app;
