import {Role} from "./Role";

export type User = {
    id: number;
    email: string;
    password: string;
    role: Role;
    joinedInstant: string;
    enabled: boolean;
}
