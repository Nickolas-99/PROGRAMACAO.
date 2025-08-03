// 1. Coleta de dados
const idade = parseInt(prompt("Digite sua idade:"));
const status = prompt("Qual seu status? (registrado / não registrado)")?.trim().toLowerCase() || "";

// 2. Processamento e Exibição em um único bloco
if (isNaN(idade)) {
  console.error("Idade inválida.");
} else {
  const output = [
    `Classificação: ${idade >= 18 ? 'Maior de idade' : 'Menor de idade'}`,
    `Status: ${{
      'registrado': 'Bem-vindo(a) de volta.',
      'não registrado': 'Por favor, complete seu registro.'
    }[status] || 'Status desconhecido.'}`,
    `Acesso: ${idade >= 18 && status === 'registrado' ? '✅ Acesso Completo' : '❌ Acesso Limitado'}`
  ];

  console.log(output.join('\n'));
  alert("Verificação concluída! Confira o console (F12).");
}