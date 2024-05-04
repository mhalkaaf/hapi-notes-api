const hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async() => {
    const server = hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            }
        }
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada port ${server.info.uri}`);
}

init();


