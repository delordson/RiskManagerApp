/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditEmployee.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: String
        },
        Employee_Current: {
            _$class: msls.ContentItem,
            _$name: "Employee_Current",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: Boolean
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployee, {
        /// <field>
        /// Called when a new AddEditEmployee screen is created.
        /// <br/>created(msls.application.AddEditEmployee screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called before changes on an active AddEditEmployee screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployee screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("UserName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("LastName"); }],
        /// <field>
        /// Called after the Employee_Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_Current_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Employee_Current"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Email"); }]
    });

    lightSwitchApplication.AddEditHazardType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditHazardType
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditHazardType,
            data: lightSwitchApplication.AddEditHazardType,
            value: lightSwitchApplication.AddEditHazardType
        },
        HazardTypeDescription: {
            _$class: msls.ContentItem,
            _$name: "HazardTypeDescription",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditHazardType,
            data: lightSwitchApplication.AddEditHazardType,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditHazardType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditHazardType, {
        /// <field>
        /// Called when a new AddEditHazardType screen is created.
        /// <br/>created(msls.application.AddEditHazardType screen)
        /// </field>
        created: [lightSwitchApplication.AddEditHazardType],
        /// <field>
        /// Called before changes on an active AddEditHazardType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditHazardType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditHazardType],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditHazardType().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the HazardTypeDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HazardTypeDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditHazardType().findContentItem("HazardTypeDescription"); }]
    });

    lightSwitchApplication.AddEditRiskAssessment.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRiskAssessment
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.AddEditRiskAssessment,
            value: lightSwitchApplication.AddEditRiskAssessment
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.AddEditRiskAssessment,
            value: lightSwitchApplication.RiskAssessment
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskAssessment
        },
        ReferenceNumber: {
            _$class: msls.ContentItem,
            _$name: "ReferenceNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: String
        },
        RiskType: {
            _$class: msls.ContentItem,
            _$name: "RiskType",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskType
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "RiskType",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskType,
            value: lightSwitchApplication.RiskType
        },
        RiskAssessmentTitle: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentTitle",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: String
        },
        ProcessDescription: {
            _$class: msls.ContentItem,
            _$name: "ProcessDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: String
        },
        PersonsAffected: {
            _$class: msls.ContentItem,
            _$name: "PersonsAffected",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: String
        },
        HowPersonsAffected: {
            _$class: msls.ContentItem,
            _$name: "HowPersonsAffected",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskAssessment
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskAssessment
        },
        InherentLikelihood: {
            _$class: msls.ContentItem,
            _$name: "InherentLikelihood",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: Number
        },
        InherentImpact: {
            _$class: msls.ContentItem,
            _$name: "InherentImpact",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: Number
        },
        InherentRisk: {
            _$class: msls.ContentItem,
            _$name: "InherentRisk",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: Number
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskAssessment
        },
        ControlMeasures: {
            _$class: msls.ContentItem,
            _$name: "ControlMeasures",
            _$parentName: "Group2",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: String
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskAssessment
        },
        ControlledLikehood: {
            _$class: msls.ContentItem,
            _$name: "ControlledLikehood",
            _$parentName: "Group3",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: Number
        },
        ControlledImpact: {
            _$class: msls.ContentItem,
            _$name: "ControlledImpact",
            _$parentName: "Group3",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: Number
        },
        ControlledRisk: {
            _$class: msls.ContentItem,
            _$name: "ControlledRisk",
            _$parentName: "Group3",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskAssessment
        },
        RiskAssessor: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessor",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskAssessor
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "RiskAssessor",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessor,
            value: lightSwitchApplication.RiskAssessor
        },
        Employee1: {
            _$class: msls.ContentItem,
            _$name: "Employee1",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessor,
            value: lightSwitchApplication.Employee
        },
        FirstName1: {
            _$class: msls.ContentItem,
            _$name: "FirstName1",
            _$parentName: "Employee1",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName1: {
            _$class: msls.ContentItem,
            _$name: "LastName1",
            _$parentName: "Employee1",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.Employee,
            value: String
        },
        RiskAssessmentStatus: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentStatus",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskAssessmentStatus
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "RiskAssessmentStatus",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessmentStatus,
            value: lightSwitchApplication.RiskAssessmentStatus
        },
        RiskAssessmentApprover: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentApprover",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskAssessor
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "RiskAssessmentApprover",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessor,
            value: lightSwitchApplication.RiskAssessor
        },
        Employee2: {
            _$class: msls.ContentItem,
            _$name: "Employee2",
            _$parentName: "RowTemplate3",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessor,
            value: lightSwitchApplication.Employee
        },
        FirstName2: {
            _$class: msls.ContentItem,
            _$name: "FirstName2",
            _$parentName: "Employee2",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName2: {
            _$class: msls.ContentItem,
            _$name: "LastName2",
            _$parentName: "Employee2",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DateApproved: {
            _$class: msls.ContentItem,
            _$name: "DateApproved",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: Date
        },
        DateEffective: {
            _$class: msls.ContentItem,
            _$name: "DateEffective",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessment,
            value: Date
        },
        RiskAssessmentReviews: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentReviews",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.AddEditRiskAssessment,
            value: lightSwitchApplication.AddEditRiskAssessment
        },
        RiskAssessmentReviews1: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentReviews1",
            _$parentName: "RiskAssessmentReviews",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.AddEditRiskAssessment,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditRiskAssessment,
                _$entry: {
                    elementType: lightSwitchApplication.RiskAssessmentReview
                }
            }
        },
        RowTemplate4: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate4",
            _$parentName: "RiskAssessmentReviews1",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: lightSwitchApplication.RiskAssessmentReview
        },
        DateDue: {
            _$class: msls.ContentItem,
            _$name: "DateDue",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: Date
        },
        RiskAssessmentReviewer: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentReviewer",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: lightSwitchApplication.RiskAssessor
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "RiskAssessmentReviewer",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessor,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DateCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateCompleted",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: Date
        },
        Outcome: {
            _$class: msls.ContentItem,
            _$name: "Outcome",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: String
        },
        RiskAssessmentHazards: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentHazards",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.AddEditRiskAssessment,
            value: lightSwitchApplication.AddEditRiskAssessment
        },
        RiskAssessmentHazards1: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentHazards1",
            _$parentName: "RiskAssessmentHazards",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.AddEditRiskAssessment,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditRiskAssessment,
                _$entry: {
                    elementType: lightSwitchApplication.RiskAssessmentHazard
                }
            }
        },
        RowTemplate6: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate6",
            _$parentName: "RiskAssessmentHazards1",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessmentHazard,
            value: lightSwitchApplication.RiskAssessmentHazard
        },
        HazardType: {
            _$class: msls.ContentItem,
            _$name: "HazardType",
            _$parentName: "RowTemplate6",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessmentHazard,
            value: lightSwitchApplication.HazardType
        },
        HazardDescription: {
            _$class: msls.ContentItem,
            _$name: "HazardDescription",
            _$parentName: "RowTemplate6",
            screen: lightSwitchApplication.AddEditRiskAssessment,
            data: lightSwitchApplication.RiskAssessmentHazard,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRiskAssessment
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditRiskAssessment, {
        /// <field>
        /// Called when a new AddEditRiskAssessment screen is created.
        /// <br/>created(msls.application.AddEditRiskAssessment screen)
        /// </field>
        created: [lightSwitchApplication.AddEditRiskAssessment],
        /// <field>
        /// Called before changes on an active AddEditRiskAssessment screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditRiskAssessment screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditRiskAssessment],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("left"); }],
        /// <field>
        /// Called after the ReferenceNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReferenceNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("ReferenceNumber"); }],
        /// <field>
        /// Called after the RiskType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskType_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RiskType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the RiskAssessmentTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RiskAssessmentTitle"); }],
        /// <field>
        /// Called after the ProcessDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProcessDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("ProcessDescription"); }],
        /// <field>
        /// Called after the PersonsAffected content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonsAffected_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("PersonsAffected"); }],
        /// <field>
        /// Called after the HowPersonsAffected content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HowPersonsAffected_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("HowPersonsAffected"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("Group"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("Group1"); }],
        /// <field>
        /// Called after the InherentLikelihood content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InherentLikelihood_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("InherentLikelihood"); }],
        /// <field>
        /// Called after the InherentImpact content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InherentImpact_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("InherentImpact"); }],
        /// <field>
        /// Called after the InherentRisk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InherentRisk_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("InherentRisk"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("Group2"); }],
        /// <field>
        /// Called after the ControlMeasures content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ControlMeasures_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("ControlMeasures"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("Group3"); }],
        /// <field>
        /// Called after the ControlledLikehood content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ControlledLikehood_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("ControlledLikehood"); }],
        /// <field>
        /// Called after the ControlledImpact content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ControlledImpact_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("ControlledImpact"); }],
        /// <field>
        /// Called after the ControlledRisk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ControlledRisk_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("ControlledRisk"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("right"); }],
        /// <field>
        /// Called after the RiskAssessor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessor_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RiskAssessor"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Employee1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee1_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("Employee1"); }],
        /// <field>
        /// Called after the FirstName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("FirstName1"); }],
        /// <field>
        /// Called after the LastName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("LastName1"); }],
        /// <field>
        /// Called after the RiskAssessmentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RiskAssessmentStatus"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the RiskAssessmentApprover content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentApprover_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RiskAssessmentApprover"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the Employee2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee2_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("Employee2"); }],
        /// <field>
        /// Called after the FirstName2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName2_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("FirstName2"); }],
        /// <field>
        /// Called after the LastName2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName2_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("LastName2"); }],
        /// <field>
        /// Called after the DateApproved content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateApproved_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("DateApproved"); }],
        /// <field>
        /// Called after the DateEffective content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateEffective_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("DateEffective"); }],
        /// <field>
        /// Called after the RiskAssessmentReviews content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentReviews_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RiskAssessmentReviews"); }],
        /// <field>
        /// Called after the RiskAssessmentReviews1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentReviews1_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RiskAssessmentReviews1"); }],
        /// <field>
        /// Called after the RowTemplate4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate4_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RowTemplate4"); }],
        /// <field>
        /// Called after the DateDue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateDue_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("DateDue"); }],
        /// <field>
        /// Called after the RiskAssessmentReviewer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentReviewer_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RiskAssessmentReviewer"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("Employee"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("LastName"); }],
        /// <field>
        /// Called after the DateCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("DateCompleted"); }],
        /// <field>
        /// Called after the Outcome content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Outcome_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("Outcome"); }],
        /// <field>
        /// Called after the RiskAssessmentHazards content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentHazards_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RiskAssessmentHazards"); }],
        /// <field>
        /// Called after the RiskAssessmentHazards1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentHazards1_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RiskAssessmentHazards1"); }],
        /// <field>
        /// Called after the RowTemplate6 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate6_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("RowTemplate6"); }],
        /// <field>
        /// Called after the HazardType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HazardType_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("HazardType"); }],
        /// <field>
        /// Called after the HazardDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HazardDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessment().findContentItem("HazardDescription"); }]
    });

    lightSwitchApplication.AddEditRiskAssessmentHazard.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRiskAssessmentHazard
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditRiskAssessmentHazard,
            data: lightSwitchApplication.AddEditRiskAssessmentHazard,
            value: lightSwitchApplication.AddEditRiskAssessmentHazard
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditRiskAssessmentHazard,
            data: lightSwitchApplication.AddEditRiskAssessmentHazard,
            value: lightSwitchApplication.RiskAssessmentHazard
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditRiskAssessmentHazard,
            data: lightSwitchApplication.RiskAssessmentHazard,
            value: lightSwitchApplication.RiskAssessmentHazard
        },
        HazardType: {
            _$class: msls.ContentItem,
            _$name: "HazardType",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditRiskAssessmentHazard,
            data: lightSwitchApplication.RiskAssessmentHazard,
            value: lightSwitchApplication.HazardType
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "HazardType",
            screen: lightSwitchApplication.AddEditRiskAssessmentHazard,
            data: lightSwitchApplication.HazardType,
            value: lightSwitchApplication.HazardType
        },
        HazardDescription: {
            _$class: msls.ContentItem,
            _$name: "HazardDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditRiskAssessmentHazard,
            data: lightSwitchApplication.RiskAssessmentHazard,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditRiskAssessmentHazard,
            data: lightSwitchApplication.RiskAssessmentHazard,
            value: lightSwitchApplication.RiskAssessmentHazard
        },
        HazardConsequence: {
            _$class: msls.ContentItem,
            _$name: "HazardConsequence",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditRiskAssessmentHazard,
            data: lightSwitchApplication.RiskAssessmentHazard,
            value: String
        },
        ControlMeasures: {
            _$class: msls.ContentItem,
            _$name: "ControlMeasures",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditRiskAssessmentHazard,
            data: lightSwitchApplication.RiskAssessmentHazard,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRiskAssessmentHazard
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditRiskAssessmentHazard, {
        /// <field>
        /// Called when a new AddEditRiskAssessmentHazard screen is created.
        /// <br/>created(msls.application.AddEditRiskAssessmentHazard screen)
        /// </field>
        created: [lightSwitchApplication.AddEditRiskAssessmentHazard],
        /// <field>
        /// Called before changes on an active AddEditRiskAssessmentHazard screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditRiskAssessmentHazard screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditRiskAssessmentHazard],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentHazard().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentHazard().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentHazard().findContentItem("left"); }],
        /// <field>
        /// Called after the HazardType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HazardType_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentHazard().findContentItem("HazardType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentHazard().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the HazardDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HazardDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentHazard().findContentItem("HazardDescription"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentHazard().findContentItem("right"); }],
        /// <field>
        /// Called after the HazardConsequence content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HazardConsequence_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentHazard().findContentItem("HazardConsequence"); }],
        /// <field>
        /// Called after the ControlMeasures content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ControlMeasures_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentHazard().findContentItem("ControlMeasures"); }]
    });

    lightSwitchApplication.AddEditRiskAssessmentReview.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRiskAssessmentReview
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditRiskAssessmentReview,
            data: lightSwitchApplication.AddEditRiskAssessmentReview,
            value: lightSwitchApplication.AddEditRiskAssessmentReview
        },
        DateDue: {
            _$class: msls.ContentItem,
            _$name: "DateDue",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditRiskAssessmentReview,
            data: lightSwitchApplication.AddEditRiskAssessmentReview,
            value: Date
        },
        RiskAssessmentReviewer: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentReviewer",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditRiskAssessmentReview,
            data: lightSwitchApplication.AddEditRiskAssessmentReview,
            value: lightSwitchApplication.RiskAssessor
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "RiskAssessmentReviewer",
            screen: lightSwitchApplication.AddEditRiskAssessmentReview,
            data: lightSwitchApplication.RiskAssessor,
            value: lightSwitchApplication.RiskAssessor
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditRiskAssessmentReview,
            data: lightSwitchApplication.RiskAssessor,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditRiskAssessmentReview,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditRiskAssessmentReview,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Outcome: {
            _$class: msls.ContentItem,
            _$name: "Outcome",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditRiskAssessmentReview,
            data: lightSwitchApplication.AddEditRiskAssessmentReview,
            value: String
        },
        DateCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateCompleted",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditRiskAssessmentReview,
            data: lightSwitchApplication.AddEditRiskAssessmentReview,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRiskAssessmentReview
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditRiskAssessmentReview, {
        /// <field>
        /// Called when a new AddEditRiskAssessmentReview screen is created.
        /// <br/>created(msls.application.AddEditRiskAssessmentReview screen)
        /// </field>
        created: [lightSwitchApplication.AddEditRiskAssessmentReview],
        /// <field>
        /// Called before changes on an active AddEditRiskAssessmentReview screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditRiskAssessmentReview screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditRiskAssessmentReview],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentReview().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the DateDue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateDue_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentReview().findContentItem("DateDue"); }],
        /// <field>
        /// Called after the RiskAssessmentReviewer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentReviewer_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentReview().findContentItem("RiskAssessmentReviewer"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentReview().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentReview().findContentItem("Employee"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentReview().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentReview().findContentItem("LastName"); }],
        /// <field>
        /// Called after the Outcome content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Outcome_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentReview().findContentItem("Outcome"); }],
        /// <field>
        /// Called after the DateCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentReview().findContentItem("DateCompleted"); }]
    });

    lightSwitchApplication.AddEditRiskAssessmentStatus.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRiskAssessmentStatus
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditRiskAssessmentStatus,
            data: lightSwitchApplication.AddEditRiskAssessmentStatus,
            value: lightSwitchApplication.AddEditRiskAssessmentStatus
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditRiskAssessmentStatus,
            data: lightSwitchApplication.AddEditRiskAssessmentStatus,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRiskAssessmentStatus
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditRiskAssessmentStatus, {
        /// <field>
        /// Called when a new AddEditRiskAssessmentStatus screen is created.
        /// <br/>created(msls.application.AddEditRiskAssessmentStatus screen)
        /// </field>
        created: [lightSwitchApplication.AddEditRiskAssessmentStatus],
        /// <field>
        /// Called before changes on an active AddEditRiskAssessmentStatus screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditRiskAssessmentStatus screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditRiskAssessmentStatus],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentStatus().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessmentStatus().findContentItem("Status"); }]
    });

    lightSwitchApplication.AddEditRiskAssessor.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRiskAssessor
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditRiskAssessor,
            data: lightSwitchApplication.AddEditRiskAssessor,
            value: lightSwitchApplication.AddEditRiskAssessor
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditRiskAssessor,
            data: lightSwitchApplication.AddEditRiskAssessor,
            value: lightSwitchApplication.Employee
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditRiskAssessor,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditRiskAssessor,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditRiskAssessor,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DateTrained: {
            _$class: msls.ContentItem,
            _$name: "DateTrained",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditRiskAssessor,
            data: lightSwitchApplication.AddEditRiskAssessor,
            value: Date
        },
        DateRefresherTrainingDue: {
            _$class: msls.ContentItem,
            _$name: "DateRefresherTrainingDue",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditRiskAssessor,
            data: lightSwitchApplication.AddEditRiskAssessor,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRiskAssessor
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditRiskAssessor, {
        /// <field>
        /// Called when a new AddEditRiskAssessor screen is created.
        /// <br/>created(msls.application.AddEditRiskAssessor screen)
        /// </field>
        created: [lightSwitchApplication.AddEditRiskAssessor],
        /// <field>
        /// Called before changes on an active AddEditRiskAssessor screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditRiskAssessor screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditRiskAssessor],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessor().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessor().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessor().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessor().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessor().findContentItem("LastName"); }],
        /// <field>
        /// Called after the DateTrained content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateTrained_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessor().findContentItem("DateTrained"); }],
        /// <field>
        /// Called after the DateRefresherTrainingDue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRefresherTrainingDue_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskAssessor().findContentItem("DateRefresherTrainingDue"); }]
    });

    lightSwitchApplication.AddEditRiskType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRiskType
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditRiskType,
            data: lightSwitchApplication.AddEditRiskType,
            value: lightSwitchApplication.AddEditRiskType
        },
        TypeOfRisk: {
            _$class: msls.ContentItem,
            _$name: "TypeOfRisk",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditRiskType,
            data: lightSwitchApplication.AddEditRiskType,
            value: String
        },
        RiskType_InUse: {
            _$class: msls.ContentItem,
            _$name: "RiskType_InUse",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditRiskType,
            data: lightSwitchApplication.AddEditRiskType,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRiskType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditRiskType, {
        /// <field>
        /// Called when a new AddEditRiskType screen is created.
        /// <br/>created(msls.application.AddEditRiskType screen)
        /// </field>
        created: [lightSwitchApplication.AddEditRiskType],
        /// <field>
        /// Called before changes on an active AddEditRiskType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditRiskType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditRiskType],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskType().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the TypeOfRisk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfRisk_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskType().findContentItem("TypeOfRisk"); }],
        /// <field>
        /// Called after the RiskType_InUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskType_InUse_postRender: [$element, function () { return new lightSwitchApplication.AddEditRiskType().findContentItem("RiskType_InUse"); }]
    });

    lightSwitchApplication.BrowseEmployees.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        },
        EmployeeList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: lightSwitchApplication.BrowseEmployees
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: String
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployees,
                _$entry: {
                    elementType: lightSwitchApplication.Employee
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployees, {
        /// <field>
        /// Called when a new BrowseEmployees screen is created.
        /// <br/>created(msls.application.BrowseEmployees screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called before changes on an active BrowseEmployees screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployees screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called after the EmployeeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("EmployeeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Search"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Email"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Current"); }]
    });

    lightSwitchApplication.BrowseHazardTypes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseHazardTypes
        },
        HazardTypeList: {
            _$class: msls.ContentItem,
            _$name: "HazardTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseHazardTypes,
            data: lightSwitchApplication.BrowseHazardTypes,
            value: lightSwitchApplication.BrowseHazardTypes
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "HazardTypeList",
            screen: lightSwitchApplication.BrowseHazardTypes,
            data: lightSwitchApplication.BrowseHazardTypes,
            value: String
        },
        HazardType: {
            _$class: msls.ContentItem,
            _$name: "HazardType",
            _$parentName: "HazardTypeList",
            screen: lightSwitchApplication.BrowseHazardTypes,
            data: lightSwitchApplication.BrowseHazardTypes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseHazardTypes,
                _$entry: {
                    elementType: lightSwitchApplication.HazardType
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "HazardType",
            screen: lightSwitchApplication.BrowseHazardTypes,
            data: lightSwitchApplication.HazardType,
            value: lightSwitchApplication.HazardType
        },
        HazardTypeDescription: {
            _$class: msls.ContentItem,
            _$name: "HazardTypeDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseHazardTypes,
            data: lightSwitchApplication.HazardType,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseHazardTypes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseHazardTypes, {
        /// <field>
        /// Called when a new BrowseHazardTypes screen is created.
        /// <br/>created(msls.application.BrowseHazardTypes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseHazardTypes],
        /// <field>
        /// Called before changes on an active BrowseHazardTypes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseHazardTypes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseHazardTypes],
        /// <field>
        /// Called after the HazardTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HazardTypeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseHazardTypes().findContentItem("HazardTypeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseHazardTypes().findContentItem("Search"); }],
        /// <field>
        /// Called after the HazardType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HazardType_postRender: [$element, function () { return new lightSwitchApplication.BrowseHazardTypes().findContentItem("HazardType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseHazardTypes().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the HazardTypeDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HazardTypeDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseHazardTypes().findContentItem("HazardTypeDescription"); }]
    });

    lightSwitchApplication.BrowseMyRiskAssessmentReviews.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyRiskAssessmentReviews
        },
        RiskAssessmentReviewList: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentReviewList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyRiskAssessmentReviews,
            data: lightSwitchApplication.BrowseMyRiskAssessmentReviews,
            value: lightSwitchApplication.BrowseMyRiskAssessmentReviews
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "RiskAssessmentReviewList",
            screen: lightSwitchApplication.BrowseMyRiskAssessmentReviews,
            data: lightSwitchApplication.BrowseMyRiskAssessmentReviews,
            value: String
        },
        RiskAssessmentReview: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentReview",
            _$parentName: "RiskAssessmentReviewList",
            screen: lightSwitchApplication.BrowseMyRiskAssessmentReviews,
            data: lightSwitchApplication.BrowseMyRiskAssessmentReviews,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyRiskAssessmentReviews,
                _$entry: {
                    elementType: lightSwitchApplication.RiskAssessmentReview
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "RiskAssessmentReview",
            screen: lightSwitchApplication.BrowseMyRiskAssessmentReviews,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: lightSwitchApplication.RiskAssessmentReview
        },
        RiskAssessment_ReferenceNumber: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessment_ReferenceNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyRiskAssessmentReviews,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: String
        },
        RiskAssessment_RiskAssessmentTitle: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessment_RiskAssessmentTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyRiskAssessmentReviews,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: String
        },
        DateDue: {
            _$class: msls.ContentItem,
            _$name: "DateDue",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyRiskAssessmentReviews,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: Date
        },
        DateCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateCompleted",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyRiskAssessmentReviews,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: Date
        },
        Outcome: {
            _$class: msls.ContentItem,
            _$name: "Outcome",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyRiskAssessmentReviews,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyRiskAssessmentReviews
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyRiskAssessmentReviews, {
        /// <field>
        /// Called when a new BrowseMyRiskAssessmentReviews screen is created.
        /// <br/>created(msls.application.BrowseMyRiskAssessmentReviews screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyRiskAssessmentReviews],
        /// <field>
        /// Called before changes on an active BrowseMyRiskAssessmentReviews screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyRiskAssessmentReviews screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyRiskAssessmentReviews],
        /// <field>
        /// Called after the RiskAssessmentReviewList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentReviewList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessmentReviews().findContentItem("RiskAssessmentReviewList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessmentReviews().findContentItem("Search"); }],
        /// <field>
        /// Called after the RiskAssessmentReview content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentReview_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessmentReviews().findContentItem("RiskAssessmentReview"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessmentReviews().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the RiskAssessment_ReferenceNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessment_ReferenceNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessmentReviews().findContentItem("RiskAssessment_ReferenceNumber"); }],
        /// <field>
        /// Called after the RiskAssessment_RiskAssessmentTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessment_RiskAssessmentTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessmentReviews().findContentItem("RiskAssessment_RiskAssessmentTitle"); }],
        /// <field>
        /// Called after the DateDue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateDue_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessmentReviews().findContentItem("DateDue"); }],
        /// <field>
        /// Called after the DateCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateCompleted_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessmentReviews().findContentItem("DateCompleted"); }],
        /// <field>
        /// Called after the Outcome content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Outcome_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessmentReviews().findContentItem("Outcome"); }]
    });

    lightSwitchApplication.BrowseMyRiskAssessments.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyRiskAssessments
        },
        RiskAssessmentList: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyRiskAssessments,
            data: lightSwitchApplication.BrowseMyRiskAssessments,
            value: lightSwitchApplication.BrowseMyRiskAssessments
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "RiskAssessmentList",
            screen: lightSwitchApplication.BrowseMyRiskAssessments,
            data: lightSwitchApplication.BrowseMyRiskAssessments,
            value: String
        },
        RiskAssessment: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessment",
            _$parentName: "RiskAssessmentList",
            screen: lightSwitchApplication.BrowseMyRiskAssessments,
            data: lightSwitchApplication.BrowseMyRiskAssessments,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyRiskAssessments,
                _$entry: {
                    elementType: lightSwitchApplication.RiskAssessment
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "RiskAssessment",
            screen: lightSwitchApplication.BrowseMyRiskAssessments,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskAssessment
        },
        ReferenceNumber: {
            _$class: msls.ContentItem,
            _$name: "ReferenceNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyRiskAssessments,
            data: lightSwitchApplication.RiskAssessment,
            value: String
        },
        RiskType: {
            _$class: msls.ContentItem,
            _$name: "RiskType",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyRiskAssessments,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskType
        },
        RiskAssessmentTitle: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyRiskAssessments,
            data: lightSwitchApplication.RiskAssessment,
            value: String
        },
        InherentRisk: {
            _$class: msls.ContentItem,
            _$name: "InherentRisk",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyRiskAssessments,
            data: lightSwitchApplication.RiskAssessment,
            value: Number
        },
        RiskAssessmentStatus: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyRiskAssessments,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskAssessmentStatus
        },
        ControlledRisk: {
            _$class: msls.ContentItem,
            _$name: "ControlledRisk",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyRiskAssessments,
            data: lightSwitchApplication.RiskAssessment,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyRiskAssessments
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyRiskAssessments, {
        /// <field>
        /// Called when a new BrowseMyRiskAssessments screen is created.
        /// <br/>created(msls.application.BrowseMyRiskAssessments screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyRiskAssessments],
        /// <field>
        /// Called before changes on an active BrowseMyRiskAssessments screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyRiskAssessments screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyRiskAssessments],
        /// <field>
        /// Called after the RiskAssessmentList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessments().findContentItem("RiskAssessmentList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessments().findContentItem("Search"); }],
        /// <field>
        /// Called after the RiskAssessment content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessment_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessments().findContentItem("RiskAssessment"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessments().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ReferenceNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReferenceNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessments().findContentItem("ReferenceNumber"); }],
        /// <field>
        /// Called after the RiskType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskType_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessments().findContentItem("RiskType"); }],
        /// <field>
        /// Called after the RiskAssessmentTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessments().findContentItem("RiskAssessmentTitle"); }],
        /// <field>
        /// Called after the InherentRisk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InherentRisk_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessments().findContentItem("InherentRisk"); }],
        /// <field>
        /// Called after the RiskAssessmentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessments().findContentItem("RiskAssessmentStatus"); }],
        /// <field>
        /// Called after the ControlledRisk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ControlledRisk_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyRiskAssessments().findContentItem("ControlledRisk"); }]
    });

    lightSwitchApplication.BrowseOverdueRiskAssessmentReviews.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews
        },
        RiskAssessmentReviewList: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentReviewList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
            data: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
            value: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "RiskAssessmentReviewList",
            screen: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
            data: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
            value: String
        },
        RiskAssessmentReview: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentReview",
            _$parentName: "RiskAssessmentReviewList",
            screen: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
            data: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
                _$entry: {
                    elementType: lightSwitchApplication.RiskAssessmentReview
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "RiskAssessmentReview",
            screen: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: lightSwitchApplication.RiskAssessmentReview
        },
        RiskAssessment_ReferenceNumber: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessment_ReferenceNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: String
        },
        RiskAssessment_RiskAssessmentTitle: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessment_RiskAssessmentTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: String
        },
        RiskAssessmentReviewer: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentReviewer",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: lightSwitchApplication.RiskAssessor
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "RiskAssessmentReviewer",
            screen: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
            data: lightSwitchApplication.RiskAssessor,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DateDue: {
            _$class: msls.ContentItem,
            _$name: "DateDue",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews,
            data: lightSwitchApplication.RiskAssessmentReview,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseOverdueRiskAssessmentReviews
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseOverdueRiskAssessmentReviews, {
        /// <field>
        /// Called when a new BrowseOverdueRiskAssessmentReviews screen is created.
        /// <br/>created(msls.application.BrowseOverdueRiskAssessmentReviews screen)
        /// </field>
        created: [lightSwitchApplication.BrowseOverdueRiskAssessmentReviews],
        /// <field>
        /// Called before changes on an active BrowseOverdueRiskAssessmentReviews screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseOverdueRiskAssessmentReviews screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseOverdueRiskAssessmentReviews],
        /// <field>
        /// Called after the RiskAssessmentReviewList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentReviewList_postRender: [$element, function () { return new lightSwitchApplication.BrowseOverdueRiskAssessmentReviews().findContentItem("RiskAssessmentReviewList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseOverdueRiskAssessmentReviews().findContentItem("Search"); }],
        /// <field>
        /// Called after the RiskAssessmentReview content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentReview_postRender: [$element, function () { return new lightSwitchApplication.BrowseOverdueRiskAssessmentReviews().findContentItem("RiskAssessmentReview"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseOverdueRiskAssessmentReviews().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the RiskAssessment_ReferenceNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessment_ReferenceNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseOverdueRiskAssessmentReviews().findContentItem("RiskAssessment_ReferenceNumber"); }],
        /// <field>
        /// Called after the RiskAssessment_RiskAssessmentTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessment_RiskAssessmentTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseOverdueRiskAssessmentReviews().findContentItem("RiskAssessment_RiskAssessmentTitle"); }],
        /// <field>
        /// Called after the RiskAssessmentReviewer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentReviewer_postRender: [$element, function () { return new lightSwitchApplication.BrowseOverdueRiskAssessmentReviews().findContentItem("RiskAssessmentReviewer"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.BrowseOverdueRiskAssessmentReviews().findContentItem("Employee"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseOverdueRiskAssessmentReviews().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseOverdueRiskAssessmentReviews().findContentItem("LastName"); }],
        /// <field>
        /// Called after the DateDue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateDue_postRender: [$element, function () { return new lightSwitchApplication.BrowseOverdueRiskAssessmentReviews().findContentItem("DateDue"); }]
    });

    lightSwitchApplication.BrowseRiskAssessments.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseRiskAssessments
        },
        RiskAssessmentList: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseRiskAssessments,
            data: lightSwitchApplication.BrowseRiskAssessments,
            value: lightSwitchApplication.BrowseRiskAssessments
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "RiskAssessmentList",
            screen: lightSwitchApplication.BrowseRiskAssessments,
            data: lightSwitchApplication.BrowseRiskAssessments,
            value: String
        },
        RiskAssessment: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessment",
            _$parentName: "RiskAssessmentList",
            screen: lightSwitchApplication.BrowseRiskAssessments,
            data: lightSwitchApplication.BrowseRiskAssessments,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseRiskAssessments,
                _$entry: {
                    elementType: lightSwitchApplication.RiskAssessment
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "RiskAssessment",
            screen: lightSwitchApplication.BrowseRiskAssessments,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskAssessment
        },
        ReferenceNumber: {
            _$class: msls.ContentItem,
            _$name: "ReferenceNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseRiskAssessments,
            data: lightSwitchApplication.RiskAssessment,
            value: String
        },
        RiskType: {
            _$class: msls.ContentItem,
            _$name: "RiskType",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseRiskAssessments,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskType
        },
        RiskAssessmentTitle: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseRiskAssessments,
            data: lightSwitchApplication.RiskAssessment,
            value: String
        },
        InherentRisk: {
            _$class: msls.ContentItem,
            _$name: "InherentRisk",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseRiskAssessments,
            data: lightSwitchApplication.RiskAssessment,
            value: Number
        },
        RiskAssessmentStatus: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseRiskAssessments,
            data: lightSwitchApplication.RiskAssessment,
            value: lightSwitchApplication.RiskAssessmentStatus
        },
        ControlledRisk: {
            _$class: msls.ContentItem,
            _$name: "ControlledRisk",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseRiskAssessments,
            data: lightSwitchApplication.RiskAssessment,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseRiskAssessments
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseRiskAssessments, {
        /// <field>
        /// Called when a new BrowseRiskAssessments screen is created.
        /// <br/>created(msls.application.BrowseRiskAssessments screen)
        /// </field>
        created: [lightSwitchApplication.BrowseRiskAssessments],
        /// <field>
        /// Called before changes on an active BrowseRiskAssessments screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseRiskAssessments screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseRiskAssessments],
        /// <field>
        /// Called after the RiskAssessmentList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentList_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessments().findContentItem("RiskAssessmentList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessments().findContentItem("Search"); }],
        /// <field>
        /// Called after the RiskAssessment content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessment_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessments().findContentItem("RiskAssessment"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessments().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ReferenceNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReferenceNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessments().findContentItem("ReferenceNumber"); }],
        /// <field>
        /// Called after the RiskType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskType_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessments().findContentItem("RiskType"); }],
        /// <field>
        /// Called after the RiskAssessmentTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessments().findContentItem("RiskAssessmentTitle"); }],
        /// <field>
        /// Called after the InherentRisk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InherentRisk_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessments().findContentItem("InherentRisk"); }],
        /// <field>
        /// Called after the RiskAssessmentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessments().findContentItem("RiskAssessmentStatus"); }],
        /// <field>
        /// Called after the ControlledRisk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ControlledRisk_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessments().findContentItem("ControlledRisk"); }]
    });

    lightSwitchApplication.BrowseRiskAssessmentStatuses.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseRiskAssessmentStatuses
        },
        RiskAssessmentStatusList: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentStatusList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseRiskAssessmentStatuses,
            data: lightSwitchApplication.BrowseRiskAssessmentStatuses,
            value: lightSwitchApplication.BrowseRiskAssessmentStatuses
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "RiskAssessmentStatusList",
            screen: lightSwitchApplication.BrowseRiskAssessmentStatuses,
            data: lightSwitchApplication.BrowseRiskAssessmentStatuses,
            value: String
        },
        RiskAssessmentStatus: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessmentStatus",
            _$parentName: "RiskAssessmentStatusList",
            screen: lightSwitchApplication.BrowseRiskAssessmentStatuses,
            data: lightSwitchApplication.BrowseRiskAssessmentStatuses,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseRiskAssessmentStatuses,
                _$entry: {
                    elementType: lightSwitchApplication.RiskAssessmentStatus
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "RiskAssessmentStatus",
            screen: lightSwitchApplication.BrowseRiskAssessmentStatuses,
            data: lightSwitchApplication.RiskAssessmentStatus,
            value: lightSwitchApplication.RiskAssessmentStatus
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseRiskAssessmentStatuses,
            data: lightSwitchApplication.RiskAssessmentStatus,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseRiskAssessmentStatuses
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseRiskAssessmentStatuses, {
        /// <field>
        /// Called when a new BrowseRiskAssessmentStatuses screen is created.
        /// <br/>created(msls.application.BrowseRiskAssessmentStatuses screen)
        /// </field>
        created: [lightSwitchApplication.BrowseRiskAssessmentStatuses],
        /// <field>
        /// Called before changes on an active BrowseRiskAssessmentStatuses screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseRiskAssessmentStatuses screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseRiskAssessmentStatuses],
        /// <field>
        /// Called after the RiskAssessmentStatusList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentStatusList_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessmentStatuses().findContentItem("RiskAssessmentStatusList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessmentStatuses().findContentItem("Search"); }],
        /// <field>
        /// Called after the RiskAssessmentStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessmentStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessmentStatuses().findContentItem("RiskAssessmentStatus"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessmentStatuses().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessmentStatuses().findContentItem("Status"); }]
    });

    lightSwitchApplication.BrowseRiskAssessors.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseRiskAssessors
        },
        RiskAssessorList: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessorList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseRiskAssessors,
            data: lightSwitchApplication.BrowseRiskAssessors,
            value: lightSwitchApplication.BrowseRiskAssessors
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "RiskAssessorList",
            screen: lightSwitchApplication.BrowseRiskAssessors,
            data: lightSwitchApplication.BrowseRiskAssessors,
            value: String
        },
        RiskAssessors: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessors",
            _$parentName: "RiskAssessorList",
            screen: lightSwitchApplication.BrowseRiskAssessors,
            data: lightSwitchApplication.BrowseRiskAssessors,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseRiskAssessors,
                _$entry: {
                    elementType: lightSwitchApplication.RiskAssessor
                }
            }
        },
        RiskAssessorsTemplate: {
            _$class: msls.ContentItem,
            _$name: "RiskAssessorsTemplate",
            _$parentName: "RiskAssessors",
            screen: lightSwitchApplication.BrowseRiskAssessors,
            data: lightSwitchApplication.RiskAssessor,
            value: lightSwitchApplication.RiskAssessor
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RiskAssessorsTemplate",
            screen: lightSwitchApplication.BrowseRiskAssessors,
            data: lightSwitchApplication.RiskAssessor,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RiskAssessorsTemplate",
            screen: lightSwitchApplication.BrowseRiskAssessors,
            data: lightSwitchApplication.RiskAssessor,
            value: String
        },
        DateTrained: {
            _$class: msls.ContentItem,
            _$name: "DateTrained",
            _$parentName: "RiskAssessorsTemplate",
            screen: lightSwitchApplication.BrowseRiskAssessors,
            data: lightSwitchApplication.RiskAssessor,
            value: Date
        },
        DateRefresherTrainingDue: {
            _$class: msls.ContentItem,
            _$name: "DateRefresherTrainingDue",
            _$parentName: "RiskAssessorsTemplate",
            screen: lightSwitchApplication.BrowseRiskAssessors,
            data: lightSwitchApplication.RiskAssessor,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseRiskAssessors
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseRiskAssessors, {
        /// <field>
        /// Called when a new BrowseRiskAssessors screen is created.
        /// <br/>created(msls.application.BrowseRiskAssessors screen)
        /// </field>
        created: [lightSwitchApplication.BrowseRiskAssessors],
        /// <field>
        /// Called before changes on an active BrowseRiskAssessors screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseRiskAssessors screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseRiskAssessors],
        /// <field>
        /// Called after the RiskAssessorList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessorList_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessors().findContentItem("RiskAssessorList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessors().findContentItem("Search"); }],
        /// <field>
        /// Called after the RiskAssessors content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessors_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessors().findContentItem("RiskAssessors"); }],
        /// <field>
        /// Called after the RiskAssessorsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskAssessorsTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessors().findContentItem("RiskAssessorsTemplate"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessors().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessors().findContentItem("LastName"); }],
        /// <field>
        /// Called after the DateTrained content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateTrained_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessors().findContentItem("DateTrained"); }],
        /// <field>
        /// Called after the DateRefresherTrainingDue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRefresherTrainingDue_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskAssessors().findContentItem("DateRefresherTrainingDue"); }]
    });

    lightSwitchApplication.BrowseRiskTypes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseRiskTypes
        },
        RiskTypeList: {
            _$class: msls.ContentItem,
            _$name: "RiskTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseRiskTypes,
            data: lightSwitchApplication.BrowseRiskTypes,
            value: lightSwitchApplication.BrowseRiskTypes
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "RiskTypeList",
            screen: lightSwitchApplication.BrowseRiskTypes,
            data: lightSwitchApplication.BrowseRiskTypes,
            value: String
        },
        RiskType: {
            _$class: msls.ContentItem,
            _$name: "RiskType",
            _$parentName: "RiskTypeList",
            screen: lightSwitchApplication.BrowseRiskTypes,
            data: lightSwitchApplication.BrowseRiskTypes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseRiskTypes,
                _$entry: {
                    elementType: lightSwitchApplication.RiskType
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "RiskType",
            screen: lightSwitchApplication.BrowseRiskTypes,
            data: lightSwitchApplication.RiskType,
            value: lightSwitchApplication.RiskType
        },
        TypeOfRisk: {
            _$class: msls.ContentItem,
            _$name: "TypeOfRisk",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseRiskTypes,
            data: lightSwitchApplication.RiskType,
            value: String
        },
        InUse: {
            _$class: msls.ContentItem,
            _$name: "InUse",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseRiskTypes,
            data: lightSwitchApplication.RiskType,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseRiskTypes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseRiskTypes, {
        /// <field>
        /// Called when a new BrowseRiskTypes screen is created.
        /// <br/>created(msls.application.BrowseRiskTypes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseRiskTypes],
        /// <field>
        /// Called before changes on an active BrowseRiskTypes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseRiskTypes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseRiskTypes],
        /// <field>
        /// Called after the RiskTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskTypeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskTypes().findContentItem("RiskTypeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskTypes().findContentItem("Search"); }],
        /// <field>
        /// Called after the RiskType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskType_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskTypes().findContentItem("RiskType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskTypes().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the TypeOfRisk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfRisk_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskTypes().findContentItem("TypeOfRisk"); }],
        /// <field>
        /// Called after the InUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InUse_postRender: [$element, function () { return new lightSwitchApplication.BrowseRiskTypes().findContentItem("InUse"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        MenuGroup: {
            _$class: msls.ContentItem,
            _$name: "MenuGroup",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        ShowBrowseRiskAssessments: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseRiskAssessments",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseMyRiskAssessments: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseMyRiskAssessments",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseOverdueRiskAssessmentReviews: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseOverdueRiskAssessmentReviews",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseMyRiskAssessmentReviews: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseMyRiskAssessmentReviews",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.Home
        },
        SettingsGroup: {
            _$class: msls.ContentItem,
            _$name: "SettingsGroup",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        ShowBrowseEmployees: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseEmployees",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseRiskAssessors: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseRiskAssessors",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseHazardTypes: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseHazardTypes",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseRiskAssessmentStatuses: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseRiskAssessmentStatuses",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ShowBrowseRiskTypes: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseRiskTypes",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the MenuGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MenuGroup_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MenuGroup"); }],
        /// <field>
        /// Called after the ShowBrowseRiskAssessments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseRiskAssessments_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseRiskAssessments"); }],
        /// <field>
        /// Called after the ShowBrowseMyRiskAssessments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseMyRiskAssessments_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseMyRiskAssessments"); }],
        /// <field>
        /// Called after the ShowBrowseOverdueRiskAssessmentReviews content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseOverdueRiskAssessmentReviews_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseOverdueRiskAssessmentReviews"); }],
        /// <field>
        /// Called after the ShowBrowseMyRiskAssessmentReviews content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseMyRiskAssessmentReviews_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseMyRiskAssessmentReviews"); }],
        /// <field>
        /// Called after the SettingsGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SettingsGroup_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("SettingsGroup"); }],
        /// <field>
        /// Called after the ShowBrowseEmployees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseEmployees_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseEmployees"); }],
        /// <field>
        /// Called after the ShowBrowseRiskAssessors content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseRiskAssessors_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseRiskAssessors"); }],
        /// <field>
        /// Called after the ShowBrowseHazardTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseHazardTypes_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseHazardTypes"); }],
        /// <field>
        /// Called after the ShowBrowseRiskAssessmentStatuses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseRiskAssessmentStatuses_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseRiskAssessmentStatuses"); }],
        /// <field>
        /// Called after the ShowBrowseRiskTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseRiskTypes_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowBrowseRiskTypes"); }]
    });

    lightSwitchApplication.MobileHome.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        },
        MenuGroup: {
            _$class: msls.ContentItem,
            _$name: "MenuGroup",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        ShowBrowseRiskAssessments: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseRiskAssessments",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseMyRiskAssessments: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseMyRiskAssessments",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseOverdueRiskAssessmentReviews: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseOverdueRiskAssessmentReviews",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseMyRiskAssessmentReviews: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseMyRiskAssessmentReviews",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.MobileHome
        },
        SettingsGroup: {
            _$class: msls.ContentItem,
            _$name: "SettingsGroup",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        ShowBrowseEmployees: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseEmployees",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseRiskAssessors: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseRiskAssessors",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseHazardTypes: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseHazardTypes",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseRiskAssessmentStatuses: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseRiskAssessmentStatuses",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseRiskTypes: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseRiskTypes",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.MobileHome
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MobileHome, {
        /// <field>
        /// Called when a new MobileHome screen is created.
        /// <br/>created(msls.application.MobileHome screen)
        /// </field>
        created: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called before changes on an active MobileHome screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MobileHome screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called after the MenuGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MenuGroup_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("MenuGroup"); }],
        /// <field>
        /// Called after the ShowBrowseRiskAssessments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseRiskAssessments_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseRiskAssessments"); }],
        /// <field>
        /// Called after the ShowBrowseMyRiskAssessments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseMyRiskAssessments_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseMyRiskAssessments"); }],
        /// <field>
        /// Called after the ShowBrowseOverdueRiskAssessmentReviews content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseOverdueRiskAssessmentReviews_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseOverdueRiskAssessmentReviews"); }],
        /// <field>
        /// Called after the ShowBrowseMyRiskAssessmentReviews content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseMyRiskAssessmentReviews_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseMyRiskAssessmentReviews"); }],
        /// <field>
        /// Called after the SettingsGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SettingsGroup_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("SettingsGroup"); }],
        /// <field>
        /// Called after the ShowBrowseEmployees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseEmployees_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseEmployees"); }],
        /// <field>
        /// Called after the ShowBrowseRiskAssessors content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseRiskAssessors_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseRiskAssessors"); }],
        /// <field>
        /// Called after the ShowBrowseHazardTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseHazardTypes_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseHazardTypes"); }],
        /// <field>
        /// Called after the ShowBrowseRiskAssessmentStatuses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseRiskAssessmentStatuses_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseRiskAssessmentStatuses"); }],
        /// <field>
        /// Called after the ShowBrowseRiskTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseRiskTypes_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseRiskTypes"); }]
    });

}(msls.application));