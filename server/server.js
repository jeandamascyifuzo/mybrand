const express = require('express')
const articlesRouter = require('./routes/articles')
const app = express()


app.set('view engine', 'ejs')

app.use('/articles', articlesRouter)

app.get('/', (req,res)=>{
    const articles =[{
        title:  " software",
        createdAt: new Date(),
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    },
    {
        title:  " software2",
        createdAt: new Date(),
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    }]
    res.render('articles/index', {articles: articles})
})

app.listen(5000)