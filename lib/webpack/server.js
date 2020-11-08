const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

 module.exports = (config) => {
    const compiler = webpack(config)
    
    // compiler.run((err, stats) => {

    // })
     const devServerOptions = Object.assign({}, config.derServer, {
         open: true,
         stats: {
             colors: true
         }
     })

     const port = config.derServer && config.derServer.port || 12306

     const server = new webpackDevServer(compiler, devServerOptions)

     server.listen(port, '0.0.0.0', err => {
         if (err) {
            console.log(err)
            process.exit(1)
         }
     })
 }