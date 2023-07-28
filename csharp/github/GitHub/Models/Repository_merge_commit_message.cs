namespace GitHubDemo.GitHub.Models {
    /// <summary>The default value for a merge commit message.- `PR_TITLE` - default to the pull request&apos;s title.- `PR_BODY` - default to the pull request&apos;s body.- `BLANK` - default to a blank commit message.</summary>
    public enum Repository_merge_commit_message {
        PR_BODY,
        PR_TITLE,
        BLANK,
    }
}
