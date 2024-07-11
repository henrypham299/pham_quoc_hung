export const GlobalConfig: Record<string, string> = {
    secretKey: process.env.SECRET_KEY ?? 'your_jwt_secret_key',
}
