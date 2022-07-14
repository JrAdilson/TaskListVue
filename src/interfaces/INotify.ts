export enum TypeNotify{
    SUCCESS,
    FAIL,
    ATTENTION
}    
export interface INotify{
    title: string
    text: string
    type: TypeNotify
    id: number
}