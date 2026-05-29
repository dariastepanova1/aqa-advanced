import axiosInstance from "./axiosInstance";

export async function getPosts() {
    return axiosInstance.get(`/posts`);
}

export async function getPostById(id) {
    return axiosInstance.get(`/posts/${id}`);
}

export async function createPost(title, body , userId) {
    return axiosInstance.post(`/posts`, {
        title,
        body,
        userId
    }, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
}

export async function updatePost(id, title, body , userId) {    
    return axiosInstance.put(`/posts/${id}`, {
        id,
        title,
        body,
        userId
    }, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
}

export async function deletePost(id) {    
    return axiosInstance.delete(`/posts/${id}`);
}