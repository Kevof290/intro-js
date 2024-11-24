const precio = 14990
const compra = document.querySelector('.cantidad');
const sumar = document.querySelector('.mas');
const restar = document.querySelector('.menos');
const total = document.querySelector('.valor-total');
let num = 0

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

precioSpan.innerHTML = precio.toLocaleString();

sumar.addEventListener ('click', () => {
    num++;
    compra.innerHTML = num;
    total.innerHTML = (compra.innerHTML * precio).toLocaleString()
});

restar.addEventListener ('click', () => {
    if (num > 0) {
    num--;
    compra.innerHTML = num;
    total.innerHTML = (compra.innerHTML * precio).toLocaleString()
    }
});




