
var smsobj = smsobj || {};

smsobj.startpagetoggler = {
    init: function() {
        var $registrationTogglerButton = $('#btn-registration');
        var $showMoreRegistration = $('.show-more-registration');

        $registrationTogglerButton.click(function() {
            $showMoreRegistration.toggle();
        });
    }
};

smsobj.setbodypaddingtop = {
    init: function() {
        var $header = $('#sms-header');

        $(document.body).css('padding-top', $header.css("height"));

        $( window ).resize(function() {
            $(document.body).css('padding-top', $header.css("height"));
        });


    }
};

$(function(){
    smsobj.startpagetoggler.init();
    smsobj.setbodypaddingtop.init();
});
