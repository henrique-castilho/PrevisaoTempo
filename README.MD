# Previsão do Tempo

Aplicação simples para consultar e exibir previsões do tempo. Contém um backend minimalista (proxy/rota de API) em `backend/` e uma interface front-end em React dentro de `PrevisaoTempo/`.

**Funcionalidades**
- **Consulta de cidade:** Permite buscar a previsão do tempo por cidade.
- **Exibição de previsões:** Mostra dados de temperatura, descrição do tempo e ícones.
- **Arquitetura separada:** Backend separado para encapsular a chave da API e frontend em Vite + React.

**Estrutura do projeto**
- **`backend/`**: Código do servidor (Node.js/Express) que faz requisições à API externa.
- **`PrevisaoTempo/`**: Aplicação frontend em React usando Vite.

**Pré-requisitos**
- Node.js 16+ e npm.
- Chave de API do OpenWeatherMap (ou outra API de tempo que preferir).

**Configuração e execução**

1) Backend
- Entre na pasta do backend, instale dependências e rode o servidor:

```bash
cd backend
npm install
node index.js
```

- Variáveis de ambiente (exemplo `.env` na pasta `backend/`):

- **`OPENWEATHER_API_KEY`**: sua chave da API (usada pelo servidor para consultar o serviço de previsão).

2) Frontend (Vite + React)
- Entre na pasta do frontend, instale dependências e execute em modo de desenvolvimento:

```bash
cd PrevisaoTempo
npm install
npm run dev
```

**Uso**
- Abra o frontend (`http://localhost:5173` por padrão com Vite) e utilize o campo de busca para inserir o nome de uma cidade. A aplicação exibirá a previsão retornada pelo backend.

## 👨‍💻 Autores

* **Henrique Castilho**  
	[LinkedIn](https://www.linkedin.com/in/henriquecastilhopires/) | [GitHub](https://github.com/henrique-castilho)

* **Gabriel Dias**  
	[LinkedIn](https://www.linkedin.com/in/gabriel-dias-823790269/) | [GitHub](https://github.com/thediaax)

* **João Victor**  
[GitHub](https://github.com/JoaoVictor121)
