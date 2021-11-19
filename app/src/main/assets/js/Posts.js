let container_posts = document.querySelector("#container_posts");

let data_posts = [
  {
    name: "Ana Souzza",
    content: "Você tem o direito de falar o que pensa, mas não tem o direito de julgar quem não conhece.",
    tags: ["#Lgbt", "#LoveISLove"],
    num_like: 12,
    num_comment: 2,
  },
  {
    name: "Victor Souzza",
    content: "Se você aceita perder, você não pode ganhar.",
    tags: ["#Lgbt", "#LoveISLove"],
    num_like: 1,
    num_comment: 0,
  },
  {
    name: "Marilia Souzza",
    content: "Nunca ache que você não precisa de ninguém. Afinal de contas ninguém consegue nada sozinho.",
    tags: ["#Lgbt", "#LoveISLove"],
    num_like: 40,
    num_comment: 22,
  },
];

for (let index = 0; index < data_posts.length; index++) {
  // Frmatando os nomes Até a primeira virgula
  let [, Name_formated] = data_posts[index].name.match(/(\S+) /) || [];

  container_posts.innerHTML += `
  <div class="card">
    <header>
      <div>
        <figure class="${letter_to_image(Name_formated)}"></figure>
        <div>
          <figcaption>${Name_formated}</figcaption>
          <span>  </span>
          </div>
      </div>
      <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.24365 9.3656L12.4874 15.6094L18.7311 9.3656"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </header>
  <span class="content"
    >${data_posts[index].content}</span
  >
  <div class="controlls">
    <p class="tags">${array_to_string(data_posts[index].tags)}</p>
    <section>
      <a href="">
        <figure>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.6934 18.1725H3.16989C2.72371 18.1725 2.2958 17.9952 1.9803 17.6797C1.66479 17.3642 1.48755 16.9363 1.48755 16.4901V10.6019C1.48755 10.1558 1.66479 9.72784 1.9803 9.41234C2.2958 9.09684 2.72371 8.9196 3.16989 8.9196H5.6934M11.5816 7.23726V3.87257C11.5816 3.2033 11.3157 2.56143 10.8425 2.08818C10.3692 1.61493 9.72736 1.34906 9.05809 1.34906L5.6934 8.9196V18.1725H15.1818C15.5875 18.1771 15.9812 18.0349 16.2904 17.7721C16.5995 17.5093 16.8033 17.1436 16.8642 16.7425L18.025 9.17195C18.0616 8.93083 18.0453 8.68464 17.9773 8.45043C17.9093 8.21623 17.7912 7.9996 17.6312 7.81557C17.4712 7.63154 17.273 7.4845 17.0505 7.38464C16.828 7.28478 16.5865 7.23449 16.3426 7.23726H11.5816Z"
              stroke="#000"
              stroke-width="1.61666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </figure>
        <figcaption>${data_posts[index].num_like}</figcaption>
      </a>
      <a href="http://" class="comment">
        <figure>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4766 8.28115C16.4795 9.42573 16.2121 10.5548 15.6961 11.5765C15.0842 12.8007 14.1436 13.8304 12.9796 14.5503C11.8156 15.2702 10.4741 15.6517 9.10547 15.6522C7.9609 15.6552 6.8318 15.3878 5.81016 14.8718L0.867188 16.5194L2.51484 11.5765C1.99881 10.5548 1.73139 9.42573 1.73438 8.28115C1.7349 6.91252 2.11647 5.57106 2.83633 4.40704C3.55619 3.24301 4.58591 2.30239 5.81016 1.69053C6.8318 1.17449 7.9609 0.907075 9.10547 0.910059H9.53906C11.3466 1.00978 13.0538 1.7727 14.3339 3.05276C15.6139 4.33281 16.3768 6.04004 16.4766 7.84756V8.28115Z"
              stroke="#000"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </figure>
        <figcaption>${data_posts[index].num_comment}</figcaption>
      </a>
      <a href="" class="share">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_223_12"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="2"
            width="16"
            height="18"
          >
            <path
              d="M10.8125 3.40076V13.3734"
              stroke="black"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.8125 3.40076L14.7148 7.73669"
              stroke="black"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.91016 7.73669L10.8125 3.40075"
              stroke="black"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.875 11.639V16.0765C3.875 17.4572 4.99429 18.5765 6.375 18.5765H15.25C16.6307 18.5765 17.75 17.4572 17.75 16.0765V11.639"
              stroke="black"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </mask>
          <g mask="url(#mask0_223_12)">
            <rect
              x="0.40625"
              y="0.365601"
              width="20.8125"
              height="20.8125"
              fill="black"
            />
          </g>
        </svg>
      </a>
    </section>
  </div>
</div>
  `;
}

function array_to_string(value) {
  let result = "";
  for (let index = 0; index < value.length; index++) {
    result += " " + value[index];
  }
  return result;
}
