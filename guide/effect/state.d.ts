// export interface IState {}[]
interface IItem {
    index: number;
    title: string;
    icon: string;
    href: string;
    desiction: string;
}

export type TState = IItem[];