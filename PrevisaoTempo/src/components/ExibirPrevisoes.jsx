import React from 'react'
import { Card } from 'primereact/card'

const ExibirPrevisoes = ({ dados }) => {
  return (
    <div>
      {dados.map((item, index) => (
        <Card
          key={index}
          title={item.descricao}>
          <img
            src={`https://openweathermap.org/img/wn/${item.icone}@2x.png`}
            alt={item.descricao}/>
          <p><strong>Mínima:</strong> {item.minima}°C</p>
          <p><strong>Máxima:</strong> {item.maxima}°C</p>
          <p><strong>Umidade:</strong> {item.umidade}%</p>
        </Card>
      ))}
    </div>
  )
}

export default ExibirPrevisoes
