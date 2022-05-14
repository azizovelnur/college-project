const feedbackSlider = {
    images: [],
    currentImageIndex: 0,
    leftBtn: document.getElementById('feedback__buttons-left'),
    rightBtn: document.getElementById('feedback__buttons-right'),
    userImage: document.getElementById('feedback__user-img'),
    feedbackName: document.getElementById('feedback__name'),
    feedbackService: document.getElementById('feedback__service'),
    feedbackComment: document.getElementById('feedback__comment'),

    feedbackStart: function () {
        const myObj = this;

        this.leftBtn.addEventListener('click', function () {
            myObj.onLeftBtnClickFeedBack()
        })
        this.rightBtn.addEventListener('click', function () {
            myObj.onRightBtnClickFeedBack()
        })

        this.images.push('images/feedbackImg/elnur.jpg')
        this.images.push('images/feedbackImg/artem.jpg')
        this.images.push('images/feedbackImg/sergey.png')
        this.userImage.src = this.images[this.currentImageIndex]
    },


    onLeftBtnClickFeedBack: function () {
        this.currentImageIndex--;
        this.userImage.src = this.images[this.currentImageIndex]
        this.feedbackTextChange()
        if (this.currentImageIndex === -1) {
            this.currentImageIndex = this.images.length - 1;
            this.userImage.src = this.images[this.currentImageIndex]
            this.feedbackTextChange();
        }
    },

    onRightBtnClickFeedBack: function () {
        this.currentImageIndex++;
        this.feedbackTextChange()
        this.userImage.src = this.images[this.currentImageIndex]
        if(this.currentImageIndex === this.images.length) {
            this.currentImageIndex = 0;
            this.userImage.src = this.images[this.currentImageIndex]
            this.feedbackTextChange();
        }
    },


    feedbackTextChange: function () {
        if (this.currentImageIndex === 0) {
            this.feedbackName.innerHTML = 'Эльнур Азизов'
            this.feedbackService.innerHTML = 'Вылечил кариес'
            this.feedbackComment.innerHTML = 'Хочу поблагодарить врачей клиники за их отличную работу! Вылечили кариес корня быстро и без проблем!';
        }
        if (this.currentImageIndex === 1) {
            this.feedbackName.innerHTML = 'Артем Чернешев'
            this.feedbackService.innerHTML = 'Поставил Брекеты'
            this.feedbackComment.innerHTML = 'Мне очень приятно было здесь заниматься установкой и последущим наблюдением и подгонкой брекет-системы. Врач внимательный попался мне! даже цвет подобрал именно такой который с эмалью зубов сливался практически полностью. Постепенно потихоньку полегоньку прикус выправился до идеально у меня.'
        }

        if (this.currentImageIndex === 2) {
            this.feedbackName.innerHTML = 'Сергей Наумов'
            this.feedbackService.innerHTML = 'Отбеливание зубов'
            this.feedbackComment.innerHTML = 'Обратился во Все свои за помощью в отбеливании зубов, мне порекомендовали систему Бейонд, сначала провели полную гигиену полости рта, а затем и саму процедуру, теперь цвет моих зубов намного лучше выглядит.'
        }
    },


}
feedbackSlider.feedbackStart();

