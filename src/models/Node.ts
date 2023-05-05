export type Node = {
    id: string;
    name: string;
    title: string;
    contents?: string[];
    images?: string[];
    routes?: Node[];
}

export type NodeMap = {
    [key: string]: Node;
};
