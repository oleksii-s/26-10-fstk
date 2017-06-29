module.exports = {
    entry: "./app/app.js", // входная точка - исходный файл
    output:{
        path: "public",     // путь к каталогу выходных файлов - папка assets
        filename: "bundle.js"       // название создаваемого файла
    },
    resolve:{
        extensions: ["", ".js", ".jsx"] // расширения для загрузки модулей
    },
    module:{
        loaders:[   //загрузчики
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,
                loader: ["babel-loader"],
                query:{
                    presets:["es2015", "react"]
                }
            }
        ]
    }
}
