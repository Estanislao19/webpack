const path = require('path'); //para identificar donde se encuentra este proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
    entry: './src/index.js', //punto de entrada
    output: { //punto de salida
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: { //para identificar las extensiones que estemos trabajando
       extensions: ['.js']//la extension que vamos a utilizar 
    },
    module: {
        rules: [ //reglas que vamos a aplicar en los modulos
            {
                test:/\.js?$/, //para que use las extensiones de archivo de js
                exclude: /node_module/, //para que excluya esta carpeta
                use:{
                    loader:'babel-loader' //nos va a yudar a comprender js
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ //identificar lo que va hacer cuando identifique este plugin
            inject:true,
            template:'./public/index.html',
            filename: './index.html'
        })    
    ]
}