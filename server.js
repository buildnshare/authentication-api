import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.status(200).send({welcome: 'welcome to authentication api'})
})

app.listen(3030, () => {
    console.log('server running on http://localhost:3030');
})