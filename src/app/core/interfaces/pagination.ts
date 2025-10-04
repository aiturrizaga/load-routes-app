export interface Pagination<T> {
    count:   number;
    next:    string;
    prev:    null;
    pages:   number;
    results: T[];
}