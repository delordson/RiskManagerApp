/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseMyRiskAssessments.InherentRisk_postRender = function (element, contentItem) {
    // Write code here.

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
myapp.BrowseMyRiskAssessments.ControlledRisk_postRender = function (element, contentItem) {
    // Write code here.

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