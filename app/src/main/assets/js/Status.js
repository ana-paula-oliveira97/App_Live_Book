let container_status = document.querySelector(".status");

let data_status_banco = "";
data_status_banco = new String();
data_status_banco = Chamada.getResult();

let data_status = data_status_banco.split(",");
data_status[1] = "Karlla Souzza";
data_status[0] = "Ana Souzza";

for (let index = 0; index < data_status.length; index++) {
  // Frmatando os nomes Até a primeira virgula
  let [, Name_formated] = data_status[index].match(/(\S+) /) || [];

  container_status.innerHTML += `
  <div class="card_status">
    <div class="foto_box">
      <div class="background">
        <div class="img ${letter_to_image(Name_formated)}">
        </div>
      </div>
    </div>
    <p>${Name_formated}</p>
  </div>`;
}
