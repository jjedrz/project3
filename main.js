console.log('działa');

let size = 100;
let grow = true;

const square = document.createElement('div');
document.body.appendChild(square);
square.style.width = size + "px"
square.style.height = size + "px"

window.addEventListener('scroll', function () {

    if (size >= window.innerWidth / 2) {
        grow = !grow;
    }

    else if (size == 0) {
        grow = true; // !grow ?
    }

    zzzass
    if (grow) {
        size += 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }

    else {
        size -= 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }

})