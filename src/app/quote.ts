export class Quote {
    public showDetails:boolean;
    constructor(public id:number, public author:string,public publisher:string,public quoteDesc:string,public date:Date){
    this.showDetails=false
    
}
}


