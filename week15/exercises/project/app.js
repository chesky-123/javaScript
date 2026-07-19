import { client } from "./db.js";



async function createAuthor(authorName, age) {
    const { data, error } = await client.from("author").insert({ authorName, age }).select();
    if (error) return console.log(error);
    return data
};


async function getAllAuthors() {
    const { data, error } = await client.from("author").select();
    if (error) return console.log(error);
    return data;
};


async function updateAuthor(id, newData) {
    const { data, error } = (await client.from("author").update(newData).eq("id", id).select());
    if (error) return console.log(error);
    return data;
};


async function deleteAuthor(id) {
    const { data, error } = await client.from("author").delete().eq("id", id).select();
    if (error) return console.log(error);
    return data;
};


async function createPost(postData) {
    const { data, error } = await client.from("posts").insert(postData).select();
    if (error) return console.log(error);
    return data;
};

async function getAllPosts() {
    const { data, error } = await client.from("posts").select("*,author(*)");
    if (error) return console.log(error);
    return data;
};


async function updatePost(id,newData) {
    const {data,error} = await client.from("posts").update(newData).eq("id",id).select();
    if (error) return console.log(error);
    return data;
};

async function deletePost(id) {
    const {data,error} = await client.from("posts").delete().eq("id",id).select();
    if (error) return console.log(error);
    return data;
};


console.log(await updatePost(2,{title:"my life",a_id:1}));

console.log(await deletePost(9));

console.log(await createPost({ title: "english", a_id: 2 }));

console.log(await getAllPosts());

console.log(await deleteAuthor(3));

console.log(await updateAuthor(2,{authorName:"moshe"}));

console.log(await getAllAuthors());

console.log(await createAuthor("avi",27));





