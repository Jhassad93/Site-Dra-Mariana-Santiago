import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Botões e links de ação (docs/DESIGN.md, Componentes).
// Sólido: fundo Tinta, texto Gesso. Vidro: sobre fotos e seções escuras. Raio 999px, altura 48px.
const botao = cva(
  "botao inline-flex min-h-12 max-w-full shrink-0 items-center justify-center gap-2 rounded-full px-6 py-2 text-center text-[1rem] font-medium",
  {
    variants: {
      variante: {
        solido: "bg-tinta text-gesso",
        vidro: "botao-vidro",
      },
    },
    defaultVariants: { variante: "solido" },
  },
);

type BotaoProps = VariantProps<typeof botao> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Link para fora do site (WhatsApp, agenda): abre em nova aba e avisa o leitor de tela. */
  externo?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

export function Botao({ href, children, variante, className, externo, ...resto }: BotaoProps) {
  const classes = cn(botao({ variante }), className);
  if (externo) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...resto}>
        {children}
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...resto}>
      {children}
    </Link>
  );
}

/** Link secundário: Bronze sublinhado sobre fundo claro; Areia sobre escuro. */
export function LinkSecundario({
  href,
  children,
  sobre = "claro",
  className,
  externo,
}: {
  href: string;
  children: React.ReactNode;
  sobre?: "claro" | "escuro";
  className?: string;
  externo?: boolean;
}) {
  const classes = cn(
    "link-secundario inline-flex min-h-11 items-center underline decoration-1 underline-offset-[5px]",
    sobre === "claro" ? "text-bronze" : "text-areia",
    className,
  );
  if (externo) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/** Pílula de vidro: ação curta sobre foto ("Entender o procedimento"). */
export function PilulaVidro({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("pilula-vidro inline-flex min-h-10 max-w-full items-center rounded-full px-4 py-1.5 text-center text-sm font-medium", className)}>
      {children}
    </span>
  );
}
