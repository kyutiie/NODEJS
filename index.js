const http = require('http');
const fs = require('fs');


const html = fs.readFileSync('./htmlFolder/index.html', 'utf-8');


const server = http.createServer((req, res) => {
    const path = req.url.toLowerCase();

    if (path === '/' || path === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const homepage = `
            <h1>WELCOME</h1>
            <p>Explore the features of the latest Lenovo laptops!</p>
            <p>Lenovo offers a range of laptops designed to meet various needs, from high-performance gaming laptops to sleek ultrabooks for professionals.</p>
        `;
        res.end(html.replace('{{%CONTENT%}}', homepage));
    } else if (path === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const about = `
            <h1>ABOUT US</h1>
            <p>We are passionate about Lenovo laptops, known for their reliability, performance, and innovative technology.</p>
            <p>Our team specializes in providing detailed reviews and comparisons of Lenovo's diverse laptop lineup, from the ThinkPad series to the Yoga and Legion series.</p>
        `;
        res.end(html.replace('{{%CONTENT%}}', about));
    } else if (path === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const contacts = `
            <h1>CONTACT US</h1>
            <p>If you have any questions about Lenovo laptops or need assistance, feel free to reach out to us!</p>
            <p>Email: support@lenovo-laptops.com</p>
            <p>Phone: +1-800-123-4567</p>
            <p>Address: 123 Tech Avenue</p>
        `;
        res.end(html.replace('{{%CONTENT%}}', contacts));
    } else if (path === '/services') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const services = `
            <h1>SERVICES</h1>
            <p>We offer a variety of services related to Lenovo laptops:</p>
            <ul>
                <li>Laptop Reviews and Comparisons</li>
                <li>Technical Support and Troubleshooting</li>
                <li>Upgrade and Repair Services</li>
                <li>Customized Laptop Recommendations</li>
            </ul>
        `;
        res.end(html.replace('{{%CONTENT%}}', services));
    } else if (path === '/images') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const images = '<h1>IMAGES</h1><p>No images yet.</p>';
        res.end(html.replace('{{%CONTENT%}}', images));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(html.replace('{{%CONTENT%}}', 'Page not Found!'));
    }
});


server.listen(3004, '127.0.0.1', () => {
    console.log('Server has started');
});
