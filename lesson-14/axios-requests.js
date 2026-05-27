import axiosInstance from "./axiosInstance";

export async function getPosts() {
    const resp = await axiosInstance.request({
        method: 'GET',
        url: '/posts',
    })
    return resp;
}

export async function getPostById(id) {
    const resp = await axiosInstance.request({
        method: 'GET',
        url: `/posts/${id}`,
    })
    return resp;
}

export async function createPost(title, body , userId) {
     const resp = await axiosInstance.request({
            method: 'POST',
            url: '/posts',
            data: {
                    title,
                    body,
                    userId
            },
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        return resp;
}

export async function updatePost(id, title, body , userId) {
     const resp = await axiosInstance.request({
            method: 'PUT',
            url: `/posts/${id}`,
            data: {
                    id,
                    title,
                    body,
                    userId
            },
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        return resp;
}

export async function deletePost(id) {
        const resp = await axiosInstance.request({
            method: 'DELETE',
            url: `/posts/${id}`,
        })
        return resp;
}