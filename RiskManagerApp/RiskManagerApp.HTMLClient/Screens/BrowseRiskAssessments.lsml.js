/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseRiskAssessments.InherentRisk_postRender = function (element, contentItem) {

    $(element).css("text-align", "center");

    if (contentItem.value >= 12) {
        $(element).css({ 'background': 'red', 'color': 'white' });
    }
    else if (contentItem.value > 6 && contentItem.value < 12) {
        $(element).css({ 'background': 'orange', 'color': 'white' });
    }
    else {
        $(element).css({ 'background': 'green', 'color': 'white' });
    }

    contentItem.addChangeListener(null, function () {
        if (contentItem.value >= 12) {
            $(element).css({ 'background': 'red', 'color': 'white' });
        }
        else if (contentItem.value > 6 && contentItem.value < 12) {
            $(element).css({ 'background': 'orange', 'color': 'white' });
        }
        else {
            $(element).css({ 'background': 'green', 'color': 'white' });
        }
    });
};
myapp.BrowseRiskAssessments.ControlledRisk_postRender = function (element, contentItem) {

    $(element).css("text-align", "center");

    if (contentItem.value >= 12) {
        $(element).css({ 'background': 'red', 'color': 'white' });
    }
    else if (contentItem.value > 6 && contentItem.value < 12) {
        $(element).css({ 'background': 'orange', 'color': 'white' });
    }
    else {
        $(element).css({ 'background': 'green', 'color': 'white' });
    }

    contentItem.addChangeListener(null, function () {
        if (contentItem.value >= 12) {
            $(element).css({ 'background': 'red', 'color': 'white' });
        }
        else if (contentItem.value > 6 && contentItem.value < 12) {
            $(element).css({ 'background': 'orange', 'color': 'white' });
        }
        else {
            $(element).css({ 'background': 'green', 'color': 'white' });
        }
    });
};
myapp.BrowseRiskAssessments.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditRiskAssessments"]) {
        screen.findContentItem("AddRiskAssessment").isEnabled = true;
    }
    else {
        screen.findContentItem("AddRiskAssessment").isEnabled = false;
    }
};