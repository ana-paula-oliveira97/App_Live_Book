let content = document.getElementById("content");
let tags = document.getElementById("tags");

document.getElementById("form_post").addEventListener("submit", () => {
  if (!content.value) {
    Open_Notify(
      notify_erro,
      notify_error_content,
      "O campo comteudo é obrigatório!"
    );
    content.classList.add("error");
    content.focus();
    return false;
  }
  content.classList.remove("error");

  let result_chamada = Chamada.cadastraPosts(
    "1",
    content.value,
    tags.value,
    "0",
    "0"
  );
  alert(result_chamada);

  return true;
});
