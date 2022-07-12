import IProject from "./IProject";

export default interface ITask{
    tempoSec: number,
    descTask: string,
    projeto: IProject
}