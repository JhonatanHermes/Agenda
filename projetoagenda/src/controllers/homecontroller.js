const Contato = require('../models/contatomodel')

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos()
    res.render('index', { contatos })
   return
}
