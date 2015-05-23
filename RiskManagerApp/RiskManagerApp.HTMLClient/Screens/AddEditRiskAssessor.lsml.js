/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditRiskAssessor.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditRiskAssessors"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};