const data = JSON.parse(` [{\"orgao\":\"MEC\",\"data\":\"01/01/2024\",\"valor\":500.00,\"status\":\"falha\"},
{\"orgao\":\"Ministério da Saúde\",\"data\":\"03/01/2024\",\"valor\":750.00,\"status\":\"sucesso\"},
{\"orgao\":\"MEC\",\"data\":\"05/01/2024\",\"valor\":1000.00,\"status\":\"falha\",\"motivo\":\"falta de documentação\"},
{\"orgao\":\"Ministério da Educação\",\"data\":\"08/01/2024\",\"valor\":600.00,\"status\":\"sucesso\"},
{\"orgao\":\"Ministério da Saúde\",\"data\":\"10/01/2024\",\"valor\":900.00,\"status\":\"sucesso\"},
{\"orgao\":\"Ministério da Educação\",\"data\":\"12/01/2024\",\"valor\":300.00,\"status\":\"falha\",\"motivo\":\"dados inválidos\"},
{\"orgao\":\"Ministério do Trabalho\",\"data\":\"17/01/2024\",\"valor\":2000.00,\"status\":\"sucesso\"},
{\"orgao\":\"Ministério da Saúde\",\"data\":\"15/01/2024\",\"valor\":1200.00,\"status\":\"sucesso\"},
{\"orgao\":\"MEC\",\"data\":\"17/01/2024\",\"valor\":800.00,\"status\":\"sucesso\"},
{\"orgao\":\"Ministério da Educação\",\"data\":\"20/01/2024\",\"valor\":400.00,\"status\":\"sucesso \"},
{\"orgao\":\"MEC\",\"data\":\"22/01/2024\",\"valor\":1100.00,\"status\":\"falha\",\"motivo\":\"falta de verba\"},
{\"orgao\":\"Ministério do Trabalho\",\"data\":\"22/01/2024\",\"valor\":3000.00,\"status\":\"falha\",\"motivo\":\"falta de verba\"},
{\"orgao\":\"Ministério da Justiça\",\"data\":\"22/01/2024\",\"valor\":800,\"status\":\"pendente\"},
{\"orgao\":\"Ministério da Justiça\",\"data\":\"22/01/2024\",\"valor\":1000,\"status\":\"falha\",\"motivo\":\"falta de verba\"} ]`);

/*História de usuário 6 - Ajuste nas estatísticas
Realizei a implementação dessa história primeiro para que os ajustes nas estatísticas já sejam aplicados nas histórias seguintes.
Adicionei transações ao JSON que não atendam aos critérios de status válidos.*/
const transacoesValidas = data.filter(transacao => {
    return(transacao.status === "sucesso" || transacao.status === "falha");
})

//História de usuário 1 - Recebimento e Exibição de Dados do Governo
console.log(`Total de repasses do governo: ${transacoesValidas.length}\n`);

const repassesSucesso = transacoesValidas.filter(data => data.status === "sucesso");
const repassesFalha = transacoesValidas.filter(data => data.status === "falha");

/*História de usuário 2 - Análise de Transações por Status
Parte I - Sucesso*/
const totalRepassesComSucesso = repassesSucesso.length;
const totalValorRepassesComSucesso = repassesSucesso.reduce((sum, data) => sum + data.valor, 0);

const repassesComSucessoPorOrgao = repassesSucesso.reduce((acc, data) => {
    if (!acc[data.orgao]) {
        acc[data.orgao] = {count: 0, valor: 0};
    }
    acc[data.orgao].count ++;
    acc[data.orgao].valor += data.valor;
    return acc;
}, {});

//Exibir no console
console.log(`Total de repasses bem sucedidos: ${totalRepassesComSucesso}`);
console.log(`Total de repasses bem sucedidos: ${totalValorRepassesComSucesso}\n`);
console.log("Total de repasses bem sucedidos, por órgão:");
Object.keys(repassesComSucessoPorOrgao).forEach(orgao => {
    console.log(`- ${orgao}:`);
    console.log(`Total de repasses: ${repassesComSucessoPorOrgao[orgao].count}`);
    console.log(`Valor total repassado: ${repassesComSucessoPorOrgao[orgao].valor}\n--------`);
});

//Parte II - Falhas
const totalRepassesComFalha = repassesFalha.length;
const totalValorRepassesComFalha = repassesFalha.reduce((sum, data) => sum + data.valor, 0);

const repassesComFalhaPorOrgao = repassesFalha.reduce((acc, data) => {
    if (!acc[data.orgao]) {
        acc[data.orgao] = {count: 0, valor: 0};
    }
    acc[data.orgao].count ++;
    acc[data.orgao].valor += data.valor;
    return acc;
}, {});

const repassesComFalhaPorMotivo = repassesFalha.reduce((acc, data) => {
    if (!acc[data.motivo]) {
        acc[data.motivo] = {count: 0, valor: 0};
    }
    acc[data.motivo].count ++;
    acc[data.motivo].valor += data.valor;
    return acc;
}, {});

