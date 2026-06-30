"use client"

import type React from "react"

import { useState } from "react"
import {
  CheckCircle2,
  XCircle,
  ChevronDown,
  ScanSearch,
  ShieldQuestion,
  Loader2,
} from "lucide-react"

type Veredito = "verdadeira" | "falsa"

type Resultado = {
  veredito: Veredito
  titulo: string
  explicacao: string
  confianca: number
  fontes: { nome: string; url: string }[]
}

// Conteúdo simulado (protótipo)
const NOTICIAS_VERDADEIRAS: Resultado[] = [
  {
    veredito: "verdadeira",
    titulo: "Brasil registra recorde de geração de energia solar em 2025",
    explicacao:
      "As informações conferem com dados oficiais divulgados por órgãos governamentais e foram confirmadas por múltiplos veículos de imprensa reconhecidos. A linguagem é objetiva, há fontes citadas e os números batem com relatórios públicos do setor energético.",
    confianca: 94,
    fontes: [
      { nome: "Agência Nacional de Energia", url: "https://www.exemplo-gov.com/energia/solar-2025" },
      { nome: "Portal de Notícias Confiável", url: "https://noticias.exemplo.com/economia/energia-recorde" },
      { nome: "Instituto de Pesquisa Energética", url: "https://pesquisa.exemplo.org/relatorios/solar" },
    ],
  },
  {
    veredito: "verdadeira",
    titulo: "Nova vacina passa por aprovação após testes clínicos bem-sucedidos",
    explicacao:
      "O conteúdo é corroborado por publicações científicas revisadas por pares e por comunicados de agências reguladoras de saúde. Não foram encontrados sinais de manipulação ou descontextualização, e a data de publicação é recente e consistente.",
    confianca: 91,
    fontes: [
      { nome: "Agência de Vigilância Sanitária", url: "https://www.exemplo-gov.com/saude/aprovacao-vacina" },
      { nome: "Revista Científica Internacional", url: "https://ciencia.exemplo.org/estudos/vacina-fase3" },
      { nome: "Organização Mundial de Saúde", url: "https://saude.exemplo.com/comunicados/vacina" },
    ],
  },
]

const NOTICIAS_FALSAS: Resultado[] = [
  {
    veredito: "falsa",
    titulo: "Beber água com limão em jejum cura todas as doenças, afirma estudo",
    explicacao:
      "Não foram encontradas fontes confiáveis que sustentem a afirmação. O texto usa termos sensacionalistas como 'cura todas as doenças' e 'milagre', característicos de desinformação. Nenhum estudo científico revisado foi citado e o domínio que publicou tem histórico de conteúdo enganoso.",
    confianca: 88,
    fontes: [
      { nome: "Agência de Checagem de Fatos", url: "https://checagem.exemplo.org/desmentidos/limao-cura" },
      { nome: "Portal de Saúde Baseada em Evidências", url: "https://saude.exemplo.com/mitos/agua-com-limao" },
      { nome: "Coletivo de Jornalismo Investigativo", url: "https://investiga.exemplo.org/fake/limao" },
    ],
  },
  {
    veredito: "falsa",
    titulo: "Cristiano Ronaldo é mobobola?",
    explicacao:
      "A notícia foi desmentida, pois Cristiano Ronaldo nunca foi monobola, isso foi apenas um trecho que música de Kleberiano que sitou pessoas famosas nela dizendo que também são monobolas como forma de meme, porém a notícia se espalhou",
    confianca: 96,
    fontes: [
      { nome: "Checagem do Banco Central", url: "https://checagem.exemplo.org/economia/confisco-poupanca" },
      { nome: "Portal de Fatos", url: "https://fatos.exemplo.com/desmentido/poupanca" },
      { nome: "Agência de Imprensa Oficial", url: "https://www.exemplo-gov.com/comunicados/poupanca" },
    ],
  },
]

function sortear<T>(lista: T[]): T {
  return lista[Math.floor(Math.random() * lista.length)]
}

