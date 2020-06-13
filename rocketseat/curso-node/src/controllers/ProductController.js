const mongoose = require('mongoose');

// Intancia a model
const Product = mongoose.model('Product');

// Exporta as funções da controller
module.exports = {
    /**
     * Função base que retorna todos os produtos
     * @param {Object} req 
     * @param {Object} res 
     */
    async index(req, res) {
        // Busca os produtos da model
        const products = await Product.find();
        if (products === null) {
            return res.status(404).json({ success: false, msg: "Nenhum produto encontrado." });
        }

        return res.json(products);
    },

    /**
     * Exibe um registro conforme ID passado. Se não passar ID retorna todos os registros
     * @param {Object} req 
     * @param {Object} res 
     */
    async show(req, res) {
        try {
            const product = await Product.findById(req.params.id);
            if (product === null) {
                return res.status(404).json({ success: false, msg: "Produto não encontrado." });
            }

            return res.json({ success: true, dados: product });
        } catch (err) {
            return res.status(500).json({ success: false, msg: err.reason.toString() });
        }
    },

    /**
     * Atualiza um produto conforme ID
     * @param {Object} req 
     * @param {Object} res 
     */
    async update(req, res) {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (product === null) {
                return res.status(404).json({ success: false, msg: "Produto não encontrado." });
            }

            return res.json({ success: true, dados: product });
        } catch (err) {
            return res.status(500).json({ success: false, msg: err.reason.toString() });
        }
    },

    /**
     * Exclúi um produto conforme ID
     * @param {Object} req 
     * @param {Object} res 
     */
    async delete(req, res) {
        try {
            const product = await Product.findByIdAndDelete(req.params.id);
            if (product === null) {
                return res.status(404).json({ success: false, msg: "Produto não encontrado." });
            }

            return res.json({ success: true, dados: "Produto "+req.params.id+" excluído." });
        } catch (err) {
            return res.status(500).json({ success: false, msg: err.reason.toString() });
        }
    },

    /**
     * Insere um produto no banco
     * @param {Object} req 
     * @param {Object} res 
     */
    async store(req, res) {
        const product = await Product.create(req.body);

        let ret = { success: true, msg: "Produto criado com sucesso" };

        return res.json(ret);
    }
};