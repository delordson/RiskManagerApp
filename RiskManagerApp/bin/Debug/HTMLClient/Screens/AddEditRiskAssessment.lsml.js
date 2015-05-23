/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditRiskAssessment.InherentRisk_postRender = function (element, contentItem) {
    $(element).css("font-size", "18px");
    $(element).css("font-weight", "bold");
    $(element).css("text-align", "center");
    $(element).find("div").css('padding-top', '10px');

    if (contentItem.value >= 12) {
        $(element).css({ 'color': 'red' });
    }
    else if (contentItem.value > 6 && contentItem.value < 12) {
        $(element).css({ 'color': 'orange' });
    }
    else {
        $(element).css({ 'color': 'green' });
    }

    contentItem.addChangeListener(null, function () {
        if (contentItem.value >= 12) {
            $(element).css({ 'color': 'red' });
        }
        else if (contentItem.value > 6 && contentItem.value < 12) {
            $(element).css({ 'color': 'orange' });
        }
        else {
            $(element).css({ 'color': 'green' });
        }
    });
};
myapp.AddEditRiskAssessment.ControlledRisk_postRender = function (element, contentItem) {
    $(element).css("font-size", "18px");
    $(element).css("font-weight", "bold");
    $(element).css("text-align", "center");
    $(element).find("div").css('padding-top', '10px');

    if (contentItem.value >= 12) {
        $(element).css({ 'color': 'red' });
    }
    else if (contentItem.value > 6 && contentItem.value < 12) {
        $(element).css({ 'color': 'orange' });
    }
    else {
        $(element).css({ 'color': 'green' });
    }

    contentItem.addChangeListener(null, function () {
        if (contentItem.value >= 12) {
            $(element).css({ 'color': 'red' });
        }
        else if (contentItem.value > 6 && contentItem.value < 12) {
            $(element).css({ 'color': 'orange' });
        }
        else {
            $(element).css({ 'color': 'green' });
        }
    });
};
myapp.AddEditRiskAssessment.created = function (screen) {
    var reference;
    var title;

    if (screen.RiskAssessment.ReferenceNumber !== undefined) {
        reference = screen.RiskAssessment.ReferenceNumber;
        title = screen.RiskAssessment.RiskAssessmentTitle;
        screen.details.displayName = "RA (" + reference + ") - " + title;
    }
    else {
        screen.details.displayName = "Add new Risk Assessment";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditRiskAssessments"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("RiskAssessmentReviews").isReadOnly = false;
        screen.findContentItem("RiskAssessmentHazards").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("RiskAssessmentReviews").isReadOnly = true;
        screen.findContentItem("RiskAssessmentHazards").isReadOnly = true;
    }



    function onInherentRiskChange() {
        screen.RiskAssessment.InherentRisk = screen.RiskAssessment.InherentLikelihood * screen.RiskAssessment.InherentImpact;
    }

    screen.RiskAssessment.addChangeListener("InherentLikelihood", onInherentRiskChange);
    screen.details.rootContentItem
    .handleViewDispose(function () {
        screen.RiskAssessment.removeChangeListener("InherentLikelihood", onInherentRiskChange)
    });

    screen.RiskAssessment.addChangeListener("InherentImpact", onInherentRiskChange);
    screen.details.rootContentItem
    .handleViewDispose(function () {
        screen.RiskAssessment.removeChangeListener("InherentImpact", onInherentRiskChange)
    });

    function onControlledRiskChange() {
        screen.RiskAssessment.ControlledRisk = screen.RiskAssessment.ControlledLikehood * screen.RiskAssessment.ControlledImpact;
    }

    screen.RiskAssessment.addChangeListener("ControlledLikehood", onControlledRiskChange);
    screen.details.rootContentItem
    .handleViewDispose(function () {
        screen.RiskAssessment.removeChangeListener("ControlledLikehood", onControlledRiskChange)
    });

    screen.RiskAssessment.addChangeListener("ControlledImpact", onControlledRiskChange);
    screen.details.rootContentItem
    .handleViewDispose(function () {
        screen.RiskAssessment.removeChangeListener("ControlledImpact", onControlledRiskChange)
    });
};