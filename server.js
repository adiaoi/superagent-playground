import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8' };
const root = new URL('./public/', import.meta.url).pathname;

createServer(async (req, res) => {
  const name = req.url === '/' ? 'index.html' : req.url.slice(1);
  try {
    const body = await readFile(join(root, name));
    res.writeHead(200, { 'content-type': types[extname(name)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end('not found');
  }
}).listen(8000, '127.0.0.1', () => console.log('http://127.0.0.1:8000'));
