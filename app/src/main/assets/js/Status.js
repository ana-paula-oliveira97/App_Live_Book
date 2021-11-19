let container_status = document.querySelector(".status");

let data_status = [
  { name: "Ana Souzza" },
  { name: "Victor Souzza" },
  { name: "Marilia Souzza" },
  { name: "Henrique Souzza" },
  { name: "Cintia Souzza" },
  { name: "Davi Souzza" },
  { name: "Laura Souzza" },
  { name: "Samuel Souzza" },
  { name: "Lara Souzza" },
  { name: "Pedro Souzza" },
  { name: "João Souzza" },
  { name: "Leticia Souzza" },
  { name: "Sofia Souzza" },
  { name: "Maiara Souzza" },
  { name: "Maraisa Souzza" },
];

for (let index = 0; index < data_status.length; index++) {
  // Frmatando os nomes Até a primeira virgula
  let [, Name_formated] = data_status[index].name.match(/(\S+) /) || [];

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