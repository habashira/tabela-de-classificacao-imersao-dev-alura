var paulo = {
  nome: "Paulo",
  vitorias: 2,
  empates: 5,
  derrotas: 1,
  pontos: 0
}

var rafa = {
  nome: "Rafa",
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0
}

//console.log(paulo)
//console.log(paulo.vitorias)
//console.log(rafa)


//Entre parenteses, em uma função, executa a função para aquele objeto ou variável, isto é, se a função realiza somas, e o objeto tem vários numeros a se somar, voce coloca o nome do objeto dentro dos () da função, chamando fora da mesma, e efetua a função para aquele objeto
//calculaPontos(rafa)
//console.log(rafa.pontos)
rafa.pontos = calculaPontos(rafa)
//console.log(rafa.pontos)

function calculaPontos(jogador){
  //console.log(jogador.vitorias)
  var pontos = (jogador.vitorias * 3) + jogador.empates
  //console.log(pontos)
  return pontos
  //Quando a função for chamada fora, ela retornará o que tem e return, e esse return deve ser declarado fora da função
}

var jogadores = [rafa, paulo]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
  var html = ""
  for (i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    //+= vai adicionar cada atributo/propriedade dentro da coluna/linha, substitui, por exemplo, numero = numero + 1 em numero += 1
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td></tr>"
    
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
      
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  //Vai buscar no html lá em cima a id, e inserir os dados dessa função na id, ou seja, na id "tabelaJogadores"
  tabelaJogadores.innerHTML = html
  //vai inserir os dados do html (variável) no id "tabelaJogadores" do HTML lá em cima
}

function adicionarVitoria(i) {
  //console.log("Clicou no botão vitória.")
  var jogador = jogadores[i]
  jogador.vitorias++
  //++ adiciona 1 em vitórias
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
  //console.log("Clicou no botão empate.")
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
  //console.log("Clicou no botão derrota.")
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}
