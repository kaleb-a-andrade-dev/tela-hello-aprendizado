"use client"; // Indica que esse componente será renderizado no cliente (necessário no Next.js 13+ com App Router)

// Importação de bibliotecas e hooks
import React from "react";
import Image from "next/image"; // Componente otimizado para imagens do Next.js
import { useRouter } from "next/navigation"; // Hook para navegação entre páginas no Next.js

// Componente principal da tela inicial
const TelaInicialPage: React.FC = () => {
  const router = useRouter(); // Hook para redirecionamento de rotas

return (
    // Container principal com grid dividido em 12 linhas
    <div className="w-full h-full desktop:h-screen grid grid-rows-12 bg-[#527063]">
    
      {/* Parte de cima da tela (10/12 da altura) com o vídeo */}
        <div className="row-span-10 flex items-center justify-center">
        <div className="w-full h-full">
            <video
                className="w-full h-full object-contain"
                src="https://skylineip.s3.sa-east-1.amazonaws.com/Programa%C3%A7%C3%A3o/GPL-HELLO-UNIVERSIT%C3%81RIO/Hello.mp4"
                loop // o vídeo será reiniciado automaticamente
                autoFocus // (ineficaz em <video>, pode remover)
                autoSave="true" // (não é aplicável em <video>, pode remover)
                autoPlay // o vídeo começa automaticamente
                controls // exibe os controles padrão (pause, volume, etc.)
            ></video>
        </div>
    </div>

      {/* Rodapé (2/12 da tela) com barra de navegação e botões */}
    <div className="bg-[#25352E] row-span-2 w-full h-full flex justify-between">
        
        {/* Gráfico do lado esquerdo */}
        <div className="w-[25%] h-full relative flex justify-start items-start">
            <Image
            src="/grafismo-tela-inicial.svg"
            fill
            alt="logo hello"
            className="object-contain"
        />
        </div>

        {/* Centro com botão redondo e botão "Pular Vídeo" */}
        <div className="w-40 h-full grow flex justify-center items-center">
        <div className="flex w-[40%] h-20 border-4 border-background rounded-full justify-between">
            
            {/* Botão com ícone play/pause */}
            <div
                className="w-20 h-full p-5 rounded-full rounded-tr-none rounded-br-none bg-background"
                onClick={() => router.push('/menu')} // redireciona para a página do menu
            >
            <div className="w-full h-full relative rounded-full cursor-pointer">
                <Image
                src="/play-pause.svg"
                fill
                alt="logo hello"
                className="object-contain"
                />
            </div>
            </div>

            {/* Botão com texto "Pular Vídeo" */}
            <button
            onClick={() => router.push('/menu')}
            className="w-full h-full text-background text-[1.5vw] flex justify-center items-center tracking-widest"
            >
            PULAR VÍDEO
            </button>
        </div>
        </div>

        {/* Gráfico do lado direito */}
        <div className="w-[25%] h-full relative">
        <Image
            src="/grafismo2-tela-inicial.svg"
            fill
            alt="logo hello"
            className="object-contain"
        />
        </div>

        {/* Botão de voltar no canto superior esquerdo */}
        <div className="absolute top-4 left-4">
        <button
            className="relative w-20 h-20"
            onClick={() => router.push('/')} // volta para a página inicial
        >
            <Image
            src="/back-to-inicial.svg"
            fill
            alt="logo hello"
            className="object-contain"
            />
        </button>
        </div>
    </div>
    </div>
);
};

export default TelaInicialPage; // Exporta o componente
