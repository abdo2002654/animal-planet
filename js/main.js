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
    document.querySelector('.nav-list').classList.toggle('on');
    document.querySelector('.content h1').classList.toggle('off');
    document.querySelector('.content p').classList.toggle('off');
    document.querySelector('.content button').classList.toggle('off');
}
document.querySelectorAll('.toggler')[0].onclick = () => {
    document.querySelector('.nav-list').classList.toggle('on');
    document.querySelector('.content h1').classList.toggle('off');
    document.querySelector('.content p').classList.toggle('off');
    document.querySelector('.content button').classList.toggle('off');
}
document.querySelector('.categories').onclick = () => {
    document.querySelector('.categories-list').classList.toggle('on')
}
document.querySelectorAll('.toggler')[1].onclick = function(){
    this.parentElement.classList.toggle('on')
}