export function VerificadorNoticias() {
  const [url, setUrl] = useState("")
  const [carregando, setCarregando] = useState(false)
  const [resultado, setResultado] = useState<Resultado | null>(null)
  const [fontesAbertas, setFontesAbertas] = useState(false)

  function analisar(e: React.FormEvent) {
    e.preventDefault()
    setCarregando(true)
    setResultado(null)
    setFontesAbertas(false)

    // Simula a análise: alterna aleatoriamente entre verdadeira e falsa
    setTimeout(() => {
      const ehVerdadeira = Math.random() > 0.5
      const novo = ehVerdadeira ? sortear(NOTICIAS_VERDADEIRAS) : sortear(NOTICIAS_FALSAS)
      setResultado(novo)
      setFontesAbertas(true)
      setCarregando(false)
    }, 1200)
  }

  const verdadeira = resultado?.veredito === "verdadeira"

  return (
    <div className="w-full">
      {/* Verificar notícia */}
      <form onSubmit={analisar} className="w-full">
        <label className="block">
          <h4 className="text-sm font-semibold text-[#3D3D3D]">URL da Notícia</h4>
          <div className="mt-1.5 flex items-center rounded-lg bg-[#E0EEFF] transition focus-within:bg-[#ebf4ff] focus-within:outline focus-within:outline-[3px] focus-within:outline-[#7E2EFF]">
            <input
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://exemplo.com/noticia-importante"
              className="ml-2 h-[50px] w-full border-none bg-transparent text-base text-[#1f2937] placeholder:font-bold placeholder:text-[#7693b3] focus:outline-none"
            />
          </div>
        </label>

        <button
          type="submit"
          disabled={carregando}
          className="mt-4 flex h-[50px] w-full items-center justify-center gap-2 rounded-[10px] border border-[#4800bc] bg-[#6200FF] font-bold text-[#E0EEFF] shadow-[2px_2px_5px_rgba(51,16,107,0.6)] transition-all duration-200 hover:-translate-y-[2.5px] hover:scale-[1.03] active:scale-95 disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:translate-y-0 disabled:hover:scale-100"
        >
          {carregando ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Analisando...
            </>
          ) : (
            <>
              <ScanSearch className="h-5 w-5" />
              Analisar Notícia
            </>
          )}
        </button>
      </form>

      {/* Resultado da análise */}
      <h3 className="mt-6 font-bold text-[#3D3D3D]">Resultado da análise</h3>

      <div
        className={`mt-2 mb-2.5 flex min-h-[260px] flex-col rounded-[10px] border shadow-[1px_1px_3px_rgba(182,182,182,0.5)] ${
          resultado
            ? verdadeira
              ? "border-emerald-200 bg-emerald-50"
              : "border-red-200 bg-red-50"
            : "border-[rgba(182,182,182,0.3)] bg-white"
        }`}
      >
        {!resultado && !carregando && (
          <div className="flex flex-1 flex-col items-center justify-center p-4 text-center text-[#868686]">
            <ShieldQuestion className="mb-1.5 h-12 w-12 text-[#b6b6b6]" aria-hidden />
            <h4 className="m-1.5 text-sm font-semibold text-[#525252]">Aguardando Resultado...</h4>
            <p className="text-xs text-[#868686]">Insira um link acima para começar</p>
          </div>
        )}

        {carregando && (
          <div className="flex flex-1 flex-col items-center justify-center p-4 text-center text-[#868686]">
            <Loader2 className="mb-2 h-12 w-12 animate-spin text-[#6200FF]" aria-hidden />
            <h4 className="m-1.5 text-sm font-semibold text-[#525252]">Analisando a notícia...</h4>
            <p className="text-xs text-[#868686]">Cruzando informações com fontes confiáveis</p>
          </div>
        )}

        {resultado && (
          <div className="flex flex-1 flex-col p-4">
            <div className="flex items-center gap-2">
              {verdadeira ? (
                <CheckCircle2 className="h-7 w-7 shrink-0 text-emerald-600" aria-hidden />
              ) : (
                <XCircle className="h-7 w-7 shrink-0 text-red-600" aria-hidden />
              )}
              <p className="text-base font-bold text-[#3D3D3D]">
                Sua notícia é:{" "}
                <span className={verdadeira ? "text-emerald-700" : "text-red-700"}>
                  {verdadeira ? "VERDADEIRA" : "FALSA"}
                </span>
              </p>
            </div>

            <p className="mt-1 text-sm font-medium text-[#525252]">{resultado.titulo}</p>

            {/* Barra de confiança */}
            <div className="mt-3">
              <div className="mb-1 flex justify-between text-xs text-[#555555]">
                <span>Confiança da análise</span>
                <span className="font-semibold">{resultado.confianca}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-black/5">
                <div
                  className={`h-full rounded-full ${verdadeira ? "bg-emerald-500" : "bg-red-500"}`}
                  style={{ width: `${resultado.confianca}%` }}
                />
              </div>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-[#555555]">{resultado.explicacao}</p>
          </div>
        )}
      </div>

      {/* Fontes consultadas */}
      <div className="mb-2.5 rounded-lg border border-[#b6b6b6] bg-white p-1.5 shadow-[1px_1px_3px_rgba(182,182,182,1)] transition-all">
        <button
          type="button"
          onClick={() => setFontesAbertas((v) => !v)}
          disabled={!resultado}
          className="flex w-full items-center justify-center gap-2 py-1.5 disabled:cursor-not-allowed disabled:opacity-60"
          aria-expanded={fontesAbertas}
        >
          <ChevronDown
            className={`h-3.5 w-3.5 text-[#3D3D3D] transition-transform duration-300 ${
              fontesAbertas ? "rotate-180" : ""
            }`}
            aria-hidden
          />
          <h4 className="text-sm font-semibold text-[#3D3D3D]">Fontes Consultadas</h4>
        </button>

        {fontesAbertas && resultado && (
          <ul className="space-y-1.5 border-t border-[#eee] px-2 pt-2 pb-1">
            {resultado.fontes.map((f) => (
              <li key={f.url} className="text-sm">
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#6200FF] underline-offset-2 hover:underline"
                >
                  {f.nome}
                </a>
                <span className="block truncate text-xs text-[#9a9a9a]">{f.url}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
