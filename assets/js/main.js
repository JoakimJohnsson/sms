
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

smsobj.desktoptogglers = {
    init: function() {
        var $addTitlesTogglerButton = $('#btn-add-titles');
        var $statisticsTogglerButton = $('#btn-statistics');
        var $showMoreRegistration = $('.show-more-add-titles');
        var $showMoreStatistics = $('.show-more-statistics');

        $addTitlesTogglerButton.click(function() {
            $showMoreRegistration.toggle();
        });
        $statisticsTogglerButton.click(function() {
            $showMoreStatistics.toggle();
        });
    }
};

$(function(){
    smsobj.startpagetoggler.init();
    smsobj.desktoptogglers.init();
});
