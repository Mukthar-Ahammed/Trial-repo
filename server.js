import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist'), {
    maxAge: 0,
    etag: true,
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
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
