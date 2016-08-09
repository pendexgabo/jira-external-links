(function(document, $) {

    function markLink(elem) {
        var icon = $('<img/>').attr('style', 'vertical-align:text-top; padding-left: 2px').attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAjVBMVEUAAAAspy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy0spy019gp3AAAALnRSTlMAAQMFCBAREhQVGBoeIyQmKzA0QEdMUFFUVltcX2JnaGl1goW+0dzg6Onr7/X3C2YVfAAAAHpJREFUGFd1y9sWQlAUheG5I0klkqSTiBxb7/94rM3Ghb6LNcb8x1jAf86n8wRMP2RXYf2og9P3FrCLwF6GzBx/3jKQNu3Sa2YhomqNXToGudkQXmoP4U6VgaM9hUNhAGEwexFQodahPM58k1jXett8w2GV1NTLXCxpAU99DMkq8JvbAAAAAElFTkSuQmCC');
        $(elem).attr('target', '_blank').after('&nbsp;').after(icon);
    }

    $(document).ready(function() {
        $("a.external-link").each(function() {
            markLink($(this));
        })
    });


    $(document).arrive("a.external-link", function() {
        markLink($(this));
    });



})(document, jQuery);