export interface User {
    email: string;
    role: UserRoles;
}

export enum UserRoles {
    ADMIN = 'admin'
}

export interface AuthCredentials {
    email: string;
    password: string;
}
