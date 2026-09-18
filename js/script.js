const html = document.documentElement;

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

const STORAGE_KEY = "hora-do-qa-theme";

/* =========================================
ATUALIZA O BOTÃO
========================================= */

function updateThemeButton(theme) {
    const isDark = theme === "dark";

    /*
    
    O botão mostra a opção disponível,
    
    e não o tema atualmente ativo.
    */

    themeIcon.textContent = isDark
        ? "☀️"
        : "🌙";

    themeText.textContent = isDark
        ? "Light Tech"
        : "Dark Tech";

    themeToggle.setAttribute(
        "aria-label",
        isDark
            ? "Ativar Light Tech"
            : "Ativar Dark Tech"
    );

    themeToggle.setAttribute(
        "aria-pressed",
        String(!isDark)
    );
}

/* =========================================
APLICA O TEMA
========================================= */

function setTheme(theme) {
    html.setAttribute(
        "data-theme",
        theme
    );

    localStorage.setItem(
        STORAGE_KEY,
        theme
    );

    updateThemeButton(theme);
}

/* =========================================
TEMA INICIAL
========================================= */

function getInitialTheme() {
    const savedTheme =
        localStorage.getItem(STORAGE_KEY);

    /*
    
    Se o usuário já escolheu um tema,
    
    respeitamos essa escolha.
    */

    if (
        savedTheme === "dark" ||
        savedTheme === "light"
    ) {
        return savedTheme;
    }

    /*
    
    Primeira visita:
    
    DARK TECH é o padrão.
    */

    return "dark";
}

/* =========================================
TOGGLE
========================================= */

themeToggle.addEventListener(
    "click",
    () => {

        const currentTheme =
            html.getAttribute("data-theme");

        const newTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";

        setTheme(newTheme);


    }
);

/* =========================================
INICIALIZAÇÃO
========================================= */

const initialTheme =
    getInitialTheme();

setTheme(initialTheme);