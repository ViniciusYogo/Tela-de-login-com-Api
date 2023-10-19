const mostrarRua = document.getElementById("mostrarRua");
const mostrarBairro = document.getElementById("mostrarBairro");
const mostrarCidade = document.getElementById("mostrarCidade");
const mostrarEstado = document.getElementById("mostrarEstado");
const mostrarCep = document.getElementById("mostrarCep");

function localizacao(success) {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function error(err) {
    console.warn("Deu erro" + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error, options)

};

async function obterLocalizacao(posicao) {
  let latitude = posicao.coords.latitude
  let longitude = posicao.coords.longitude

  const resposta = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
  const data = await resposta.json()

  enderecoData = data.address
  mostrarNaTela()
};


function mostrarNaTela() {

  const rua = `${enderecoData.road}`
  const bairro = ` ${enderecoData.suburb}`
  const cidade = `${enderecoData.city}`
  const estado = ` ${enderecoData.state}`
  const cep = `${enderecoData.postcode}`

  mostrarRua.textContent = `Rua:${rua}`
  mostrarBairro.textContent = `Bairro:${bairro}`
  mostrarCidade.textContent = `Cidade:${cidade}`
  mostrarEstado.textContent = `Estado:${estado}`
  mostrarCep.textContent = `Cep:${cep}`


}


