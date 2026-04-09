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
  "GRUPO:\n - Pedro Henrique Alvarenga Herzog;\n - Victor Caetano Da Conceição;\n - Débora Cupertino de Araújo Lacerda;",
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
print("db.usuario.deleteMany({});");
let delUser = db.usuario.deleteMany({});

print("db.post.deleteMany({});");
let delPost = db.post.deleteMany({});

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
db.usuario.insertMany([
  // mínimo 15 documentos
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
    nome: "usuario06",
    email: "usuario06@gmail.com",
  },
  {
    _id: 7,
    nome: "usuario07",
    email: "usuario07@gmail.com",
  }
]);

// Inserção dos dados referentes aos posts dos usuários
db.post.insertMany([
  // quantidade adequada
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
      "Espaço a apertado e falta de privacidade a dura realidade das kitnets em são paulo",
    ],
    tags: ["Economia", "Jornal"],
    liked: [1, 2, 3, 4, 5],
  },
  {
    _id: 6,
    author: 0,
    titulo: "",
    conteudo: [""],
    tags: ["tag1", "tag2"],
    liked: [0],
  },
  {
    _id: 7,
    author: 0,
    titulo: "",
    conteudo: [""],
    tags: ["tag1", "tag2"],
    liked: [0],
  },
  {
    _id: 8,
    author: 0,
    titulo: "",
    conteudo: [""],
    tags: ["tag1", "tag2"],
    liked: [0],
  },
  {
    _id: 9,
    author: 0,
    titulo: "",
    conteudo: [""],
    tags: ["tag1", "tag2"],
    liked: [0],
  },
  {
    _id: 10,
    author: 0,
    titulo: "",
    conteudo: [""],
    tags: ["tag1", "tag2"],
    liked: [0],
  },
  {
    _id: 12,
    author: 0,
    titulo: "",
    conteudo: [""],
    tags: ["tag1", "tag2"],
    liked: [0],
  },
  {
    _id: 13,
    author: 0,
    titulo: "",
    conteudo: [""],
    tags: ["tag1", "tag2"],
    liked: [0],
  },
  {
    _id: 14,
    author: 0,
    titulo: "",
    conteudo: [""],
    tags: ["tag1", "tag2"],
    liked: [0],
  },
  {
    _id: 15,
    author: 0,
    titulo: "",
    conteudo: [""],
    tags: ["tag1", "tag2"],
    liked: [0],
  }
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

// 4.1 $and (implícito) - [explicação]
db.colecao1
  .find({
    campo1: valor1,
    campo2: valor2,
  })
  .pretty();

// // 4.2 $and (explícito) - [explicação]
// db.colecao1
//   .find({
//     $and: [{ campo1: valor1 }, { campo2: valor2 }],
//   })
//   .pretty();

// // 4.3 $or - [explicação]
// db.colecao1
//   .find({
//     $or: [{ campo1: valor1 }, { campo2: valor2 }],
//   })
//   .pretty();

// // 4.4 $nor - [explicação]
// db.colecao1
//   .find({
//     $nor: [{ campo1: valor1 }, { campo2: valor2 }],
//   })
//   .pretty();

// // 4.5 $not - [explicação]
// db.colecao1
//   .find({
//     campo: { $not: { $gt: valor } },
//   })
//   .pretty();

// // 4.6 Combinação ($and + $or) - [explicação]
// db.colecao1
//   .find({
//     $and: [
//       { campo1: valor1 },
//       { $or: [{ campo2: valor2 }, { campo3: valor3 }] },
//     ],
//   })
//   .pretty();

// ==================================================
// FIM DO TRABALHO
// ==================================================
