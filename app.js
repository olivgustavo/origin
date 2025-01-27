let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado");
        input.value = "";
        return;
    }
    amigos.push(nome);

    atualizarListaAmigos();

    input.value = "";
}

    function atualizarListaAmigos() {
        let ul = document.getElementById("listaAmigos");

        ul.innerHTML = "";

        amigos.forEach((nome) => {
            let li = document.createElement("li");

            li.textContent = nome;

            ul.appendChild(li);
        });
    }

        function sortearAmigo() {
            if(amigos.length <2) {
                alert ("É necessário pelo menos 2 amigos para realizar o sorteio");
                return;
            }

            let participantes = [...amigos];
            let sorteados = [...amigos];
            let pares = [];

            participantes.forEach((amigo) => {
                let opcoes = sorteados.filter((sorteado) => sorteado !==amigo);

                if (opcoes.length === 0) {
                    alert ("Houve um erro no sorteio. Tentaremos novamente");
                    sortearAmigo();
                    return
                }
                let sorteadoIndex = Math.floor(Math.random() *opcoes.length);
                let sorteado = opcoes[sorteadoIndex];

                pares.push(`${amigo} tirou ${sorteado}`);
                sorteados.splice(sorteados.indexOf(sorteado), 1);
            });

            exibirResultado(pares);
        }

        function exibirResultado(pares) {
            let ul = document.getElementById("resultado");
            ul.innerHTML = "";

            pares.forEach((par) => {
                let li = document.createElement("li");
                li.textContent = par;
                ul.appendChild(li);
            });
        }

        document.addEventListener('keypress', function(e) {
            if (e.which == 13) { 
              e.preventDefault(); 
              adicionarAmigo();  
              input.value = "";
            }
          }, false);