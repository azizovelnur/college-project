$('#popupForm').submit(function (e){
    e.preventDefault();
    let th = $(this);

    $.ajax({
        url: '../php/sendMail.php',
        type: 'POST',
        data: th.serialize(),
        success: function () {

            $('.popup__close').css('display', 'none')
            $('.label').css('display', 'none')
            $('.label__agree').css('display', 'none')
            $('.popup__button').css('display', 'none')
            $('.preReg').css('display', 'none')
            $('.privacy').css('display', 'none')

            $('.popup__button-back').css('display', 'block').click(function () {
                $('.popup__form').removeClass('active')
                $('.popup').removeClass('active')
                $('body').removeClass('noscroll')
                $('.popup__close').css('display', 'block')
                $('.label').css('display', 'flex').css('flex-direction', 'column')
                $('.popup__button').css('display', 'block')
                $('.label__agree').css('display', 'block')
                $('.popup__button-back').css('display', 'none')
            })
        },

        error: function () {
            alert('error')
        }
    })
})