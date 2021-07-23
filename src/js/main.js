"use strict";
const playButton = document.querySelector(".js-play-button");
const artist = document.querySelector(".js-select");
const message = document.querySelector(".js-message");

function Functionhandler() {
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

playButton.addEventListener("click", Functionhandler);

const windowsHendrix = document.querySelector(".js-window-hendrix");

function functionYouHaveWon() {
  windowsHendrix.innerHTML = `
  <div class="container-hendrix">
  <img src="./assets/images/hendrix.png" alt="hendrix" class="hendrix"/>
  <div class="message">
  <audio controls autoplay class="audio">
  <source
      src="https://r4---sn-h5nhv8pa-h5qe.googlevideo.com/videoplayback?c=WEB&vprv=1&fexp=24001373,24007246&ei=fGn6YJvtLtCUhwb6t5_4Dg&ip=170.81.54.188&id=o-AEnGx1XJUBnfHI0qAViOdeEwzoxrK8r6ByIsh_6HmApk&clen=3892522&ns=T5MHu6c8_zdflrPF8iTd6ewG&gir=yes&mime=audio%2Fmp4&sig=AOq0QJ8wRQIgUZwoCRHNKNDK0RfRzCVj6wfAaXz5lBGZpmBkKoscSWcCIQCMY7CkVfY8ihjXRqAuB4dvzU_Y1Vt2md0a03wGFrdtVg%3D%3D&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&expire=1627045340&dur=245.040&n=EltHGUsoIBPTfQ&lmt=1526068610762774&source=youtube&itag=140&keepalive=yes&requiressl=yes&title=Jimi%20Hendrix%20Experience%20-%20Hey%20Joe%20Live&redirect_counter=1&rm=sn-ab5e7e7l&req_id=fe7e4724a1f4a3ee&cms_redirect=yes&ipbypass=yes&mh=hd&mip=81.0.5.199&mm=31&mn=sn-h5nhv8pa-h5qe&ms=au&mt=1627023200&mv=m&mvi=4&pcm2cms=yes&pl=18&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRAIgBkYuxBdyxjg4XDUXtOjbXclHRPMbbtBHMTvAM0jQKmkCIGt8RDfrTRaGXRTO-YYvseXhnYJFFpZ5G5Zy_q3FoPa1"
      type="audio/mp3">
  Tu navegador no es compatible para reproducir audio.
</audio>
     <p class="message__artist-history">
       <span class="hendrix-name">Jimi Hendrix</span> Nació en Seattle, Washington aunque encontró el éxito en Londres, que le recibió con los brazos abiertos y dónde empezó la gira con su banda <span class="band">The Jimi Hendrix Experience.</span> Hubo un momento clave en toda su carrera que lo elevó a los altares del rock y ese fue en el <span class="woodstock">Woodstock (1970)</span> y en el Festival de Monterrey en 1967 cuando prendió fuego a su blanca stratocaster 🎸 Fue un total autodidacta y quizá eso fue determinante para que fuese innovador en la música. Al igual que <span class="artists-club">Janis Joplin, Kurt Cobain y Jim Morrison</span> entre otros, él también forma parte del <span class="club">club de los 27.</span>
     </p>
     </div>
</div>
`;
  eventReturn();
}

function eventReturn() {
  const isTrue = document.querySelector(".message");
}
