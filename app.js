const express = require('express')
const app = express();
const PORT = 3000;
const axios = require('axios')
const env = require('dotenv').config()
const TOKEN = process.env.TOKEN
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
app.get('/user-info', async (req,res)=>{
    try{
        const userResponse = await axios.get('https://api.github.com/user', {
            headers: {
                Authorization: `token ${TOKEN}`
            }
        });
        const reposResponce = await axios.get('https://api.github.com/user/repos', {
            headers: {
                Authorization: `token ${TOKEN}`
            },
            params: {
                visability: 'private',
            }
        })
        res.json({
            user: userResponse.data,
            repos: reposResponce.data
        })
    }catch(err){
        console.log(err)
    }
})
app.listen(PORT, ()=>{
    console.log(`Sever works on PORT: ${PORT}`)
})