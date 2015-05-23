/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditRiskType.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditRiskTypes"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};