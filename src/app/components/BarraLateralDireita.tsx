"use client"; // Necessário para que o componente use hooks como `useRouter` no lado do cliente

import Image from 'next/image'; // Componente de imagem otimizada do Next.js
import React from 'react';
import { useRouter } from "next/navigation"; // Hook de navegação do Next.js

// Componente funcional React
const BarraLateralDireita: React.FC = () => {
    const router = useRouter(); // Permite redirecionar o usuário para outra rota

    return (
        // Container fixo no canto direito da tela, com altura total e largura de 1/12 da tela
        <div className="col-span-1 bg-foreground w-1/12 top-0 right-0 h-full flex flex-col justify-end items-center fixed z-10">
            
            {/* Botão com imagem de "home", posicionado na parte inferior */}
            <button className=''>
                <Image
                    src='/home.svg' // Caminho da imagem do botão (ícone de home)
                    alt='voltar para o menu inicial'
                    width={100}
                    height={100}
                    onClick={() => router.push('/')} // Ao clicar, redireciona para a página inicial "/"
                />
            </button>
        </div> 
    );
};

export default BarraLateralDireita;
