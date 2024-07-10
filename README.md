<h2 align="center">Simulator Télos - Trilha Linguagem de Programação 🚀</h2>

💻 **Monitoramento de Repasses Governamentais**

Esse projeto consiste em um sistema automatizado que recebe os dados do governo, analisa e exibe informações relevantes.


🚧 Projeto em construção 🚧


🔨 **Funcionalidades do projeto**

Implementar o monitorador de repasses governamentais de acordo com as histórias de usuário.

`História de usuário 1: Recebimento e Exibição de Dados do Governo`

Como membro da equipe financeira, desejo receber e exibir os dados dos repasses do governo, para acompanhar as transações efetuadas.

_Critérios de aceitação:_

- Exibir a quantidade total de repasses no console.

`História de usuário 2: Análise de Transações por Status`

Como membro da equipe financeira, desejo analisar as transações para compreender os repasses efetuados pelo governo

_Critérios de aceitação:_

I - O sistema deve exibir um resumo dos repasses bem sucedidos, com as seguintes informações:

    1. Quantidade total de repasses bem sucedidos
    2. Quantidade total de repasses bem sucedidos por órgão
    3. Valor total de repasses bem sucedidos
    4. Valor total de repasses bem sucedidos por órgão

II - O sistema deve exibir um resumo dos repasses com falha, com as seguintes informações:

    1. Quantidade total de repasses com falha
    2. Quantidade total de repasses com falha por órgão
    3. Quantidade total de repasses com falha por motivo
    4. Valor total de repasses com falha
    5. Valor total de repasses com falha por órgão
    6. Valor total de repasses com falha por motivo

`História de usuário 3: Estatísticas de Repasses por critérios`

Como membro da equipe financeira, desejo analisar as transações para compreender os repasses efetuados pelo governo.

_Critérios de aceitação:_

I - O sistema deverá exibir os seguintes repasses:

    1. Detalhes do repasse com maior valor
    2. Detalhes do repasse com menor valor
    3. Dia com mais repasses
    4. Órgão com mais repasses
    5. Órgão com mais repasses com sucesso
    6. Órgão com mais repasses falhados
    7. Motivo de falha com mais repasses

`História de usuário 4: Apresentação Automática de Detalhes de Transações`

Como membro da equipe financeira, desejo analisar detalhadamente as transações de repasses efetuados por um determinado órgão que eu irei definir antes de começar o processamento do arquivo.

_Critérios de aceitação:_

- O sistema deve ser capaz de identificar automaticamente
transações que atendam ao critério de órgão responsável.
-  Os resultados da busca devem ser exibidos no console de forma
organizada, apresentando todos os detalhes das transações
encontradas.
- A busca por transações deve ser realizada pelo sistema
automaticamente, sem a necessidade de interação do usuário.


🚩 _Algumas transações estão marcadas como `"FALHA"` sem descrição para o motivo da falha. Isso deve ser resolvido com o tratamento de erros._

`História de usuário 5: Tratamento de erros`

Como membro da equipe financeira, desejo saber se houve algum problema no processamento das transações. É considerado um problema no processamento quando uma transação tem o status "FALHA" mas não tem um valor no campo "MOTIVO DA FALHA".

_Critérios de aceitação:_

- O sistema deverá exibir detalhes das transações que não foram
processadas com sucesso

`História de usuário 6: Ajustes nas estatísticas`

Todas as outras estatísticas implementadas nas histórias anteriores não deverão levar em consideração as transações inválidas

_Critérios de aceitação:_

- O sistema não deverá levar em consideração as transações inválidas para efetuar os cálculos anteriormente realizados

















