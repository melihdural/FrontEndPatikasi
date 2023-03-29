import axios from "axios"

async function getDataById(id) {
    const { data : user} = await axios(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    
    const { data : post } = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    )
    
    const newData = { user, Posts: post}
    console.log(newData);
}

export default getDataById;