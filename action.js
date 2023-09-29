const counters = document.querySelectorAll('.inc-num');
const speed = 200;

counters.forEach( counter => {
const inccount = () => {
    const value = +counter.getAttribute('value');
    const data = +counter.innerText;
    
    const time = value / speed;
    if(data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(inccount, 1);
        }else{
        counter.innerText = value;
        }
    
}

inccount()


});

