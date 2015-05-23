/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function RiskAssessment(entitySet) {
        /// <summary>
        /// Represents the RiskAssessment entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this riskAssessment.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this riskAssessment.
        /// </field>
        /// <field name="ReferenceNumber" type="String">
        /// Gets or sets the referenceNumber for this riskAssessment.
        /// </field>
        /// <field name="RiskType" type="msls.application.RiskType">
        /// Gets or sets the riskType for this riskAssessment.
        /// </field>
        /// <field name="RiskAssessmentTitle" type="String">
        /// Gets or sets the riskAssessmentTitle for this riskAssessment.
        /// </field>
        /// <field name="ProcessDescription" type="String">
        /// Gets or sets the processDescription for this riskAssessment.
        /// </field>
        /// <field name="PersonsAffected" type="String">
        /// Gets or sets the personsAffected for this riskAssessment.
        /// </field>
        /// <field name="HowPersonsAffected" type="String">
        /// Gets or sets the howPersonsAffected for this riskAssessment.
        /// </field>
        /// <field name="InherentLikelihood" type="Number">
        /// Gets or sets the inherentLikelihood for this riskAssessment.
        /// </field>
        /// <field name="InherentImpact" type="Number">
        /// Gets or sets the inherentImpact for this riskAssessment.
        /// </field>
        /// <field name="InherentRisk" type="Number">
        /// Gets or sets the inherentRisk for this riskAssessment.
        /// </field>
        /// <field name="ControlMeasures" type="String">
        /// Gets or sets the controlMeasures for this riskAssessment.
        /// </field>
        /// <field name="ControlledLikehood" type="Number">
        /// Gets or sets the controlledLikehood for this riskAssessment.
        /// </field>
        /// <field name="ControlledImpact" type="Number">
        /// Gets or sets the controlledImpact for this riskAssessment.
        /// </field>
        /// <field name="ControlledRisk" type="Number">
        /// Gets or sets the controlledRisk for this riskAssessment.
        /// </field>
        /// <field name="RiskAssessor" type="msls.application.RiskAssessor">
        /// Gets or sets the riskAssessor for this riskAssessment.
        /// </field>
        /// <field name="RiskAssessmentStatus" type="msls.application.RiskAssessmentStatus">
        /// Gets or sets the riskAssessmentStatus for this riskAssessment.
        /// </field>
        /// <field name="RiskAssessmentApprover" type="msls.application.RiskAssessor">
        /// Gets or sets the riskAssessmentApprover for this riskAssessment.
        /// </field>
        /// <field name="DateApproved" type="Date">
        /// Gets or sets the dateApproved for this riskAssessment.
        /// </field>
        /// <field name="DateEffective" type="Date">
        /// Gets or sets the dateEffective for this riskAssessment.
        /// </field>
        /// <field name="RiskAssessmentReviews" type="msls.EntityCollection" elementType="msls.application.RiskAssessmentReview">
        /// Gets the riskAssessmentReviews for this riskAssessment.
        /// </field>
        /// <field name="RiskAssessmentHazards" type="msls.EntityCollection" elementType="msls.application.RiskAssessmentHazard">
        /// Gets the riskAssessmentHazards for this riskAssessment.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this riskAssessment.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this riskAssessment.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this riskAssessment.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this riskAssessment.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this riskAssessment.
        /// </field>
        /// <field name="details" type="msls.application.RiskAssessment.Details">
        /// Gets the details for this riskAssessment.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function RiskType(entitySet) {
        /// <summary>
        /// Represents the RiskType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this riskType.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this riskType.
        /// </field>
        /// <field name="TypeOfRisk" type="String">
        /// Gets or sets the typeOfRisk for this riskType.
        /// </field>
        /// <field name="InUse" type="Boolean">
        /// Gets or sets the inUse for this riskType.
        /// </field>
        /// <field name="RiskAssessments" type="msls.EntityCollection" elementType="msls.application.RiskAssessment">
        /// Gets the riskAssessments for this riskType.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this riskType.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this riskType.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this riskType.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this riskType.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this riskType.
        /// </field>
        /// <field name="details" type="msls.application.RiskType.Details">
        /// Gets the details for this riskType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Employee(entitySet) {
        /// <summary>
        /// Represents the Employee entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employee.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employee.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this employee.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this employee.
        /// </field>
        /// <field name="UserName" type="String">
        /// This is the user name of the 
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this employee.
        /// </field>
        /// <field name="Current" type="Boolean">
        /// Gets or sets the current for this employee.
        /// </field>
        /// <field name="RiskAssessor" type="msls.application.RiskAssessor">
        /// Gets or sets the riskAssessor for this employee.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employee.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employee.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employee.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employee.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employee.
        /// </field>
        /// <field name="details" type="msls.application.Employee.Details">
        /// Gets the details for this employee.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function RiskAssessor(entitySet) {
        /// <summary>
        /// Represents the RiskAssessor entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this riskAssessor.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this riskAssessor.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this riskAssessor.
        /// </field>
        /// <field name="DateTrained" type="Date">
        /// Gets or sets the dateTrained for this riskAssessor.
        /// </field>
        /// <field name="DateRefresherTrainingDue" type="Date">
        /// Gets or sets the dateRefresherTrainingDue for this riskAssessor.
        /// </field>
        /// <field name="RiskAssessments_RiskAssessor" type="msls.EntityCollection" elementType="msls.application.RiskAssessment">
        /// Gets the riskAssessments_RiskAssessor for this riskAssessor.
        /// </field>
        /// <field name="RiskAssessments_Approver" type="msls.EntityCollection" elementType="msls.application.RiskAssessment">
        /// Gets the riskAssessments_Approver for this riskAssessor.
        /// </field>
        /// <field name="RiskAssessmentReviews" type="msls.EntityCollection" elementType="msls.application.RiskAssessmentReview">
        /// Gets the riskAssessmentReviews for this riskAssessor.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this riskAssessor.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this riskAssessor.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this riskAssessor.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this riskAssessor.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this riskAssessor.
        /// </field>
        /// <field name="details" type="msls.application.RiskAssessor.Details">
        /// Gets the details for this riskAssessor.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function RiskAssessmentStatus(entitySet) {
        /// <summary>
        /// Represents the RiskAssessmentStatus entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this riskAssessmentStatus.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this riskAssessmentStatus.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this riskAssessmentStatus.
        /// </field>
        /// <field name="RiskAssessments" type="msls.EntityCollection" elementType="msls.application.RiskAssessment">
        /// Gets the riskAssessments for this riskAssessmentStatus.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this riskAssessmentStatus.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this riskAssessmentStatus.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this riskAssessmentStatus.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this riskAssessmentStatus.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this riskAssessmentStatus.
        /// </field>
        /// <field name="details" type="msls.application.RiskAssessmentStatus.Details">
        /// Gets the details for this riskAssessmentStatus.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function RiskAssessmentReview(entitySet) {
        /// <summary>
        /// Represents the RiskAssessmentReview entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this riskAssessmentReview.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this riskAssessmentReview.
        /// </field>
        /// <field name="DateDue" type="Date">
        /// Gets or sets the dateDue for this riskAssessmentReview.
        /// </field>
        /// <field name="DateCompleted" type="Date">
        /// Gets or sets the dateCompleted for this riskAssessmentReview.
        /// </field>
        /// <field name="Outcome" type="String">
        /// Gets or sets the outcome for this riskAssessmentReview.
        /// </field>
        /// <field name="RiskAssessmentReviewer" type="msls.application.RiskAssessor">
        /// Gets or sets the riskAssessmentReviewer for this riskAssessmentReview.
        /// </field>
        /// <field name="RiskAssessment" type="msls.application.RiskAssessment">
        /// Gets or sets the riskAssessment for this riskAssessmentReview.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this riskAssessmentReview.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this riskAssessmentReview.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this riskAssessmentReview.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this riskAssessmentReview.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this riskAssessmentReview.
        /// </field>
        /// <field name="details" type="msls.application.RiskAssessmentReview.Details">
        /// Gets the details for this riskAssessmentReview.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function RiskAssessmentHazard(entitySet) {
        /// <summary>
        /// Represents the RiskAssessmentHazard entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this riskAssessmentHazard.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this riskAssessmentHazard.
        /// </field>
        /// <field name="HazardDescription" type="String">
        /// Gets or sets the hazardDescription for this riskAssessmentHazard.
        /// </field>
        /// <field name="HazardType" type="msls.application.HazardType">
        /// Gets or sets the hazardType for this riskAssessmentHazard.
        /// </field>
        /// <field name="HazardConsequence" type="String">
        /// Gets or sets the hazardConsequence for this riskAssessmentHazard.
        /// </field>
        /// <field name="ControlMeasures" type="String">
        /// Gets or sets the controlMeasures for this riskAssessmentHazard.
        /// </field>
        /// <field name="RiskAssessment" type="msls.application.RiskAssessment">
        /// Gets or sets the riskAssessment for this riskAssessmentHazard.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this riskAssessmentHazard.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this riskAssessmentHazard.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this riskAssessmentHazard.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this riskAssessmentHazard.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this riskAssessmentHazard.
        /// </field>
        /// <field name="details" type="msls.application.RiskAssessmentHazard.Details">
        /// Gets the details for this riskAssessmentHazard.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function HazardType(entitySet) {
        /// <summary>
        /// Represents the HazardType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this hazardType.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this hazardType.
        /// </field>
        /// <field name="HazardTypeDescription" type="String">
        /// Gets or sets the hazardTypeDescription for this hazardType.
        /// </field>
        /// <field name="RiskAssessmentHazards" type="msls.EntityCollection" elementType="msls.application.RiskAssessmentHazard">
        /// Gets the riskAssessmentHazards for this hazardType.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this hazardType.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this hazardType.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this hazardType.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this hazardType.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this hazardType.
        /// </field>
        /// <field name="details" type="msls.application.HazardType.Details">
        /// Gets the details for this hazardType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="RiskAssessments" type="msls.EntitySet">
        /// Gets the RiskAssessments entity set.
        /// </field>
        /// <field name="RiskTypes" type="msls.EntitySet">
        /// Gets the RiskTypes entity set.
        /// </field>
        /// <field name="Employees" type="msls.EntitySet">
        /// Gets the Employees entity set.
        /// </field>
        /// <field name="RiskAssessors" type="msls.EntitySet">
        /// Gets the RiskAssessors entity set.
        /// </field>
        /// <field name="RiskAssessmentStatuses" type="msls.EntitySet">
        /// Gets the RiskAssessmentStatuses entity set.
        /// </field>
        /// <field name="RiskAssessmentReviews" type="msls.EntitySet">
        /// Gets the RiskAssessmentReviews entity set.
        /// </field>
        /// <field name="RiskAssessmentHazards" type="msls.EntitySet">
        /// Gets the RiskAssessmentHazards entity set.
        /// </field>
        /// <field name="HazardTypes" type="msls.EntitySet">
        /// Gets the HazardTypes entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        RiskAssessment: $defineEntity(RiskAssessment, [
            { name: "Id", type: Number },
            { name: "ReferenceNumber", type: String },
            { name: "RiskType", kind: "reference", type: RiskType },
            { name: "RiskAssessmentTitle", type: String },
            { name: "ProcessDescription", type: String },
            { name: "PersonsAffected", type: String },
            { name: "HowPersonsAffected", type: String },
            { name: "InherentLikelihood", type: Number },
            { name: "InherentImpact", type: Number },
            { name: "InherentRisk", type: Number },
            { name: "ControlMeasures", type: String },
            { name: "ControlledLikehood", type: Number },
            { name: "ControlledImpact", type: Number },
            { name: "ControlledRisk", type: Number },
            { name: "RiskAssessor", kind: "reference", type: RiskAssessor },
            { name: "RiskAssessmentStatus", kind: "reference", type: RiskAssessmentStatus },
            { name: "RiskAssessmentApprover", kind: "reference", type: RiskAssessor },
            { name: "DateApproved", type: Date },
            { name: "DateEffective", type: Date },
            { name: "RiskAssessmentReviews", kind: "collection", elementType: RiskAssessmentReview },
            { name: "RiskAssessmentHazards", kind: "collection", elementType: RiskAssessmentHazard },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        RiskType: $defineEntity(RiskType, [
            { name: "Id", type: Number },
            { name: "TypeOfRisk", type: String },
            { name: "InUse", type: Boolean },
            { name: "RiskAssessments", kind: "collection", elementType: RiskAssessment },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Employee: $defineEntity(Employee, [
            { name: "Id", type: Number },
            { name: "LastName", type: String },
            { name: "FirstName", type: String },
            { name: "UserName", type: String },
            { name: "Email", type: String },
            { name: "Current", type: Boolean },
            { name: "RiskAssessor", kind: "reference", type: RiskAssessor },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        RiskAssessor: $defineEntity(RiskAssessor, [
            { name: "Id", type: Number },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "DateTrained", type: Date },
            { name: "DateRefresherTrainingDue", type: Date },
            { name: "RiskAssessments_RiskAssessor", kind: "collection", elementType: RiskAssessment },
            { name: "RiskAssessments_Approver", kind: "collection", elementType: RiskAssessment },
            { name: "RiskAssessmentReviews", kind: "collection", elementType: RiskAssessmentReview },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        RiskAssessmentStatus: $defineEntity(RiskAssessmentStatus, [
            { name: "Id", type: Number },
            { name: "Status", type: String },
            { name: "RiskAssessments", kind: "collection", elementType: RiskAssessment },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        RiskAssessmentReview: $defineEntity(RiskAssessmentReview, [
            { name: "Id", type: Number },
            { name: "DateDue", type: Date },
            { name: "DateCompleted", type: Date },
            { name: "Outcome", type: String },
            { name: "RiskAssessmentReviewer", kind: "reference", type: RiskAssessor },
            { name: "RiskAssessment", kind: "reference", type: RiskAssessment },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        RiskAssessmentHazard: $defineEntity(RiskAssessmentHazard, [
            { name: "Id", type: Number },
            { name: "HazardDescription", type: String },
            { name: "HazardType", kind: "reference", type: HazardType },
            { name: "HazardConsequence", type: String },
            { name: "ControlMeasures", type: String },
            { name: "RiskAssessment", kind: "reference", type: RiskAssessment },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        HazardType: $defineEntity(HazardType, [
            { name: "Id", type: Number },
            { name: "HazardTypeDescription", type: String },
            { name: "RiskAssessmentHazards", kind: "collection", elementType: RiskAssessmentHazard },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "RiskAssessments", elementType: RiskAssessment },
            { name: "RiskTypes", elementType: RiskType },
            { name: "Employees", elementType: Employee },
            { name: "RiskAssessors", elementType: RiskAssessor },
            { name: "RiskAssessmentStatuses", elementType: RiskAssessmentStatus },
            { name: "RiskAssessmentReviews", elementType: RiskAssessmentReview },
            { name: "RiskAssessmentHazards", elementType: RiskAssessmentHazard },
            { name: "HazardTypes", elementType: HazardType }
        ], [
            {
                name: "RiskAssessments_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.RiskAssessments },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/RiskAssessments(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "RiskTypes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.RiskTypes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/RiskTypes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Employees_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Employees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Employees(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "RiskAssessors_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.RiskAssessors },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/RiskAssessors(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "RiskAssessmentStatuses_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.RiskAssessmentStatuses },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/RiskAssessmentStatuses(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "RiskAssessmentReviews_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.RiskAssessmentReviews },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/RiskAssessmentReviews(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "RiskAssessmentHazards_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.RiskAssessmentHazards },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/RiskAssessmentHazards(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "HazardTypes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.HazardTypes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/HazardTypes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "MyRiskAssessments", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.RiskAssessments },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyRiskAssessments()",
                        {
                        });
                }
            },
            {
                name: "OverdueRiskAssessmentReviews", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.RiskAssessmentReviews },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/OverdueRiskAssessmentReviews()",
                        {
                        });
                }
            },
            {
                name: "MyRiskAssessmentReviews", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.RiskAssessmentReviews },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyRiskAssessmentReviews()",
                        {
                        });
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
