window.onload = function(){
    document.querySelector("#bConverter").onclick = () => {
        let valorCompra = document.querySelector("#iValorCompra").value;
        
        let sOpcaoMoeda = document.querySelector('#sOpcaoMoeda');
        let opcaoMoeda = sOpcaoMoeda.options[sOpcaoMoeda.selectedIndex].value;

        let sOpcaoPagamento = document.querySelector("#sOpcaoPagamento");
        let opcaoPagamento = sOpcaoPagamento.options[sOpcaoPagamento.selectedIndex].value;

        if(!valorCompra || !opcaoMoeda || !opcaoPagamento){
            alert("Por favor, insira todas as informações!");
        }else{

            let valorConvertido;
            let valorIof = 0;
            let valorFinal;

            document.querySelector("#sResultadoReal").textContent = valorCompra;

            let moedas = ['Dólar', 'Euro'];
            document.querySelector("#sMoedaSelecionada").textContent = moedas[opcaoMoeda] + ": ";

            switch(opcaoMoeda){
                case 0:
                    valorConvertido = valorCompra * 0.2;
                    break;
                
                case 1:
                    valorConvertido = valorCompra * 0.19;
                    break;
            }

            if(opcaoPagamento == '0'){
                valorIof = valorConvertido * (6.38/100); // * 6.38%
                document.querySelector("#sValorIof").textContent = valorIof.replace(".", ",");
            }

            valorFinal = valorConvertido + valorIof;

            document.querySelector("#sValorFinal").textContent = valorFinal.replace(".", ",");
        }
    }
}