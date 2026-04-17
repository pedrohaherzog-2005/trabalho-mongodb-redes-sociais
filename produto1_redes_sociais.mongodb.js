print(
  "=================================================================================================================================================",
);
print(
  "TRABALHO MONGODB - CONSULTAS AVANÇADAS COM OPERADORES COMPARATIVOS/LÓGICOS",
);
print(
  "=================================================================================================================================================",
);
print(
  "-------------------------------------------------------------------------------------------------------------------------------------------------",
);
print("TEMA: Redes Sociais");
print(
  "GRUPO:\n - Victor Caetano Da Conceição;\n - Pedro Henrique Alvarenga Herzog;\n - Debora Cupertino de Araújo Lacerda;",
);
print(
  "-------------------------------------------------------------------------------------------------------------------------------------------------\n",
);

// ==================================================
// DATA DE ENTREGA: 17/04/2026
// ==================================================

// ==================================================
// 1. CRIAÇÃO DO BANCO E COLEÇÕES
// ==================================================

//Criação da Database
use("redesSociais");
print("use('redesSociais');");
print("Resposta: Database criada com sucesso;\n");

// ==================================================
// 1.1 - EXCLUSÃO DOS DADOS E DAS COLEÇÕES
// ==================================================

print(
  "------------------------------------------------- Exclusão e Visualização de dados --------------------------------------------------------------",
);
// limpeza e verificação de exclusão dos dados/documentos
print("Iniciando limpeza dos dados:\n");

let delUser = db.usuario.deleteMany({});
print("db.usuario.deleteMany({});");

let delPost = db.post.deleteMany({});
print("db.post.deleteMany({});");

if (delUser.deletedCount === 0 && delPost.deletedCount === 0) {
  print("Resposta: 0 dados encontrados, ou collection não criada;\n");
}

// Visualizar dados/documentos pós-exclusão
print("db.usuario.find().pretty();" + "\n" + "db.post.find().pretty();");
if (db.usuario.countDocuments({}) === 0 && db.post.countDocuments({}) === 0) {
  print(
    "Resposta: Nenhuma informação encontrada para visualizar os dados pós-exclusão;\n",
  );
} else {
  // Caso houvesse dados, isso imprimiria os resultados no terminal
  printjson(db.usuario.find().toArray());
  printjson(db.post.find().toArray());
}
print(
  "------------------------------------------------- ################################## ------------------------------------------------------------",
);

print(
  "------- Exclusão e Criação das Collections ------------------------------------------------------------------------------------------------------",
);
db.usuario.drop();
print("db.usuario.drop();");

db.post.drop();
print("db.post.drop();");

print("Resposta: Nenhuma collection encontrada para exclusão;\n");

// Após, cria-se as coleções
db.createCollection("usuario");
db.createCollection("post");
print(
  "db.createCollection('usuario');" + "\n" + "db.createCollection('post');",
);
print("Resposta: Collections criadas com sucesso;");

print(
  "------------------------------------------------- ################################## ------------------------------------------------------------",
);

// --------------------------------------------------
// 2. INSERÇÃO DE DADOS
// --------------------------------------------------

// Inserção dos dados sobre o usuário

