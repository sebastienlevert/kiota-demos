import {AppListItem} from './appListItem';
import {AppListType} from './appListType';
import {IosGeneralDeviceConfiguration} from './iosGeneralDeviceConfiguration';
import {IosNetworkUsageRule} from './iosNetworkUsageRule';
import {MediaContentRatingAustralia} from './mediaContentRatingAustralia';
import {MediaContentRatingCanada} from './mediaContentRatingCanada';
import {MediaContentRatingFrance} from './mediaContentRatingFrance';
import {MediaContentRatingGermany} from './mediaContentRatingGermany';
import {MediaContentRatingIreland} from './mediaContentRatingIreland';
import {MediaContentRatingJapan} from './mediaContentRatingJapan';
import {MediaContentRatingNewZealand} from './mediaContentRatingNewZealand';
import {MediaContentRatingUnitedKingdom} from './mediaContentRatingUnitedKingdom';
import {MediaContentRatingUnitedStates} from './mediaContentRatingUnitedStates';
import {RatingAppsType} from './ratingAppsType';
import {RequiredPasswordType} from './requiredPasswordType';
import {serializeAppListItem} from './serializeAppListItem';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {serializeIosNetworkUsageRule} from './serializeIosNetworkUsageRule';
import {serializeMediaContentRatingAustralia} from './serializeMediaContentRatingAustralia';
import {serializeMediaContentRatingCanada} from './serializeMediaContentRatingCanada';
import {serializeMediaContentRatingFrance} from './serializeMediaContentRatingFrance';
import {serializeMediaContentRatingGermany} from './serializeMediaContentRatingGermany';
import {serializeMediaContentRatingIreland} from './serializeMediaContentRatingIreland';
import {serializeMediaContentRatingJapan} from './serializeMediaContentRatingJapan';
import {serializeMediaContentRatingNewZealand} from './serializeMediaContentRatingNewZealand';
import {serializeMediaContentRatingUnitedKingdom} from './serializeMediaContentRatingUnitedKingdom';
import {serializeMediaContentRatingUnitedStates} from './serializeMediaContentRatingUnitedStates';
import {WebBrowserCookieSettings} from './webBrowserCookieSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosGeneralDeviceConfiguration(writer: SerializationWriter, iosGeneralDeviceConfiguration: IosGeneralDeviceConfiguration | undefined = {} as IosGeneralDeviceConfiguration) : void {
        serializeDeviceConfiguration(writer, iosGeneralDeviceConfiguration)
        writer.writeBooleanValue("accountBlockModification", iosGeneralDeviceConfiguration.accountBlockModification);
        writer.writeBooleanValue("activationLockAllowWhenSupervised", iosGeneralDeviceConfiguration.activationLockAllowWhenSupervised);
        writer.writeBooleanValue("airDropBlocked", iosGeneralDeviceConfiguration.airDropBlocked);
        writer.writeBooleanValue("airDropForceUnmanagedDropTarget", iosGeneralDeviceConfiguration.airDropForceUnmanagedDropTarget);
        writer.writeBooleanValue("airPlayForcePairingPasswordForOutgoingRequests", iosGeneralDeviceConfiguration.airPlayForcePairingPasswordForOutgoingRequests);
        writer.writeBooleanValue("appleNewsBlocked", iosGeneralDeviceConfiguration.appleNewsBlocked);
        writer.writeBooleanValue("appleWatchBlockPairing", iosGeneralDeviceConfiguration.appleWatchBlockPairing);
        writer.writeBooleanValue("appleWatchForceWristDetection", iosGeneralDeviceConfiguration.appleWatchForceWristDetection);
        writer.writeCollectionOfObjectValues<AppListItem>("appsSingleAppModeList", iosGeneralDeviceConfiguration.appsSingleAppModeList, serializeAppListItem);
        writer.writeBooleanValue("appStoreBlockAutomaticDownloads", iosGeneralDeviceConfiguration.appStoreBlockAutomaticDownloads);
        writer.writeBooleanValue("appStoreBlocked", iosGeneralDeviceConfiguration.appStoreBlocked);
        writer.writeBooleanValue("appStoreBlockInAppPurchases", iosGeneralDeviceConfiguration.appStoreBlockInAppPurchases);
        writer.writeBooleanValue("appStoreBlockUIAppInstallation", iosGeneralDeviceConfiguration.appStoreBlockUIAppInstallation);
        writer.writeBooleanValue("appStoreRequirePassword", iosGeneralDeviceConfiguration.appStoreRequirePassword);
        writer.writeCollectionOfObjectValues<AppListItem>("appsVisibilityList", iosGeneralDeviceConfiguration.appsVisibilityList, serializeAppListItem);
        writer.writeEnumValue<AppListType>("appsVisibilityListType", iosGeneralDeviceConfiguration.appsVisibilityListType);
        writer.writeBooleanValue("bluetoothBlockModification", iosGeneralDeviceConfiguration.bluetoothBlockModification);
        writer.writeBooleanValue("cameraBlocked", iosGeneralDeviceConfiguration.cameraBlocked);
        writer.writeBooleanValue("cellularBlockDataRoaming", iosGeneralDeviceConfiguration.cellularBlockDataRoaming);
        writer.writeBooleanValue("cellularBlockGlobalBackgroundFetchWhileRoaming", iosGeneralDeviceConfiguration.cellularBlockGlobalBackgroundFetchWhileRoaming);
        writer.writeBooleanValue("cellularBlockPerAppDataModification", iosGeneralDeviceConfiguration.cellularBlockPerAppDataModification);
        writer.writeBooleanValue("cellularBlockPersonalHotspot", iosGeneralDeviceConfiguration.cellularBlockPersonalHotspot);
        writer.writeBooleanValue("cellularBlockVoiceRoaming", iosGeneralDeviceConfiguration.cellularBlockVoiceRoaming);
        writer.writeBooleanValue("certificatesBlockUntrustedTlsCertificates", iosGeneralDeviceConfiguration.certificatesBlockUntrustedTlsCertificates);
        writer.writeBooleanValue("classroomAppBlockRemoteScreenObservation", iosGeneralDeviceConfiguration.classroomAppBlockRemoteScreenObservation);
        writer.writeBooleanValue("classroomAppForceUnpromptedScreenObservation", iosGeneralDeviceConfiguration.classroomAppForceUnpromptedScreenObservation);
        writer.writeEnumValue<AppListType>("compliantAppListType", iosGeneralDeviceConfiguration.compliantAppListType);
        writer.writeCollectionOfObjectValues<AppListItem>("compliantAppsList", iosGeneralDeviceConfiguration.compliantAppsList, serializeAppListItem);
        writer.writeBooleanValue("configurationProfileBlockChanges", iosGeneralDeviceConfiguration.configurationProfileBlockChanges);
        writer.writeBooleanValue("definitionLookupBlocked", iosGeneralDeviceConfiguration.definitionLookupBlocked);
        writer.writeBooleanValue("deviceBlockEnableRestrictions", iosGeneralDeviceConfiguration.deviceBlockEnableRestrictions);
        writer.writeBooleanValue("deviceBlockEraseContentAndSettings", iosGeneralDeviceConfiguration.deviceBlockEraseContentAndSettings);
        writer.writeBooleanValue("deviceBlockNameModification", iosGeneralDeviceConfiguration.deviceBlockNameModification);
        writer.writeBooleanValue("diagnosticDataBlockSubmission", iosGeneralDeviceConfiguration.diagnosticDataBlockSubmission);
        writer.writeBooleanValue("diagnosticDataBlockSubmissionModification", iosGeneralDeviceConfiguration.diagnosticDataBlockSubmissionModification);
        writer.writeBooleanValue("documentsBlockManagedDocumentsInUnmanagedApps", iosGeneralDeviceConfiguration.documentsBlockManagedDocumentsInUnmanagedApps);
        writer.writeBooleanValue("documentsBlockUnmanagedDocumentsInManagedApps", iosGeneralDeviceConfiguration.documentsBlockUnmanagedDocumentsInManagedApps);
        writer.writeCollectionOfPrimitiveValues<string>("emailInDomainSuffixes", iosGeneralDeviceConfiguration.emailInDomainSuffixes);
        writer.writeBooleanValue("enterpriseAppBlockTrust", iosGeneralDeviceConfiguration.enterpriseAppBlockTrust);
        writer.writeBooleanValue("enterpriseAppBlockTrustModification", iosGeneralDeviceConfiguration.enterpriseAppBlockTrustModification);
        writer.writeBooleanValue("faceTimeBlocked", iosGeneralDeviceConfiguration.faceTimeBlocked);
        writer.writeBooleanValue("findMyFriendsBlocked", iosGeneralDeviceConfiguration.findMyFriendsBlocked);
        writer.writeBooleanValue("gameCenterBlocked", iosGeneralDeviceConfiguration.gameCenterBlocked);
        writer.writeBooleanValue("gamingBlockGameCenterFriends", iosGeneralDeviceConfiguration.gamingBlockGameCenterFriends);
        writer.writeBooleanValue("gamingBlockMultiplayer", iosGeneralDeviceConfiguration.gamingBlockMultiplayer);
        writer.writeBooleanValue("hostPairingBlocked", iosGeneralDeviceConfiguration.hostPairingBlocked);
        writer.writeBooleanValue("iBooksStoreBlocked", iosGeneralDeviceConfiguration.iBooksStoreBlocked);
        writer.writeBooleanValue("iBooksStoreBlockErotica", iosGeneralDeviceConfiguration.iBooksStoreBlockErotica);
        writer.writeBooleanValue("iCloudBlockActivityContinuation", iosGeneralDeviceConfiguration.iCloudBlockActivityContinuation);
        writer.writeBooleanValue("iCloudBlockBackup", iosGeneralDeviceConfiguration.iCloudBlockBackup);
        writer.writeBooleanValue("iCloudBlockDocumentSync", iosGeneralDeviceConfiguration.iCloudBlockDocumentSync);
        writer.writeBooleanValue("iCloudBlockManagedAppsSync", iosGeneralDeviceConfiguration.iCloudBlockManagedAppsSync);
        writer.writeBooleanValue("iCloudBlockPhotoLibrary", iosGeneralDeviceConfiguration.iCloudBlockPhotoLibrary);
        writer.writeBooleanValue("iCloudBlockPhotoStreamSync", iosGeneralDeviceConfiguration.iCloudBlockPhotoStreamSync);
        writer.writeBooleanValue("iCloudBlockSharedPhotoStream", iosGeneralDeviceConfiguration.iCloudBlockSharedPhotoStream);
        writer.writeBooleanValue("iCloudRequireEncryptedBackup", iosGeneralDeviceConfiguration.iCloudRequireEncryptedBackup);
        writer.writeBooleanValue("iTunesBlockExplicitContent", iosGeneralDeviceConfiguration.iTunesBlockExplicitContent);
        writer.writeBooleanValue("iTunesBlockMusicService", iosGeneralDeviceConfiguration.iTunesBlockMusicService);
        writer.writeBooleanValue("iTunesBlockRadio", iosGeneralDeviceConfiguration.iTunesBlockRadio);
        writer.writeBooleanValue("keyboardBlockAutoCorrect", iosGeneralDeviceConfiguration.keyboardBlockAutoCorrect);
        writer.writeBooleanValue("keyboardBlockDictation", iosGeneralDeviceConfiguration.keyboardBlockDictation);
        writer.writeBooleanValue("keyboardBlockPredictive", iosGeneralDeviceConfiguration.keyboardBlockPredictive);
        writer.writeBooleanValue("keyboardBlockShortcuts", iosGeneralDeviceConfiguration.keyboardBlockShortcuts);
        writer.writeBooleanValue("keyboardBlockSpellCheck", iosGeneralDeviceConfiguration.keyboardBlockSpellCheck);
        writer.writeBooleanValue("kioskModeAllowAssistiveSpeak", iosGeneralDeviceConfiguration.kioskModeAllowAssistiveSpeak);
        writer.writeBooleanValue("kioskModeAllowAssistiveTouchSettings", iosGeneralDeviceConfiguration.kioskModeAllowAssistiveTouchSettings);
        writer.writeBooleanValue("kioskModeAllowAutoLock", iosGeneralDeviceConfiguration.kioskModeAllowAutoLock);
        writer.writeBooleanValue("kioskModeAllowColorInversionSettings", iosGeneralDeviceConfiguration.kioskModeAllowColorInversionSettings);
        writer.writeBooleanValue("kioskModeAllowRingerSwitch", iosGeneralDeviceConfiguration.kioskModeAllowRingerSwitch);
        writer.writeBooleanValue("kioskModeAllowScreenRotation", iosGeneralDeviceConfiguration.kioskModeAllowScreenRotation);
        writer.writeBooleanValue("kioskModeAllowSleepButton", iosGeneralDeviceConfiguration.kioskModeAllowSleepButton);
        writer.writeBooleanValue("kioskModeAllowTouchscreen", iosGeneralDeviceConfiguration.kioskModeAllowTouchscreen);
        writer.writeBooleanValue("kioskModeAllowVoiceOverSettings", iosGeneralDeviceConfiguration.kioskModeAllowVoiceOverSettings);
        writer.writeBooleanValue("kioskModeAllowVolumeButtons", iosGeneralDeviceConfiguration.kioskModeAllowVolumeButtons);
        writer.writeBooleanValue("kioskModeAllowZoomSettings", iosGeneralDeviceConfiguration.kioskModeAllowZoomSettings);
        writer.writeStringValue("kioskModeAppStoreUrl", iosGeneralDeviceConfiguration.kioskModeAppStoreUrl);
        writer.writeStringValue("kioskModeBuiltInAppId", iosGeneralDeviceConfiguration.kioskModeBuiltInAppId);
        writer.writeStringValue("kioskModeManagedAppId", iosGeneralDeviceConfiguration.kioskModeManagedAppId);
        writer.writeBooleanValue("kioskModeRequireAssistiveTouch", iosGeneralDeviceConfiguration.kioskModeRequireAssistiveTouch);
        writer.writeBooleanValue("kioskModeRequireColorInversion", iosGeneralDeviceConfiguration.kioskModeRequireColorInversion);
        writer.writeBooleanValue("kioskModeRequireMonoAudio", iosGeneralDeviceConfiguration.kioskModeRequireMonoAudio);
        writer.writeBooleanValue("kioskModeRequireVoiceOver", iosGeneralDeviceConfiguration.kioskModeRequireVoiceOver);
        writer.writeBooleanValue("kioskModeRequireZoom", iosGeneralDeviceConfiguration.kioskModeRequireZoom);
        writer.writeBooleanValue("lockScreenBlockControlCenter", iosGeneralDeviceConfiguration.lockScreenBlockControlCenter);
        writer.writeBooleanValue("lockScreenBlockNotificationView", iosGeneralDeviceConfiguration.lockScreenBlockNotificationView);
        writer.writeBooleanValue("lockScreenBlockPassbook", iosGeneralDeviceConfiguration.lockScreenBlockPassbook);
        writer.writeBooleanValue("lockScreenBlockTodayView", iosGeneralDeviceConfiguration.lockScreenBlockTodayView);
        writer.writeEnumValue<RatingAppsType>("mediaContentRatingApps", iosGeneralDeviceConfiguration.mediaContentRatingApps);
        writer.writeObjectValue<MediaContentRatingAustralia>("mediaContentRatingAustralia", iosGeneralDeviceConfiguration.mediaContentRatingAustralia, serializeMediaContentRatingAustralia);
        writer.writeObjectValue<MediaContentRatingCanada>("mediaContentRatingCanada", iosGeneralDeviceConfiguration.mediaContentRatingCanada, serializeMediaContentRatingCanada);
        writer.writeObjectValue<MediaContentRatingFrance>("mediaContentRatingFrance", iosGeneralDeviceConfiguration.mediaContentRatingFrance, serializeMediaContentRatingFrance);
        writer.writeObjectValue<MediaContentRatingGermany>("mediaContentRatingGermany", iosGeneralDeviceConfiguration.mediaContentRatingGermany, serializeMediaContentRatingGermany);
        writer.writeObjectValue<MediaContentRatingIreland>("mediaContentRatingIreland", iosGeneralDeviceConfiguration.mediaContentRatingIreland, serializeMediaContentRatingIreland);
        writer.writeObjectValue<MediaContentRatingJapan>("mediaContentRatingJapan", iosGeneralDeviceConfiguration.mediaContentRatingJapan, serializeMediaContentRatingJapan);
        writer.writeObjectValue<MediaContentRatingNewZealand>("mediaContentRatingNewZealand", iosGeneralDeviceConfiguration.mediaContentRatingNewZealand, serializeMediaContentRatingNewZealand);
        writer.writeObjectValue<MediaContentRatingUnitedKingdom>("mediaContentRatingUnitedKingdom", iosGeneralDeviceConfiguration.mediaContentRatingUnitedKingdom, serializeMediaContentRatingUnitedKingdom);
        writer.writeObjectValue<MediaContentRatingUnitedStates>("mediaContentRatingUnitedStates", iosGeneralDeviceConfiguration.mediaContentRatingUnitedStates, serializeMediaContentRatingUnitedStates);
        writer.writeBooleanValue("messagesBlocked", iosGeneralDeviceConfiguration.messagesBlocked);
        writer.writeCollectionOfObjectValues<IosNetworkUsageRule>("networkUsageRules", iosGeneralDeviceConfiguration.networkUsageRules, serializeIosNetworkUsageRule);
        writer.writeBooleanValue("notificationsBlockSettingsModification", iosGeneralDeviceConfiguration.notificationsBlockSettingsModification);
        writer.writeBooleanValue("passcodeBlockFingerprintModification", iosGeneralDeviceConfiguration.passcodeBlockFingerprintModification);
        writer.writeBooleanValue("passcodeBlockFingerprintUnlock", iosGeneralDeviceConfiguration.passcodeBlockFingerprintUnlock);
        writer.writeBooleanValue("passcodeBlockModification", iosGeneralDeviceConfiguration.passcodeBlockModification);
        writer.writeBooleanValue("passcodeBlockSimple", iosGeneralDeviceConfiguration.passcodeBlockSimple);
        writer.writeNumberValue("passcodeExpirationDays", iosGeneralDeviceConfiguration.passcodeExpirationDays);
        writer.writeNumberValue("passcodeMinimumCharacterSetCount", iosGeneralDeviceConfiguration.passcodeMinimumCharacterSetCount);
        writer.writeNumberValue("passcodeMinimumLength", iosGeneralDeviceConfiguration.passcodeMinimumLength);
        writer.writeNumberValue("passcodeMinutesOfInactivityBeforeLock", iosGeneralDeviceConfiguration.passcodeMinutesOfInactivityBeforeLock);
        writer.writeNumberValue("passcodeMinutesOfInactivityBeforeScreenTimeout", iosGeneralDeviceConfiguration.passcodeMinutesOfInactivityBeforeScreenTimeout);
        writer.writeNumberValue("passcodePreviousPasscodeBlockCount", iosGeneralDeviceConfiguration.passcodePreviousPasscodeBlockCount);
        writer.writeBooleanValue("passcodeRequired", iosGeneralDeviceConfiguration.passcodeRequired);
        writer.writeEnumValue<RequiredPasswordType>("passcodeRequiredType", iosGeneralDeviceConfiguration.passcodeRequiredType);
        writer.writeNumberValue("passcodeSignInFailureCountBeforeWipe", iosGeneralDeviceConfiguration.passcodeSignInFailureCountBeforeWipe);
        writer.writeBooleanValue("podcastsBlocked", iosGeneralDeviceConfiguration.podcastsBlocked);
        writer.writeBooleanValue("safariBlockAutofill", iosGeneralDeviceConfiguration.safariBlockAutofill);
        writer.writeBooleanValue("safariBlocked", iosGeneralDeviceConfiguration.safariBlocked);
        writer.writeBooleanValue("safariBlockJavaScript", iosGeneralDeviceConfiguration.safariBlockJavaScript);
        writer.writeBooleanValue("safariBlockPopups", iosGeneralDeviceConfiguration.safariBlockPopups);
        writer.writeEnumValue<WebBrowserCookieSettings>("safariCookieSettings", iosGeneralDeviceConfiguration.safariCookieSettings);
        writer.writeCollectionOfPrimitiveValues<string>("safariManagedDomains", iosGeneralDeviceConfiguration.safariManagedDomains);
        writer.writeCollectionOfPrimitiveValues<string>("safariPasswordAutoFillDomains", iosGeneralDeviceConfiguration.safariPasswordAutoFillDomains);
        writer.writeBooleanValue("safariRequireFraudWarning", iosGeneralDeviceConfiguration.safariRequireFraudWarning);
        writer.writeBooleanValue("screenCaptureBlocked", iosGeneralDeviceConfiguration.screenCaptureBlocked);
        writer.writeBooleanValue("siriBlocked", iosGeneralDeviceConfiguration.siriBlocked);
        writer.writeBooleanValue("siriBlockedWhenLocked", iosGeneralDeviceConfiguration.siriBlockedWhenLocked);
        writer.writeBooleanValue("siriBlockUserGeneratedContent", iosGeneralDeviceConfiguration.siriBlockUserGeneratedContent);
        writer.writeBooleanValue("siriRequireProfanityFilter", iosGeneralDeviceConfiguration.siriRequireProfanityFilter);
        writer.writeBooleanValue("spotlightBlockInternetResults", iosGeneralDeviceConfiguration.spotlightBlockInternetResults);
        writer.writeBooleanValue("voiceDialingBlocked", iosGeneralDeviceConfiguration.voiceDialingBlocked);
        writer.writeBooleanValue("wallpaperBlockModification", iosGeneralDeviceConfiguration.wallpaperBlockModification);
        writer.writeBooleanValue("wiFiConnectOnlyToConfiguredNetworks", iosGeneralDeviceConfiguration.wiFiConnectOnlyToConfiguredNetworks);
}
