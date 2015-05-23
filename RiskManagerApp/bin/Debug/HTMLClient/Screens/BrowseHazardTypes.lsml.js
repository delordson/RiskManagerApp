/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseHazardTypes.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditHazardTypes"]) {
        screen.findContentItem("AddHazardType").isEnabled = true;
    }
    else {
        screen.findContentItem("AddHazardType").isEnabled = false;
    }
};