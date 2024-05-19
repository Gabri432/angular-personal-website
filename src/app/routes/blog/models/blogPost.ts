export interface BlogPost {
    id: number,
    title: string,
    description: string,
    author: string,
    topics: string[],
    link: string,
    creationDate?: string,
    lastUpdateDate?: string
}