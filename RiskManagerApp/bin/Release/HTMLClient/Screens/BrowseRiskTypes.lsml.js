/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseRiskTypes.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditRiskTypes"]) {
        screen.findContentItem("AddRiskType").isEnabled = true;
    }
    else {
        screen.findContentItem("AddRiskType").isEnabled = false;
    }
};