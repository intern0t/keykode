$(document).ready(function () {
    var cleanURLParameter = function (content, toEncode) {
        if (toEncode == true) {
            return content.replace('+', '-').replace('/', '_');
        } else {
            return content.replace('-', '+').replace('_', '/');
        }
    };

    var isValidURL = function (str) {
        var a = document.createElement('a');
        a.href = str;
        return (a.host && a.host != window.location.host);
    };

    var baseurl = window.location.href;

    $("a.encodeURL").on('click', function (e) {
        e.preventDefault();

        var _toEncodeComponentHandle = $("#toEncode");
        console.log(_toEncodeComponentHandle.val());
        if (_toEncodeComponentHandle.val().length > 0 && isValidURL(_toEncodeComponentHandle.val())) {
            var cleanURLParam = cleanURLParameter(btoa(_toEncodeComponentHandle.val()), true);
            _toEncodeComponentHandle.val(baseurl + "#!" + cleanURLParam);
        } else {
            alert("Well Fuck!");
        }

        return false;
    });

    var getURLParameters = function () {
        var url = window.location.href;
        if (url.indexOf('#!') > 0) {
            var arguments = url.split('#!').pop();

            if (arguments.length > 0) {
                // Contains valid argument. Proceed.
                $("form.encodeForm").toggle('display');
                var cleanEncodedURLParam = cleanURLParameter(arguments, false);
                var cleanDecodedURL = atob(cleanEncodedURLParam);
                $("a.decodedURL").text(cleanDecodedURL);
                $("a.decodedURL").attr('href', cleanDecodedURL);
            } else {
                // Empty.
            }
        }
    };

    getURLParameters();
    new Clipboard('.copytoClipboard');
});