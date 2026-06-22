import Image from "next/image";

export default function Jogadores() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-4xl flex-col py-16 px-6 bg-white dark:bg-black gap-8">
        
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            {"As Estrelas do Confronto"}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            {"Os craques que carregam a responsabilidade de decidir as Finais da NBA."}
          </p>
        </div>

        {/* ESPAÇO PARA UMA ÚNICA IMAGEM CONFIGURADA COMO spurs.webp */}
        <div className="w-full h-[350px] relative bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center">
          <Image
            src="/spurs.webp" 
            alt="Destaques das Finais: Wembanyama e Brunson"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 mt-4">
          {/* SEÇÃO SAN ANTONIO SPURS - WEMBANYAMA */}
          <section className="flex flex-col gap-3 p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 border-l-4 border-zinc-400 pl-3">
              {"Victor Wembanyama (Spurs)"}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-6">
              {"Escreva aqui sobre o impacto do jovem fenômeno francês Victor Wembanyama nas finais. Fale sobre sua estatura impressionante combinada com habilidades de armador, sua dominância na proteção de aro com tocos cruciais e como ele pontua de qualquer lugar da quadra, sendo o pesadelo defensivo do Knicks."}
            </p>
          </section>

          {/* SEÇÃO NEW YORK KNICKS - JALEN BRUNSON */}
          <section className="flex flex-col gap-3 p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 border-l-4 border-orange-500 pl-3">
              {"Jalen Brunson (Knicks)"}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-6">
              {"Escreva aqui sobre o líder indiscutível e coração do New York Knicks. Detalhe a capacidade de Jalen Brunson de controlar o ritmo do jogo, infiltrar no garrafão contra os gigantes do Spurs e pontuar em momentos de extrema pressão. Ele é a mente tática que tenta desmontar o sistema defensivo adversário."}
            </p>
          </section>
        </div>

      </main>
    </div>
  );
}