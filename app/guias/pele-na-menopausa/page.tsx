import type { Metadata } from "next";
import { metadados } from "@/lib/seo";
import { Migalhas } from "@/components/seo/json-ld";
import Link from "next/link";
import { Botao, LinkSecundario } from "@/components/marca/botao";
import { ReguaOrnamento } from "@/components/marca/regua";
import { VozDaDra } from "@/components/marca/blocos";
import { revisaoTextos, whatsappHref } from "@/lib/site";

// Guia educativo (COPY.md). R3: sem oferta de tratamento; terapia hormonal fica com o ginecologista.
// [A CONFIRMAR]: frase final em itálico (escrita para ela).
export const metadata: Metadata = metadados({
  titulo: "O que muda na pele na menopausa | Guia da Dra. Helena Duarte, médica",
  descricao: "Colágeno, espessura, elasticidade, hidratação e cicatrização: o que acontece com a pele na menopausa, o que ajuda no dia a dia e quando procurar avaliação médica.",
  caminho: "/guias/pele-na-menopausa/",
});

const estudos = [
  { rotulo: "Colágeno", texto: "A pele pode perder até cerca de 30% do colágeno nos primeiros 5 anos depois da menopausa. Depois, a perda segue mais devagar, em torno de 2% ao ano." },
  { rotulo: "Espessura", texto: "A pele fica mais fina, com queda de até cerca de 1% ao ano nos primeiros 15 anos." },
  { rotulo: "Elasticidade", texto: "Cai cerca de 0,5% ao ano, e as fibras elásticas se degradam mais, o que aparece como flacidez e linhas." },
  { rotulo: "Hidratação", texto: "As glândulas produzem menos oleosidade e suor, e a pele fica mais seca e sensível." },
  { rotulo: "Cicatrização", texto: "Fica mais lenta. Isso também importa para o planejamento de procedimentos, porque a recuperação pode levar mais tempo." },
];

const diaADia = [
  "Protetor solar todos os dias, inclusive em casa perto da janela. O sol acelera a perda de colágeno em qualquer idade.",
  "Hidratante adequado ao seu tipo de pele, de manhã e à noite.",
  "Limpeza suave, sem esfoliar demais uma pele que ficou mais fina.",
  "Sono, alimentação e atividade física também aparecem na pele.",
];

const fontes = [
  { texto: "Calleja-Agius, Muscat-Baron e Brincat, 2007, Skin ageing (Menopause International)", href: "https://www.um.edu.mt/library/oar/bitstream/123456789/6405/1/Jean%20Calleja-Agius%20-%20Skin%20ageing.pdf" },
  { texto: "Brincat et al., 1987 (Obstetrics & Gynecology)", href: "https://pubmed.ncbi.nlm.nih.gov/3120067/" },
  { texto: "Kamp et al., 2022, revisão sobre menopausa e pele", href: "https://academic.oup.com/ced/article/47/12/2117/6966236" },
  { texto: "Zomer e Cooke, 2023 (Frontiers in Physiology)", href: "https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2023.1281071/pdf" },
];

const caixa = "mx-auto max-w-[1200px] px-4 sm:px-6";
const texto = "mx-auto max-w-[58ch]";

