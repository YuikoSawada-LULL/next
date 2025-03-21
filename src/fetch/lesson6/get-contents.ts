export const getContents = async () => {
    const res = await fetch ('http://localhost:3000/api/lesson6/lesson6-1', {
        cache: 'no-store',
        method: 'GET',
    });
    return await res.json();
}