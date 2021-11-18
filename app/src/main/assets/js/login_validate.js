document
  .querySelector("#form_account")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (change === 1) {
      if (
        !validarPWD(password_account, password_confirm) |
        !validarPassword(password_confirm) |
        !validarPassword(password_account) |
        !validarNome() |
        !validarEmail(email_account)
      )
        return;

      Account_2();
    } else {
      if (!validarPhone() | !validaCPF()) return;
    }
  });

document
  .querySelector("#form_login")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validarPassword(password) | !validarEmail(email)) return;
  });

function validarEmail(email) {
  email.value = email.value.trim();

  if (!email.value) {
    Open_Notify(notify_erro, notify_error_content, M_email_null);
    email.classList.add("error");
    email.focus();
    return false;
  }

  const regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

  if (!regex.test(email.value)) {
    Open_Notify(notify_erro, notify_error_content, M_email_invalid);
    email.classList.add("error");
    email.focus();
    return false;
  }

  email.classList.remove("error");
  return true;
}

function validarPassword(password) {
  password.value = password.value.trim();
  let regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

  if (!regex.test(password.value)) {
    Open_Notify(notify_erro, notify_error_content, M_password_invalid);
    password.classList.add("error");
    password.focus();
    return false;
  }
  password.classList.remove("error");
  return true;
}

function validarNome() {
  nome.value = nome.value.trim();

  if (!nome.value) {
    Open_Notify(notify_erro, notify_error_content, M_name_null);
    nome.classList.add("error");
    nome.focus();
    return false;
  }

  const regex = /^([a-z]{2,}([\s-][a-z]{2,})+)$/gi;

  if (!regex.test(nome.value)) {
    Open_Notify(notify_erro, notify_error_content, M_name_invalid);
    nome.classList.add("error");
    nome.focus();
    return false;
  }

  nome.classList.remove("error");
  return true;
}

function validaCPF() {
  cpfV = cpf.value;
  let regex = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
  if (!regex.test(cpfV)) {
    Open_Notify(notify_erro, notify_error_content, M_cpf_invalid);

    cpf.classList.add("error");
    cpf.focus();
    return false;
  }

  cpf.classList.remove("error");
  return true;
}

let obj;
let masc;

function fMasc(objeto, mascara) {
  obj = objeto;
  masc = mascara;
  setTimeout("fMascEx()", 1);
}

function fMascEx() {
  obj.value = masc(obj.value);
}

function Mcnpj(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/, "$1.$2");
  v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
  v = v.replace(/(\d{4})(\d)/, "$1-$2");
  return v;
}

function Mcpf(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return v;
}
let valor;
cpf.addEventListener("keydown", function (el) {
  valor = cpf.value.replace(/\D/g, "");

  if (valor.length <= 10) {
    fMasc(cpf, Mcpf);
  } else {
    fMasc(cpf, Mcnpj);
  }
});

function validarPWD(pwd, second_pwd) {
  if (pwd.value !== second_pwd.value) {
    Open_Notify(notify_erro, notify_error_content, M_password_confirm);
    second_pwd.classList.add("error");
    second_pwd.focus();
    return false;
  }
  second_pwd.classList.remove("error");
  return true;
}

function validarPhone() {
  let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (!regex.test(phone.value)) {
    Open_Notify(notify_erro, notify_error_content, M_phone_invalid);

    phone.classList.add("error");
    phone.focus();
    return false;
  }

  phone.classList.remove("error");
  return true;
}