export default function GuiaMenopausa() {
  return (
    <>
      <Migalhas itens={[["Pele na menopausa", "/guias/pele-na-menopausa/"]]} />
      <article>
        <header className={`${caixa} pb-12 pt-32 md:pb-16 lg:pt-44`}>
          <div className={texto}>
            <h1 className="text-[clamp(2.5rem,6vw,4.0625rem)]">O que muda na pele na menopausa</h1>
            <ReguaOrnamento className="mt-8" />
            <p className="mt-8 text-lg text-muted-foreground">
              Muita coisa que parece &quot;só idade&quot; tem a ver com a queda do estrogênio. Entender a diferença ajuda a escolher o
              que faz sentido para você, com calma e com informação.
            </p>
          </div>
        </header>

        <div className={`${caixa} pb-16`}>
          <div className={`${texto} grid gap-14`}>
            <section aria-labelledby="estrogenio" className="grid gap-4">
              <h2 id="estrogenio" className="text-2xl md:text-3xl">O estrogênio também cuida da pele</h2>
              <p>
                O estrogênio participa da produção de colágeno, de ácido hialurônico e da oleosidade natural da pele. Quando ele
                cai, a pele muda em várias frentes ao mesmo tempo, e mais rápido nos primeiros anos.
              </p>
            </section>

            <section aria-labelledby="estudos" className="grid gap-4">
              <h2 id="estudos" className="text-2xl md:text-3xl">O que os estudos mostram</h2>
              <dl className="border-t border-border">
                {estudos.map((e) => (
                  <div key={e.rotulo} className="grid gap-1 border-b border-border py-4 sm:grid-cols-4 sm:gap-6">
                    <dt className="font-medium">{e.rotulo}</dt>
                    <dd className="text-muted-foreground sm:col-span-3">{e.texto}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm text-muted-foreground">Médias de estudos; cada mulher passa por isso de um jeito.</p>
            </section>

            <section aria-labelledby="dia" className="grid gap-4">
              <h2 id="dia" className="text-2xl md:text-3xl">O que ajuda no dia a dia</h2>
              <ul className="grid gap-3">
                {diaADia.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 bg-ouro" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">Texto revisado em {revisaoTextos}.</p>
            </section>

            <section aria-labelledby="medico" className="grid gap-4">
              <h2 id="medico" className="text-2xl md:text-3xl">Quando procurar um médico</h2>
              <dl className="grid gap-5">
                <div className="grid gap-1">
                  <dt className="font-medium">Sintomas da menopausa</dt>
                  <dd className="text-muted-foreground">
                    Ondas de calor, alterações do sono, do humor ou da menstruação: converse com o seu ginecologista. A terapia
                    hormonal é uma decisão médica que considera a sua saúde como um todo, e não é indicada só por causa da pele.
                  </dd>
                </div>
                <div className="grid gap-1">
                  <dt className="font-medium">Sinais na pele que pedem avaliação</dt>
                  <dd className="text-muted-foreground">
                    Coceira que não passa, feridas que demoram a cicatrizar, manchas ou pintas novas ou que mudam.
                  </dd>
                </div>
              </dl>
            </section>

            <section aria-labelledby="consulta" className="grid gap-4">
              <h2 id="consulta" className="text-2xl md:text-3xl">Como isso entra na consulta comigo</h2>
              <p>
                Na avaliação, pergunto em que fase você está, como a sua pele mudou e o que incomoda você. Com isso, o plano
                considera a pele que você tem hoje. Às vezes, ele começa pela rotina em casa. Quando há indicação, pode incluir
                procedimentos que agem ao longo de meses, como os{" "}
                <Link href="/procedimentos/bioestimuladores-de-colageno/" className="text-bronze underline decoration-1 underline-offset-4">
                  bioestimuladores de colágeno
                </Link>
                , sempre com prazos e riscos explicados antes.
              </p>
            </section>
          </div>
        </div>

        <section aria-label="Palavra da Dra." className="fechamento">
          <div className={`${caixa} py-20 md:py-28`}>
            <div className={texto}>
              <VozDaDra>
                Cuidar de você nesta fase não precisa ser corrida contra o tempo. Precisa de informação e de um plano que respeite o
                seu ritmo.
              </VozDaDra>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3" data-cta>
                <Botao href={whatsappHref} externo>
                  Agendar consulta
                </Botao>
                <LinkSecundario href="/como-funciona/">Como funciona a consulta</LinkSecundario>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="fontes" className="border-t border-border py-12">
          <div className={caixa}>
            <div className={texto}>
              <h2 id="fontes" className="text-base font-medium tracking-normal">Fontes</h2>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                {fontes.map((f) => (
                  <li key={f.href}>
                    <a href={f.href} target="_blank" rel="noopener noreferrer" className="link-solto underline decoration-1 underline-offset-4 hover:text-tinta">
                      {f.texto}
                      <span className="sr-only"> (abre em nova aba)</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">Conteúdo informativo. Não substitui a consulta médica.</p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
