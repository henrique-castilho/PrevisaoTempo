import React, { useEffect, useState } from 'react'
import axios from 'axios'
import striptags from 'striptags'

const Busca = ({ BuscaFeita }) => {
    const [termoDeBusca, setTermoDeBusca] = useState('São Paulo')

    useEffect(() => {
        if (termoDeBusca.length < 3) {
            return
        }

        const fazerBusca = async () => {
            try {
                const response = await axios.get('http://localhost:3001/buscar', {
                    params: { query: termoDeBusca }
                })

                const dadosTratados = response.data.map(item => ({
                    minima: striptags(item.minima.toString()),
                    maxima: striptags(item.maxima.toString()),
                    umidade: striptags(item.umidade.toString()),
                    icone: striptags(item.icone),
                    descricao: striptags(item.descricao)
                }))
                console.log(dadosTratados)
                BuscaFeita(dadosTratados)

            } catch (error) {
                console.error('Erro na busca:', error)
            }
        }

        const timeoutID = setTimeout(() => {
            fazerBusca()
        }, 2000)
        return () => {
            clearTimeout(timeoutID)
        }
    }, [termoDeBusca])

    return (
        <div className='flex justify-content-center mt-4'>
            <input
                type="text"
                value={termoDeBusca}
                onChange={(e) => setTermoDeBusca(e.target.value)}
                placeholder='Digite uma cidade'
                className='p-2 rounded shadow-md text-center text-lg'>
            </input>
        </div>
    )
}

export default Busca;