
export interface ResourceTypeItemRequestBuilderGetQueryParameters {
    /**
     * Positive integer, multiple of 20
     */
    offset?: number | undefined;
    /**
     * Sets the sort order of the results.Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.If you do not specify a sort order, the results will be ordered by publication-date.
     */
    order?: string | undefined;
}
