
function converter(){
    let select = parseInt(document.getElementById('selecao-temp').value);
    // console.log(select);
    let temperatura = document.getElementById('temperatura').value; 
    let formulaF = (parseInt(temperatura) * 1.8) + 32;
    let formulaK = (parseInt(temperatura) + 273);
    let resultado = document.getElementById('resultado');
    // let selectA = parsetInt(select);
    // if(select == 0){
    //     resultado.innerHTML = (`${temperatura}°C em Kelvin é ${formulaK} K`);
    // }else if(select == 1){
    //     resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${formulaF} °F`)

    //parseInt transforma em numero inteiro
    
    switch (select) {
        case 0:
            resultado.innerHTML = (`${temperatura}°C em Kelvin é ${formulaK} K`);
            
            break;
        case 1:
            resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${formulaF} °F`)

            break;

        default:
            resultado.innerHTML =('error');
            break;
    }
}
    // console.log(temperatura);
// resultado.innerHTML = (+temperatura +' °C em fahrenheit é ' + calculo);

// }