    const display = document.querySelector('.display');  // <- Acessar o Display
    const buttons = document.querySelectorAll('.botao');  // <- Acessar Botão
    const imagem = document.querySelector('.image');
    const fail = new Audio('fail.mp3');


    buttons.forEach(button => {       // Para cada botão, fazer a seguinte função
        button.addEventListener('click', () => {   // Esperar o click para executar a seguinte função

            const buttonText = button.textContent;  // Armazena o texto do botão

            if (buttonText === 'C') {     // Caso sera o botão C, display limpa
                display.value = '';
              
                
            } else if (buttonText === '=') {     // Caso seja botão =, fazer 
                try {
                    display.value = eval(display.value); // Pega valor do display e transforma em numero
                   
                } catch {
                    display.value = 'Erro';
                    fail.play(); 
                }
            } else {   // Caso o botão não seja = ou C, adicionar o texto do botão no display
                display.value += buttonText; 
    
            }
        });
    });



    