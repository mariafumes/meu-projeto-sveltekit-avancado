export async function load({ params, fetch }) {
    const id = params.id;

    const [postRes, commentsRes] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    ]);

    const post = await postRes.json();
    const comments = await commentsRes.json();

    return {
        post,
        comments
    };
}