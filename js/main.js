 // essa função faz com oque tiver dentro dela só carregue depois que todo o HTML carregou
 $(function() {


     contas = [];

     // para carregar o html primeiro e depois executar, tem que chamar aqui dentro. no caso oque eu fiz ai foi uma excessão, porque to chamando uma função em um clique
     // do botão no HTML


     $('#cadastrar').click(function() {

         var contaAtual = lerDados();

         validarDados(contaAtual)
         if (validarDados() != false) {
             listarContas()

             contas.push(contaAtual);

             var totalContas = somarContas()

             exibirTotal(totalContas);

             var nome = $("#nome");
             var valor = $('#valor');
             limparDados(nome, valor)
         }
     })

 })

 var quantidadeRegistros = 0

 function limparDados(nome, valor) {
     nome.val('');
     valor.val('');
 }

 function lerDados() {
     conta = {
         valor: +$('#valor').val(),
         nome: $('#nome').val(),
         id: quantidadeRegistros++
     }

     return conta
 }

 function listarContas() {

     return $('#contas-mes').append(`<tr><td>${conta.id+1}</td><td>${conta.nome}</td><td> R$ ${conta.valor.toFixed(2)}</td><td><button onclick="deletarConta()">Deletar ${conta.id+1}</button></td></tr>`)
 }




 function validarDados() {
     if (conta.nome == '') {
         alert("Favor informar o nome da conta")
         return false
     } else if (conta.valor <= 0) {
         alert("Favor informar o valor da conta")
         return false
     }
     return true
 }

 function somarContas() {

     var total = 0
     contas.forEach((valorConta) => {
         total = total + valorConta.valor
     })
     return total;
 }

 function exibirTotal(total) {
     return $('#total-contas').text(`O total de contas deste mês foi de: R$ ${total.toFixed(2)}`)
 }

 function deletarConta() {
     contas.forEach() => {
         console.log(conta.id)
     }
 }