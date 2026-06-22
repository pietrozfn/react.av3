import Image from "next/image";

export default function Analise() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-4xl flex-col py-16 px-6 bg-white dark:bg-black gap-8">
        
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            {"Raio-X Tático: O Caminho para a Vitória"}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            {"Uma análise profunda de estratégias, forças, fraquezas e estatísticas coletivas da série."}
          </p>
        </div>

        {/* IMAGEM GRÁFICA/TÁTICA */}
        <div className="w-full h-[200px] relative bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center">
          <Image
            src="/favicon.ico" 
            alt="Gráficos estatísticos e táticos da grande final"
            width={100}
            height={100}
          />
          <span className="absolute bottom-2 right-2 text-xs text-zinc-400">{"[Imagem: Quadro Tático / Estatísticas]"}</span>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-orange-500">{"A Chave para o Knicks"}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-6">
              {"A equipe de Nova York controlou o ritmo do perímetro com Jalen Brunson. A grande arma foi a infiltração agressiva combinada com passes rápidos para desmontar a defesa de San Antonio, anulando o fator de tocos de Wembanyama longe do garrafão."}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-zinc-500 dark:text-zinc-400">{"A Estratégia do Spurs"}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-6">
              {"San Antonio centrou seu sistema na proteção de aro monstruosa de Victor Wembanyama. No entanto, a dificuldade de conter a transição veloz dos Knicks nos segundos finais dos jogos 2 e 4 custou caro para a franquia do Texas."}
            </p>
          </div>
        </div>

        {/* O MOMENTO DO TÍTULO — CORRIGIDO COM SINTAXE SEGURA */}
        <div className="mt-4 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg text-center border border-zinc-200 dark:border-zinc-800">
          <span className="text-xs font-mono uppercase text-orange-500 font-bold">{"O Momento do Título (Série: 4-1)"}</span>
          <p className="text-lg font-medium text-black dark:text-zinc-200 mt-2 leading-7">
            {"O New York Knicks sagrou-se campeão após fechar a série por 4 a 1 com uma vitória marcante por 94 a 90 em San Antonio! Jalen Brunson controlou a bola nos segundos finais, garantindo o título histórico após superar a resistência brilhante de Victor Wembanyama."}
          </p>
        </div>

      </main>
    </div>
  );
}