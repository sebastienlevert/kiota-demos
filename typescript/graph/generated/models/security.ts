import {Alert as I01e1970e6bc036441b7d49236397afebefdcb644fa37f5ad05897d52d66e8d4c} from './alert';
import {AttackSimulationRoot} from './attackSimulationRoot';
import {Entity} from './entity';
import {SecureScore} from './secureScore';
import {SecureScoreControlProfile} from './secureScoreControlProfile';
import {Alert as Iaaa9d8d7fd1957fe5dc78f1ddbe0c2ff62083c02e6cb92cb3773e3f0708f2abe} from './security/alert';
import {CasesRoot} from './security/casesRoot';
import {Incident} from './security/incident';
import {ThreatIntelligence} from './security/threatIntelligence';
import {TriggersRoot} from './security/triggersRoot';
import {TriggerTypesRoot} from './security/triggerTypesRoot';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Security extends Entity, Parsable {
    /**
     * The alerts property
     */
    alerts?: I01e1970e6bc036441b7d49236397afebefdcb644fa37f5ad05897d52d66e8d4c[] | undefined;
    /**
     * A collection of alerts in Microsoft 365 Defender.
     */
    alerts_v2?: Iaaa9d8d7fd1957fe5dc78f1ddbe0c2ff62083c02e6cb92cb3773e3f0708f2abe[] | undefined;
    /**
     * The attackSimulation property
     */
    attackSimulation?: AttackSimulationRoot | undefined;
    /**
     * The cases property
     */
    cases?: CasesRoot | undefined;
    /**
     * A collection of incidents in Microsoft 365 Defender, each of which is a set of correlated alerts and associated metadata that reflects the story of an attack.
     */
    incidents?: Incident[] | undefined;
    /**
     * The secureScoreControlProfiles property
     */
    secureScoreControlProfiles?: SecureScoreControlProfile[] | undefined;
    /**
     * The secureScores property
     */
    secureScores?: SecureScore[] | undefined;
    /**
     * The threatIntelligence property
     */
    threatIntelligence?: ThreatIntelligence | undefined;
    /**
     * The triggers property
     */
    triggers?: TriggersRoot | undefined;
    /**
     * The triggerTypes property
     */
    triggerTypes?: TriggerTypesRoot | undefined;
}
