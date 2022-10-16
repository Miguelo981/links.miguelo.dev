export interface LinkGroup {
    title: string;
    links: LinkTree[];
}

export interface LinkTree {
    title: string;
    link: string;
    icon?: string;
}