//Exibir no console
console.log(`\nTotal de repasses com falha: ${totalRepassesComFalha}`);
console.log(`Valor total de repasses com falha: ${totalValorRepassesComFalha}\n`);
console.log("Total de repasses com falha, por órgão:");
Object.keys(repassesComFalhaPorOrgao).forEach(orgao => {
    console.log(`- ${orgao}:`);
    console.log(`Total de repasses: ${repassesComFalhaPorOrgao[orgao].count}`);
    console.log(`Valor total de repasses: ${repassesComFalhaPorOrgao[orgao].valor}\n--------`);
});

console.log("Total de repasses com falha, por motivo:");
Object.keys(repassesComFalhaPorMotivo).forEach(motivo => {
    console.log(`- ${motivo}:`);
    console.log(`Total de repasses: ${repassesComFalhaPorMotivo[motivo].count}`);
    console.log(`Valor total de repasses: ${repassesComFalhaPorMotivo[motivo].valor}\n--------`);
});

//História de usuário 3 - Estatísticas de Repasses por critérios
const repasseComMaiorValor = data.reduce((max, data) => data.valor > max.valor ? data : max, data[0]);
const repasseComMenorValor = data.reduce((min, data) => data.valor < min.valor ? data : min, data[0]);

const repassesPorDia = data.reduce((acc, data) => {
    acc[data.data] = (acc[data.data] || 0) + 1;
    return acc;
});

const diaRepasses = Object.keys(repassesPorDia).reduce((a, b) => repassesPorDia[a] > repassesPorDia[b] ? a : b);

const repassesPorOrgao = data.reduce = data.reduce((acc, data) => {
    acc[data.orgao] = (acc[data.orgao] || 0) + 1;
    return acc;
}, {});

const orgaoComMaisRepasses = Object.keys(repassesPorOrgao).reduce((a, b) => repassesPorOrgao[a] > repassesPorOrgao[b] ? a : b);
const orgaoMaisRepassesSucesso = Object.keys(repassesComSucessoPorOrgao).reduce((a, b) => repassesComSucessoPorOrgao[a].count > repassesComSucessoPorOrgao[b].count ? a : b);
const orgaoMaisRepassesFalhados = Object.keys(repassesComFalhaPorOrgao).reduce((a, b) => repassesComFalhaPorOrgao[a].count > repassesComFalhaPorOrgao[b] ? a : b);
const motivoMaisFalhas = Object.keys(repassesComFalhaPorMotivo).reduce((a, b) => repassesComFalhaPorMotivo[a].count > repassesComFalhaPorMotivo[b].count ? a : b);

const detalhesRepasse = (repasse) => `
    Orgão: ${repasse.orgao}
    Data: ${repasse.data}
    Valor: ${repasse.valor}
    Motivo: ${repasse.motivo}
`;

//Exibir no console
console.log("Detalhes do repasse com maior valor:", detalhesRepasse(repasseComMaiorValor));
console.log("Detalhes do repasse com menor valor:", detalhesRepasse(repasseComMenorValor));
console.log(`Data com mais repasses: ${diaRepasses}`);
console.log(`Orgão com mais repasses: ${orgaoComMaisRepasses}`);
console.log(`Orgão com mais repasses com sucesso: ${orgaoMaisRepassesSucesso}`);
console.log(`Órgão com mais repasses falhados: ${orgaoMaisRepassesFalhados}`);
console.log(`Motivo de falha com mais repasses: ${motivoMaisFalhas}`);

//História de usuário 4 - Apresentação Automática de Detalhes de Transações
const orgaoResponsavel = "Ministério da Saúde";

const transacoesOrgao = data.filter(transacao => transacao.orgao === orgaoResponsavel);

console.log(`\nDetalhes das transações do orgão: ${orgaoResponsavel}`);
transacoesOrgao.forEach(transacao => {
    console.log(`
        Orgão: ${transacao.orgao}
        Data: ${transacao.data}
        Valor: ${transacao.valor}
        Status: ${transacao.status}
        Motivo: ${transacao.motivo || "o motivo não especificado"}
    `);
});

//História de usuário 5 - Tratamento de erros
const transacoesComProblema = transacoesValidas.filter(item => item.status === "falha" && !item.motivo);

if(transacoesComProblema.length > 0){
    console.log("\nErro de processamento!");
    transacoesComProblema.forEach((transacao) => {
        console.log("- Detalhes da transação:");
        console.log(`  Orgão: ${transacao.orgao}`);
        console.log(`  Data: ${transacao.data}`);
        console.log(`  Valor: ${transacao.valor}`);
        console.log(`  Status: ${transacao.status}`);
        console.log("Erro: o motivo da falha de repasse não foi especificado.");
    });
} else{
    console.log("Não foram encontradas transações com erro de processamento.");
};







