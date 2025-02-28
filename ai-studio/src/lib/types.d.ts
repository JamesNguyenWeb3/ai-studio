import type { Node } from "svelvet";



interface NodeData {
    id: string;
    label: string;
    description?: string;
    node: Node
}

interface GroupData {
    id: string;
    label: string;
    description?: string;
    nodeList?: NodeData[]
}

interface GraphData {
    id: string;
    label: string;
    description?: string;
    author?: string;
    createdAt?: string;
    updatedAt?: string;
    groupList?: GroupData[]
}