﻿var _ga = _ga || {},
    _gaq = _gaq || [];
_ga.trackSocial = function (a, c) {
    _ga.trackFacebook(a, c);
    _ga.trackTwitter(a, c);
};
_ga.trackFacebook = function (a, c) {
    var d = _ga.buildTrackerName_(c);
    try {
        FB &&
            FB.Event &&
            FB.Event.subscribe &&
            (FB.Event.subscribe('edge.create', function (b) {
                _gaq.push([d + '_trackSocial', 'facebook', 'like', b, a]);
            }),
            FB.Event.subscribe('edge.remove', function (b) {
                _gaq.push([d + '_trackSocial', 'facebook', 'unlike', b, a]);
            }),
            FB.Event.subscribe('message.send', function (b) {
                _gaq.push([d + '_trackSocial', 'facebook', 'send', b, a]);
            }));
    } catch (e) {}
};
_ga.buildTrackerName_ = function (a) {
    return a ? a + '.' : '';
};
_ga.trackTwitter = function (a, c) {
    var d = _ga.buildTrackerName_(c);
    try {
        twttr &&
            twttr.events &&
            twttr.events.bind &&
            twttr.events.bind('tweet', function (b) {
                if (b) {
                    var c;
                    b.target &&
                        'IFRAME' == b.target.nodeName &&
                        (c = _ga.extractParamFromUri_(b.target.src, 'url'));
                    _gaq.push([d + '_trackSocial', 'twitter', 'tweet', c, a]);
                }
            });
    } catch (e) {}
};
_ga.extractParamFromUri_ = function (a, c) {
    if (a) {
        var a = a.split('#')[0],
            d = a.split('?');
        if (1 != d.length)
            for (
                var d = decodeURI(d[1]),
                    c = c + '=',
                    d = d.split('&'),
                    e = 0,
                    b;
                (b = d[e]);
                ++e
            )
                if (0 === b.indexOf(c)) return unescape(b.split('=')[1]);
    }
};
jQuery &&
    jQuery('a').click(function () {
        var a = jQuery(this).attr('href');
        null != a &&
            (a.match(/^http/i) && !a.match(document.domain)
                ? _gaq.push(['_trackEvent', 'outgoing', 'click', a])
                : a.match(
                      /\.(doc|pdf|xls|ppt|zip|txt|vsd|vxd|js|css|rar|exe|wma|mov|avi|wmv|mp3)$/i,
                  )
                ? _gaq.push(['_trackEvent', 'download', 'click', a])
                : a.match(/^mailto:/i) &&
                  _gaq.push(['_trackEvent', 'mailto', 'click', a]));
    });
