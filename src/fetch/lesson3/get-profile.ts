export const getProfile = async () => {
    const res = await fetch ('http://localhost:3000/api/lesson3', {
        cache: 'no-store',
        method: 'GET',
    });
    return await res.json();
}