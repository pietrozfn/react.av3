import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center py-16 px-6 bg-white dark:bg-black sm:items-start gap-8">
        
    
        <div className="w-full h-[300px] relative bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
          <Image
            src="/NewYorkKnicks.png" 
            alt="New York Knicks Campeão 2026"
            width={400}
            height={150}
            className="object-contain dark:invert"
            priority
          />
        </div>
        
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-orange-500 text-white rounded-full">
            Fim do Jejum de 53 anos!
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Knicks é Letal no Fim, vence os Spurs e conquista a NBA
          </h1>
          <p className="max-w-2xl text-xl leading-8 text-zinc-600 dark:text-zinc-400">
            A franquia de Nova York derrotou o San Antonio Spurs por 94 a 90 no jogo decisivo, fechou a série histórica em 4 a 1 e garantiu o seu terceiro título na história da liga norte-americana!
          </p>
        </div>

      </main>
    </div>
  );
}
