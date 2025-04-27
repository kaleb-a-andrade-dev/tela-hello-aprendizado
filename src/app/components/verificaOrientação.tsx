"use client"; // Informa ao Next.js que esse código só deve rodar no lado do cliente (requer acesso ao `window`)

// hooks/useOrientation.ts
import { useState, useEffect } from 'react';

const useOrientation = () => {
  // Estado para guardar se a orientação atual é landscape (horizontal)
const [isLandscape, setIsLandscape] = useState<boolean>(true);

useEffect(() => {
    // Função que atualiza o estado com base na orientação da tela
    const updateOrientation = (e?: MediaQueryListEvent) => {
      // Se a função for chamada por um evento (e), usa e.matches
      // Senão, verifica manualmente com window.matchMedia
        const matches = e ? e.matches : window.matchMedia('(orientation: landscape)').matches;
      setIsLandscape(matches); // Atualiza o estado
    };

    // Cria uma media query que verifica se a orientação é landscape
    const mediaQuery = window.matchMedia('(orientation: landscape)');

    // Chamada inicial para definir a orientação assim que o hook montar
    updateOrientation();

    // Escuta mudanças na orientação (ex: girar o celular/tablet)
    mediaQuery.addEventListener('change', updateOrientation);

    // Cleanup: remove o listener ao desmontar o componente
    return () => {
        mediaQuery.removeEventListener('change', updateOrientation);
    };
  }, []); // Esse efeito só roda uma vez (montagem)

  // Retorna true se estiver em landscape, false se for portrait
return isLandscape;
};

export default useOrientation;
