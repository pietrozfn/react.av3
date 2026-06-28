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
       
          <section className="flex flex-col gap-3 p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 border-l-4 border-zinc-400 pl-3">
              {"Victor Wembanyama (Spurs)"}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-6">
              {"Victor Wembanyama mostrou por que é considerado o rosto da próxima geração da NBA. Mesmo na derrota dos Spurs para os Knicks nas Finais de 2026, o francês dominou os dois lados da quadra, liderando San Antonio com médias de 26,0 pontos e 11,2 rebotes na série. Seu desempenho incluiu uma atuação de 32 pontos, 8 rebotes e 6 assistências na vitória do Jogo 3, mantendo os Spurs vivos na disputa. Apesar do título ter ficado com Nova York, Wembanyama deixou claro que seu talento e impacto o colocam entre os maiores jogadores da liga pelos próximos anos."}
            </p>
          </section>

       
          <section className="flex flex-col gap-3 p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 border-l-4 border-orange-500 pl-3">
              {"Jalen Brunson (Knicks)"}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-6">
              {"Jalen Brunson foi o grande líder dos Knicks na campanha do título da NBA em 2026. Com atuações consistentes, controle absoluto do ritmo do jogo e um desempenho decisivo nos momentos mais importantes, o armador comandou Nova York rumo ao campeonato contra o San Antonio Spurs. Sua inteligência em quadra, capacidade de pontuar sob pressão e liderança fizeram dele o principal nome das Finais, consolidando seu lugar entre os melhores jogadores da liga e como o grande símbolo da conquista histórica dos Knicks."}
            </p>
          </section>
        </div>

      </main>
    </div>
  );
}