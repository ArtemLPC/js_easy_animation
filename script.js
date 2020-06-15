let btn = document.querySelector('.btn');
console.log(btn);
let box = document.querySelector('.box');
console.log(box);

btn.addEventListener('click', func1);

function func1 () {
    let pos = 0;
    let tmId = setInterval(func2, 10);
    function func2 () {
        if (pos == 300) {
            clearTimeout(tmId);
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }
}