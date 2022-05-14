const promotionSlider = {
    images: [],
    currentImageIndex: 0,
    leftBtn: document.getElementById('promotion__slider-leftbtn'),
    rightBtn: document.getElementById('promotion__slider-rightbtn'),
    slideImage: document.getElementById('promotion__slider-img'),
    sliderText : document.getElementById('promotion__slider-text'),
    // descrAkcii: document.getElementById('promotion__slider-descr'),

    promotionStart: function () {
        const myObj = this;

        this.leftBtn.addEventListener('click', function () {
            myObj.onLeftBtnClick()
        })
        this.rightBtn.addEventListener('click', function () {
            myObj.onRightBtnClick()
        })

        this.images.push('images/promotionImg/rasrochka.png')
        this.images.push('images/promotionImg/lechimdettooth.jpg')
        this.images.push('images/promotionImg/Family.jpg')
        this.images.push('images/promotionImg/kt.jpg')
        this.slideImage.src = this.images[this.currentImageIndex]
    },


    onLeftBtnClick: function () {
        this.currentImageIndex--;
        this.slideImage.src = this.images[this.currentImageIndex]
        this.promotionTextChange()
        if (this.currentImageIndex === -1) {
            this.currentImageIndex = this.images.length - 1;
            this.slideImage.src = this.images[this.currentImageIndex]
            this.promotionTextChange();
        }
    },

    onRightBtnClick: function () {
        this.currentImageIndex++;
        this.promotionTextChange()
        this.slideImage.src = this.images[this.currentImageIndex]
        if (this.currentImageIndex === this.images.length) {
            this.currentImageIndex = 0;
            this.slideImage.src = this.images[this.currentImageIndex]
            this.promotionTextChange();
        }
    },


    promotionTextChange: function () {

        if (this.currentImageIndex === 0) {
           this.sliderText.innerHTML = 'Услуга Рассрочка на лечение';
           // this.descrAkcii.innerHTML = 'Без первого взноса и переплат. Без справки с работы. 15 минут на оформление анкеты. Каждый месяц Вы выплачиваете небольшую фиксированную сумму, при этом первоначальная стоимость лечения не меняется';
        }
        if (this.currentImageIndex === 1) {
            this.sliderText.innerHTML = 'Лечим детские зубки';
            // this.descrAkcii.innerHTML = 'Лечим детские зубки';
        }
        if (this.currentImageIndex === 2) {
            this.sliderText.innerHTML = 'Семейная акция';
            // this.descrAkcii.innerHTML = 'Предоставим скидку на терапевтические и хирургические услуги в размере 10% семьям, которые доверили лечение зубов специалистам наших клиник.';
        }
        if (this.currentImageIndex === 3) {
            this.sliderText.innerHTML = 'Делаем КТ прямо в клинике';
            // this.descrAkcii.innerHTML = 'Компьютерная томография зубов';
        }
    },
}

promotionSlider.promotionStart();