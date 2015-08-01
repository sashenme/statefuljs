jQuery(document).ready(function($) {
    $('[data-loading-text]').click(function() {
        stateful($(this));
    });
});

function stateful(loader) {
    var text = loader.attr('data-loading-text'),
        delay = loader.attr('data-loading-delay'),
        value = loader.text();
    options = {
        text: text === '' ? 'Loading...' : text,
        delay: typeof delay === 'undefined' || delay === '' ? 3000 : delay,
        value: value
    };
    changeStates(loader, options);
}

function changeStates(loader, options) {
    loader.attr('disabled', true).addClass('disabled').text(options.text).delay(options.delay).queue(function() {
        loader.attr('disabled', false).removeClass('disabled').text(options.value).dequeue();
    });
}
