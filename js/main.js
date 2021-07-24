 // essa função faz com oque tiver dentro dela só carregue depois que todo o HTML carregou

 window.onload = function() {

     // para carregar o html primeiro e depois executar, tem que chamar aqui dentro. no caso oque eu fiz ai foi uma excessão, porque to chamando uma função em um clique
     // do botão no HTML

 };

 function PreencherGastos() {
     //AQUI SÃO INSERIDOS OS VALORES DAS CONTAS
     var contas = alert("Você poderá inserir os gastos do mês a seguir, se for separar os decimais, utilize ponto ao invés de vírgula:")
     var despAgua = Number(prompt("Digite a despesa com à conta de agua"))
     var despEnergia = Number(prompt("Digite a despesa com a conta de energia"))
     var despCartaoSantander = Number(prompt("Digite a despesa com o cartão do Santander"))
     var despNubank = Number(prompt("Digite a despesa com o Nubank"))
     var despAluguel = Number(prompt("Digite a despesa com o aluguel"))
     var despEmbracon = Number(prompt("Digite a despesa com a Embracon"))
     var despRastreamento = Number(prompt("Digite a despesa com o Rastreamento"))
     var despInternet = Number(prompt("Digite a despesa com a internet"))
     var despCartaoEli = Number(prompt("Digite a despesa com o cartão da Elieuda"))
     var despCelular = Number(prompt("Digite o valor gasto com o plano de celular"))

     //NESTE É ADICIONADO MAIS ALGUMA DESPESA(TEXTO), QUE FICA CAPTURADO NA MEMÓRIA DA APLICAÇÃO
     var despOutroTexto = prompt("Digite alguma outra despesa:")

     //ONDE É CAPTURADO O VALOR NESSA VARIÁVEL
     var despOutroValor = Number(prompt(`Digite o valor da despesa com o(a) ${despOutroTexto}:`))

     // ARRAY ONDE É ARMAZENADO TODOS OS VALORES DAS VARIÁVEIS.
     var despesas = [despAgua, despEnergia, despCartaoSantander, despNubank, despAluguel, despEmbracon, despRastreamento, despInternet, despCartaoEli, despCelular, despOutroValor]
         //var despesas = [despAgua, despEnergia]

     //USA-SE O REDUCE PARA SOMAR TODOS OS ITENS DO ARRAY E O TO.FIXED PARA FIRMAR APENAS 2 CASAS DECIMAIS
     var contasApagar = despesas.reduce((x, y) => x + y).toFixed(2)

     //AQUI É ONDE É APRESENTADO O VALOR TOTAL DAS CONTAS JÁ MANIPULANDO A DOM
     var h2Dom = document.querySelector('#total-contas')
     h2Dom.innerHTML = "O total de contas no mês foi de:" + contasApagar

     //AQUI É ONDE FIXAMOS DUAS CASAS DECIMAIS E APRESENTAMOS DISCRIMINADAMENTE TODOS OS GASTOS NA DOM
     var h3Dom = document.querySelector('#contas-mes')
     h3Dom.innerHTML = `Os valores das despesas desse mês foram os seguintes: <br> Conta de Água: R$  ${despAgua.toFixed(2)}<br>Conta de Energia: R$ ${despEnergia.toFixed(2)}<br>Cartão Santander: R$ ${despCartaoSantander.toFixed(2)}<br>Nubank: R$ ${despNubank.toFixed(2)}<br>Aluguel: R$ ${despAluguel.toFixed(2)}<br>Embracon: R$ ${despEmbracon.toFixed(2)}<br>Rastreamento: R$ ${despRastreamento.toFixed(2)}<br>Internet: R$ ${despInternet.toFixed(2)}<br>Cartão Elieuda: R$ ${despCartaoEli.toFixed(2)}<br>Plano Celular: R$ ${despCelular.toFixed(2)}<br>${despOutroTexto}: R$  ${despOutroValor.toFixed(2)}`

 }