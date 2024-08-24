export const GET = async ({request, url}) => {
    const res = await fetch('https://www.alchemistlowkey.tech/users');
    const data = await res.json();

    return new Response(JSON.stringify(data), {status: 200});
}
