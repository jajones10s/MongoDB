export interface Config {
    routes: Array<{ feature: 'Users' | 'App', urls: Array<{ endPoint: string, params: Array<string> }> }>;
}
