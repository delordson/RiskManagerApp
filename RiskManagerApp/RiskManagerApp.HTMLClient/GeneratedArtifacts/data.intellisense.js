/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.RiskAssessment, {
        /// <field>
        /// Called when a new riskAssessment is created.
        /// <br/>created(msls.application.RiskAssessment entity)
        /// </field>
        created: [lightSwitchApplication.RiskAssessment]
    });

    msls._addEntryPoints(lightSwitchApplication.RiskType, {
        /// <field>
        /// Called when a new riskType is created.
        /// <br/>created(msls.application.RiskType entity)
        /// </field>
        created: [lightSwitchApplication.RiskType]
    });

    msls._addEntryPoints(lightSwitchApplication.Employee, {
        /// <field>
        /// Called when a new employee is created.
        /// <br/>created(msls.application.Employee entity)
        /// </field>
        created: [lightSwitchApplication.Employee]
    });

    msls._addEntryPoints(lightSwitchApplication.RiskAssessor, {
        /// <field>
        /// Called when a new riskAssessor is created.
        /// <br/>created(msls.application.RiskAssessor entity)
        /// </field>
        created: [lightSwitchApplication.RiskAssessor]
    });

    msls._addEntryPoints(lightSwitchApplication.RiskAssessmentStatus, {
        /// <field>
        /// Called when a new riskAssessmentStatus is created.
        /// <br/>created(msls.application.RiskAssessmentStatus entity)
        /// </field>
        created: [lightSwitchApplication.RiskAssessmentStatus]
    });

    msls._addEntryPoints(lightSwitchApplication.RiskAssessmentReview, {
        /// <field>
        /// Called when a new riskAssessmentReview is created.
        /// <br/>created(msls.application.RiskAssessmentReview entity)
        /// </field>
        created: [lightSwitchApplication.RiskAssessmentReview]
    });

    msls._addEntryPoints(lightSwitchApplication.RiskAssessmentHazard, {
        /// <field>
        /// Called when a new riskAssessmentHazard is created.
        /// <br/>created(msls.application.RiskAssessmentHazard entity)
        /// </field>
        created: [lightSwitchApplication.RiskAssessmentHazard]
    });

    msls._addEntryPoints(lightSwitchApplication.HazardType, {
        /// <field>
        /// Called when a new hazardType is created.
        /// <br/>created(msls.application.HazardType entity)
        /// </field>
        created: [lightSwitchApplication.HazardType]
    });

}(msls.application));
