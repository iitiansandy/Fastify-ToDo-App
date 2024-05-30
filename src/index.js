const { port } = require('./config/serverConfig');
const app  = require('./app');

const fastify = require('fastify')({ logger: true });

fastify.register(app);

fastify.listen({port: port}, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log("Server is running on port", port);
})