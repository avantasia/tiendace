module.exports = {
    publicPath: '/',
    chainWebpack: config => {
        config
            .plugin("html")
            .tap(args => {
                args[0].title = 'Tienda de especias para Comercio Electronico - UOC '
                return args
            })
    }
};
