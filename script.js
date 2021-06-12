const arr = ['pear.svg', 'plum.svg', 'tomato.svg', 'watermelon.svg']
const cards = document.querySelectorAll('.card');
//variable to check if there are more then 2 card of 4 types
let a = 0;
let b = 0
let c = 0;
let d = 0;
let point = 0;
//variable to save location 
let first = 0;
let second = 0;

cards.forEach(n => {
    randomWalpaper(n);
    n.addEventListener('click', () => {
        second = 0; // clearing post nonMatched
        n.classList.toggle('off');
        if (n.classList.contains('off') != true) {
            point++;
            if (point == 1) {
                first = n;
            } else if (point == 2) {
                second = n;
                point = 0;
            }
            const firstStyle = first.getAttribute('style');
            const SecondStyle = second.getAttribute('style');
            if (firstStyle.slice(28) === SecondStyle.slice(28)) {
                memoryMatch(first, second)
            } else {
                notMatch(first, second)
            }

        }
    })
})

function randomWalpaper(card) {
    const random = Math.floor(Math.random() * arr.length);
    card.style.backgroundImage = `url('/img/${arr[random]}')`;
    const picture = card.getAttribute('style')
    console.log(picture)
    if (picture.includes('watermelon')) {
        a++;
        if (a >= 2) {
            const index = arr.indexOf('watermelon.svg');
            arr.splice(index, 1);
            console.log(arr)
        }
    } else if (picture.includes('tomato')) {
        b++;
        if (b >= 2) {
            const index = arr.indexOf('tomato.svg');
            arr.splice(index, 1);
            console.log(arr)
        }
    } else if (picture.includes('plum')) {
        c++;
        if (c >= 2) {
            const index = arr.indexOf('plum.svg');
            arr.splice(index, 1);
            console.log(arr)
        }
    } else if (picture.includes('pear')) {
        d++;
        if (d >= 2) {
            const index = arr.indexOf('pear.svg')
            arr.splice(index, 1);
            console.log(arr)
        }
    } else if (picture.includes('undefined')) {
        card.style.backgroundImage = `url('/img/stop.svg')`;
    }


}

function memoryMatch(first, second) {
    if (first.classList === second.classList) {

    } else {
        first.style.borderColor = 'green';
        second.style.borderColor = 'green';
        first.classList.remove('off');
        second.classList.remove('off');
        setTimeout(() => {
            first.style.visibility = 'hidden'
            second.style.visibility = 'hidden'
        }, 700)
    }
}

function notMatch(first, second) {
    setTimeout(() => {
        first.classList.add('off');
        second.classList.add('off');
        first = 0;
        second = 0;
    }, 1500)
}