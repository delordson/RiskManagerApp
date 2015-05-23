/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseRiskAssessmentStatuses.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditRiskAssessmentStatuses"]) {
        screen.findContentItem("AddRiskAssessmentStatus").isEnabled = true;
    }
    else {
        screen.findContentItem("AddRiskAssessmentStatus").isEnabled = false;
    }
};