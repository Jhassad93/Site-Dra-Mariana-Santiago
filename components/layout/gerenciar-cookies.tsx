"use client";

// Reabre as preferências de cookies. O banner entra na Etapa 11 e escuta o evento "preferencias-cookies".
// Enquanto ele não existir, o botão leva à seção de cookies da política de privacidade.
export function GerenciarCookies() {
  return (
    <button
      type="button"
      className="link-escuro"
      onClick={() => {
        const tratado = !window.dispatchEvent(new Event("preferencias-cookies", { cancelable: true }));
        if (!tratado) window.location.assign("/privacidade/#cookies");
      }}
    >
      Gerenciar cookies
    </button>
  );
}
