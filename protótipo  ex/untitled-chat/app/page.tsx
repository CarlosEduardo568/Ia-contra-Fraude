import Link from "next/link"
import { HelpCircle } from "lucide-react"
import { VerificadorNoticias } from "@/components/verificador-noticias"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F5F0F0]">
      {/* Header */}
      <header className="flex h-[8vh] min-h-[56px] items-center justify-between overflow-hidden border-b border-[rgba(98,0,255,0.1)] bg-white">
        <span className="ml-5 flex">
          <Link
            href="/ajuda"
            aria-label="Ajuda"
            className="flex items-center justify-center rounded-full border-2 border-[#6200FF] p-1 transition hover:scale-105"
          >
            <HelpCircle className="h-4 w-4 text-[#6200FF]" aria-hidden />
          </Link>
        </span>
        <h1 className="flex-1 text-center text-xl font-bold text-[#6200FF] md:text-3xl">
          Verifica News
        </h1>
        {/* espaçador para centralizar o título */}
        <span className="mr-5 h-7 w-7" aria-hidden />
      </header>

      {/* Main */}
      <main className="mx-auto w-[87%] pb-10 md:w-[34%]">
        {/* Apresentação */}
        <div className="p-2.5 text-center text-sm">
          <div className="mx-auto h-[100px] w-[100px] rounded-full bg-[url('/assets/verificanews-icon.svg')] bg-cover bg-center" />
          <h1 className="mt-2 text-lg font-bold text-[#3D3D3D]">Verificador de Notícias</h1>
          <p className="mt-1 leading-relaxed text-[#555555]">
            Identifique desinformação e fake news em segundos usando inteligência artificial
            avançada.
          </p>
        </div>

        <VerificadorNoticias />
      </main>

      {/* Footer */}
      <footer className="mt-4 h-[30vh] rounded-t-md bg-[#6200FF]" />
    </div>
  )
}
