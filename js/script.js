const TOKEN = "SEU_TOKEN_AQUI";
const BASE_URL = "https://api.apifipe.com.br";

const marcaSelect = document.getElementById("marca");
const modeloSelect = document.getElementById("modelo");
const anoSelect = document.getElementById("ano");

async function buscarAPI(endpoint) {

    const resposta = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            "Authorization": `Bearer ${TOKEN}`
        }
    });

    if (!resposta.ok) {
        throw new Error("Erro ao consultar a API");
    }

    return await resposta.json();
}

async function carregarMarcas() {

    try {

        const marcas = await buscarAPI("/carros");

        marcas.forEach(marca => {

            const option = document.createElement("option");

            option.value = marca.codMarca;
            option.textContent = marca.nomeMarca;

            marcaSelect.appendChild(option);

        });

        M.FormSelect.init(marcaSelect);

    } catch (erro) {

        console.error("Erro ao carregar marcas:", erro);

    }
}

carregarMarcas();
