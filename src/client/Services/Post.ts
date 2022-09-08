export default async function Post(
    url: string,
    body: Record<string, unknown>,
    headers:Record<string, unknown> = {}
    ): Promise<any>{
    try {
        const response: Response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error("Request failed " + response.status + " "+ response.statusText);
        }
        return response.json();
    } catch (e) {
        throw new Error(e as string | undefined);
    }
}
