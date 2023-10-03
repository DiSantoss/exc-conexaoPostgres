const pool = require('../conexoes/conexoes');

const cadastrarAutor = async (req, res) => {
  const { nome, idade } = req.body;

  if (!nome) {
    return res.status(400).json({ mensagem: 'O nome é obrigatório.' });
  }

  try {
    const query = 'insert into autores (nome, idade) values ($1, $2) returning *';
    const { rows } = await pool.query(query, [nome, idade]);

    return res.status(201).json(rows[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Ocorreu um erro interno do servidor.' });
  }
};


const obterAutor = async (req,res)=>{
    const {id} = req.params 

    try{
        const {rowCount,rows} = await pool.query('select * from autores where id = $1', [id])

        if(rowCount == 0) {
            return res.status(404).json({mensagem:'O autor não existe'})
        }

        const autor = rows[0];

        return res.json(autor)
    } catch(error){
        return res.status(500).json({mensagem:'Erro interno do servidor'})
    }
}


const cadastrarLivroAutor = async (req,res)=>{
    const {id} = req.params;
    const{nome,genero,editora,data_publicacao} = req.body;

    if(!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório.' });
    }

    try{

        const {rowCount,rows} = await pool.query('select * from autores where id = $1', [id])

        if(rowCount == 0) {
            return res.status(404).json({mensagem:'O autor não existe'})
        }

        const autor = rows[0];

        const query = `insert into livros (autor_id,nome,genero, editora, data_publicacao) values ($1,$2,$3,$4,$5) returning *`

        const livro = await pool.query(query,[autor.id,nome,genero,editora,data_publicacao]);

        return res.status(201).json(livro.rows[0]);

    } catch(error) {
        return res.status(500).json({mensagem:'Erro interno do servidor'})
    }


}




module.exports = {
  cadastrarAutor,
  obterAutor,
  cadastrarLivroAutor,
};