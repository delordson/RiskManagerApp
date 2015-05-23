/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Home.ShowBrowseEmployees_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/Employees.png)'
    });
};
myapp.Home.ShowBrowseRiskAssessors_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/RiskAssessor.png)'
    });
};
myapp.Home.ShowBrowseHazardTypes_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/Gun.png)'
    });
};
myapp.Home.ShowBrowseRiskAssessmentStatuses_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/Statuses.png)'
    });
};
myapp.Home.ShowBrowseRiskTypes_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/Risks.png)'
    });
};
myapp.Home.ShowBrowseRiskAssessments_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/Scales.png)'
    });
};
myapp.Home.ShowBrowseMyRiskAssessments_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/Employees.png)'
    });
};
myapp.Home.ShowBrowseOverdueRiskAssessmentReviews_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/Hourglass.png)'
    });
};
myapp.Home.ShowBrowseMyRiskAssessmentReviews_postRender = function (element, contentItem) {
    $(element).find('a').addClass("delordson-menu-style").css({
        'background-image': 'url(Content/Images/Reviews.png)'
    });
};
myapp.Home.created = function (screen) {
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
    });
};
