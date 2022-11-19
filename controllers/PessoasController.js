const { Pessoas } = require('../models')

class PessoasController {
    static async index(req,res)
    {
        const pessoas = await Pessoas.findAll()
        res.render('index', {
            pessoas:pessoas
        })
    }

    static async cadastro(req,res)
    {
        try {
            await Pessoas.create({
                nome: req.body.nome,
                email: req.body.email,
                data_nascimento: req.body.data_nascimento
            })
            res.redirect('/')
        } catch (error) {
            console.log(error.message)
            res.redirect('/')
        }
    }
    
    static async show(req,res)
    {
        const pessoa = await Pessoas.findByPK(req.params.id)
        // const pessoa02 = await Pessoas.find0ne({
         //   where:{
           //     nome: "TESTE" } //
           // }
             console.log(pessoa)
    }  

    static async update (req,res)
    {
        try{
            const pessoa = await Pessoas.findByPK(req.params.id)
            pessoa.nome = 'Novo Aluno'
            pessoa.save()

            res.redirect('/')
         }  catch(error){
            console.log(error.message)

            }  
    }

    static async deletar (res,req)
    {
       



}
}

module.exports = PessoasController