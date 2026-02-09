import express from 'express';
import path from 'path';
import os from 'os';

const root = process.cwd();
const distPath = path.join(root, 'dist');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(distPath, {
    maxAge: 0,
    etag: true,
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.get('*', (req, res) => {
    const indexPath = path.join(distPath, 'index.html');
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('Error sending index.html:', err);
            res.status(500).send('Server Error: File not found in dist folder. Please ensure the build completed successfully.');
        }
    });
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
