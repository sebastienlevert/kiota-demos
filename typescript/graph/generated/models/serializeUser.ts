import {AgreementAcceptance} from './agreementAcceptance';
import {AppRoleAssignment} from './appRoleAssignment';
import {AssignedLicense} from './assignedLicense';
import {AssignedPlan} from './assignedPlan';
import {Authentication} from './authentication';
import {AuthorizationInfo} from './authorizationInfo';
import {Calendar} from './calendar';
import {CalendarGroup} from './calendarGroup';
import {Chat} from './chat';
import {Contact} from './contact';
import {ContactFolder} from './contactFolder';
import {DeviceManagementTroubleshootingEvent} from './deviceManagementTroubleshootingEvent';
import {DirectoryObject} from './directoryObject';
import {Drive} from './drive';
import {EmployeeExperienceUser} from './employeeExperienceUser';
import {EmployeeOrgData} from './employeeOrgData';
import {Event} from './event';
import {Extension} from './extension';
import {InferenceClassification} from './inferenceClassification';
import {LicenseAssignmentState} from './licenseAssignmentState';
import {LicenseDetails} from './licenseDetails';
import {MailboxSettings} from './mailboxSettings';
import {MailFolder} from './mailFolder';
import {ManagedAppRegistration} from './managedAppRegistration';
import {ManagedDevice} from './managedDevice';
import {Message} from './message';
import {OAuth2PermissionGrant} from './oAuth2PermissionGrant';
import {ObjectIdentity} from './objectIdentity';
import {OfficeGraphInsights} from './officeGraphInsights';
import {Onenote} from './onenote';
import {OnlineMeeting} from './onlineMeeting';
import {OnPremisesExtensionAttributes} from './onPremisesExtensionAttributes';
import {OnPremisesProvisioningError} from './onPremisesProvisioningError';
import {OutlookUser} from './outlookUser';
import {PasswordProfile} from './passwordProfile';
import {Person} from './person';
import {PlannerUser} from './plannerUser';
import {Presence} from './presence';
import {ProfilePhoto} from './profilePhoto';
import {ProvisionedPlan} from './provisionedPlan';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {serializeAgreementAcceptance} from './serializeAgreementAcceptance';
import {serializeAppRoleAssignment} from './serializeAppRoleAssignment';
import {serializeAssignedLicense} from './serializeAssignedLicense';
import {serializeAssignedPlan} from './serializeAssignedPlan';
import {serializeAuthentication} from './serializeAuthentication';
import {serializeAuthorizationInfo} from './serializeAuthorizationInfo';
import {serializeCalendar} from './serializeCalendar';
import {serializeCalendarGroup} from './serializeCalendarGroup';
import {serializeChat} from './serializeChat';
import {serializeContact} from './serializeContact';
import {serializeContactFolder} from './serializeContactFolder';
import {serializeDeviceManagementTroubleshootingEvent} from './serializeDeviceManagementTroubleshootingEvent';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeDrive} from './serializeDrive';
import {serializeEmployeeExperienceUser} from './serializeEmployeeExperienceUser';
import {serializeEmployeeOrgData} from './serializeEmployeeOrgData';
import {serializeEvent} from './serializeEvent';
import {serializeExtension} from './serializeExtension';
import {serializeInferenceClassification} from './serializeInferenceClassification';
import {serializeLicenseAssignmentState} from './serializeLicenseAssignmentState';
import {serializeLicenseDetails} from './serializeLicenseDetails';
import {serializeMailboxSettings} from './serializeMailboxSettings';
import {serializeMailFolder} from './serializeMailFolder';
import {serializeManagedAppRegistration} from './serializeManagedAppRegistration';
import {serializeManagedDevice} from './serializeManagedDevice';
import {serializeMessage} from './serializeMessage';
import {serializeOAuth2PermissionGrant} from './serializeOAuth2PermissionGrant';
import {serializeObjectIdentity} from './serializeObjectIdentity';
import {serializeOfficeGraphInsights} from './serializeOfficeGraphInsights';
import {serializeOnenote} from './serializeOnenote';
import {serializeOnlineMeeting} from './serializeOnlineMeeting';
import {serializeOnPremisesExtensionAttributes} from './serializeOnPremisesExtensionAttributes';
import {serializeOnPremisesProvisioningError} from './serializeOnPremisesProvisioningError';
import {serializeOutlookUser} from './serializeOutlookUser';
import {serializePasswordProfile} from './serializePasswordProfile';
import {serializePerson} from './serializePerson';
import {serializePlannerUser} from './serializePlannerUser';
import {serializePresence} from './serializePresence';
import {serializeProfilePhoto} from './serializeProfilePhoto';
import {serializeProvisionedPlan} from './serializeProvisionedPlan';
import {serializeScopedRoleMembership} from './serializeScopedRoleMembership';
import {serializeSignInActivity} from './serializeSignInActivity';
import {serializeSite} from './serializeSite';
import {serializeTeam} from './serializeTeam';
import {serializeTodo} from './serializeTodo';
import {serializeUserActivity} from './serializeUserActivity';
import {serializeUserPrint} from './serializeUserPrint';
import {serializeUserSettings} from './serializeUserSettings';
import {serializeUserTeamwork} from './serializeUserTeamwork';
import {SignInActivity} from './signInActivity';
import {Site} from './site';
import {Team} from './team';
import {Todo} from './todo';
import {User} from './user';
import {UserActivity} from './userActivity';
import {UserPrint} from './userPrint';
import {UserSettings} from './userSettings';
import {UserTeamwork} from './userTeamwork';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUser(writer: SerializationWriter, user: User | undefined = {} as User) : void {
        serializeDirectoryObject(writer, user)
        writer.writeStringValue("aboutMe", user.aboutMe);
        writer.writeBooleanValue("accountEnabled", user.accountEnabled);
        writer.writeCollectionOfObjectValues<UserActivity>("activities", user.activities, serializeUserActivity);
        writer.writeStringValue("ageGroup", user.ageGroup);
        writer.writeCollectionOfObjectValues<AgreementAcceptance>("agreementAcceptances", user.agreementAcceptances, serializeAgreementAcceptance);
        writer.writeCollectionOfObjectValues<AppRoleAssignment>("appRoleAssignments", user.appRoleAssignments, serializeAppRoleAssignment);
        writer.writeCollectionOfObjectValues<AssignedLicense>("assignedLicenses", user.assignedLicenses, serializeAssignedLicense);
        writer.writeCollectionOfObjectValues<AssignedPlan>("assignedPlans", user.assignedPlans, serializeAssignedPlan);
        writer.writeObjectValue<Authentication>("authentication", user.authentication, serializeAuthentication);
        writer.writeObjectValue<AuthorizationInfo>("authorizationInfo", user.authorizationInfo, serializeAuthorizationInfo);
        writer.writeDateValue("birthday", user.birthday);
        writer.writeCollectionOfPrimitiveValues<string>("businessPhones", user.businessPhones);
        writer.writeObjectValue<Calendar>("calendar", user.calendar, serializeCalendar);
        writer.writeCollectionOfObjectValues<CalendarGroup>("calendarGroups", user.calendarGroups, serializeCalendarGroup);
        writer.writeCollectionOfObjectValues<Calendar>("calendars", user.calendars, serializeCalendar);
        writer.writeCollectionOfObjectValues<Event>("calendarView", user.calendarView, serializeEvent);
        writer.writeCollectionOfObjectValues<Chat>("chats", user.chats, serializeChat);
        writer.writeStringValue("city", user.city);
        writer.writeStringValue("companyName", user.companyName);
        writer.writeStringValue("consentProvidedForMinor", user.consentProvidedForMinor);
        writer.writeCollectionOfObjectValues<ContactFolder>("contactFolders", user.contactFolders, serializeContactFolder);
        writer.writeCollectionOfObjectValues<Contact>("contacts", user.contacts, serializeContact);
        writer.writeStringValue("country", user.country);
        writer.writeDateValue("createdDateTime", user.createdDateTime);
        writer.writeCollectionOfObjectValues<DirectoryObject>("createdObjects", user.createdObjects, serializeDirectoryObject);
        writer.writeStringValue("creationType", user.creationType);
        writer.writeStringValue("department", user.department);
        writer.writeNumberValue("deviceEnrollmentLimit", user.deviceEnrollmentLimit);
        writer.writeCollectionOfObjectValues<DeviceManagementTroubleshootingEvent>("deviceManagementTroubleshootingEvents", user.deviceManagementTroubleshootingEvents, serializeDeviceManagementTroubleshootingEvent);
        writer.writeCollectionOfObjectValues<DirectoryObject>("directReports", user.directReports, serializeDirectoryObject);
        writer.writeStringValue("displayName", user.displayName);
        writer.writeObjectValue<Drive>("drive", user.drive, serializeDrive);
        writer.writeCollectionOfObjectValues<Drive>("drives", user.drives, serializeDrive);
        writer.writeObjectValue<EmployeeExperienceUser>("employeeExperience", user.employeeExperience, serializeEmployeeExperienceUser);
        writer.writeDateValue("employeeHireDate", user.employeeHireDate);
        writer.writeStringValue("employeeId", user.employeeId);
        writer.writeDateValue("employeeLeaveDateTime", user.employeeLeaveDateTime);
        writer.writeObjectValue<EmployeeOrgData>("employeeOrgData", user.employeeOrgData, serializeEmployeeOrgData);
        writer.writeStringValue("employeeType", user.employeeType);
        writer.writeCollectionOfObjectValues<Event>("events", user.events, serializeEvent);
        writer.writeCollectionOfObjectValues<Extension>("extensions", user.extensions, serializeExtension);
        writer.writeStringValue("externalUserState", user.externalUserState);
        writer.writeDateValue("externalUserStateChangeDateTime", user.externalUserStateChangeDateTime);
        writer.writeStringValue("faxNumber", user.faxNumber);
        writer.writeCollectionOfObjectValues<Site>("followedSites", user.followedSites, serializeSite);
        writer.writeStringValue("givenName", user.givenName);
        writer.writeDateValue("hireDate", user.hireDate);
        writer.writeCollectionOfObjectValues<ObjectIdentity>("identities", user.identities, serializeObjectIdentity);
        writer.writeCollectionOfPrimitiveValues<string>("imAddresses", user.imAddresses);
        writer.writeObjectValue<InferenceClassification>("inferenceClassification", user.inferenceClassification, serializeInferenceClassification);
        writer.writeObjectValue<OfficeGraphInsights>("insights", user.insights, serializeOfficeGraphInsights);
        writer.writeCollectionOfPrimitiveValues<string>("interests", user.interests);
        writer.writeBooleanValue("isResourceAccount", user.isResourceAccount);
        writer.writeStringValue("jobTitle", user.jobTitle);
        writer.writeCollectionOfObjectValues<Team>("joinedTeams", user.joinedTeams, serializeTeam);
        writer.writeDateValue("lastPasswordChangeDateTime", user.lastPasswordChangeDateTime);
        writer.writeStringValue("legalAgeGroupClassification", user.legalAgeGroupClassification);
        writer.writeCollectionOfObjectValues<LicenseAssignmentState>("licenseAssignmentStates", user.licenseAssignmentStates, serializeLicenseAssignmentState);
        writer.writeCollectionOfObjectValues<LicenseDetails>("licenseDetails", user.licenseDetails, serializeLicenseDetails);
        writer.writeStringValue("mail", user.mail);
        writer.writeObjectValue<MailboxSettings>("mailboxSettings", user.mailboxSettings, serializeMailboxSettings);
        writer.writeCollectionOfObjectValues<MailFolder>("mailFolders", user.mailFolders, serializeMailFolder);
        writer.writeStringValue("mailNickname", user.mailNickname);
        writer.writeCollectionOfObjectValues<ManagedAppRegistration>("managedAppRegistrations", user.managedAppRegistrations, serializeManagedAppRegistration);
        writer.writeCollectionOfObjectValues<ManagedDevice>("managedDevices", user.managedDevices, serializeManagedDevice);
        writer.writeObjectValue<DirectoryObject>("manager", user.manager, serializeDirectoryObject);
        writer.writeCollectionOfObjectValues<DirectoryObject>("memberOf", user.memberOf, serializeDirectoryObject);
        writer.writeCollectionOfObjectValues<Message>("messages", user.messages, serializeMessage);
        writer.writeStringValue("mobilePhone", user.mobilePhone);
        writer.writeStringValue("mySite", user.mySite);
        writer.writeCollectionOfObjectValues<OAuth2PermissionGrant>("oauth2PermissionGrants", user.oauth2PermissionGrants, serializeOAuth2PermissionGrant);
        writer.writeStringValue("officeLocation", user.officeLocation);
        writer.writeObjectValue<Onenote>("onenote", user.onenote, serializeOnenote);
        writer.writeCollectionOfObjectValues<OnlineMeeting>("onlineMeetings", user.onlineMeetings, serializeOnlineMeeting);
        writer.writeStringValue("onPremisesDistinguishedName", user.onPremisesDistinguishedName);
        writer.writeStringValue("onPremisesDomainName", user.onPremisesDomainName);
        writer.writeObjectValue<OnPremisesExtensionAttributes>("onPremisesExtensionAttributes", user.onPremisesExtensionAttributes, serializeOnPremisesExtensionAttributes);
        writer.writeStringValue("onPremisesImmutableId", user.onPremisesImmutableId);
        writer.writeDateValue("onPremisesLastSyncDateTime", user.onPremisesLastSyncDateTime);
        writer.writeCollectionOfObjectValues<OnPremisesProvisioningError>("onPremisesProvisioningErrors", user.onPremisesProvisioningErrors, serializeOnPremisesProvisioningError);
        writer.writeStringValue("onPremisesSamAccountName", user.onPremisesSamAccountName);
        writer.writeStringValue("onPremisesSecurityIdentifier", user.onPremisesSecurityIdentifier);
        writer.writeBooleanValue("onPremisesSyncEnabled", user.onPremisesSyncEnabled);
        writer.writeStringValue("onPremisesUserPrincipalName", user.onPremisesUserPrincipalName);
        writer.writeCollectionOfPrimitiveValues<string>("otherMails", user.otherMails);
        writer.writeObjectValue<OutlookUser>("outlook", user.outlook, serializeOutlookUser);
        writer.writeCollectionOfObjectValues<DirectoryObject>("ownedDevices", user.ownedDevices, serializeDirectoryObject);
        writer.writeCollectionOfObjectValues<DirectoryObject>("ownedObjects", user.ownedObjects, serializeDirectoryObject);
        writer.writeStringValue("passwordPolicies", user.passwordPolicies);
        writer.writeObjectValue<PasswordProfile>("passwordProfile", user.passwordProfile, serializePasswordProfile);
        writer.writeCollectionOfPrimitiveValues<string>("pastProjects", user.pastProjects);
        writer.writeCollectionOfObjectValues<Person>("people", user.people, serializePerson);
        writer.writeObjectValue<ProfilePhoto>("photo", user.photo, serializeProfilePhoto);
        writer.writeCollectionOfObjectValues<ProfilePhoto>("photos", user.photos, serializeProfilePhoto);
        writer.writeObjectValue<PlannerUser>("planner", user.planner, serializePlannerUser);
        writer.writeStringValue("postalCode", user.postalCode);
        writer.writeStringValue("preferredDataLocation", user.preferredDataLocation);
        writer.writeStringValue("preferredLanguage", user.preferredLanguage);
        writer.writeStringValue("preferredName", user.preferredName);
        writer.writeObjectValue<Presence>("presence", user.presence, serializePresence);
        writer.writeObjectValue<UserPrint>("print", user.print, serializeUserPrint);
        writer.writeCollectionOfObjectValues<ProvisionedPlan>("provisionedPlans", user.provisionedPlans, serializeProvisionedPlan);
        writer.writeCollectionOfPrimitiveValues<string>("proxyAddresses", user.proxyAddresses);
        writer.writeCollectionOfObjectValues<DirectoryObject>("registeredDevices", user.registeredDevices, serializeDirectoryObject);
        writer.writeCollectionOfPrimitiveValues<string>("responsibilities", user.responsibilities);
        writer.writeCollectionOfPrimitiveValues<string>("schools", user.schools);
        writer.writeCollectionOfObjectValues<ScopedRoleMembership>("scopedRoleMemberOf", user.scopedRoleMemberOf, serializeScopedRoleMembership);
        writer.writeStringValue("securityIdentifier", user.securityIdentifier);
        writer.writeObjectValue<UserSettings>("settings", user.settings, serializeUserSettings);
        writer.writeBooleanValue("showInAddressList", user.showInAddressList);
        writer.writeObjectValue<SignInActivity>("signInActivity", user.signInActivity, serializeSignInActivity);
        writer.writeDateValue("signInSessionsValidFromDateTime", user.signInSessionsValidFromDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("skills", user.skills);
        writer.writeStringValue("state", user.state);
        writer.writeStringValue("streetAddress", user.streetAddress);
        writer.writeStringValue("surname", user.surname);
        writer.writeObjectValue<UserTeamwork>("teamwork", user.teamwork, serializeUserTeamwork);
        writer.writeObjectValue<Todo>("todo", user.todo, serializeTodo);
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMemberOf", user.transitiveMemberOf, serializeDirectoryObject);
        writer.writeStringValue("usageLocation", user.usageLocation);
        writer.writeStringValue("userPrincipalName", user.userPrincipalName);
        writer.writeStringValue("userType", user.userType);
}
