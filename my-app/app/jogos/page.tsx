import Image from "next/image";

export default function Jogos() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-4xl flex-col py-16 px-6 bg-white dark:bg-black gap-8">
        
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            {"Resumo Oficial das Finais NBA 2026"}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            {"Tabela de resultados e evolução da série histórica de 5 jogos disputada em junho de 2026."}
          </p>
        </div>

        {/* IMAGEM DA PÁGINA */}
        <div className="w-full h-[200px] relative bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center">
          <Image
            src="/favicon.ico" 
            alt="Logotipo Oficial da NBA"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* COMPILADO EXATO COM BASE NA IMAGEM DA WIKIPÉDIA */}
        <div className="grid gap-6 md:grid-cols-2">
          
          {/* JOGO 1 */}
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <span className="text-xs font-mono uppercase text-zinc-400">{"Jogo 1 — 3 de Junho"}</span>
            <h3 className="text-xl font-bold text-black dark:text-zinc-50 mt-1 mb-2">{"New York Knicks 105 x 95 San Antonio Spurs"}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-6">
              {"Os Knicks abriram a série jogando fora de casa em San Antonio e conquistaram uma grande vitória por 105 a 95, abrindo 1-0 na série. Jalen Brunson comandou as ações ofensivas do time de Nova York superando a marcação de Victor Wembanyama."}
            </p>
          </div>
          
          {/* JOGO 2 */}
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <span className="text-xs font-mono uppercase text-zinc-400">{"Jogo 2 — 5 de Junho"}</span>
            <h3 className="text-xl font-bold text-black dark:text-zinc-50 mt-1 mb-2">{"New York Knicks 105 x 104 San Antonio Spurs"}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-6">
              {"Em um confronto espetacular e decidido no último arremesso, os Knicks venceram novamente fora de casa por 105 a 104, ampliando a vantagem na série para 2-0 e deixando a franquia de Nova York em excelente situação."}
            </p>
          </div>

          {/* JOGO 3 */}
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <span className="text-xs font-mono uppercase text-zinc-400">{"Jogo 3 — 8 de Junho"}</span>
            <h3 className="text-xl font-bold text-black dark:text-zinc-50 mt-1 mb-2">{"San Antonio Spurs 115 x 111 New York Knicks"}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-6">
              {"Mudando o palco para o Madison Square Garden, os Spurs reagiram de forma impressionante. Liderados por uma atuação monumental de Victor Wembanyama, San Antonio venceu na prorrogação por 115 a 111, reduzindo a série para 1-2."}
            </p>
          </div>

          {/* JOGO 4 */}
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <span className="text-xs font-mono uppercase text-zinc-400">{"Jogo 4 — 10 de Junho"}</span>
            <h3 className="text-xl font-bold text-black dark:text-zinc-50 mt-1 mb-2">{"San Antonio Spurs 106 x 107 New York Knicks"}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-6">
              {"Mais uma partida eletrizante resolvida por apenas um ponto! Os Knicks conseguiram segurar a reação de San Antonio, fecharam o jogo em 107 a 106 jogando no Garden e abriram uma vantagem confortável de 3-1 no agregado."}
            </p>
          </div>

          {/* JOGO 5 — O MOMENTO DO TÍTULO CONFORME A TABELA */}
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg md:col-span-2 bg-zinc-50 dark:bg-zinc-900/50">
            <span className="text-xs font-mono uppercase text-orange-500 font-bold">{"Jogo 5 — 13 de Junho — O Jogo do Título"}</span>
            <h3 className="text-2xl font-black text-orange-600 dark:text-orange-500 mt-1 mb-4">{"New York Knicks 94 x 90 San Antonio Spurs (Série: 4-1)"}</h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-base leading-7">
              {"A consagração histórica de Nova York! Jogando fora de casa em um sábado à noite, o New York Knicks derrotou os Spurs por 94 a 90 em um jogo extremamente físico. Com o placar final fechando a série em 4-1, os Knicks sagraram-se Campeões da NBA, superando os esforços defensivos de Victor Wembanyama e consagrando Jalen Brunson como o herói de uma jornada inesquecível rumo ao topo do basquete mundial!"}
            </p>
          </div>

        </div>

      </main>
    </div>
  );
}