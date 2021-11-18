let InputLanguage = document.getElementById("InputLanguage");
let language = "br";

function setLanguage(value) {
  language = value;
}

window.setInterval(() => {
  if (language === "it") {
    it();
  } else if (language === "en") {
    en();
  } else if (language === "es") {
    es();
  } else if (language === "fr") {
    fr();
  } else {
    br();
  }
}, 0);
// Brasilian
function br() {
  // Form Header
  text_login.textContent = "Entrar";
  text_account.textContent = "Criar Conta";
  Notify_success_title.textContent = "Muito bem!";
  Notify_error_title.textContent = "Oh não!";
  Notify_info_title.textContent = "Olá!";
  M_info_password = "A senha deve conter no mínimo:";
  M_info_password2 = "1 letra maiúscula, 1 caractere especial,";
  M_info_password3 = "1 numero em um total 8 caracteres";
  // Form
  if (change === 1) {
    M_email_null = "Campo e-mail é obrigatório!";
    M_email_invalid = "Formato de e-mail inválido!";
    M_password_invalid = "Formato de senha inválido!";
    M_name_null = "Campo nome é obrigatório!";
    M_name_invalid = "Formato de nome inválido!";
    M_password_confirm = "As senhas devem ser iguais!";
    M_phone_invalid = "Formato de Número Telefónico inválido!";

    text_msg_account.textContent = "Crie Sua Conta";
    text_info_email_account.textContent = "*Email";
    text_info_name.textContent = "*Nome de usuário";
    text_info_passWord_account.textContent = "*Senha";
    text_info_passWord_confirm.textContent = "*Confirmar Senha";
    text_info_passWord_show_account.textContent = "Mostrar";
    text_info_passWord_show_account_2.textContent = "Mostrar";
    text_info_passWord_view_account.textContent = "Ocultar";
    text_info_passWord_view_account_2.textContent = "Ocultar";
    text_button_account_1.textContent = "Continuar";
  } else if (change === 2) {
    text_msg_account_2.textContent = "Finalize sua Conta";
    text_info_cpf_account.textContent = "*CPF ou CNPJ";
    text_info_phone_account.textContent = "*Telefone";
    text_button_account_2.textContent = "Criar Conta";

    M_cpf_invalid = "Formato de CPF/CNPJ inválido!";
  } else {
    text_msg.textContent = "Bem vindo de volta";
    text_info_email.textContent = "*Email";
    text_info_passWord.textContent = "*Senha";
    text_info_passWord_show.textContent = "Mostrar";
    text_info_passWord_view.textContent = "Ocultar";
    text_button.textContent = "Entrar";
    text_reset_password.textContent = "Esqueceu a senha?";
    text_reset_password_target.textContent = "Resete aqui";

    M_email_null = "Campo e-mail é obrigatório!";
    M_email_invalid = "Formato de e-mail inválido!";
    M_password_invalid = "Formato de senha inválido!";
  }
}
// Ingles
function en() {
  // Form Header
  text_login.textContent = "Enter";
  text_account.textContent = "Create Account";
  Notify_success_title.textContent = "Well done!";
  Notify_error_title.textContent = "Oh not!";
  Notify_info_title.textContent = "Hi there!";
  M_info_password = "The password must contain at least: ";
  M_info_password2 = "1 capital letter, 1 special character,";
  M_info_password3 = " 1 number in a total of 8 characters";
  // Form
  if (change === 1) {
    M_email_null = "Field email is mandatory!";
    M_email_invalid = "Invalid email format!";
    M_password_invalid = "Invalid password format!";
    M_name_null = "Field name is required!";
    M_name_invalid = "Invalid name format!";
    M_password_confirm = "Passwords must be the same!";
    M_phone_invalid = "Invalid Phone Number Format!";

    text_msg_account.textContent = "Create your account";
    text_info_email_account.textContent = "*Email";
    text_info_name.textContent = "*User name";
    text_info_passWord_account.textContent = "*Password";
    text_info_passWord_confirm.textContent = "*Confirm password";
    text_info_passWord_show_account.textContent = "Show";
    text_info_passWord_view_account.textContent = "Hide";
    text_info_passWord_view_account_2.textContent = "Hide";
    text_info_passWord_show_account_2.textContent = "Mostrar";
    text_button_account_1.textContent = "Continue";
  } else if (change === 2) {
    M_cpf_invalid = "Invalid CPF/CNPJ format!";

    text_msg_account_2.textContent = "Finalize your Account";
    text_info_cpf_account.textContent = "*CPF or CNPJ";
    text_info_phone_account.textContent = "*Telephone";

    text_button_account_2.textContent = "Create an account";
  } else {
    M_email_null = "Field email is mandatory!";
    M_email_invalid = "Invalid email format!";
    M_password_invalid = "Invalid password format!";

    text_msg.textContent = "Welcome to back";
    text_info_email.textContent = "*Email";
    text_info_passWord.textContent = "*Password";
    text_info_passWord_show.textContent = "Show";
    text_info_passWord_view.textContent = "Hide";
    text_button.textContent = "Enter";
    text_reset_password.textContent = "Forgot password?";
    text_reset_password_target.textContent = "Reset here";
  }
}
// Espanish
function es() {
  // Form Header
  text_login.textContent = "Entrar";
  text_account.textContent = "Crea una cuenta";
  Notify_success_title.textContent = "¡Bien hecho!";
  Notify_error_title.textContent = "Muito bem!";
  Notify_info_title.textContent = "¡Hola!";
  M_info_password = "La contraseña debe contener al menos: ";
  M_info_password2 = "1 letra mayúscula, 1 carácter especial,";
  M_info_password3 = "1 número en un total de 8 caracteres";

  // Form
  if (change === 1) {
    M_email_null = "¡El correo electrónico de campo es obligatorio!";
    M_email_invalid = "¡Formato de correo electrónico no válido!";
    M_password_invalid = "¡Formato de contraseña no válido!";
    M_name_null = "¡Se requiere nombre!";
    M_name_invalid = "¡Formato de nombre no válido!";
    M_password_confirm = "¡Las contraseñas deben ser las mismas!";
    M_phone_invalid = "¡Formato de número de teléfono no válido!";

    text_msg_account.textContent = "Crea tu Cuenta";
    text_info_email_account.textContent = "*Correo electrónico";
    text_info_name.textContent = "*Nombre de usuario";
    text_info_passWord_account.textContent = "*Contraseña";
    text_info_passWord_confirm.textContent = "*Confirmar seña";
    text_info_passWord_show_account.textContent = "Mostrar";
    text_info_passWord_show_account_2.textContent = "Mostrar";
    text_info_passWord_view_account.textContent = "Esconder";
    text_info_passWord_view_account_2.textContent = "Esconder";
    text_button_account_1.textContent = "Continuar";
  } else if (change === 2) {
    M_cpf_invalid = "¡Formato CPF/CNPJ no válido!";

    text_msg_account_2.textContent = "Finalice su cuenta";
    text_info_cpf_account.textContent = "*CPF o CNPJ";
    text_info_phone_account.textContent = "*Teléfono";

    text_info_phone_account.textContent = "*Teléfono";

    text_button_account_2.textContent = "Crea una cuenta";
  } else {
    M_email_null = "¡El correo electrónico de campo es obligatorio!";
    M_email_invalid = "¡Formato de correo electrónico no válido!";
    M_password_invalid = "¡Formato de contraseña no válido!";

    text_msg.textContent = "Bienvenido de nuevo";
    text_info_email.textContent = "*Correo electrónico";
    text_info_passWord.textContent = "*Contraseña";
    text_info_passWord_show.textContent = "Mostrar";
    text_button.textContent = "Entrar";
    text_reset_password.textContent = "Olvido la contraseña?";
    text_reset_password_target.textContent = "Restablecer aquí";
  }
}
// Frances
function fr() {
  // Form Header
  text_login.textContent = "Entrer";
  text_account.textContent = "Créer un compte";
  Notify_success_title.textContent = "Bien joué!";
  Notify_error_title.textContent = "Muito bem!";
  Notify_info_title.textContent = "Salut!";
  M_info_password = "Le mot de passe doit contenir au moins : ";
  M_info_password2 = "1 lettre majuscule, 1 caractère spécial,";
  M_info_password3 = "1 chiffre sur un total de 8 caractères";

  // Form
  if (change === 1) {
    M_email_null = "L’e-mail sur le terrain est obligatoire!";
    M_email_invalid = "Format d’e-mail non valide!";
    M_password_invalid = "Format de mot de passe non valide!";
    M_name_null = "Le nom du champ est obligatoire!";
    M_name_invalid = "Format de nom non valide !";
    M_password_confirm = "Les mots de passe doivent être les mêmes!";
    M_phone_invalid = "Format de numéro de téléphone invalide !";

    text_msg_account.textContent = "Créez votre compte";
    text_info_email_account.textContent = "*E-mail";
    text_info_name.textContent = "*Nom d'utilisateur";
    text_info_passWord_account.textContent = "*Mot de passe";
    text_info_passWord_confirm.textContent = "*Confirmez le mot de passe";
    text_info_passWord_show_account.textContent = "Spectacle";
    text_info_passWord_show_account_2.textContent = "Spectacle";
    text_info_passWord_view_account.textContent = "Cacher";
    text_info_passWord_view_account_2.textContent = "Cacher";
    text_button_account_1.textContent = "Continuer";
  } else if (change === 2) {
    M_cpf_invalid = "Format CPF/CNPJ non valide !";

    text_msg_account_2.textContent = "Finalisez votre compte";
    text_info_cpf_account.textContent = "*CPF ou CNPJ";
    text_info_phone_account.textContent = "*Téléphone";

    text_button_account_2.textContent = "Créer un compte";
  } else {
    M_email_null = "L’e-mail sur le terrain est obligatoire!";
    M_email_invalid = "Format d’e-mail non valide!";
    M_password_invalid = "Format de mot de passe non valide!";

    text_msg.textContent = "Content de te revoir";
    text_info_email.textContent = "*E-mail";
    text_info_passWord.textContent = "*Mot de passe";
    text_info_passWord_show.textContent = "Spectacle";
    text_info_passWord_view.textContent = "Cacher";
    text_button.textContent = "Entrer";
    text_reset_password.textContent = "mot de passe oublié?";
    text_reset_password_target.textContent = "réinitialiser ici";
  }
}
// Italian
function it() {
  // Form Header
  text_login.textContent = "Per entrare";
  text_account.textContent = "Creare un account";
  Notify_success_title.textContent = "Ben fatto!";
  Notify_error_title.textContent = "Muito bem!";
  Notify_info_title.textContent = "Ciao!";
  M_info_password = "La password deve contenere almeno: ";
  M_info_password2 = "1 lettera maiuscola, 1 carattere speciale,";
  M_info_password3 = "1 numero per un totale di 8 caratteri";

  // Form
  if (change === 1) {
    M_email_null = "L'e-mail di campo è obbligatoria!";
    M_email_invalid = "Formato e-mail non valido!";
    M_password_invalid = "Formato password non valido!";
    M_name_null = "Il nome del campo è obbligatorio!";
    M_name_invalid = "Formato del nome non valido!";
    M_password_confirm = "Le password devono essere le stesse!";
    M_phone_invalid = "Formato numero di telefono non valido!";

    text_msg_account.textContent = "Crea il tuo account";
    text_info_email_account.textContent = "*E-mail";
    text_info_name.textContent = "*Nome utente";
    text_info_passWord_account.textContent = "*Parola d'ordine";
    text_info_passWord_confirm.textContent = "*Conferma password";
    text_info_passWord_show_account.textContent = "Spettacolo";
    text_info_passWord_show_account_2.textContent = "Spettacolo";
    text_info_passWord_view_account.textContent = "Nascondere";
    text_info_passWord_view_account_2.textContent = "Nascondere";

    text_button_account_1.textContent = "Continua";
  } else if (change === 2) {
    M_cpf_invalid = "Formato CPF/CNPJ non valido!";

    text_msg_account_2.textContent = "Finalizza il tuo account";
    text_info_cpf_account.textContent = "*CPF o CNPJ";
    text_info_phone_account.textContent = "*Telefono";

    text_button_account_2.textContent = "Creare un account";
  } else {
    M_email_null = "L'e-mail di campo è obbligatoria!";
    M_email_invalid = "Formato e-mail non valido!";
    M_password_invalid = "Formato password non valido!";

    text_msg.textContent = "Ben tornato";
    text_info_email.textContent = "*E-mail";
    text_info_passWord.textContent = "*Parola d'ordine";
    text_info_passWord_show.textContent = "Spettacolo";
    text_info_passWord_view.textContent = "Nascondere";
    text_button.textContent = "Per entrare";
    text_reset_password.textContent = "Ha dimenticato la password?";
    text_reset_password_target.textContent = "resetta qui";
  }
}
