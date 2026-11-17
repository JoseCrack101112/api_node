const http = require('http');
const os = require('os');

const PUERTO = 3000;

const servidor = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bienvenido a la API de estado de Distribuciones Mediterráneo S.L. - Jose Medina');
  } else if (req.url === '/estado') {
    const estado = {
      servicio: 'api-estado-mediterraneo',
      hostname: os.hostname(),
      uptime_segundos: process.uptime(),
      fecha: new Date().toISOString()
    };
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(estado));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Ruta no encontrada');
  }
});

servidor.listen(PUERTO, '0.0.0.0', () => {
  console.log('API escuchando en el puerto ' + PUERTO);
});
