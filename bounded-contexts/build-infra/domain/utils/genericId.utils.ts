export const generateUniqueId = (): string => {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}