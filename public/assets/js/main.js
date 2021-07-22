"use strict";

const artist = document.querySelector(".js-select");
const message = document.querySelector(".js-message");
const playButton = document.querySelector(".js-play-button");

function addMessageFuntionhandler() {
  message.classList.remove("red");
  if (artist.value === "bowie") {
    message.innerHTML =
      "No es de los mejores, aunque es considerado uno de los músicos más influyentes del siglo XX 👨🏻‍🎤";
  }
  if (artist.value === "cohen") {
    message.innerHTML =
      "¡Todavía hay uno que le supera! Sus canciones, destacan particularmente por la fuerza y calidad literaria de sus letras.📝";
  }
  if (artist.value === "berry") {
    message.innerHTML =
      "¡Vas por buen camino!. Es dificil excluir a Chuck Berry ya que es uno de los padres del rock and roll 🎵";
  }
  if (artist.value === "hendrix") {
    message.innerHTML = "Quién iba a ser sino 🤟🏻";
    functionYouHaveWon();
  }
  if (artist.value === "mercury") {
    message.innerHTML =
      "¡Freddie prefería cantar!🎤No será el mejor guitarrista pero si uno de los mejores cantantes de la historia de la música";
  }

  if (artist.value === "choose") {
    message.innerHTML = "Debes escoger una artista";
  }
}

playButton.addEventListener("click", addMessageFuntionhandler);

const newWindows = document.querySelector(".js-new-windows");

function functionYouHaveWon() {
  newWindows.innerHTML = `
  <div class="container-hendrix">
  <img src="./assets/images/hendrix.png" alt="hendrix" class="hendrix"/>
  <div class="message">
  <audio controls autoplay
    src="https://r4---sn-h5nhv8pa-h5qe.googlevideo.com/videoplayback?sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&fexp=24001373,24007246&ei=YHr5YJXOK5HphgbzsITwAg&lmt=1526069427112627&requiressl=yes&keepalive=yes&id=o-AKgwx3OkcNXDFeZo3tpKju9X5tZjp7tUMRh8Wsv9Hyc9&gir=yes&n=wlZ0COvnzTFZDA&itag=249&clen=1763698&expire=1626984128&c=WEB&dur=245.001&ns=bNTBTalTx3WrBiGL4FfnATwG&source=youtube&mime=audio%2Fwebm&sig=AOq0QJ8wRQIgN-2dVs9R0QPsKQOhbkF8maWeo2h29G25C5MpCK5qlDwCIQCb14d4auutlYAFmjlvvzrnLN6nLIY1fr73rnFPqpxOHA%3D%3D&vprv=1&ip=86.111.229.149&title=Jimi%20Hendrix%20Experience%20-%20Hey%20Joe%20Live&redirect_counter=1&rm=sn-ab5e7e7l&req_id=e3b9f7c8380a3ee&cms_redirect=yes&ipbypass=yes&mh=hd&mip=81.0.5.199&mm=31&mn=sn-h5nhv8pa-h5qe&ms=au&mt=1626962221&mv=m&mvi=4&pcm2cms=yes&pl=18&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRAIgBI9lnmS0Yifuwijz9iUFc-PasIsYW6nqagbXe92culsCIAL5ODVAKNhw8Khva-P3o6cWENKo6__hRK-uZy2uAhWp" class="audio"></audio>
     <p class="message__artist-history">
       <span class="hendrix-name">Jimi Hendrix</span> Nació en Seattle, Washington aunque encontró el éxito en Londres, que le recibió con los brazos abiertos y dónde empezó la gira con su banda <span class="band">The Jimi Hendrix Experience.</span> Hubo un momento clave en toda su carrera que lo elevó a los altares del rock y ese fue en el <span class="woodstock">Woodstock (1970)</span> y en el Festival de Monterrey en 1967 cuando prendió fuego a su blanca stratocaster 🎸 Fue un total autodidacta y quizá eso fue determinante para que fuese innovador en la música. Al igual que <span class="artists-club">Janis Joplin, Kurt Cobain y Jim Morrison</span> entre otros, él también forma parte del <span class="club">club de los 27.</span>
     </p>
     </div>
</div>
`;
  eventReturn();
}

function eventReturn() {
  const youHaveWon = document.querySelector(".message");
}

//# sourceMappingURL=main.js.map
