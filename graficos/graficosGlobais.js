const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
async function visualizarInformacoesGlobais() {
        const res = await fetch(url)
        const dados = await res.json()
        const paragrafo = document.createElement('p')

        const pessoasConectadas = (dados.total_pessoas_conectadas) / 1e9;
        const pessoasNoMundo = dados.total_pessoas_mundo / 1e9;
        const horas = parseInt(dados.tempo_medio); 
        const minutos = Math.round((dados.tempo_medio - horas)*60);
        const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo)*100).toFixed(2)

        paragrafo.classList.add('graficos-container_text')
        paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo}bilhões</span>
        de pessoas que aproximadamente <span> ${pessoasConectadas}bilhões</span> estão 
        conectadas em alguma rede social e passam em média <span>${horas}horas</span> e <span>${minutos}minutos</span> horas conectadas. <br> Isso significa que aproximadamente <span>${porcentagemConectada}% </span>
        de pessoas estão conectadas em alguma rede social.`
        const container = document.getElementById('graficos-container')
        container.appendChild(paragrafo)
    }

    visualizarInformacoesGlobais()