// mínimo 15 documentos
db.post.insertMany([
  {
    _id: 1,
    author: 5, //reffering id_usuario
    titulo: "review de jogo do ano",
    conteudo: ["O jogo se mostrou incrivel tendo cutcenes memoraveis"],
    tags: ["jogos", "review"],
    liked: [5, 3, 1],
  },
  {
    _id: 2,
    author: 4,
    titulo: "Um detalhe não reparado no filme",
    conteudo: [
      "Um detalhe não percebidos por muitos e parte do equipamento caindo no meio da gravação e deixaram no filme",
    ],
    tags: ["Filme", "review"],
    liked: [2, 4, 3],
  },
  {
    _id: 3,
    author: 3,
    titulo: "novo jogo usa tecnica que tinha direitos autorias",
    conteudo: [
      "depois de muito tempo o direito autoral caiu e finalmente pode ser usada em novas tematicas",
    ],
    tags: ["jogos", "direito"],
    liked: [1, 2, 3],
  },
  {
    _id: 4,
    author: 2,
    titulo: "filme de advogados surprende",
    conteudo: [
      "novo filme onde mostra um advogado agir em grupo emociona estudande de direito com trabalho em equipe",
    ],
    tags: ["filme", "direito", "review"],
    liked: [2, 4, 3, 1],
  },
  {
    _id: 5,
    author: 1,
    titulo: "são paulo problemas de aluguel",
    conteudo: [
      "Espaço apertado e falta de privacidade a dura realidade das kitnets em são paulo",
    ],
    tags: ["Economia", "Jornal"],
    liked: [2, 3, 4, 5],
  },
  {
    _id: 6,
    author: 7,
    titulo: "jogo indie podendo ser ate melhor qeu goth do ano",
    conteudo: [
      "este jogo lançado semanas antes do jogo do ano pode ate não ser AAA mas tem mecanicas e historias de cair o queixo",
    ],
    tags: ["Review", "Jogos"],
    liked: [2, 4, 6, 1],
  },
  {
    _id: 7,
    author: 6,
    titulo: "Dificuldades enfrentadas pelos advogados ",
    conteudo: [
      "a realidade e muito dificil se manter e atuar e analise de varias situaçoes",
    ],
    tags: ["Jornal", "Economia", "Direito"],
    liked: [2, 1, 3, 4, 7],
  },
  {
    _id: 8,
    author: 2,
    titulo: "filme polemico sobre direito",
    conteudo: [
      "Forte e violento advogado que age dos dois lados da lei",
      "a trama se passa em londres na epoca em que o direito era novidade no local e precisava de varias reformas",
    ],
    tags: ["Jornal", "Filme", "Direito"],
    liked: [7, 6, 2, 3],
  },
  {
    _id: 9,
    author: 1,
    titulo: "Novas tecnologias na agricultura",
    conteudo: [
      "nova tecnologia pode ajudar a manter as plantações por mais tempo",
    ],
    tags: ["Agro", "Jornal"],
    liked: [7, 6, 3],
  },
  {
    _id: 10,
    author: 5,
    titulo: "Grafeno entra no ramo do agro",
    conteudo: [
      "nova linha de ferramentas feitas com grafeno",
      "nova tendencia pode incentivar mais o uso do grafeno",
    ],
    tags: ["Agro", "Jornal"],
    liked: [1, 2, 3, 4],
  },

  {
    _id: 11,
    author: 7,
    titulo: "jogo de simulação surpreende",
    conteudo: [
      "jogo de simulação que se passa em um hospital geral surpreende por ter uma historia envolvente e mecanicas inovadoras",
    ],
    tags: ["Jogos", "Review"],
    liked: [2, 4, 7],
  },
  {
    _id: 12,
    author: 7,
    titulo: "Preços altos seria abuso",
    conteudo: [
      "considerando que jogos AAA são muitos caros para serem produzidos as empresas consideram justo cobrar preços altos em alguns titulos",
      "sendo um dos ramos de maior area de entreterimento e necessario a acessibilidade por um preço acessivel",
    ],
    tags: ["Economia", "Jogos"],
    liked: [1, 2, 3, 4, 5, 6],
  },
  {
    _id: 13,
    author: 5,
    titulo: "Filme se destaca por ter envelhecido bem",
    conteudo: [
      "Mesmo depois de anos continua sendo um otimo filme aboradando temas atuais e criticas sobre questão de politica e tecnologia",
      "um futuro que esta se tornando realidade",
    ],
    tags: ["Filme", "Review"],
    liked: [3, 4, 1],
  },
  {
    _id: 14,
    author: 2,
    titulo: "Filme sobre empreendedorismo",
    conteudo: [
      "Filme inspira a empreender mostrando protagonista dialogar e raciocinio logico em varias areas",
    ],
    tags: ["Economia", "Filme"],
    liked: [6, 3],
  },
  {
    _id: 15,
    author: 7,
    titulo: "Faculdade faz melhor festa de inauguração",
    conteudo: ["Festa incrivel teve varias atraçoes, barracas,"],
    tags: ["Jornal", "Academico"],
    liked: [1, 2, 3, 4, 5, 6],
  },
]);

// Inserção dos dados referentes aos posts dos usuários

// quantidade adequada
db.usuario.insertMany([
  {
    _id: 1,
    nome: "cleber henrique",
    email: "cleber.henrique@gmail.com",
  },
  {
    _id: 2,
    nome: "julia silva",
    email: "julia.silva@gmail.com",
  },
  {
    _id: 3,
    nome: "jaqueline texeira",
    email: "jaqueteixeira@gmail.com",
  },
  {
    _id: 4,
    nome: "gabriel kunimatsu",
    email: "gabrielkmatsu@gmail.com",
  },
  {
    _id: 5,
    nome: "matheus cupertino",
    email: "theucupertino@gmail.com",
  },
  {
    _id: 6,
    nome: "Leonardo aparecido",
    email: "Leoaparrel@gmail.com",
  },
  {
    _id: 7,
    nome: "beatrice vitoria",
    email: "beatvit@gmail.com",
  },
]);

// --------------------------------------------------
// 3. CONSULTAS COM OPERADORES DE COMPARAÇÃO
// --------------------------------------------------

print(
  "=================================================================================================================================================",
);
print(
  "DATABASE: redesSociais;" +
    "\n" +
    "COLLECTIONS: { post, usuario };" +
    "\n" +
    "TITLE: Consultas com operadores de comparação",
);
print(
  "=================================================================================================================================================",
);

print(
  "\n========================================= 3.1 $gt - Busca posts que possuem um ID maior que 10 ==================================================\n",
);
print("db.post.find({_id: { $gt: 10 } }).pretty();");
printjson(
  db.post
    .find({
      _id: { $gt: 10 },
    })
    .toArray(),
);
print("\n");

print(
  "=========================================== 3.2 $lt - Busca posts de autores com ID menor que 3 =================================================\n",
);
print("db.post.find({ author: { $lt: 3} }).pretty();");
printjson(
  db.post
    .find({
      author: { $lt: 3 },
    })
    .toArray(),
);
print("\n");

