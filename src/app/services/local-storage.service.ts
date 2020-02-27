export class LocalStorageService {

    public static setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    public static getToken(): string {
        return localStorage.getItem('token');
    }

    public static clearToken(): void {
        localStorage.removeItem('token');
    }

}
