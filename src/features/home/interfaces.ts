export interface PostsInterface {
    id: number;
    title: string;
    reaction: number;
    tags: string[];
    userId: number;
}
export interface PaginationInterface {
    limit: number;
    total: number;
    page: number;
}