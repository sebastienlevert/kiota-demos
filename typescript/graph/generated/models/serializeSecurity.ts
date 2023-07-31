import {Alert as I01e1970e6bc036441b7d49236397afebefdcb644fa37f5ad05897d52d66e8d4c} from './alert';
import {AttackSimulationRoot} from './attackSimulationRoot';
import {SecureScore} from './secureScore';
import {SecureScoreControlProfile} from './secureScoreControlProfile';
import {Security} from './security';
import {Alert as Iaaa9d8d7fd1957fe5dc78f1ddbe0c2ff62083c02e6cb92cb3773e3f0708f2abe} from './security/alert';
import {CasesRoot} from './security/casesRoot';
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
import {serializeEntity} from './serializeEntity';
import {serializeSecureScore} from './serializeSecureScore';
import {serializeSecureScoreControlProfile} from './serializeSecureScoreControlProfile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecurity(writer: SerializationWriter, security: Security | undefined = {} as Security) : void {
        serializeEntity(writer, security)
        writer.writeCollectionOfObjectValues<I01e1970e6bc036441b7d49236397afebefdcb644fa37f5ad05897d52d66e8d4c>("alerts", security.alerts, I0d2b1fe9fc93e8b2e51cb1535954edba7d7725db3617ee9f86914eae9d6a29a7);
        writer.writeCollectionOfObjectValues<Iaaa9d8d7fd1957fe5dc78f1ddbe0c2ff62083c02e6cb92cb3773e3f0708f2abe>("alerts_v2", security.alerts_v2, I5f2741d5b930180f24315b9ae8c47bdc0bd03ffc5b759fd32ccd20d34321f199);
        writer.writeObjectValue<AttackSimulationRoot>("attackSimulation", security.attackSimulation, serializeAttackSimulationRoot);
        writer.writeObjectValue<CasesRoot>("cases", security.cases, serializeCasesRoot);
        writer.writeCollectionOfObjectValues<Incident>("incidents", security.incidents, serializeIncident);
        writer.writeCollectionOfObjectValues<SecureScoreControlProfile>("secureScoreControlProfiles", security.secureScoreControlProfiles, serializeSecureScoreControlProfile);
        writer.writeCollectionOfObjectValues<SecureScore>("secureScores", security.secureScores, serializeSecureScore);
        writer.writeObjectValue<ThreatIntelligence>("threatIntelligence", security.threatIntelligence, serializeThreatIntelligence);
        writer.writeObjectValue<TriggersRoot>("triggers", security.triggers, serializeTriggersRoot);
        writer.writeObjectValue<TriggerTypesRoot>("triggerTypes", security.triggerTypes, serializeTriggerTypesRoot);
}
