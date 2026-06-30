import Link from "next/link"
import {
  ArrowLeft,
  ShieldCheck,
  Link2,
  MousePointerClick,
  Copy,
  ClipboardPaste,
  ScanSearch,
  CheckCircle2,
  Info,
  Lightbulb,
} from "lucide-react"

export default function AjudaPage() {
  return (
    <div className="min-h-screen bg-[#F5F0F0]">
      {/* Header */}
      <header className="flex h-[8vh] min-h-[56px] items-center justify-between overflow-hidden border-b border-[rgba(98,0,255,0.1)] bg-white">
        <span className="ml-5 flex">
          <Link
            href="/"
            aria-label="Voltar"
            className="flex items-center justify-center rounded-full border-2 border-[#6200FF] p-1 transition hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4 text-[#6200FF]" aria-hidden />
          </Link>
        </span>
        <h1 className="flex-1 text-center text-xl font-bold text-[#6200FF] md:text-3xl">
          Central de Ajuda
        </h1>
        <span className="mr-5 h-7 w-7" aria-hidden />
      </header>

      {/* Main */}
      <main className="mx-auto w-[87%] pb-12 md:w-[40%]">
        {/* Sobre o app */}
        <section className="mt-6 rounded-[10px] border border-[rgba(98,0,255,0.15)] bg-white p-5 shadow-[1px_1px_3px_rgba(182,182,182,0.5)]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-[#6200FF]" aria-hidden />
            <h2 className="text-lg font-bold text-[#3D3D3D]">Sobre o Verifica News</h2>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[#555555]">
            O <strong>Verifica News</strong> é uma ferramenta que ajuda você a descobrir se uma
            notícia é verdadeira ou falsa. Em vez de acreditar em tudo que aparece na internet ou
            em mensagens de aplicativos, você cola o link da notícia aqui e o aplicativo analisa o
            conteúdo, cruzando as informações com fontes confiáveis para te dar um resultado.
          </p>
        </section>

        {/* Como funciona */}
        <section className="mt-5 rounded-[10px] border border-[rgba(98,0,255,0.15)] bg-white p-5 shadow-[1px_1px_3px_rgba(182,182,182,0.5)]">
          <div className="flex items-center gap-2">
            <Info className="h-6 w-6 text-[#6200FF]" aria-hidden />
            <h2 className="text-lg font-bold text-[#3D3D3D]">Como funciona</h2>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[#555555]">
            O funcionamento é bem simples e acontece em três etapas:
          </p>
          <ol className="mt-3 space-y-3">
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E0EEFF] text-sm font-bold text-[#6200FF]">
                1
              </span>
              <p className="text-sm leading-relaxed text-[#555555]">
                Você <strong>copia o link</strong> da notícia que quer verificar.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E0EEFF] text-sm font-bold text-[#6200FF]">
                2
              </span>
              <p className="text-sm leading-relaxed text-[#555555]">
                Você <strong>cola o link</strong> no campo &quot;URL da Notícia&quot; e aperta o
                botão <strong>Analisar Notícia</strong>.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E0EEFF] text-sm font-bold text-[#6200FF]">
                3
              </span>
              <p className="text-sm leading-relaxed text-[#555555]">
                O app mostra se a notícia é <strong>verdadeira</strong> ou <strong>falsa</strong>,
                explica o motivo e lista as fontes consultadas.
              </p>
            </li>
          </ol>
        </section>

        {/* O que é um link */}
        <section className="mt-5 rounded-[10px] border border-[rgba(98,0,255,0.15)] bg-white p-5 shadow-[1px_1px_3px_rgba(182,182,182,0.5)]">
          <div className="flex items-center gap-2">
            <Link2 className="h-6 w-6 text-[#6200FF]" aria-hidden />
            <h2 className="text-lg font-bold text-[#3D3D3D]">O que é um link?</h2>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[#555555]">
            Um <strong>link</strong> (também chamado de URL ou endereço) é o &quot;endereço&quot; de
            uma página na internet. É como o endereço de uma casa, mas em vez de levar até um lugar
            físico, ele leva até uma página específica. Todo link costuma começar com{" "}
            <strong>https://</strong> e parece com isto:
          </p>
          <div className="mt-3 rounded-lg bg-[#E0EEFF] p-3">
            <code className="block break-all text-sm font-semibold text-[#3D3D3D]">
              https://www.portaldenoticias.com/noticia-importante
            </code>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[#555555]">
            É exatamente esse endereço que você vai copiar e colar no Verifica News.
          </p>
        </section>

        {/* Tutorial completo */}
        <section className="mt-5 rounded-[10px] border border-[rgba(98,0,255,0.15)] bg-white p-5 shadow-[1px_1px_3px_rgba(182,182,182,0.5)]">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-[#6200FF]" aria-hidden />
            <h2 className="text-lg font-bold text-[#3D3D3D]">Tutorial completo, passo a passo</h2>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[#555555]">
            Veja como encontrar, copiar e colar o link de uma notícia, mesmo que nunca tenha feito
            isso antes.
          </p>

          <div className="mt-4 space-y-4">
            {/* Passo 1 */}
            <div className="rounded-lg border border-[#eee] p-4">
              <div className="flex items-center gap-2">
                <MousePointerClick className="h-5 w-5 text-[#6200FF]" aria-hidden />
                <h3 className="text-sm font-bold text-[#3D3D3D]">1. Encontrar o link da notícia</h3>
              </div>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#555555]">
                <li>
                  Abra a notícia que você quer verificar (no site, no Google ou tocando no link que
                  você recebeu).
                </li>
                <li>
                  Olhe para a parte de cima da tela do navegador (Chrome, Safari, etc.). Ali existe
                  uma barra comprida com o endereço da página — é a <strong>barra de endereços</strong>.
                </li>
                <li>
                  No celular, essa barra costuma ficar no topo ou na parte de baixo da tela e mostra
                  o endereço do site.
                </li>
              </ul>
            </div>

            {/* Passo 2 */}
            <div className="rounded-lg border border-[#eee] p-4">
              <div className="flex items-center gap-2">
                <Copy className="h-5 w-5 text-[#6200FF]" aria-hidden />
                <h3 className="text-sm font-bold text-[#3D3D3D]">2. Copiar o link</h3>
              </div>
              <p className="mt-2 text-sm font-semibold text-[#3D3D3D]">No celular:</p>
              <ul className="mt-1 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#555555]">
                <li>Toque uma vez na barra de endereços para selecionar o endereço inteiro.</li>
                <li>
                  Mantenha o dedo pressionado sobre o texto até aparecer um menu e toque em{" "}
                  <strong>Copiar</strong>.
                </li>
              </ul>
              <p className="mt-3 text-sm font-semibold text-[#3D3D3D]">No computador:</p>
              <ul className="mt-1 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#555555]">
                <li>Clique uma vez na barra de endereços para selecionar todo o endereço.</li>
                <li>
                  Clique com o botão direito do mouse e escolha <strong>Copiar</strong>, ou aperte
                  as teclas <strong>Ctrl + C</strong> (no Windows) ou{" "}
                  <strong>Command + C</strong> (no Mac).
                </li>
              </ul>
            </div>

            {/* Passo 3 */}
            <div className="rounded-lg border border-[#eee] p-4">
              <div className="flex items-center gap-2">
                <ClipboardPaste className="h-5 w-5 text-[#6200FF]" aria-hidden />
                <h3 className="text-sm font-bold text-[#3D3D3D]">3. Colar o link no Verifica News</h3>
              </div>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#555555]">
                <li>
                  Volte para o Verifica News e toque (ou clique) dentro do campo{" "}
                  <strong>&quot;URL da Notícia&quot;</strong>.
                </li>
                <li>
                  No celular, mantenha o dedo pressionado dentro do campo e toque em{" "}
                  <strong>Colar</strong>.
                </li>
                <li>
                  No computador, clique com o botão direito e escolha <strong>Colar</strong>, ou
                  aperte <strong>Ctrl + V</strong> (Windows) ou <strong>Command + V</strong> (Mac).
                </li>
                <li>O endereço da notícia deve aparecer escrito dentro do campo.</li>
              </ul>
            </div>

            {/* Passo 4 */}
            <div className="rounded-lg border border-[#eee] p-4">
              <div className="flex items-center gap-2">
                <ScanSearch className="h-5 w-5 text-[#6200FF]" aria-hidden />
                <h3 className="text-sm font-bold text-[#3D3D3D]">4. Analisar a notícia</h3>
              </div>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#555555]">
                <li>
                  Aperte o botão roxo <strong>Analisar Notícia</strong>.
                </li>
                <li>Espere alguns segundos enquanto o aplicativo verifica o conteúdo.</li>
              </ul>
            </div>

            {/* Passo 5 */}
            <div className="rounded-lg border border-[#eee] p-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#6200FF]" aria-hidden />
                <h3 className="text-sm font-bold text-[#3D3D3D]">5. Ler o resultado</h3>
              </div>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#555555]">
                <li>
                  O app vai mostrar se a notícia é <strong>verdadeira</strong> ou{" "}
                  <strong>falsa</strong> e o quanto ele está confiante nessa resposta.
                </li>
                <li>Leia a explicação para entender o porquê do resultado.</li>
                <li>
                  Em <strong>&quot;Fontes Consultadas&quot;</strong>, você pode tocar nos links para
                  conferir de onde vieram as informações.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            className="flex h-[50px] items-center justify-center gap-2 rounded-[10px] border border-[#4800bc] bg-[#6200FF] px-6 font-bold text-[#E0EEFF] shadow-[2px_2px_5px_rgba(51,16,107,0.6)] transition-all duration-200 hover:-translate-y-[2.5px] hover:scale-[1.03] active:scale-95"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden />
            Voltar e verificar uma notícia
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-4 h-[20vh] rounded-t-md bg-[#6200FF]" />
    </div>
  )
}
