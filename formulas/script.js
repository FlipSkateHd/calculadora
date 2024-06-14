document.addEventListener('DOMContentLoaded', function() {
    // Obtém a referência para o elemento select que contém a lista de formas geométricas
    var select = document.getElementById('lista');
    
    // Cria um objeto para armazenar referências aos diferentes formulários de entrada
    var forms = {
        quadrado: document.getElementById('quadrado'),
        retangulo: document.getElementById('retangulo'),
        trapezio: document.getElementById('trapezio'),
        losango: document.getElementById('losango'),
        triangulo: document.getElementById('triangulo'),
        circulo: document.getElementById('circulo'),
        circunferencia: document.getElementById('circunferencia'),
        pitagoras: document.getElementById('pitagoras'),
        imagem: document.getElementById('imagem')
    };

    // Função para limpar todos os campos de entrada
    function limparInputs() {
        document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
    }

    // Função para limpar o resultado exibido na tela
    function limparResultado() {
        var resultado = document.getElementById('res');
        resultado.innerHTML = '';
    }

    // Função para exibir o formulário correspondente à forma geométrica selecionada
    window.exibirCalc = function() {
        var selectedValue = select.value;
        limparInputs();       // Limpa todos os campos de entrada
        limparResultado();    // Limpa o resultado exibido
        for (var form in forms) {
            forms[form].hidden = true;  // Esconde todos os formulários
        }
        forms[selectedValue].hidden = false;  // Exibe o formulário selecionado
    };

    // Função para calcular a área do quadrado
    window.calcQuad = function() {
        var input = document.getElementById('ladoQuad');
        var resultado = document.getElementById('res');
        var lado = parseFloat(input.value);
        if (isNaN(lado)) {
            resultado.innerHTML = "Por favor, insira um valor válido.";
        } else {
            resultado.innerHTML = "Área do quadrado: " + (lado * lado);
        }
    };

    // Função para calcular a área do retângulo
    window.calcRet = function() {
        var input1 = document.getElementById('ladoRet1');
        var input2 = document.getElementById('ladoRet2');
        var resultado = document.getElementById('res');
        var base = parseFloat(input1.value);
        var altura = parseFloat(input2.value);
        if (isNaN(base) || isNaN(altura)) {
            resultado.innerHTML = "Por favor, insira valores válidos.";
        } else {
            resultado.innerHTML = "Área do retângulo: " + (base * altura);
        }
    };

    // Função para calcular a área do trapézio
    window.calcTrap = function() {
        var baseMaior = parseFloat(document.getElementById('baseMaior').value);
        var baseMenor = parseFloat(document.getElementById('baseMenor').value);
        var altura = parseFloat(document.getElementById('alturaTrap').value);
        var resultado = document.getElementById('res');
        if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) {
            resultado.innerHTML = "Por favor, insira valores válidos.";
        } else {
            resultado.innerHTML = "Área do trapézio: " + ((baseMaior + baseMenor) * altura / 2);
        }
    };

    // Função para calcular a área do losango
    window.calcLos = function() {
        var diagMaior = parseFloat(document.getElementById('diagMaior').value);
        var diagMenor = parseFloat(document.getElementById('diagMenor').value);
        var resultado = document.getElementById('res');
        if (isNaN(diagMaior) || isNaN(diagMenor)) {
            resultado.innerHTML = "Por favor, insira valores válidos.";
        } else {
            resultado.innerHTML = "Área do losango: " + (diagMaior * diagMenor / 2);
        }
    };

    // Função para calcular a área do triângulo
    window.calcTri = function() {
        var base = parseFloat(document.getElementById('baseTri').value);
        var altura = parseFloat(document.getElementById('alturaTri').value);
        var resultado = document.getElementById('res');
        if (isNaN(base) || isNaN(altura)) {
            resultado.innerHTML = "Por favor, insira valores válidos.";
        } else {
            resultado.innerHTML = "Área do triângulo: " + (base * altura / 2);
        }
    };

    // Função para calcular a área do círculo
    window.calcCirculo = function() {
        var raio = parseFloat(document.getElementById('raioCir').value);
        var resultado = document.getElementById('res');
        if (isNaN(raio)) {
            resultado.innerHTML = "Por favor, insira um valor válido.";
        } else {
            resultado.innerHTML = "Área do círculo: " + (Math.PI * raio * raio).toFixed(2);
        }
    };

    // Função para calcular a circunferência do círculo
    window.calcCircun = function() {
        var raio = parseFloat(document.getElementById('raioCircun').value);
        var resultado = document.getElementById('res');
        if (isNaN(raio)) {
            resultado.innerHTML = "Por favor, insira um valor válido.";
        } else {
            resultado.innerHTML = "Circunferência: " + (2 * Math.PI * raio).toFixed(2);
        }
    };

    // Função para calcular a hipotenusa usando o Teorema de Pitágoras
    window.calcPit = function() {
        var catetoA = parseFloat(document.getElementById('catetoA').value);
        var catetoB = parseFloat(document.getElementById('catetoB').value);
        var resultado = document.getElementById('res');
        if (isNaN(catetoA) || isNaN(catetoB)) {
            resultado.innerHTML = "Por favor, insira valores válidos.";
        } else {
            resultado.innerHTML = "Hipotenusa: " + Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2)).toFixed(2);
        }
    };
});
