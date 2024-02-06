import "https://deno.land/x/dotenv/load.ts";


const kv = await Deno.openKv("https://api.deno.com/databases/ec5ad8e6-aa41-47a9-ae5a-89d8cf990695/connect");
let posts = [];

for await (const post of kv.list({prefix: ["posts"]})) {
  posts.push({
    id: post.key.at(1),
    content: post.value.content,
    postedAt: new Date(post.value.postedAt),
    ...(post.value.imageURL && {imageURL: post.value.imageURL})
  })
}

await Deno.writeTextFile("./src/data/posts.json", JSON.stringify(posts))