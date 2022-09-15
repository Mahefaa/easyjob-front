export type Offer = {
    id: number;
    domainName: string;
    mission: string;
    position: string;
    profile: string;
    senderEmail: string;
    location: string;
    status:Status
}
enum Status{
    AVAILABLE,TAKEN
}