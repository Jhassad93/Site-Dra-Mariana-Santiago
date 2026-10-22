"use client";

// Reabre o banner de cookies (evento "preferencias-cookies"). Se o banner não responder, leva à seção de cookies da política.
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
