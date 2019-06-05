import express from 'express'
import path from 'path'
import debug from 'debug'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'

import configFile from '../webpackConfig/webpack.dev.config.js'

const port = process.env.PORT || 3000
const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, '../dist/index.html'),
            compiler = webpack(configFile)

app.use(webpackDevMiddleware(compiler, { 
    publicPath: configFile.output.publicPath
}))

app.get('*', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
        console.log(err)
        console.log(result)
        if(err) return next(err)
        res.set('content-type', 'text/html')
        res.send(result)
        res.end()
    })
})

app.listen(port, () => {
    console.log(`Client app is served in ${port} !`)
    debug(`Client app is served in ${port}!`)
})