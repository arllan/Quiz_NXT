 var elementoPai = $("#elemento-pai");
     // console.log(elementoPai);

      
        switch (location.search) {
          case '?acai=1':
              $("#ml_acai").text(' Açai de 300ml');
              $("#preco-acai").text('A parti de R$ 7,00');
              $("#preco-final").text('Total R$ 7,00');
              console.log('300');
            break;
          case '?acai=2':
              $("#ml_acai").text(' Açai de 500ml');
              $("#preco-acai").text('A parti de R$ 13,00');
              $("#preco-final").text('Total R$ 13,00');
              console.log('500');
          break;
          case '?acai=3':
              $("#ml_acai").text(' Açai de 700ml');
              $("#preco-acai").text('A parti de R$ 17,00');
              $("#preco-final").text('Total R$ 17,00');
              console.log('700');
          
          default:
            alert("Escolha o tamanho do açai primeiro para depois escolher os acompalhamentos!");
            window.location.href = "index.html";

            break;
        }
      // Parte onde verifica se os botões foram selecionados
      $('#opcaoA').on('click',verificacaoCheckbox());



      function verificacaoCheckbox() {
        var respostas = [] ;
        var opcoes = [] ;

        for (var i = 0; i <= 5 ; i++) {

           respostas [i] = $('#opcaoA').find('input').eq(i).prop('checked'); // verificando elemento se foi clicado
          // console.log(respostas[i]);

          if (respostas[i] == true) {
              //console.log(i);
               opcoes[i] = $('#opcaoA').find('input').eq(i).val();             
           } else {
             // statement
           }

           //console.log(opcoes[i]);
           //$('#status').text(opcoes.length);
           //if ($('#status').text() == 5) {
          //  $('#myModal').modal('show'); 
          // }
                 
        }

        return opcoes ;            

        
      }