function Open_Notify(DomElement, DomElement_content, String) {
  DomElement_content.textContent = String;
  DomElement.classList.remove("off_visible");
  setTimeout(() => {
    DomElement.classList.add("off_visible");
  }, 4000);
}

function Close_Notify(DomElement) {
  clearTimeout()
  DomElement.classList.add("off_visible");
}

document.getElementById("close_success").addEventListener("click", () => {
  Close_Notify(notify_success);
});
document.getElementById("close_error").addEventListener("click", () => {
  Close_Notify(notify_erro);
});

document.getElementById("close_info").addEventListener("click", () => {
  Close_Notify(Notify_info);
});

function Open_Notify_about(
  DomElement,
  DomElement_content,
  DomElement_content2,
  DomElement_content3,
  String,
  String2,
  String3
) {
  DomElement_content.textContent = String;
  DomElement_content2.textContent = String2;
  DomElement_content3.textContent = String3;
  DomElement.classList.remove("off_visible");
  setTimeout(() => {
    DomElement.classList.add("off_visible");
  }, 6000);
}

about_login.addEventListener("click", () => {
  Open_Notify_about(
    Notify_info,
    Notify_info_content,
    Notify_info_content2,
    Notify_info_content3,
    M_info_password,
    M_info_password2,
    M_info_password3
  );
});
about_account.addEventListener("click", () => {
  Open_Notify_about(
    Notify_info,
    Notify_info_content,
    Notify_info_content2,
    Notify_info_content3,
    M_info_password,
    M_info_password2,
    M_info_password3
  );
});
about_confirm.addEventListener("click", () => {
  Open_Notify_about(
    Notify_info,
    Notify_info_content,
    Notify_info_content2,
    Notify_info_content3,
    M_info_password,
    M_info_password2,
    M_info_password3
  );
});
