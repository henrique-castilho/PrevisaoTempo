require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

const weatherClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  params: {
    appid: process.env.KEY_OPENWEATHER,
    units: 'metric',
    lang: 'pt_br'
  }
})


app.get('/buscar', async (req, res) => {
  try {
    const query = req.query.query

    const result = await weatherClient.get('forecast', {
      params: { q: query }
    })

    const previsaoDoTempo = result.data.list.map(item => ({
      minima: item.main.temp_min,
      maxima: item.main.temp_max,
      umidade: item.main.humidity,
      icone: item.weather[0].icon,
      descricao: item.weather[0].description
    }))

    res.json(previsaoDoTempo)
  } catch(error){
    console.log('Algo de errado aconteceu', error);
    res.status(404).json({ mensagem: 'Cidade não encontrada' })
}
})


const port = 3001
app.listen(port, () => console.log(`A porta é ${port}.`))