// Array para armazenar as tarefas
let tarefas = [];
let continuar = true;

// Loop principal para manter o programa em execução
while (continuar) {
  let escolha = prompt(
    "O que você deseja fazer?\n" +
    "1. Adicionar Tarefa\n" +
    "2. Listar Tarefas\n" +
    "3. Remover Tarefa\n" +
    "4. Concluir Tarefa\n" +
    "5. Sair"
  );

  switch (escolha) {
    case '1': // Adicionar Tarefa
      let novaTarefa = prompt("Digite o nome da nova tarefa:");
      if (novaTarefa) {
        tarefas.push(novaTarefa);
        alert(`Tarefa "${novaTarefa}" adicionada!`);
      }
      break;

    case '2': // Listar Tarefas
      let listaDeTarefas = "--- SUAS TAREFAS ---\n";
      if (tarefas.length === 0) {
        listaDeTarefas += "Nenhuma tarefa na lista.";
      } else {
        for (let i = 0; i < tarefas.length; i++) {
          listaDeTarefas += `${i}: ${tarefas[i]}\n`;
        }
      }
      alert(listaDeTarefas);
      break;

    case '3': // Remover Tarefa
      let indiceParaRemover = parseInt(prompt("Digite o índice da tarefa para remover:"));
      // Verifica se o índice é um número válido e existe no array
      if (!isNaN(indiceParaRemover) && indiceParaRemover >= 0 && indiceParaRemover < tarefas.length) {
        let tarefaRemovida = tarefas.splice(indiceParaRemover, 1);
        alert(`Tarefa "${tarefaRemovida[0]}" removida!`);
      } else {
        alert("Índice inválido.");
      }
      break;

    case '4': // Concluir Tarefa
      let indiceParaConcluir = parseInt(prompt("Digite o índice da tarefa para concluir:"));
       // Verifica se o índice é um número válido e existe no array
      if (!isNaN(indiceParaConcluir) && indiceParaConcluir >= 0 && indiceParaConcluir < tarefas.length) {
        // Adiciona o marcador apenas se ainda não estiver concluída
        if (!tarefas[indiceParaConcluir].startsWith("✅")) {
            tarefas[indiceParaConcluir] = "✅ " + tarefas[indiceParaConcluir];
            alert("Tarefa marcada como concluída!");
        } else {
            alert("Essa tarefa já está concluída.");
        }
      } else {
        alert("Índice inválido.");
      }
      break;

    case '5': // Sair
      continuar = false;
      alert("Encerrando o programa. Até logo!");
      break;

    default:
      alert("Opção inválida. Por favor, escolha um número de 1 a 5.");
      break;
  }
}