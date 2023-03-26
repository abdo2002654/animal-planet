// window.localStorage.clear()
if(window.localStorage.getItem('animal')){
    
} else {
    window.location.assign('index.html');
}


class Animal{
    static count = 0;
    constructor(mainImg, backImg, title, content) {
        this.mainImg = mainImg;
        this.backImg = backImg;
        this.title = title;
        this.content = content;
    }

    static getNumber(){
        return Animal.count;
    }
}
let main = [new Animal('../imgs/monkey.jpg', '../imgs/monkey.jpg', 'the monkey', 'the african monkey'),
            new Animal('../imgs/lion.jpg', '../imgs/lion.jpg', 'the lion', 'the african lion'),
            new Animal('../imgs/tiger.jpg', '../imgs/tiger.jpg', 'the tiger', 'the african tiger'),
            new Animal('../imgs/zebra.jpeg', '../imgs/zebra.jpeg', 'the zebra', 'the african zebra'),
            new Animal('../imgs/cheeta.jpg', '../imgs/cheeta.jpg', 'the cheeta', 'the african cheeta'),]

document.images[0].src = main[window.localStorage.animal].mainImg;
document.querySelector('.home').style.background = `url('${main[window.localStorage.animal].mainImg}')`
document.querySelector('.home').style.backgroundSize = `cover`
document.querySelector('#title').innerHTML = main[window.localStorage.animal].title;
document.querySelector('#content').innerHTML = main[window.localStorage.animal].content;