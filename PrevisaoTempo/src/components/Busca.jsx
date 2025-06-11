import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
                console.log(response.data)
                BuscaFeita(response.data)

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
        <div>
            <input
                type="text"
                value={termoDeBusca}
                onChange={(e) => setTermoDeBusca(e.target.value)}>
            </input>
        </div>
    )   
}

export default Busca;