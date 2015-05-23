/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseRiskAssessors.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditRiskAssessors"]) {
        screen.findContentItem("AddRiskAssessor").isEnabled = true;
    }
    else {
        screen.findContentItem("AddRiskAssessor").isEnabled = false;
    }
};