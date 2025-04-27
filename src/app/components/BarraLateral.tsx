"use client"; // Este componente roda apenas no cliente (necessário para hooks e navegação dinâmica)

import Image from "next/image"; // Componente de imagem otimizada do Next.js
import React, { memo } from "react"; // React + memo para evitar renderizações desnecessárias
import { useRouter } from "next/navigation"; // Hook de navegação do Next.js
import { useContextDefault } from "../../context/Context"; // Hook que acessa o contexto global
import menu from "../utils/menuStructure"; // Estrutura do menu principal

// Componente funcional que é memorizado com React.memo (previne re-renderizações se as props não mudarem)
const BarraLateral: React.FC = memo(function BarraLateral() {
  const router = useRouter(); // Instância do roteador do Next.js
  const context = useContextDefault(); // Usa o contexto para acessar rota e submenu atual
  const selected = context?.selected; // Caminho (rota) atual
    const setSubmenuAndSelected = context
    ? context.setSubmenuAndSelected
    : () => {}; // Função que atualiza o submenu + rota atual

return (
    <>
      {/* Logo superior */}
        <div className="bg-foreground w-full h-20 rounded-3xl grow relative">
        <Image
            src="/logo.svg"
            fill
            alt="logo hello"
            className="object-contain p-6"
        />
    </div>

      {/* Bloco com os botões do menu lateral */}
    <div className="w-full h-20 grow-[8] bg-[#3A6450] rounded-3xl grid grid-rows-8">
        {/* Botões de menu (ocupa 5 das 8 linhas em telas desktop) */}
        <div className="w-full h-full row-span-8 desktop:row-span-5 flex flex-col items-center justify-center">
        {menu.map((item) => (
            <div
                key={item.title}
                className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
            >
            <button
                className={`rounded-full text-[1.3vw] p-2 bg-background text-foreground
                ${selected !== item.caminho && "opacity-50"} hover:opacity-100
                font-semibold w-[80%]`}
                onClick={() => {
                  setSubmenuAndSelected(item.submenu[0], item.caminho); // Atualiza o submenu e rota no contexto
                  router.push(item.caminho); // Redireciona para a rota clicada
                }}
            >
                {item.title} {/* Título do botão */}
            </button>
            </div>
        ))}
        </div>

        {/* Imagem decorativa inferior (só aparece em desktop) */}
        <div className="desktop:row-span-3 desktop:block hidden w-full h-full relative">
          <Image
            src="/grafismo-menu.svg"
            fill
            alt="frutas no pé imagens"
            className="object-cover rounded-3xl rounded-l-none"
          />
        </div>
      </div>

      {/* Botão inferior para voltar para a tela de menu principal */}
      <div
        className="w-full h-20 bg-foreground rounded-3xl text-background font-semibold flex items-center justify-center cursor-pointer"
        onClick={() => router.push("/menu")} // Navega para rota "/menu"
      >
        <div className="w-20 h-full relative mx-4">
          <Image
            src="/seta-menu.svg"
            fill
            alt="seta para direita"
            className="object-contain"
        />
        </div>
        <p className="w-full h-full flex justify-center items-center text-[1.2vw]">
        IR PARA O HOME
        </p>
    </div>
    </>
);
});

export default BarraLateral;
