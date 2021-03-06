// Exporta o objeto express já executando-a
const express = require('express')();
/**
 * Informando ao módulo Express que agora a engine
 * de views será fornecida pelo módulo EJS sempre
 * que necessitamos configurar um módulo para trabalhar
 * em conjunto com o express, isso se dará pela propriedade set
 */
express.set('view engine', 'ejs');

/**
 * Seta a propriedade de views do ejs onde o express
 * apartir de agora vai entender que as views estão
 * no diretorio app/views. Um cuidado deve ser tomado
 * porque este arquivo está sendo exportado em forma de
 * um modulo para o arquivo app.js que está na raiz da
 * aplicação então tenho que passar o diretorio de views
 * como se este arquivo fosse o app.js já que é onde ele
 * está sendo incluso.
 * */
express.set('views', './app/views')

module.exports = express;