namespace GitHubDemo.GitHub.Models {
    /// <summary>The baseline permission that all organization members have on this project. Only present if owner is an organization.</summary>
    public enum Project_organization_permission {
        Read,
        Write,
        Admin,
        None,
    }
}
