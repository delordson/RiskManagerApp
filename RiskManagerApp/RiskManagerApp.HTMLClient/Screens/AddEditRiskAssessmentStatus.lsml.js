/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditRiskAssessmentStatus.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditRiskAssessmentStatuses"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};