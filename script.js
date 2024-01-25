document.getElementById("btn-cripto").addEventListener("click", codificador);
document.getElementById("btn-descripto").addEventListener("click", descriptografar);
document.getElementById("btn-copy").addEventListener("click", copiarTexto);

function codificador() {
  let texto = document.getElementById("input-texto").value;
  let newText = texto.split("").map(letter => {
    switch(letter){
      case "e":
        return letter.replace("e", "enter");
      case "i":
        return letter.replace("i", "imes");
      case "a":
        return letter.replace("a", "ai");
      case "o":
        return letter.replace("o", "ober");
      case "u":
        return letter.replace("u", "ufat");
      default:
        return letter;
      }
    }
    ).join("");
  console.log(newText)
  if(texto.length > 1) {
    let textCripto = document.getElementById("box-text-message-title");
    document.getElementsByClassName("box-empty")[0].style.display = "none";
    document.getElementsByClassName("box-text")[0].style.display = "grid";
    textCripto.innerHTML = newText;
  } else {
    document.getElementsByClassName("box-empty")[0].style.display = "grid";
    document.getElementsByClassName("box-text")[0].style.display = "none";
  }
}

function descriptografar() {
  let texto = document.getElementById("input-texto").value;
  let newText = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  console.log(newText)
  if(texto.length > 1) {
    let textCripto = document.getElementById("box-text-message-title");
    document.getElementsByClassName("box-empty")[0].style.display = "none";
    document.getElementsByClassName("box-text")[0].style.display = "grid";
    textCripto.innerHTML = newText;
  } else {
    document.getElementsByClassName("box-empty")[0].style.display = "grid";
    document.getElementsByClassName("box-text")[0].style.display = "none";
  }
}

async function copiarTexto() {
  let copyText = document.getElementById("box-text-message-title").innerHTML;
  console.log(copyText)
  await navigator.clipboard.writeText(copyText);
}

