import React from 'react'
import { Card } from 'primereact/card'

const ExibirPrevisoes = ({ dados }) => {
  return (
    <div className='flex flex-wrap justify-content-center gap-3 mt-4 mb-4'>
      {dados.map((item, index) => (
        <Card
          key={index}
          title={item.descricao}
          className='w-12 sm:w-4 md:w-3 lg:w-2 text-center mt-3'>
          <img
            src={`https://openweathermap.org/img/wn/${item.icone}@2x.png`}
            alt={item.descricao}
            className='mb-3 mx-auto'>
          </img>
          <p><strong>Mínima:</strong> {item.minima}°C</p>
          <p><strong>Máxima:</strong> {item.maxima}°C</p>
          <p><strong>Umidade:</strong> {item.umidade}%</p>
        </Card>
      ))}
    </div>
  )
}

export default ExibirPrevisoes
