$(document).ready(() => {

    let loader = $('.main-loader');

    $('#submit').click(function () {
        let item = $('#item');
        let name = $('#name');
        let phone = $('#phone');

        let hasError = false;

        let inputs = $('.order-input').css('border-color', '#760c22');

        $('.error-input').hide();

        inputs.each(function () {
            const input = $(this);
            if (!input.val()) {
                input.next().show();
                input.css('border-color', 'red');
                hasError = true;
            }
        })

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: 'https://testologia.ru/checkout',
                data: {
                    user: item.val(),
                    name: name.val(),
                    phone: phone.val(),
                },
            })
                .done(function (message) {
                    loader.hide();
                    if (message.success) {
                        $('.order-title').hide();
                        $('.order-text').hide();
                        $('.order-form').hide();
                        $('.order-placed').show()
                        // alert('Order placed');
                    } else {
                        alert('There was an error when checking out! Please call us to place an order.')
                    }
                })
        }
    })
})