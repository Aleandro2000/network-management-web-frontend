export const setSession = (variable: string, value: string) => {
    sessionStorage.setItem(variable, value);
}

export const getSession = (variable: string) => {
    return sessionStorage.getItem(variable);
}