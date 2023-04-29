const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();
//Fazendo logim
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    //Pega valor dos campos da tela de Login
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    // Codigo para verifica se a conta existe
    if (!account) {
        alert("Opps! Verificar o usuário ou a senha.");
        return;
    }
    //Codigo para verifica se a senha é igual
    if (account) {
        if (account.password !== password) {
            alert("Opps! Verificar o usuário ou a senha.");
            return;
        }

        saveSession(email, checkSession);

        // quando o user entra com o usuario e senha, se loga no sistema e vai para a home.
        window.location.href = "home.html";
    }
});

//Codigo para criar conta de usuario
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    //Pega valor do campo da tela de criar conta
    const email = document.getElementById("email-create-input").value;
    const pass = document.getElementById("password-create-input").value;

    if (email.length < 5) {
        alert("Preencha o campo com um e-mail válido.");
        return;
    }

    if (pass.length < 8) {
        alert("A senha precisa ter no minimo 8 digitos.");
        return;
    }

    saveAccount({
        login: email,
        password: pass,
        transactions: []
    });
    myModal.hide(); //Fecha a Modal
    alert("Conta criada com sucesso.");
});

function checkLogged() {
    if (session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if (logged) {
        saveSession(logged, session);

        window.location.href = "home.html";
    }
}
//Salva os dados de criação da conta
function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession) {
    if (saveSession) {
        localStorage.setItem("session", data);
    }
    sessionStorage.setItem("logged", data);
}

function getAccount(key) {
    const account = localStorage.getItem(key);

    if (account) {
        return JSON.parse(account);
    }

    return "";
}
