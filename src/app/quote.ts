export class Quote {
    public showDetails:boolean;
    constructor(public id:number, public author:string,public publisher:string,public quoteDesc:string,public date:Date,public likes:number,public dislikes:number){
    this.showDetails=false
    
}

// like(){
//     this.likes++;
// }


dislike(){
    this.dislikes++;
}



}


