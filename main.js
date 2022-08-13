window.onload = function(){

    var app = new Vue({
        el: '#app',
        data: {
            valorCompra: '',
            moeda: '',
            formaPagamento: '',
            resultadoReal: '',
            moeda: '',
            resultadoMoeda: '',
            valorIof: '',
            valorFinalComIof: '',
            aguardando: ''
        },
        watch: {
            valorCompra: function(){
                this.aguardando = 'Aguardando digitação...';
                this.debouncedCalculo();
            },
            moeda: function(){
                this.aguardando = 'Calculando...';
                this.debouncedCalculo();
            },
            formaPagamento: function(){
                this.aguardando = 'Calculando...';
                this.debouncedCalculo();
            }
        },
        created: function() {
            this.debouncedCalculo = _.debounce(this.calcular, 500);
        },
        methods: {
            calcular: function() {
                if(!this.valorCompra || !this.moeda || !this.formaPagamento){
                    this.aguardando = 'Por favor, insira todas as informações!';
                    return;
                }

                this.aguardando = '';
                this.resultadoReal = this.valorCompra;

                switch(this.moeda){
                    case 'Dólar:':
                        this.resultadoMoeda = Number(this.valorCompra * 0.2).toFixed(2);
                        break;
                    
                    case 'Euro:':
                        this.resultadoMoeda = Number(this.valorCompra * 0.19).toFixed(2);
                        break;
                }

                if(this.formaPagamento == '0'){
                    this.valorIof = Number(this.resultadoMoeda * (6.38/100)).toFixed(2); // * 6.38%
                }else{
                    this.valorIof = Number(0).toFixed(2);
                }

                this.valorFinalComIof = Number(Number(this.resultadoMoeda) + Number(this.valorIof)).toFixed(2);
            }
        }
    });
}