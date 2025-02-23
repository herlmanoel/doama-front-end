export class DoadoraService {
    private static apiUrl: string;

    static setApiUrl(apiUrl: string): void {
        DoadoraService.apiUrl = apiUrl;
    }

    static async getData(endpoint: string): Promise<any> {
        const url = `${DoadoraService.apiUrl}/${endpoint}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching data from API:', error);
            throw error;
        }
    }
}
