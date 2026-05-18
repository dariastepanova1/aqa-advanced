class UserGetter {
    async getUser(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return await response.json();
};
}

export default UserGetter;