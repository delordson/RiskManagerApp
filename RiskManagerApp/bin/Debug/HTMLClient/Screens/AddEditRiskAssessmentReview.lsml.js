/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditRiskAssessmentReview.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditRiskAssessmentReviews"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};