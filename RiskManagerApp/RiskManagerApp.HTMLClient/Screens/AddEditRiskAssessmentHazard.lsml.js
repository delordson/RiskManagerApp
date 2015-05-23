/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditRiskAssessmentHazard.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditRiskAssessmentHazards"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};