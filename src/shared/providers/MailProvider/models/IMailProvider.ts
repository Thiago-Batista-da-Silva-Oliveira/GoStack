export default interface IMainProvider{
    sendMail(to: string, body:string):Promise<void>
}
