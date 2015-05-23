using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using LightSwitchApplication.UserCode;
namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void MyRiskAssessments_PreprocessQuery(ref IQueryable<RiskAssessment> query)
        {
            query = from riskAssessment in query
                    where riskAssessment.RiskAssessor.Employee.UserName == this.Application.User.Name
                    select riskAssessment;
        }

        partial void MyRiskAssessmentReviews_PreprocessQuery(ref IQueryable<RiskAssessmentReview> query)
        {
            query = from review in query
                    where review.RiskAssessmentReviewer.Employee.UserName == this.Application.User.Name
                    select review;
        }

        partial void Employees_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void HazardTypes_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditHazardTypes);
        }

        partial void HazardTypes_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditHazardTypes);
        }

        partial void HazardTypes_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditHazardTypes);
        }

        partial void RiskAssessmentHazards_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessmentHazards);
        }

        partial void RiskAssessmentHazards_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessmentHazards);
        }

        partial void RiskAssessmentHazards_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessmentHazards);
        }

        partial void RiskAssessmentReviews_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessmentReviews);
        }

        partial void RiskAssessmentReviews_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessmentReviews);
        }

        partial void RiskAssessmentReviews_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessmentReviews);
        }

        partial void RiskAssessments_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessments);
        }

        partial void RiskAssessments_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessments);
        }

        partial void RiskAssessments_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessments);
        }

        partial void RiskAssessmentStatuses_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessmentStatuses);
        }

        partial void RiskAssessmentStatuses_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessmentStatuses);
        }

        partial void RiskAssessmentStatuses_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessmentStatuses);
        }

        partial void RiskAssessors_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessors);
        }

        partial void RiskAssessors_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessors);
        }

        partial void RiskAssessors_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditRiskAssessors);
        }

        partial void RiskTypes_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditHazardTypes);
        }

        partial void RiskTypes_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditHazardTypes);
        }

        partial void RiskTypes_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditHazardTypes);
        }

        partial void RiskAssessments_Inserting(RiskAssessment entity)
        {
            UpdateRiskScores(entity);
        }

        partial void RiskAssessments_Updating(RiskAssessment entity)
        {
            UpdateRiskScores(entity);
        }

        private void UpdateRiskScores(RiskAssessment entity)
        {
            entity.InherentRisk = entity.InherentLikelihood * entity.InherentImpact;
            entity.ControlledRisk = entity.ControlledLikehood * entity.ControlledImpact;
        }

        partial void RiskAssessments_Validate(RiskAssessment entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.DateApproved != null & entity.DateEffective != null)
            {
                if (((DateTime)entity.DateEffective).Date < ((DateTime)entity.DateApproved).Date)
                {
                    results.AddEntityError("A Risk Assessment cannot be effective until it has been approved");
                }
            }
        }

        private void SendEmail(List<string> mailTos, string subject, string message)
        {
            if (System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable())
            {
                if (mailTos.Count() != 0)
                {
                    MailHelper mailHelper = new MailHelper();

                    mailHelper.SendMail(mailTos, subject, message);
                }
            }
        }

        partial void RiskAssessments_Inserted(RiskAssessment entity)
        {
            if (entity.RiskAssessmentApprover != null && entity.RiskAssessmentApprover.Employee.Email != string.Empty)
            {
                string subject = "New Risk Assessment Has been assigned to you for approval";

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following Risk Assessment has been assigned to you for approval:<br></br>Reference Number: {2}.<br></br>Title: {3}.<br></br></p></body></html>", entity.RiskAssessmentApprover.Employee.FirstName, entity.RiskAssessmentApprover.Employee.LastName, entity.ReferenceNumber, entity.RiskAssessmentTitle);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.RiskAssessmentApprover.Employee.Email);

                SendEmail(mailTos, subject, message);
            }
        }
    }
}
