export function splitIntoChunks(array:string[], chunkSize:number) {
    const result:any = [];

    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        result.push(chunk);
    }

    return result;
}