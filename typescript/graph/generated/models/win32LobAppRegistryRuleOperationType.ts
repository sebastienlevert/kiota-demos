/**
 * Contains all supported registry data detection type.
 */
export enum Win32LobAppRegistryRuleOperationType {
    /** Not configured. */
    NotConfigured = "notConfigured",
    /** The specified registry key or value exists. */
    Exists = "exists",
    /** The specified registry key or value does not exist. */
    DoesNotExist = "doesNotExist",
    /** String value type. */
    String = "string",
    /** Integer value type. */
    Integer = "integer",
    /** Version value type. */
    Version = "version",
}
