"use client"; // Habilita o uso de hooks e recursos do lado do cliente

import Image from "next/image"; // Componente de imagem otimizada do Next.js
import React from "react";
import { useRouter } from "next/navigation"; // Hook para navegação programática
import { useContextDefault } from "../../context/Context"; // Acessa o contexto global
import menu from "../utils/menuStructure"; // Estrutura do menu com títulos, rotas e submenus

const MenuPage: React.FC = () => {
  const router = useRouter(); // Controle de navegação
  const context = useContextDefault(); // Contexto global para armazenar a rota e submenu atual
  const setSubmenuAndSelected = context
    ? context.setSubmenuAndSelected
    : () => {}; // Função que altera o submenu e rota no contexto global

  return (
    // Layout da tela em grid com 12 colunas
    <div
      className="w-full h-full desktop:h-screen grid grid-cols-12 justify-center items-center bg-[#3A6450] font-[Montserrat]"
      style={{ minHeight: "800px" }}
    >
      {/* COLUNA ESQUERDA — Barra lateral */}
      <div className="col-span-3 w-full h-full py-4 px-8 flex flex-col gap-y-4">

        {/* LOGO HELLO */}
        <div className="bg-background w-full h-20 rounded-xl grow relative">
          <Image
            src="/logo-hello-amarelo.svg"
            fill
            alt="logo hello"
            className="object-contain p-6"
          />
        </div>

        {/* MENU COM BOTÕES */}
        <div className="w-full desktop:h-20 grow-[8] bg-background rounded-xl flex justify-center items-center">
          <div className="row-span-5 flex flex-col items-center justify-center">
            {menu.map((item) => (
              <div
                key={item.title}
                className="flex items-start justify-start transition-all duration-300 ease-in-out text-left w-full h-full"
              >
                <button
                  className="rounded-full p-6 flex justify-start text-[1.3vw] bg-background text-[#3A6450] text-left hover:opacity-100 font-semibold w-[80%]"
                  onClick={() => {
                    setSubmenuAndSelected(item.submenu[0], item.caminho); // Atualiza o submenu e rota selecionada no contexto
                    router.push(item.caminho); // Redireciona para a rota
                  }}
                >
                  {item.title} {/* Nome do item do menu */}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* BOTÃO PARA INÍCIO */}
        <div
          className="w-full h-20 bg-background rounded-xl font-semibold flex items-center justify-center cursor-pointer"
          onClick={() => router.push("/inicial")} // Vai para a tela inicial
        >
          <div className="w-20 h-full relative mx-4">
            <Image
              src="/seta-verde.svg"
              fill
              alt="seta para direita"
              className="object-contain"
            />
          </div>
          <p className="w-full h-full flex justify-center items-center text-[1.2vw]">
            IR PARA O INÍCIO
          </p>
        </div>
      </div>

      {/* COLUNA DIREITA — Conteúdo principal com imagem de fundo */}
      <div className="col-span-9 w-full h-full py-4 pr-8">
        <div className="w-full h-full bg-background rounded-xl relative border-4 border-white">
          <Image
            src="/imagem-menu.png"
            fill
            alt="logo hello"
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* CAMADA DECORATIVA FIXA AO FUNDO (desktop apenas) */}
      <div className="w-full h-full desktop:block desktop:absolute hidden prevent-clicks select-none pointer-events-none">
        <Image
          src="/grafismo-menu.png"
          fill
          alt="frutas no pé imagens"
          className="object-cover prevent-clicks select-none pointer-events-none"
        />
      </div>
    </div>
  );
};

export default MenuPage;
