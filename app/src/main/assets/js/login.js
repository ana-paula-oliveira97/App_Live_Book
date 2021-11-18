let change = 0;

function Login() {
  change = 0;

  logo_chang.classList.remove("logo_account");
  main_chang.classList.remove("form_account");
  text_account.classList.remove("Labels_on");

  text_login.classList.add("Labels_on");

  form_login.classList.remove("off_visible");
  form_account.classList.add("off_visible");
  br();
}

function Account_1() {
  change = 1;

  logo_chang.classList.add("logo_account");

  main_chang.classList.add("form_account");

  form_login.classList.add("off_visible");
  form_account.classList.remove("off_visible");

  text_login.classList.remove("Labels_on");
  text_account.classList.add("Labels_on");
  br();
}

function Account_2() {
  change = 2;

  etapa_1.classList.add("off_visible");
  etapa_2.classList.remove("off_visible");

  br();
}

// password change visibility
// password Login
text_info_passWord_show.addEventListener("click", function () {
  view_password(text_info_passWord_show, text_info_passWord_view, password);
});
text_info_passWord_view.addEventListener("click", function () {
  show_password(text_info_passWord_show, text_info_passWord_view, password);
});
// password account
text_info_passWord_show_account.addEventListener("click", function () {
  view_password(
    text_info_passWord_show_account,
    text_info_passWord_view_account,
    password_account
  );
});
text_info_passWord_view_account.addEventListener("click", function () {
  show_password(
    text_info_passWord_show_account,
    text_info_passWord_view_account,
    password_account
  );
});
// password account confirm
text_info_passWord_show_account_2.addEventListener("click", function () {
  view_password(
    text_info_passWord_show_account_2,
    text_info_passWord_view_account_2,
    password_confirm
  );
});
text_info_passWord_view_account_2.addEventListener("click", function () {
  show_password(
    text_info_passWord_show_account_2,
    text_info_passWord_view_account_2,
    password_confirm
  );
});

function show_password(view, show, input) {
  view.classList.remove("off_visible");
  show.classList.add("off_visible");
  input.setAttribute("type", "password");
}

function view_password(view, show, input) {
  view.classList.add("off_visible");
  show.classList.remove("off_visible");
  input.setAttribute("type", "text");
}
