//Calcula el descuento
const precioConDescuento = (precio, descuento) => precio * ((100 - descuento) / 100);
const resultado = document.querySelector('.resultado');
const valoresForm = btn => {
    let valores = [];
    const inputs = btn.parentElement.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        valores.push(parseFloat(inputs[i].value));
    }
    return valores;
};
const calcular = (btn, valores) => {
    switch (btn.getAttribute('data-tipo')) {
        case 'descuento':
            return precioConDescuento(valores[0], valores[1]);
            break;

        default:
            break;
    }
};
const calculo = btn => {
    const calculo = calcular(btn, valoresForm(btn));
    resultado.innerHTML = calculo;
    window.location = '#resultado'
}

document.body.onclick = (e) => {
    if (e.target.getAttribute('data-boton') === 'calcular') {
        const btn = e.target;
        calculo(btn);
    }
};
const presionarEnter = (e) => {
    const btn = e.querySelector('button')
    event.key == 'Enter' ? calculo(btn) : '';
};