window.onload = ()=>{
document.querySelector('.content h1').style.left = '0';
document.querySelector('.content p').style.left = '0';
document.querySelector('.content button').style.left = '0';
document.querySelector('.main header').style.top = '0';
}

let animals = document.querySelectorAll('.animal');

animals.forEach((ele) => {
    ele.onclick = () => {
        window.localStorage.animal =  ele.dataset.id;
    }
});

document.querySelector('.brand').onclick = () => {
    document.querySelector('.nav-list').classList.toggle('on')
}