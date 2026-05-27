import { getPosts, getPostById, createPost, updatePost, deletePost } from '../axios-requests.js';

test('Get all posts - success basic scenario', async () => {
        const resp = await getPosts();
        expect(resp.status).toBe(200);
        expect(resp.data).toHaveLength(100);
    })

test('Get post by id - success basic scenario', async () => {
        const resp = await getPostById(1);
        expect(resp.status).toBe(200);
        expect(resp.data).toMatchObject({
            userId: 1,
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        })
    });

test('Get post by id - not found scenario', async () => {
        const resp = await getPostById(999);
        expect(resp.status).toBe(404);
    });

test('Create post - success basic scenario', async () => {
        const resp = await createPost('title', 'body', 1);
        expect(resp.status).toBe(201);
        expect(resp.data).toMatchObject({
            title: 'title',
            body: 'body',
            userId: 1,
            id: 101
        })
    });

test('Update post - success basic scenario', async () => {
        const resp = await updatePost(1, 'updated title', 'updated body', 1);
        expect(resp.status).toBe(200);
        expect(resp.data).toMatchObject({
            id: 1,
            title: 'updated title',
            body: 'updated body',
            userId: 1,
        })
    });

test('Delete post - success basic scenario', async () => {
        const resp = await deletePost(1);
        expect(resp.status).toBe(200);
        expect(resp.data).toEqual({});
    });