// Array para armazenar os nomes coletados.
let nomes = [];

// 1. Coleta de Dados com while (true)
alert("Vamos criar uma lista de nomes.\nDigite um nome de cada vez e pressione OK.\nPara terminar, digite 'sair'.");

while (true) {
  // Solicita uma entrada do usuário.
  let entrada = prompt("Digite um nome (ou 'sair' para terminar):");

  // Verifica se o usuário clicou em "Cancelar" ou se a entrada está vazia.
  // Trata ambos os casos como uma intenção de sair.
  if (entrada === null || entrada.trim().toLowerCase() === 'sair') {
    console.log("Coleta de dados encerrada.");
    break; // Encerra o loop while.
  }

  // Adiciona o nome digitado (sem espaços em branco no início/fim) ao array.
  nomes.push(entrada.trim());
  console.log(`'${entrada.trim()}' foi adicionado à lista.`);
}


// Verifica se algum nome foi inserido antes de tentar processar.
if (nomes.length > 0) {

  // 2. Processamento com 'for' clássico para exibir com índices.
  console.log("\n--- Lista de Nomes com Índices (usando 'for') ---");
  for (let i = 0; i < nomes.length; i++) {
    // Exibe o nome com seu índice (começando do 1 para melhor visualização).
    console.log(`${i + 1}: ${nomes[i]}`);
  }

  // 3. Exibição com 'for...of' para uma mensagem personalizada.
  console.log("\n--- Mensagens Personalizadas (usando 'for...of') ---");
  for (const nome of nomes) {
    // Exibe cada nome individualmente com a mensagem.
    console.log(`Bem-vindo(a), ${nome}!`);
  }

} else {
  // Mensagem para o caso de nenhum nome ter sido inserido.
  console.log("\nNenhum nome foi inserido na lista.");
}

alert("O processamento terminou! Verifique o console (F12) para ver os resultados.");