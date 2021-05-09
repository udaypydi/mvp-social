const express = require('express');
const app = express();
const proxy = require('express-http-proxy');
const path = require('path');
const webpack = require('webpack');

const webpackDevConfig = require('./config/webpack.dev.config');

const compiler = webpack(webpackDevConfig);


app.use(
    require('webpack-dev-middleware')(compiler, {
        publicPath: webpackDevConfig.output.publicPath
    })
);

app.use(require('webpack-hot-middleware')(compiler));


app.use(express.static('build'));


app.use('/api', proxy('http://localhost:1234'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build/index.html'));
});

app.listen(9000, () => {
    console.log('App listening on PORT', 9000);
});
