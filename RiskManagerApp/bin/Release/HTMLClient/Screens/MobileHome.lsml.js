/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.MobileHome.created = function (screen) {
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
    });
};
myapp.MobileHome.ShowBrowseRiskAssessments_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileScales.png)'
    });
};
myapp.MobileHome.ShowBrowseMyRiskAssessments_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileEmployees.png)'
    });
};
myapp.MobileHome.ShowBrowseOverdueRiskAssessmentReviews_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileHourglass.png)'
    });
};
myapp.MobileHome.ShowBrowseMyRiskAssessmentReviews_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileReviews.png)'
    });
};
myapp.MobileHome.ShowBrowseEmployees_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileEmployees.png)'
    });
};
myapp.MobileHome.ShowBrowseRiskAssessors_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileRiskAssessor.png)'
    });
};
myapp.MobileHome.ShowBrowseHazardTypes_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileGun.png)'
    });
};
myapp.MobileHome.ShowBrowseRiskAssessmentStatuses_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileStatuses.png)'
    });
};
myapp.MobileHome.ShowBrowseRiskTypes_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-mobile-menu-style").css({
        'background-image': 'url(Content/Images/MobileRisks.png)'
    });
};