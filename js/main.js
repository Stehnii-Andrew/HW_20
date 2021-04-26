let container = document.querySelector('.con-js');
let arrowUp = document.querySelector('.arrow-up');
let arrowRight = document.querySelector('.arrow-right');
let arrowDown = document.querySelector('.arrow-down');
let arrowLeft = document.querySelector('.arrow-left');
let rowsInput = document.querySelector('row');
let columnInput = document.querySelector('columns');
const submit = document.querySelector('.submit');
const table = document.querySelector('.table');
const form = document.forms.form;
let row = document.querySelector('.row');
const sklad = document.querySelector('.sklad');


form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let data = new FormData(ev.target);
    let rowsNumber = +data.get('rows');
    let columnsNumber = +data.get('columns');

    let squares = rowsNumber * columnsNumber;
    // let rowBlocks = squares / rowsNumber;
    // let columnBlocks = squares / columnsNumber;

    container.classList.add('container');
    container.classList.remove('none');

    form.classList.remove('inputs');
    form.classList.add('none');

    let rowHtml = "";

    for (let i = 0; i <= rowsNumber; i++) {
        rowHtml += `<div class="row">`;
        for (let c = 0; c <= columnsNumber; c++) {
            const columnHtml = `
            <div class="block"></div>
            `;
            // sklad.insertAdjacentHTML('beforeend', columnHtml);
            rowHtml += columnHtml;
        }
        rowHtml += `</div>`;
    }

    console.log(typeof rowsNumber)

    table.insertAdjacentHTML('beforeEnd', rowHtml);
});

arrowUp.addEventListener('mousedown', (ev) => {
    arrowUp.classList.add('arrow-included');
});

arrowUp.addEventListener('mouseup', (ev) => {
    arrowUp.classList.remove('arrow-included');
});

arrowUp.addEventListener('keydown', (ev) => {
    arrowUp.classList.remove('arrow-included');
});

arrowRight.addEventListener('mousedown', (ev) => {
    arrowRight.classList.add('arrow-included');
});

arrowRight.addEventListener('mouseup', (ev) => {
    arrowRight.classList.remove('arrow-included');
});

arrowDown.addEventListener('mousedown', (ev) => {
    arrowDown.classList.add('arrow-included');
});

arrowDown.addEventListener('mouseup', (ev) => {
    arrowDown.classList.remove('arrow-included');
});

arrowLeft.addEventListener('mousedown', (ev) => {
    arrowLeft.classList.add('arrow-included');
});

arrowLeft.addEventListener('mouseup', (ev) => {
    arrowLeft.classList.remove('arrow-included');
});

