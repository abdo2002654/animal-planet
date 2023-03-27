document.querySelectorAll('.closer').forEach((ele) => {
    ele.onclick = () => {
        ele.parentElement.classList.toggle('on');
    }
})
document.querySelectorAll('.toggler').forEach((ele) => {
    ele.onclick = () => {
        document.querySelector(ele.dataset.toggler).classList.toggle('on')
    }
})