print(
  "============================================ 3.3 $gte - Busca usuários com ID maior ou igual a 6 ================================================\n",
);
print("db.usuario.find({ _id: { $gte: 6 } }).pretty();");
printjson(
  db.usuario
    .find({
      _id: { $gte: 6 },
    })
    .toArray(),
);
print("\n");

print(
  "============================================== 3.4 $lte - Busca posts com ID menor ou igual a 5 =================================================\n",
);
print("db.post.find({ _id: { $lte: 5 } }).pretty();");
printjson(
  db.post
    .find({
      _id: { $lte: 5 },
    })
    .toArray(),
);
print("\n");

print(
  "======================================== 3.5 $in - Busca posts que tenham as tags 'Jogos' ou 'Filme' ==============================================\n",
);
print("db.post.find({ tags: { $in: ['Jogos', 'Filme'] } }).pretty();");
printjson(
  db.post
    .find({
      tags: {
        $in: ["Jogos", "Filme"],
      },
    })
    .toArray(),
);
print("\n");

print(
  "========================================= 3.6 $ne - Busca todos os usuários, exceto o autor de ID 5 =============================================\n",
);
print("db.usuario.find({ _id: { $ne: 5 } }).pretty();");
printjson(db.usuario.find({ _id: { $ne: 5 } }).toArray());
print("\n");

// --------------------------------------------------
// 4. CONSULTAS COM OPERADORES LÓGICOS
// --------------------------------------------------

print(
  "=================================================================================================================================================",
);
print(
  "DATABASE: redesSociais;" +
    "\n" +
    "COLLECTIONS: { post, usuario };" +
    "\n" +
    "TITLE: Consultas com operadores lógicos",
);
print(
  "=================================================================================================================================================",
);

print(
  "\n===================== 4.1 $and (implícito) - Busca posts que tenham a tag 'Direito' E a tag 'Review' ao mesmo tempo =============================\n",
);
print("db.post.find({ tags: 'Direito', tags: 'Review', }).pretty();");
printjson(db.post.find({ tags: "Direito", tags: "Review" }).toArray());
print("\n");

print(
  "=============================== 4.2 $and (explícito) - Busca posts do autor 2 que também falem de 'Economia' =====================================\n",
);
print(
  "db.post.find({ $and: [{ author: 2 }, { tags: 'Economia' }] }).pretty();",
);
printjson(
  db.post
    .find({
      $and: [{ author: 2 }, { tags: "Economia" }],
    })
    .toArray(),
);
print("\n");

print(
  "=================================== 4.3 $or - Busca posts que sejam escritos pelo autor 5 ou pelo autor 7 ========================================\n",
);
print("db.post.find({ $or: [{ author: 5 }, { author: 7 }] }).pretty();");
printjson(
  db.post
    .find({
      $or: [{ author: 5 }, { author: 7 }],
    })
    .toArray(),
);
print("\n");

print(
  "================================ 4.4 $nor - Busca posts que NÃO sejam do autor 1 e NÃO tenham a tag 'Jornal' ====================================\n",
);
print("db.post({ $nor: [{ author: 1 }, { tags: 'Jornal' }] }).pretty();");
printjson(
  db.post
    .find({
      $nor: [{ author: 1 }, { tags: "Jornal" }],
    })
    .toArray(),
);
print("\n");

print(
  "====================== 4.5 Combinação ($not + $gt) - Busca posts cujo ID NÃO seja maior que 10 (ou seja, IDs de 1 a 10) ======================\n",
);
print("db.post.find({ _id: { $not: { $gt: 10 } } }).pretty();");
printjson(
  db.post
    .find({
      _id: {
        $not: { $gt: 10 },
      },
    })
    .toArray(),
);
print("\n");

print(
  "========================= 4.6 Combinação ($and + $or) - Busca posts de 'Jogos' que pertençam ao autor 5 OU ao autor 7 =========================\n",
);
print(
  "db.post.find({ [{ tags: 'Jogos' }, { $or [{ author: 5 }, { author: 7 }] }] }).pretty();",
);
printjson(
  db.post
    .find({
      $and: [{ tags: "Jogos" }, { $or: [{ author: 5 }, { author: 7 }] }],
    })
    .toArray(),
);
print("\n");

print(
  "============================= 4.7 Combinação (updateOne + $addToSet) - Atualiza a quantidade dos likes de um post =============================\n",
);
print("db.post.updateOne({ _id: 14 }, { $addToSet: { liked: 7 } });");
printjson(
  db.post.updateOne(
    { _id: 14 },
    {
      $addToSet: {
        liked: 7,
      },
    },
  ),
);
print("\n");

print(
  "======================================= 4.8 Combinação (updateOne + $pull) - Exclui um like de um post =======================================\n",
);
print("db.post.updateOne({ _id: 12 }, { $pull: { liked: 6 } });");
printjson(
  db.post.updateOne(
    { _id: 12 },
    {
      $pull: {
        liked: 6,
      },
    },
  ),
);

// ==================================================
// FIM DO TRABALHO
// ==================================================
