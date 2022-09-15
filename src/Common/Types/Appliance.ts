import {Offer} from "./Offer";
import {User} from "./User";

export type Appliance = {
    id:number;
    offerId:number;
    offerRef:string;
    userEmail:string;
    status:Status;
    creationInstant:string;
}
enum Status{
    ONGOING,APPROVED,REJECTED
}