// http://stackoverflow.com/questions/1766861/find-the-exact-height-and-width-of-the-viewport-in-a-cross-browser-way-no-proto
function getViewport() {

    var viewPortWidth,
    viewPortHeight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth,
        viewPortHeight = window.innerHeight
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth,
        viewPortHeight = document.documentElement.clientHeight
    }

    // older versions of IE
    else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
        viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    return [viewPortWidth, viewPortHeight];
}

var iframe = $('iframe'),
    vimeo = $('.vimeo'),
    cutMe = 40,
    ratio;

function checkVideoHeight() {
    ratio = (getViewport()[1] - cutMe) / getViewport()[0] * 100;
    if (ratio < 56.25) {
        vimeo.css({
            'height': getViewport()[1] - cutMe,
            'padding-bottom': 0
        });
    }
    if (ratio > 56.25) {
        vimeo.css({
            'height': '',
            'padding-bottom': ''
        });
    }
}

window.onresize = function (event) {
    checkVideoHeight();
};
