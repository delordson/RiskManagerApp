/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditHazardType.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditHazardTypes"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};