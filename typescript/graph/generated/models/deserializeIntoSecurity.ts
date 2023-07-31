import {Alert as I01e1970e6bc036441b7d49236397afebefdcb644fa37f5ad05897d52d66e8d4c} from './alert';
import {AttackSimulationRoot} from './attackSimulationRoot';
import {createAlertFromDiscriminatorValue as Ia39e9cff1a78cfc5ed8d27c6e2df2e148f84d336bbae58ace9bcc2a86aaa39b8} from './createAlertFromDiscriminatorValue';
import {createAttackSimulationRootFromDiscriminatorValue} from './createAttackSimulationRootFromDiscriminatorValue';
import {createSecureScoreControlProfileFromDiscriminatorValue} from './createSecureScoreControlProfileFromDiscriminatorValue';
import {createSecureScoreFromDiscriminatorValue} from './createSecureScoreFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {SecureScore} from './secureScore';
import {SecureScoreControlProfile} from './secureScoreControlProfile';
import {Security} from './security';
import {Alert as Iaaa9d8d7fd1957fe5dc78f1ddbe0c2ff62083c02e6cb92cb3773e3f0708f2abe} from './security/alert';
import {CasesRoot} from './security/casesRoot';
import {createAlertFromDiscriminatorValue as I24e2fee248295267e27df4937a2cfe76a024392db769a2f2b619183359639c2e} from './security/createAlertFromDiscriminatorValue';
import {createCasesRootFromDiscriminatorValue} from './security/createCasesRootFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './security/createIncidentFromDiscriminatorValue';
import {createThreatIntelligenceFromDiscriminatorValue} from './security/createThreatIntelligenceFromDiscriminatorValue';
import {createTriggersRootFromDiscriminatorValue} from './security/createTriggersRootFromDiscriminatorValue';
import {createTriggerTypesRootFromDiscriminatorValue} from './security/createTriggerTypesRootFromDiscriminatorValue';
import {Incident} from './security/incident';
import {serializeAlert as I5f2741d5b930180f24315b9ae8c47bdc0bd03ffc5b759fd32ccd20d34321f199} from './security/serializeAlert';
import {serializeCasesRoot} from './security/serializeCasesRoot';
import {serializeIncident} from './security/serializeIncident';
import {serializeThreatIntelligence} from './security/serializeThreatIntelligence';
import {serializeTriggersRoot} from './security/serializeTriggersRoot';
import {serializeTriggerTypesRoot} from './security/serializeTriggerTypesRoot';
import {ThreatIntelligence} from './security/threatIntelligence';
import {TriggersRoot} from './security/triggersRoot';
import {TriggerTypesRoot} from './security/triggerTypesRoot';
import {serializeAlert as I0d2b1fe9fc93e8b2e51cb1535954edba7d7725db3617ee9f86914eae9d6a29a7} from './serializeAlert';
import {serializeAttackSimulationRoot} from './serializeAttackSimulationRoot';
import {serializeSecureScore} from './serializeSecureScore';
import {serializeSecureScoreControlProfile} from './serializeSecureScoreControlProfile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurity(security: Security | undefined = {} as Security) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(security),
        "alerts": n => { security.alerts = n.getCollectionOfObjectValues<I01e1970e6bc036441b7d49236397afebefdcb644fa37f5ad05897d52d66e8d4c>(Ia39e9cff1a78cfc5ed8d27c6e2df2e148f84d336bbae58ace9bcc2a86aaa39b8); },
        "alerts_v2": n => { security.alerts_v2 = n.getCollectionOfObjectValues<Iaaa9d8d7fd1957fe5dc78f1ddbe0c2ff62083c02e6cb92cb3773e3f0708f2abe>(I24e2fee248295267e27df4937a2cfe76a024392db769a2f2b619183359639c2e); },
        "attackSimulation": n => { security.attackSimulation = n.getObjectValue<AttackSimulationRoot>(createAttackSimulationRootFromDiscriminatorValue); },
        "cases": n => { security.cases = n.getObjectValue<CasesRoot>(createCasesRootFromDiscriminatorValue); },
        "incidents": n => { security.incidents = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
        "secureScoreControlProfiles": n => { security.secureScoreControlProfiles = n.getCollectionOfObjectValues<SecureScoreControlProfile>(createSecureScoreControlProfileFromDiscriminatorValue); },
        "secureScores": n => { security.secureScores = n.getCollectionOfObjectValues<SecureScore>(createSecureScoreFromDiscriminatorValue); },
        "threatIntelligence": n => { security.threatIntelligence = n.getObjectValue<ThreatIntelligence>(createThreatIntelligenceFromDiscriminatorValue); },
        "triggers": n => { security.triggers = n.getObjectValue<TriggersRoot>(createTriggersRootFromDiscriminatorValue); },
        "triggerTypes": n => { security.triggerTypes = n.getObjectValue<TriggerTypesRoot>(createTriggerTypesRootFromDiscriminatorValue); },
    }
}
