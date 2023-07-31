import {ApplePushNotificationCertificate} from './applePushNotificationCertificate';
import {AuditEvent} from './auditEvent';
import {ComplianceManagementPartner} from './complianceManagementPartner';
import {DetectedApp} from './detectedApp';
import {DeviceAndAppManagementRoleAssignment} from './deviceAndAppManagementRoleAssignment';
import {DeviceCategory} from './deviceCategory';
import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {DeviceCompliancePolicyDeviceStateSummary} from './deviceCompliancePolicyDeviceStateSummary';
import {DeviceCompliancePolicySettingStateSummary} from './deviceCompliancePolicySettingStateSummary';
import {DeviceConfiguration} from './deviceConfiguration';
import {DeviceConfigurationDeviceStateSummary} from './deviceConfigurationDeviceStateSummary';
import {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import {DeviceManagement} from './deviceManagement';
import {DeviceManagementExchangeConnector} from './deviceManagementExchangeConnector';
import {DeviceManagementPartner} from './deviceManagementPartner';
import {DeviceManagementReports} from './deviceManagementReports';
import {DeviceManagementSettings} from './deviceManagementSettings';
import {DeviceManagementSubscriptionState} from './deviceManagementSubscriptionState';
import {DeviceManagementTroubleshootingEvent} from './deviceManagementTroubleshootingEvent';
import {DeviceProtectionOverview} from './deviceProtectionOverview';
import {ImportedWindowsAutopilotDeviceIdentity} from './importedWindowsAutopilotDeviceIdentity';
import {IntuneBrand} from './intuneBrand';
import {IosUpdateDeviceStatus} from './iosUpdateDeviceStatus';
import {ManagedDevice} from './managedDevice';
import {ManagedDeviceOverview} from './managedDeviceOverview';
import {MobileAppTroubleshootingEvent} from './mobileAppTroubleshootingEvent';
import {MobileThreatDefenseConnector} from './mobileThreatDefenseConnector';
import {NotificationMessageTemplate} from './notificationMessageTemplate';
import {OnPremisesConditionalAccessSettings} from './onPremisesConditionalAccessSettings';
import {RemoteAssistancePartner} from './remoteAssistancePartner';
import {ResourceOperation} from './resourceOperation';
import {RoleDefinition} from './roleDefinition';
import {serializeApplePushNotificationCertificate} from './serializeApplePushNotificationCertificate';
import {serializeAuditEvent} from './serializeAuditEvent';
import {serializeComplianceManagementPartner} from './serializeComplianceManagementPartner';
import {serializeDetectedApp} from './serializeDetectedApp';
import {serializeDeviceAndAppManagementRoleAssignment} from './serializeDeviceAndAppManagementRoleAssignment';
import {serializeDeviceCategory} from './serializeDeviceCategory';
import {serializeDeviceCompliancePolicy} from './serializeDeviceCompliancePolicy';
import {serializeDeviceCompliancePolicyDeviceStateSummary} from './serializeDeviceCompliancePolicyDeviceStateSummary';
import {serializeDeviceCompliancePolicySettingStateSummary} from './serializeDeviceCompliancePolicySettingStateSummary';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {serializeDeviceConfigurationDeviceStateSummary} from './serializeDeviceConfigurationDeviceStateSummary';
import {serializeDeviceEnrollmentConfiguration} from './serializeDeviceEnrollmentConfiguration';
import {serializeDeviceManagementExchangeConnector} from './serializeDeviceManagementExchangeConnector';
import {serializeDeviceManagementPartner} from './serializeDeviceManagementPartner';
import {serializeDeviceManagementReports} from './serializeDeviceManagementReports';
import {serializeDeviceManagementSettings} from './serializeDeviceManagementSettings';
import {serializeDeviceManagementTroubleshootingEvent} from './serializeDeviceManagementTroubleshootingEvent';
import {serializeDeviceProtectionOverview} from './serializeDeviceProtectionOverview';
import {serializeEntity} from './serializeEntity';
import {serializeImportedWindowsAutopilotDeviceIdentity} from './serializeImportedWindowsAutopilotDeviceIdentity';
import {serializeIntuneBrand} from './serializeIntuneBrand';
import {serializeIosUpdateDeviceStatus} from './serializeIosUpdateDeviceStatus';
import {serializeManagedDevice} from './serializeManagedDevice';
import {serializeManagedDeviceOverview} from './serializeManagedDeviceOverview';
import {serializeMobileAppTroubleshootingEvent} from './serializeMobileAppTroubleshootingEvent';
import {serializeMobileThreatDefenseConnector} from './serializeMobileThreatDefenseConnector';
import {serializeNotificationMessageTemplate} from './serializeNotificationMessageTemplate';
import {serializeOnPremisesConditionalAccessSettings} from './serializeOnPremisesConditionalAccessSettings';
import {serializeRemoteAssistancePartner} from './serializeRemoteAssistancePartner';
import {serializeResourceOperation} from './serializeResourceOperation';
import {serializeRoleDefinition} from './serializeRoleDefinition';
import {serializeSoftwareUpdateStatusSummary} from './serializeSoftwareUpdateStatusSummary';
import {serializeTelecomExpenseManagementPartner} from './serializeTelecomExpenseManagementPartner';
import {serializeTermsAndConditions} from './serializeTermsAndConditions';
import {serializeUserExperienceAnalyticsAppHealthApplicationPerformance} from './serializeUserExperienceAnalyticsAppHealthApplicationPerformance';
import {serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails} from './serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import {serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId} from './serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId';
import {serializeUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion} from './serializeUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion';
import {serializeUserExperienceAnalyticsAppHealthDeviceModelPerformance} from './serializeUserExperienceAnalyticsAppHealthDeviceModelPerformance';
import {serializeUserExperienceAnalyticsAppHealthDevicePerformance} from './serializeUserExperienceAnalyticsAppHealthDevicePerformance';
import {serializeUserExperienceAnalyticsAppHealthDevicePerformanceDetails} from './serializeUserExperienceAnalyticsAppHealthDevicePerformanceDetails';
import {serializeUserExperienceAnalyticsAppHealthOSVersionPerformance} from './serializeUserExperienceAnalyticsAppHealthOSVersionPerformance';
import {serializeUserExperienceAnalyticsBaseline} from './serializeUserExperienceAnalyticsBaseline';
import {serializeUserExperienceAnalyticsCategory} from './serializeUserExperienceAnalyticsCategory';
import {serializeUserExperienceAnalyticsDevicePerformance} from './serializeUserExperienceAnalyticsDevicePerformance';
import {serializeUserExperienceAnalyticsDeviceScores} from './serializeUserExperienceAnalyticsDeviceScores';
import {serializeUserExperienceAnalyticsDeviceStartupHistory} from './serializeUserExperienceAnalyticsDeviceStartupHistory';
import {serializeUserExperienceAnalyticsDeviceStartupProcess} from './serializeUserExperienceAnalyticsDeviceStartupProcess';
import {serializeUserExperienceAnalyticsMetricHistory} from './serializeUserExperienceAnalyticsMetricHistory';
import {serializeUserExperienceAnalyticsModelScores} from './serializeUserExperienceAnalyticsModelScores';
import {serializeUserExperienceAnalyticsOverview} from './serializeUserExperienceAnalyticsOverview';
import {serializeUserExperienceAnalyticsScoreHistory} from './serializeUserExperienceAnalyticsScoreHistory';
import {serializeUserExperienceAnalyticsSettings} from './serializeUserExperienceAnalyticsSettings';
import {serializeUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric} from './serializeUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric';
import {serializeUserExperienceAnalyticsWorkFromAnywhereMetric} from './serializeUserExperienceAnalyticsWorkFromAnywhereMetric';
import {serializeUserExperienceAnalyticsWorkFromAnywhereModelPerformance} from './serializeUserExperienceAnalyticsWorkFromAnywhereModelPerformance';
import {serializeWindowsAutopilotDeviceIdentity} from './serializeWindowsAutopilotDeviceIdentity';
import {serializeWindowsInformationProtectionAppLearningSummary} from './serializeWindowsInformationProtectionAppLearningSummary';
import {serializeWindowsInformationProtectionNetworkLearningSummary} from './serializeWindowsInformationProtectionNetworkLearningSummary';
import {serializeWindowsMalwareInformation} from './serializeWindowsMalwareInformation';
import {serializeWindowsMalwareOverview} from './serializeWindowsMalwareOverview';
import {SoftwareUpdateStatusSummary} from './softwareUpdateStatusSummary';
import {TelecomExpenseManagementPartner} from './telecomExpenseManagementPartner';
import {TermsAndConditions} from './termsAndConditions';
import {UserExperienceAnalyticsAppHealthApplicationPerformance} from './userExperienceAnalyticsAppHealthApplicationPerformance';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails} from './userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId} from './userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId';
import {UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion} from './userExperienceAnalyticsAppHealthAppPerformanceByOSVersion';
import {UserExperienceAnalyticsAppHealthDeviceModelPerformance} from './userExperienceAnalyticsAppHealthDeviceModelPerformance';
import {UserExperienceAnalyticsAppHealthDevicePerformance} from './userExperienceAnalyticsAppHealthDevicePerformance';
import {UserExperienceAnalyticsAppHealthDevicePerformanceDetails} from './userExperienceAnalyticsAppHealthDevicePerformanceDetails';
import {UserExperienceAnalyticsAppHealthOSVersionPerformance} from './userExperienceAnalyticsAppHealthOSVersionPerformance';
import {UserExperienceAnalyticsBaseline} from './userExperienceAnalyticsBaseline';
import {UserExperienceAnalyticsCategory} from './userExperienceAnalyticsCategory';
import {UserExperienceAnalyticsDevicePerformance} from './userExperienceAnalyticsDevicePerformance';
import {UserExperienceAnalyticsDeviceScores} from './userExperienceAnalyticsDeviceScores';
import {UserExperienceAnalyticsDeviceStartupHistory} from './userExperienceAnalyticsDeviceStartupHistory';
import {UserExperienceAnalyticsDeviceStartupProcess} from './userExperienceAnalyticsDeviceStartupProcess';
import {UserExperienceAnalyticsMetricHistory} from './userExperienceAnalyticsMetricHistory';
import {UserExperienceAnalyticsModelScores} from './userExperienceAnalyticsModelScores';
import {UserExperienceAnalyticsOverview} from './userExperienceAnalyticsOverview';
import {UserExperienceAnalyticsScoreHistory} from './userExperienceAnalyticsScoreHistory';
import {UserExperienceAnalyticsSettings} from './userExperienceAnalyticsSettings';
import {UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric} from './userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric';
import {UserExperienceAnalyticsWorkFromAnywhereMetric} from './userExperienceAnalyticsWorkFromAnywhereMetric';
import {UserExperienceAnalyticsWorkFromAnywhereModelPerformance} from './userExperienceAnalyticsWorkFromAnywhereModelPerformance';
import {WindowsAutopilotDeviceIdentity} from './windowsAutopilotDeviceIdentity';
import {WindowsInformationProtectionAppLearningSummary} from './windowsInformationProtectionAppLearningSummary';
import {WindowsInformationProtectionNetworkLearningSummary} from './windowsInformationProtectionNetworkLearningSummary';
import {WindowsMalwareInformation} from './windowsMalwareInformation';
import {WindowsMalwareOverview} from './windowsMalwareOverview';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeDeviceManagement(writer: SerializationWriter, deviceManagement: DeviceManagement | undefined = {} as DeviceManagement) : void {
        serializeEntity(writer, deviceManagement)
        writer.writeObjectValue<ApplePushNotificationCertificate>("applePushNotificationCertificate", deviceManagement.applePushNotificationCertificate, serializeApplePushNotificationCertificate);
        writer.writeCollectionOfObjectValues<AuditEvent>("auditEvents", deviceManagement.auditEvents, serializeAuditEvent);
        writer.writeCollectionOfObjectValues<ComplianceManagementPartner>("complianceManagementPartners", deviceManagement.complianceManagementPartners, serializeComplianceManagementPartner);
        writer.writeObjectValue<OnPremisesConditionalAccessSettings>("conditionalAccessSettings", deviceManagement.conditionalAccessSettings, serializeOnPremisesConditionalAccessSettings);
        writer.writeCollectionOfObjectValues<DetectedApp>("detectedApps", deviceManagement.detectedApps, serializeDetectedApp);
        writer.writeCollectionOfObjectValues<DeviceCategory>("deviceCategories", deviceManagement.deviceCategories, serializeDeviceCategory);
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicy>("deviceCompliancePolicies", deviceManagement.deviceCompliancePolicies, serializeDeviceCompliancePolicy);
        writer.writeObjectValue<DeviceCompliancePolicyDeviceStateSummary>("deviceCompliancePolicyDeviceStateSummary", deviceManagement.deviceCompliancePolicyDeviceStateSummary, serializeDeviceCompliancePolicyDeviceStateSummary);
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicySettingStateSummary>("deviceCompliancePolicySettingStateSummaries", deviceManagement.deviceCompliancePolicySettingStateSummaries, serializeDeviceCompliancePolicySettingStateSummary);
        writer.writeObjectValue<DeviceConfigurationDeviceStateSummary>("deviceConfigurationDeviceStateSummaries", deviceManagement.deviceConfigurationDeviceStateSummaries, serializeDeviceConfigurationDeviceStateSummary);
        writer.writeCollectionOfObjectValues<DeviceConfiguration>("deviceConfigurations", deviceManagement.deviceConfigurations, serializeDeviceConfiguration);
        writer.writeCollectionOfObjectValues<DeviceEnrollmentConfiguration>("deviceEnrollmentConfigurations", deviceManagement.deviceEnrollmentConfigurations, serializeDeviceEnrollmentConfiguration);
        writer.writeCollectionOfObjectValues<DeviceManagementPartner>("deviceManagementPartners", deviceManagement.deviceManagementPartners, serializeDeviceManagementPartner);
        writer.writeObjectValue<DeviceProtectionOverview>("deviceProtectionOverview", deviceManagement.deviceProtectionOverview, serializeDeviceProtectionOverview);
        writer.writeCollectionOfObjectValues<DeviceManagementExchangeConnector>("exchangeConnectors", deviceManagement.exchangeConnectors, serializeDeviceManagementExchangeConnector);
        writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>("importedWindowsAutopilotDeviceIdentities", deviceManagement.importedWindowsAutopilotDeviceIdentities, serializeImportedWindowsAutopilotDeviceIdentity);
        writer.writeGuidValue("intuneAccountId", deviceManagement.intuneAccountId);
        writer.writeObjectValue<IntuneBrand>("intuneBrand", deviceManagement.intuneBrand, serializeIntuneBrand);
        writer.writeCollectionOfObjectValues<IosUpdateDeviceStatus>("iosUpdateStatuses", deviceManagement.iosUpdateStatuses, serializeIosUpdateDeviceStatus);
        writer.writeObjectValue<ManagedDeviceOverview>("managedDeviceOverview", deviceManagement.managedDeviceOverview, serializeManagedDeviceOverview);
        writer.writeCollectionOfObjectValues<ManagedDevice>("managedDevices", deviceManagement.managedDevices, serializeManagedDevice);
        writer.writeCollectionOfObjectValues<MobileAppTroubleshootingEvent>("mobileAppTroubleshootingEvents", deviceManagement.mobileAppTroubleshootingEvents, serializeMobileAppTroubleshootingEvent);
        writer.writeCollectionOfObjectValues<MobileThreatDefenseConnector>("mobileThreatDefenseConnectors", deviceManagement.mobileThreatDefenseConnectors, serializeMobileThreatDefenseConnector);
        writer.writeCollectionOfObjectValues<NotificationMessageTemplate>("notificationMessageTemplates", deviceManagement.notificationMessageTemplates, serializeNotificationMessageTemplate);
        writer.writeCollectionOfObjectValues<RemoteAssistancePartner>("remoteAssistancePartners", deviceManagement.remoteAssistancePartners, serializeRemoteAssistancePartner);
        writer.writeObjectValue<DeviceManagementReports>("reports", deviceManagement.reports, serializeDeviceManagementReports);
        writer.writeCollectionOfObjectValues<ResourceOperation>("resourceOperations", deviceManagement.resourceOperations, serializeResourceOperation);
        writer.writeCollectionOfObjectValues<DeviceAndAppManagementRoleAssignment>("roleAssignments", deviceManagement.roleAssignments, serializeDeviceAndAppManagementRoleAssignment);
        writer.writeCollectionOfObjectValues<RoleDefinition>("roleDefinitions", deviceManagement.roleDefinitions, serializeRoleDefinition);
        writer.writeObjectValue<DeviceManagementSettings>("settings", deviceManagement.settings, serializeDeviceManagementSettings);
        writer.writeObjectValue<SoftwareUpdateStatusSummary>("softwareUpdateStatusSummary", deviceManagement.softwareUpdateStatusSummary, serializeSoftwareUpdateStatusSummary);
        writer.writeEnumValue<DeviceManagementSubscriptionState>("subscriptionState", deviceManagement.subscriptionState);
        writer.writeCollectionOfObjectValues<TelecomExpenseManagementPartner>("telecomExpenseManagementPartners", deviceManagement.telecomExpenseManagementPartners, serializeTelecomExpenseManagementPartner);
        writer.writeCollectionOfObjectValues<TermsAndConditions>("termsAndConditions", deviceManagement.termsAndConditions, serializeTermsAndConditions);
        writer.writeCollectionOfObjectValues<DeviceManagementTroubleshootingEvent>("troubleshootingEvents", deviceManagement.troubleshootingEvents, serializeDeviceManagementTroubleshootingEvent);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsAppHealthApplicationPerformance>("userExperienceAnalyticsAppHealthApplicationPerformance", deviceManagement.userExperienceAnalyticsAppHealthApplicationPerformance, serializeUserExperienceAnalyticsAppHealthApplicationPerformance);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails>("userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails", deviceManagement.userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails, serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId>("userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId", deviceManagement.userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId, serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion>("userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion", deviceManagement.userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion, serializeUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsAppHealthDeviceModelPerformance>("userExperienceAnalyticsAppHealthDeviceModelPerformance", deviceManagement.userExperienceAnalyticsAppHealthDeviceModelPerformance, serializeUserExperienceAnalyticsAppHealthDeviceModelPerformance);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsAppHealthDevicePerformance>("userExperienceAnalyticsAppHealthDevicePerformance", deviceManagement.userExperienceAnalyticsAppHealthDevicePerformance, serializeUserExperienceAnalyticsAppHealthDevicePerformance);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsAppHealthDevicePerformanceDetails>("userExperienceAnalyticsAppHealthDevicePerformanceDetails", deviceManagement.userExperienceAnalyticsAppHealthDevicePerformanceDetails, serializeUserExperienceAnalyticsAppHealthDevicePerformanceDetails);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsAppHealthOSVersionPerformance>("userExperienceAnalyticsAppHealthOSVersionPerformance", deviceManagement.userExperienceAnalyticsAppHealthOSVersionPerformance, serializeUserExperienceAnalyticsAppHealthOSVersionPerformance);
        writer.writeObjectValue<UserExperienceAnalyticsCategory>("userExperienceAnalyticsAppHealthOverview", deviceManagement.userExperienceAnalyticsAppHealthOverview, serializeUserExperienceAnalyticsCategory);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsBaseline>("userExperienceAnalyticsBaselines", deviceManagement.userExperienceAnalyticsBaselines, serializeUserExperienceAnalyticsBaseline);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsCategory>("userExperienceAnalyticsCategories", deviceManagement.userExperienceAnalyticsCategories, serializeUserExperienceAnalyticsCategory);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsDevicePerformance>("userExperienceAnalyticsDevicePerformance", deviceManagement.userExperienceAnalyticsDevicePerformance, serializeUserExperienceAnalyticsDevicePerformance);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsDeviceScores>("userExperienceAnalyticsDeviceScores", deviceManagement.userExperienceAnalyticsDeviceScores, serializeUserExperienceAnalyticsDeviceScores);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsDeviceStartupHistory>("userExperienceAnalyticsDeviceStartupHistory", deviceManagement.userExperienceAnalyticsDeviceStartupHistory, serializeUserExperienceAnalyticsDeviceStartupHistory);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsDeviceStartupProcess>("userExperienceAnalyticsDeviceStartupProcesses", deviceManagement.userExperienceAnalyticsDeviceStartupProcesses, serializeUserExperienceAnalyticsDeviceStartupProcess);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsMetricHistory>("userExperienceAnalyticsMetricHistory", deviceManagement.userExperienceAnalyticsMetricHistory, serializeUserExperienceAnalyticsMetricHistory);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsModelScores>("userExperienceAnalyticsModelScores", deviceManagement.userExperienceAnalyticsModelScores, serializeUserExperienceAnalyticsModelScores);
        writer.writeObjectValue<UserExperienceAnalyticsOverview>("userExperienceAnalyticsOverview", deviceManagement.userExperienceAnalyticsOverview, serializeUserExperienceAnalyticsOverview);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsScoreHistory>("userExperienceAnalyticsScoreHistory", deviceManagement.userExperienceAnalyticsScoreHistory, serializeUserExperienceAnalyticsScoreHistory);
        writer.writeObjectValue<UserExperienceAnalyticsSettings>("userExperienceAnalyticsSettings", deviceManagement.userExperienceAnalyticsSettings, serializeUserExperienceAnalyticsSettings);
        writer.writeObjectValue<UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric>("userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric", deviceManagement.userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric, serializeUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsWorkFromAnywhereMetric>("userExperienceAnalyticsWorkFromAnywhereMetrics", deviceManagement.userExperienceAnalyticsWorkFromAnywhereMetrics, serializeUserExperienceAnalyticsWorkFromAnywhereMetric);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsWorkFromAnywhereModelPerformance>("userExperienceAnalyticsWorkFromAnywhereModelPerformance", deviceManagement.userExperienceAnalyticsWorkFromAnywhereModelPerformance, serializeUserExperienceAnalyticsWorkFromAnywhereModelPerformance);
        writer.writeCollectionOfObjectValues<WindowsAutopilotDeviceIdentity>("windowsAutopilotDeviceIdentities", deviceManagement.windowsAutopilotDeviceIdentities, serializeWindowsAutopilotDeviceIdentity);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppLearningSummary>("windowsInformationProtectionAppLearningSummaries", deviceManagement.windowsInformationProtectionAppLearningSummaries, serializeWindowsInformationProtectionAppLearningSummary);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionNetworkLearningSummary>("windowsInformationProtectionNetworkLearningSummaries", deviceManagement.windowsInformationProtectionNetworkLearningSummaries, serializeWindowsInformationProtectionNetworkLearningSummary);
        writer.writeCollectionOfObjectValues<WindowsMalwareInformation>("windowsMalwareInformation", deviceManagement.windowsMalwareInformation, serializeWindowsMalwareInformation);
        writer.writeObjectValue<WindowsMalwareOverview>("windowsMalwareOverview", deviceManagement.windowsMalwareOverview, serializeWindowsMalwareOverview);
}
