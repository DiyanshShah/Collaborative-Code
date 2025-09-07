const fastify = require('fastify')({logger: true});
const { Server } = require('socket.io');
const { setupWsConnection } = require('y-websocket/bin/server');

fastify.register(require('fastify-socket.io'), {

});

const io = new Server(fastify.server)

io.on('connection', (socket) => {
    setupWsConnection(socket)
})
fastify.ready( err => {
    if(err) throw err;

    fastify.io.on('connection', (socket) => {
        fastify.log.info(`Client connected: ${socket.id}`);
        
        socket.on('hello-from-client', (data) => {
            fastify.log.info(`Recieved from client: ${data}`)
    
            socket.emit('hello-from-server', 'Hello from the server');
        })
    
        socket.on('disconnect', () => {
            fastify.log.info(`Client disconnected: ${socket.id}`)
        })
    })


})

fastify.get('/', async (request, response) => {
    return { hello: 'world'}
})

const start = async () => {
    try {
        await fastify.listen({port: 3001})
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();