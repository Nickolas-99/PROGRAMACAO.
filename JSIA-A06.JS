// --- 1. SETUP INICIAL ---
// Array que irá armazenar nossa lista de tarefas.
let tarefas = ['Estudar Funções em JS', 'Fazer compras', 'Pagar contas'];


// --- 2. FUNÇÃO ANÔNIMA PARA ADICIONAR TAREFAS ---
// Atribuímos uma função sem nome a uma variável.
// Esta é uma Função Anônima.
const adicionarTarefa = function(tarefa) {
  if (tarefa && tarefa.trim() !== '') { // Garante que a tarefa não está vazia
    tarefas.push(tarefa.trim());
    console.log(`✅ Tarefa "${tarefa.trim()}" foi adicionada!`);
  } else {
    console.warn("⚠️ A tarefa não pode ser vazia.");
  }
};

// --- 3. ARROW FUNCTION PARA LISTAR TAREFAS ---
// Usamos a sintaxe mais curta e moderna de uma Arrow Function.
const listarTarefas = () => {
  console.log("\n--- LISTA DE TAREFAS ATUAL ---");
  if (tarefas.length === 0) {
    console.log("Você não tem tarefas pendentes.");
  } else {
    tarefas.forEach((tarefa, indice) => {
      console.log(`${indice}: ${tarefa}`);
    });
  }
  console.log("--------------------------------\n");
};

// --- 4. FUNÇÃO DE CALLBACK E FUNÇÃO PRINCIPAL ---

// Esta é uma função de ordem superior (Higher-Order Function) porque
// recebe outra função (o callback) como um de seus argumentos.
const gerenciarTarefas = (indice, callback) => {
  // Validação para garantir que o índice fornecido é válido.
  if (isNaN(indice) || indice < 0 || indice >= tarefas.length) {
    console.error("❌ Erro: Índice inválido ou tarefa não encontrada.");
    return;
  }
  // Se o índice for válido, a função de callback recebida é executada.
  callback(indice);
  // Após a operação, lista as tarefas novamente para mostrar o resultado.
  listarTarefas();
};

// Abaixo estão as nossas Funções de Callback.
// Cada uma delas realiza uma operação específica.

const removerTarefa = (indice) => {
  const tarefaRemovida = tarefas.splice(indice, 1);
  console.log(`🗑️ Tarefa "${tarefaRemovida[0]}" foi removida.`);
};

const concluirTarefa = (indice) => {
  if (tarefas[indice].startsWith('✔️')) {
    console.log("Esta tarefa já está marcada como concluída.");
  } else {
    tarefas[indice] = '✔️ ' + tarefas[indice];
    console.log(`👍 Tarefa "${tarefas[indice]}" marcada como concluída!`);
  }
};

const atualizarTarefa = (indice) => {
  const novaDescricao = prompt(`Digite a nova descrição para a tarefa: "${tarefas[indice]}"`);
  if (novaDescricao && novaDescricao.trim() !== '') {
    tarefas[indice] = novaDescricao.trim();
    console.log(`✏️ Tarefa atualizada com sucesso!`);
  } else {
    console.warn("⚠️ A atualização foi cancelada ou a descrição estava vazia.");
  }
};

// --- 5. INTERAÇÃO COM O USUÁRIO (DEMONSTRAÇÃO) ---

// Mostra a lista inicial de tarefas.
alert("Bem-vindo ao Gerenciador de Tarefas! Os resultados serão exibidos no console.");
listarTarefas();

// 1. Adicionar uma nova tarefa (usando a função anônima).
let nova = prompt("Digite uma nova tarefa para adicionar:");
adicionarTarefa(nova);
listarTarefas();

// 2. Concluir uma tarefa (usando a função de callback).
let indiceParaConcluir = parseInt(prompt("Digite o ÍNDICE da tarefa que deseja CONCLUIR:"));
gerenciarTarefas(indiceParaConcluir, concluirTarefa); // 'concluirTarefa' é o callback

// 3. Remover uma tarefa (usando outra função de callback).
let indiceParaRemover = parseInt(prompt("Digite o ÍNDICE da tarefa que deseja REMOVER:"));
gerenciarTarefas(indiceParaRemover, removerTarefa); // 'removerTarefa' é o callback

// 4. Atualizar uma tarefa (demonstrando o último callback).
let indiceParaAtualizar = parseInt(prompt("Digite o ÍNDICE da tarefa que deseja ATUALIZAR:"));
gerenciarTarefas(indiceParaAtualizar, atualizarTarefa); // 'atualizarTarefa' é o callback