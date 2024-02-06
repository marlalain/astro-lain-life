import {confirm, input} from 'https://deno.land/x/inquirer/mod.ts';
import "https://deno.land/x/dotenv/load.ts";


const kv = await Deno.openKv("https://api.deno.com/databases/ec5ad8e6-aa41-47a9-ae5a-89d8cf990695/connect")
const content = await input({
  message: 'What is happening?'
})

const wantsImage = await confirm({
  message: 'Attach image?'
})

let imageURL
if (wantsImage) {
  imageURL = await input({
    message: 'Image URL?'
  })
}

kv.set(["posts", crypto.randomUUID()], {
  content: content,
  postedAt: new Date().toISOString(),
  ...(!!imageURL && {imageURL})
})

