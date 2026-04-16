print(
  "===========================================================================",
);
print(
  "TRABALHO MONGODB - CONSULTAS AVANÇADAS COM OPERADORES COMPARATIVOS/LÓGICOS",
);
print(
  "===========================================================================",
);
print("----------------------------------------------------");
print("TEMA: Redes Sociais");
print(
  "GRUPO:\n - Pedro Henrique Alvarenga Herzog;\n - Victor Caetano Da Conceição;\n - Debora Cupertino de Araújo Lacerda;",
);
print("----------------------------------------------------\n");

// ==================================================
// DATA DE ENTREGA: 28/04/2026
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

print("------- Exclusão e Visualização de dados ------------");
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
    "Resposta: Nenhuma informação encontrada para visualizar os dados pós-exclusão;",
  );
} else {
  // Caso houvesse dados, isso imprimiria os resultados no terminal
  printjson(db.usuario.find().toArray());
  printjson(db.post.find().toArray());
}
print("------ ################################## --------------\n");

print("------- Exclusão e Criação das Collections -------------");
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

print("------ ##################################### -------------");

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
    liked: [3,4,1],
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
    liked: [1,2,3,4,5,6],
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
    email: "usuario07@gmail.com",
  },
]);

// --------------------------------------------------
// 3. CONSULTAS COM OPERADORES DE COMPARAÇÃO
// ==================================================

// 3.1 $gt - [explicação]
db.colecao1.find({ campo: { $gt: valor } }).pretty();

// 3.2 $lt - [explicação]
db.colecao1.find({ campo: { $lt: valor } }).pretty();

// 3.3 $gte - [explicação]
db.colecao1.find({ campo: { $gte: valor } }).pretty();

// 3.4 $lte - [explicação]
db.colecao1.find({ campo: { $lte: valor } }).pretty();

// 3.5 $in - [explicação]
db.colecao1.find({ campo: { $in: [valor1, valor2] } }).pretty();

// 3.6 $ne - [explicação]
db.colecao1.find({ campo: { $ne: valor } }).pretty();

// --------------------------------------------------
// 4. CONSULTAS COM OPERADORES LÓGICOS
// --------------------------------------------------

print("--- 4.1 $and (implícito) - [explicação] ---")
use('redesSociais')
db.post
  .find({
    tags: 'Direito',
    tags: 'Review',
  })
  .pretty();

print("--- 4.2 $and (explícito) - [explicação] ---")
use('redesSociais')
db.post
  .find({
    $and: [{ _id: 6 }, { author: 7 }],
  })
  .pretty();

print("--- 4.3 $or - [explicação] ---")
db.post
  .find({
    $or: [{ author: 5 }, { author: 7 }],
  })
  .pretty();

// print("--- 4.4 $nor - [explicação] ---")
use('redesSociais')
db.post
  .find({
    $nor: [{ author: 5 }, { _id: 7 }],
  })
  .pretty();

// print("--- 4.5 $not - [explicação] ---")
db.colecao1
  .find({
    campo: { $not: { $gt: valor } },
  })
  .pretty();

// print("--- 4.6 Combinação ($and + $or) - [explicação] ---")
db.colecao1
  .find({
    $and: [
      { campo1: valor1 },
      { $or: [{ campo2: valor2 }, { campo3: valor3 }] },
    ],
  })
  .pretty();

// ==================================================
// FIM DO TRABALHO
// ==================================================
