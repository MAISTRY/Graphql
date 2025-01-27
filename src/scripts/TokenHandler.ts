export function setToken(token: string): void {
    localStorage.setItem('token', token);
}

export function getStoredToken(): string | null {
    return localStorage.getItem('token');
}

export function removeToken(): void {
    localStorage.removeItem('token');
}
