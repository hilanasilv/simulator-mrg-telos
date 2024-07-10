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
console.log(`Total de repasses do governo: ${transacoesValidas.lenght}\n`);

const repasseSucesso = transacoesValidas.filter(data => data.status === "sucesso");
const repasseFalha = transacoesValidas.filter(data => data.status === "falha");

/*História de usuário 2 - Análise de Transações por Status
Parte I - Sucesso*/
const totalRepassesComSucesso = repasseSucesso.lenght;
const totalValorRepassesComSucesso = repasseSucesso.reduce((sum, data) => sum + data.valor, 0);

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
console.log(`Total de repasses bem sucedidos:  ${totalValorRepassesComSucesso}\n`);
console.log("Total de repasses bem sucedidos, por órgão:");
Object.keys(repassesComSucessoPorOrgao).forEach(orgao => {
    console.log(`- ${orgao}:`);
    console.log(`Total de repasses: ${repassesComSucessoPorOrgao[orgao].count}`);
    console.log(`Valor total repassado: ${repassesComSucessoPorOrgao[orgao].valor}\n--------`);
});

//Parte II - Falhas
const totalRepassesComFalha = repassesFalha.lenght;
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








