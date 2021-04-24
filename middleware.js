const express = require('path');
const app = express();

const path = require('path');
const webpack = require('webpack');

const webpackDevConfig = require('./config/webpack.dev.config');

const compiler = webpack(webpackDevConfig);


app.use(
    require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    })
);

app.use(require('webpack-hot-middleware')(compiler));


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
});


app.listen(3000, () => {
    console.log('App listening on PORT', 3000);
});
