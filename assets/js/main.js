
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

$(function(){
    smsobj.startpagetoggler.init();
});
