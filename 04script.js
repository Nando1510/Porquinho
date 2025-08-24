const botao_Converter = document.getElementById('converter');
botao_Converter.addEventListener('click', conversao);

const dolar = document.getElementById('dolar');
dolar.value = 1000;


async function conversao(event){
    event.preventDefault();

    const real = parseFloat(document.getElementById('real').value.trim());
      

    if (!real || !dolar.value){
        alert('Preencha todos os campos!!');
        return;
    }

    const cotacao = real / dolar.value

    document.getElementById('resultado').innerText = `R$ ${cotacao.toFixed(2).replace(",",".")}`
   
}

const botao_Cancelar = document.getElementById('limpar')
botao_Cancelar.addEventListener('click', cancelar);

async function cancelar(event){
    event.preventDefault();
    document.getElementById('real').value='';
    dolar.value = 1000;
    document.getElementById('resultado').innerText = "$ 0.00"; 
}
