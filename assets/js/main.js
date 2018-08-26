
var smsobj = smsobj || {};

smsobj.startpagetoggler = {
    init: function() {
        var $logInTogglerButton = $('#btn-log-in');
        var $showMoreLogin = $('.show-more-login');
        var $registrationTogglerButton = $('#btn-registration');
        var $showMoreRegistration = $('.show-more-registration');

        $logInTogglerButton.click(function() {
            $showMoreLogin.toggle();
        });
        $registrationTogglerButton.click(function() {
            $showMoreRegistration.toggle();
        });
    }
};

$(function(){
    smsobj.startpagetoggler.init();
});
