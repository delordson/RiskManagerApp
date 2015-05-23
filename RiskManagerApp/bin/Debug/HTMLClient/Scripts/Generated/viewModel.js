/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditEmployee(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployee screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployee.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployee", parameters);
    }

    function AddEditHazardType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditHazardType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="HazardType" type="msls.application.HazardType">
        /// Gets or sets the hazardType for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditHazardType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditHazardType", parameters);
    }

    function AddEditRiskAssessment(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditRiskAssessment screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RiskAssessment" type="msls.application.RiskAssessment">
        /// Gets or sets the riskAssessment for this screen.
        /// </field>
        /// <field name="RiskAssessmentReviews" type="msls.VisualCollection" elementType="msls.application.RiskAssessmentReview">
        /// Gets the riskAssessmentReviews for this screen.
        /// </field>
        /// <field name="RiskAssessmentHazards" type="msls.VisualCollection" elementType="msls.application.RiskAssessmentHazard">
        /// Gets the riskAssessmentHazards for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditRiskAssessment.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditRiskAssessment", parameters);
    }

    function AddEditRiskAssessmentHazard(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditRiskAssessmentHazard screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RiskAssessmentHazard" type="msls.application.RiskAssessmentHazard">
        /// Gets or sets the riskAssessmentHazard for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditRiskAssessmentHazard.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditRiskAssessmentHazard", parameters);
    }

    function AddEditRiskAssessmentReview(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditRiskAssessmentReview screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RiskAssessmentReview" type="msls.application.RiskAssessmentReview">
        /// Gets or sets the riskAssessmentReview for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditRiskAssessmentReview.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditRiskAssessmentReview", parameters);
    }

    function AddEditRiskAssessmentStatus(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditRiskAssessmentStatus screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RiskAssessmentStatus" type="msls.application.RiskAssessmentStatus">
        /// Gets or sets the riskAssessmentStatus for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditRiskAssessmentStatus.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditRiskAssessmentStatus", parameters);
    }

    function AddEditRiskAssessor(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditRiskAssessor screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RiskAssessor" type="msls.application.RiskAssessor">
        /// Gets or sets the riskAssessor for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditRiskAssessor.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditRiskAssessor", parameters);
    }

    function AddEditRiskType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditRiskType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RiskType" type="msls.application.RiskType">
        /// Gets or sets the riskType for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditRiskType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditRiskType", parameters);
    }

    function BrowseEmployees(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployees screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employees" type="msls.VisualCollection" elementType="msls.application.Employee">
        /// Gets the employees for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployees.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployees", parameters);
    }

    function BrowseHazardTypes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseHazardTypes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="HazardTypes" type="msls.VisualCollection" elementType="msls.application.HazardType">
        /// Gets the hazardTypes for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseHazardTypes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseHazardTypes", parameters);
    }

    function BrowseMyRiskAssessmentReviews(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyRiskAssessmentReviews screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyRiskAssessmentReviews" type="msls.VisualCollection" elementType="msls.application.RiskAssessmentReview">
        /// Gets the myRiskAssessmentReviews for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyRiskAssessmentReviews.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyRiskAssessmentReviews", parameters);
    }

    function BrowseMyRiskAssessments(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyRiskAssessments screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyRiskAssessments" type="msls.VisualCollection" elementType="msls.application.RiskAssessment">
        /// Gets the myRiskAssessments for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyRiskAssessments.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyRiskAssessments", parameters);
    }

    function BrowseOverdueRiskAssessmentReviews(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseOverdueRiskAssessmentReviews screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="OverdueRiskAssessmentReviews" type="msls.VisualCollection" elementType="msls.application.RiskAssessmentReview">
        /// Gets the overdueRiskAssessmentReviews for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseOverdueRiskAssessmentReviews.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseOverdueRiskAssessmentReviews", parameters);
    }

    function BrowseRiskAssessments(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseRiskAssessments screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RiskAssessments" type="msls.VisualCollection" elementType="msls.application.RiskAssessment">
        /// Gets the riskAssessments for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseRiskAssessments.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseRiskAssessments", parameters);
    }

    function BrowseRiskAssessmentStatuses(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseRiskAssessmentStatuses screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RiskAssessmentStatuses" type="msls.VisualCollection" elementType="msls.application.RiskAssessmentStatus">
        /// Gets the riskAssessmentStatuses for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseRiskAssessmentStatuses.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseRiskAssessmentStatuses", parameters);
    }

    function BrowseRiskAssessors(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseRiskAssessors screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RiskAssessors" type="msls.VisualCollection" elementType="msls.application.RiskAssessor">
        /// Gets the riskAssessors for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseRiskAssessors.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseRiskAssessors", parameters);
    }

    function BrowseRiskTypes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseRiskTypes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RiskTypes" type="msls.VisualCollection" elementType="msls.application.RiskType">
        /// Gets the riskTypes for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseRiskTypes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseRiskTypes", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function MobileHome(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MobileHome screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.MobileHome.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MobileHome", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditEmployee: $defineScreen(AddEditEmployee, [
            { name: "Employee", kind: "local", type: lightSwitchApplication.Employee }
        ], [
        ]),

        AddEditHazardType: $defineScreen(AddEditHazardType, [
            { name: "HazardType", kind: "local", type: lightSwitchApplication.HazardType }
        ], [
        ]),

        AddEditRiskAssessment: $defineScreen(AddEditRiskAssessment, [
            { name: "RiskAssessment", kind: "local", type: lightSwitchApplication.RiskAssessment },
            {
                name: "RiskAssessmentReviews", kind: "collection", elementType: lightSwitchApplication.RiskAssessmentReview,
                getNavigationProperty: function () {
                    if (this.owner.RiskAssessment) {
                        return this.owner.RiskAssessment.details.properties.RiskAssessmentReviews;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("RiskAssessmentReviewer").expand("RiskAssessmentReviewer.Employee");
                }
            },
            {
                name: "RiskAssessmentHazards", kind: "collection", elementType: lightSwitchApplication.RiskAssessmentHazard,
                getNavigationProperty: function () {
                    if (this.owner.RiskAssessment) {
                        return this.owner.RiskAssessment.details.properties.RiskAssessmentHazards;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("HazardType");
                }
            }
        ], [
        ]),

        AddEditRiskAssessmentHazard: $defineScreen(AddEditRiskAssessmentHazard, [
            { name: "RiskAssessmentHazard", kind: "local", type: lightSwitchApplication.RiskAssessmentHazard }
        ], [
        ]),

        AddEditRiskAssessmentReview: $defineScreen(AddEditRiskAssessmentReview, [
            { name: "RiskAssessmentReview", kind: "local", type: lightSwitchApplication.RiskAssessmentReview }
        ], [
        ]),

        AddEditRiskAssessmentStatus: $defineScreen(AddEditRiskAssessmentStatus, [
            { name: "RiskAssessmentStatus", kind: "local", type: lightSwitchApplication.RiskAssessmentStatus }
        ], [
        ]),

        AddEditRiskAssessor: $defineScreen(AddEditRiskAssessor, [
            { name: "RiskAssessor", kind: "local", type: lightSwitchApplication.RiskAssessor }
        ], [
        ]),

        AddEditRiskType: $defineScreen(AddEditRiskType, [
            { name: "RiskType", kind: "local", type: lightSwitchApplication.RiskType }
        ], [
        ]),

        BrowseEmployees: $defineScreen(BrowseEmployees, [
            {
                name: "Employees", kind: "collection", elementType: lightSwitchApplication.Employee,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Employees;
                }
            }
        ], [
        ]),

        BrowseHazardTypes: $defineScreen(BrowseHazardTypes, [
            {
                name: "HazardTypes", kind: "collection", elementType: lightSwitchApplication.HazardType,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.HazardTypes;
                }
            }
        ], [
        ]),

        BrowseMyRiskAssessmentReviews: $defineScreen(BrowseMyRiskAssessmentReviews, [
            {
                name: "MyRiskAssessmentReviews", kind: "collection", elementType: lightSwitchApplication.RiskAssessmentReview,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.MyRiskAssessmentReviews().expand("RiskAssessment");
                }
            }
        ], [
        ]),

        BrowseMyRiskAssessments: $defineScreen(BrowseMyRiskAssessments, [
            {
                name: "MyRiskAssessments", kind: "collection", elementType: lightSwitchApplication.RiskAssessment,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.MyRiskAssessments().expand("RiskType").expand("RiskAssessmentStatus");
                }
            }
        ], [
        ]),

        BrowseOverdueRiskAssessmentReviews: $defineScreen(BrowseOverdueRiskAssessmentReviews, [
            {
                name: "OverdueRiskAssessmentReviews", kind: "collection", elementType: lightSwitchApplication.RiskAssessmentReview,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.OverdueRiskAssessmentReviews().expand("RiskAssessment").expand("RiskAssessmentReviewer").expand("RiskAssessmentReviewer.Employee");
                }
            }
        ], [
        ]),

        BrowseRiskAssessments: $defineScreen(BrowseRiskAssessments, [
            {
                name: "RiskAssessments", kind: "collection", elementType: lightSwitchApplication.RiskAssessment,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.RiskAssessments.expand("RiskType").expand("RiskAssessmentStatus");
                }
            }
        ], [
        ]),

        BrowseRiskAssessmentStatuses: $defineScreen(BrowseRiskAssessmentStatuses, [
            {
                name: "RiskAssessmentStatuses", kind: "collection", elementType: lightSwitchApplication.RiskAssessmentStatus,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.RiskAssessmentStatuses;
                }
            }
        ], [
        ]),

        BrowseRiskAssessors: $defineScreen(BrowseRiskAssessors, [
            {
                name: "RiskAssessors", kind: "collection", elementType: lightSwitchApplication.RiskAssessor,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.RiskAssessors.expand("Employee");
                }
            }
        ], [
        ]),

        BrowseRiskTypes: $defineScreen(BrowseRiskTypes, [
            {
                name: "RiskTypes", kind: "collection", elementType: lightSwitchApplication.RiskType,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.RiskTypes;
                }
            }
        ], [
        ]),

        Home: $defineScreen(Home, [
        ], [
        ]),

        MobileHome: $defineScreen(MobileHome, [
        ], [
        ]),

        showAddEditEmployee: $defineShowScreen(function showAddEditEmployee(Employee, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployee screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployee", parameters, options);
        }),

        showAddEditHazardType: $defineShowScreen(function showAddEditHazardType(HazardType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditHazardType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditHazardType", parameters, options);
        }),

        showAddEditRiskAssessment: $defineShowScreen(function showAddEditRiskAssessment(RiskAssessment, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditRiskAssessment screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditRiskAssessment", parameters, options);
        }),

        showAddEditRiskAssessmentHazard: $defineShowScreen(function showAddEditRiskAssessmentHazard(RiskAssessmentHazard, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditRiskAssessmentHazard screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditRiskAssessmentHazard", parameters, options);
        }),

        showAddEditRiskAssessmentReview: $defineShowScreen(function showAddEditRiskAssessmentReview(RiskAssessmentReview, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditRiskAssessmentReview screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditRiskAssessmentReview", parameters, options);
        }),

        showAddEditRiskAssessmentStatus: $defineShowScreen(function showAddEditRiskAssessmentStatus(RiskAssessmentStatus, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditRiskAssessmentStatus screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditRiskAssessmentStatus", parameters, options);
        }),

        showAddEditRiskAssessor: $defineShowScreen(function showAddEditRiskAssessor(RiskAssessor, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditRiskAssessor screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditRiskAssessor", parameters, options);
        }),

        showAddEditRiskType: $defineShowScreen(function showAddEditRiskType(RiskType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditRiskType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditRiskType", parameters, options);
        }),

        showBrowseEmployees: $defineShowScreen(function showBrowseEmployees(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployees screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployees", parameters, options);
        }),

        showBrowseHazardTypes: $defineShowScreen(function showBrowseHazardTypes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseHazardTypes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseHazardTypes", parameters, options);
        }),

        showBrowseMyRiskAssessmentReviews: $defineShowScreen(function showBrowseMyRiskAssessmentReviews(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyRiskAssessmentReviews screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyRiskAssessmentReviews", parameters, options);
        }),

        showBrowseMyRiskAssessments: $defineShowScreen(function showBrowseMyRiskAssessments(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyRiskAssessments screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyRiskAssessments", parameters, options);
        }),

        showBrowseOverdueRiskAssessmentReviews: $defineShowScreen(function showBrowseOverdueRiskAssessmentReviews(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseOverdueRiskAssessmentReviews screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseOverdueRiskAssessmentReviews", parameters, options);
        }),

        showBrowseRiskAssessments: $defineShowScreen(function showBrowseRiskAssessments(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseRiskAssessments screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseRiskAssessments", parameters, options);
        }),

        showBrowseRiskAssessmentStatuses: $defineShowScreen(function showBrowseRiskAssessmentStatuses(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseRiskAssessmentStatuses screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseRiskAssessmentStatuses", parameters, options);
        }),

        showBrowseRiskAssessors: $defineShowScreen(function showBrowseRiskAssessors(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseRiskAssessors screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseRiskAssessors", parameters, options);
        }),

        showBrowseRiskTypes: $defineShowScreen(function showBrowseRiskTypes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseRiskTypes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseRiskTypes", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showMobileHome: $defineShowScreen(function showMobileHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MobileHome screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MobileHome", parameters, options);
        })

    });

}(msls.application));
