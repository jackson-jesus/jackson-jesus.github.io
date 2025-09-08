// Função mínima para alternar tema com persistência
// - Usa atributo data-theme no <html>
// - Persiste em localStorage
(function () {
  var KEY = "theme";

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(KEY, theme);
    // Atualiza acessibilidade do botão (opcional, porém leve)
    var btn = document.getElementById("btn-tema");
    if (btn) {
      var isDark = theme === "dark";
      btn.setAttribute("aria-pressed", String(isDark));
      btn.textContent = isDark ? "Mudar para TEMA CLARO" : "Mudar para TEMA ESCURO";
    }
  }

  // Inicializa com preferência salva ou do SO
  var saved = localStorage.getItem(KEY);
  var initial = saved || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  apply(initial);

  // Expõe função global mais simples possível
  window.toggleTheme = function () {
    var current = document.documentElement.getAttribute("data-theme") || "light";
    apply(current === "light" ? "dark" : "light");
  };
})();
