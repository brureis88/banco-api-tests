# banco-api-tests

## Objetivo

Automação de testes para a API REST do projeto [`banco-api`](https://github.com/juliodelimas/banco-api), fornecendo uma suíte robusta para validação de funcionalidades, endpoints e fluxos principais do sistema. O foco está em contribuir na confiabilidade, integridade e desempenho da API por meio de testes automatizados e relatórios de fácil consulta.

## Stack Utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework de Testes:** [Mocha](https://mochajs.org/)
- **Assertions:** [Chai](https://www.chaijs.com/)
- **Requisições HTTP:** [Supertest](https://github.com/ladjs/supertest#readme)
- **Relatórios:** [Mochawesome](https://www.npmjs.com/package/mochawesome)

Para mais detalhes sobre cada biblioteca, consulte a seção [Documentação das Dependências](#documentação-das-dependências-utilizadas).

## Estrutura de Diretórios

A estrutura básica do projeto é a seguinte:

```
banco-api-tests/
├── fixtures/        # Dados e payloads para os testes
├── helpers/         # Funções auxiliares de suporte aos testes
├── test/            # Arquivos de teste automatizados
├── .env       	  # Arquivo para configuração da variável BASE_URL
├── .gitignore       # Ignora arquivos e pastas sensíveis
├── package.json     # Gerenciador de dependências e scripts
├── package-lock.json
└── README.md        # Documentação do projeto
```

## Configuração do Ambiente

Antes de executar os testes, é necessário criar um arquivo `.env` na raiz do projeto com a seguinte configuração:

```
BASE_URL=http://localhost:3000
```

> **Observação:**  
> Defina o `BASE_URL` com o endereço da API do projeto [`banco-api`](https://github.com/juliodelimas/banco-api).  

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/brureis88/banco-api-tests.git
   cd banco-api-tests
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure o arquivo `.env`** conforme indicado acima.

## Como Executar os Testes

### Executar todos os testes

```bash
npm test
```
ou, diretamente pelo Mocha:
```bash
npx mocha
```

### Gerar Relatório HTML com Mochawesome

Após executar os testes, um relatório em HTML será gerado no diretório `mochawesome-report`.

- Para gerar e abrir automaticamente o relatório:
  ```bash
  npx mocha --reporter mochawesome
  ```

- O arquivo de relatório estará disponível em:
  ```
  mochawesome-report/mochawesome.html
  ```

## Documentação das Dependências Utilizadas

- [Mocha](https://mochajs.org/) {target="_blank"} — Test runner   
- [Chai](https://www.chaijs.com/) {target="_blank"} — Assertions  
- [Supertest](https://github.com/ladjs/supertest#readme) {target="_blank"} — Testes HTTP/REST  
- [Mochawesome](https://www.npmjs.com/package/mochawesome) {target="_blank"} — Relatórios de teste em HTML  

## Contribuição

Pull requests são bem-vindos! Para grandes mudanças, abra uma issue antes para discutir o que você gostaria de mudar.

---

**Contatos:**  
Para dúvidas, sugestões ou contribuições, utilize a área de [issues do repositório](https://github.com/brureis88/banco-api-tests/issues).
```
