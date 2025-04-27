import { CircularProgress } from "@mui/material"; // Componente de loading em forma de círculo da MUI

const LoadingOverlay = () => {
  return (
    // Renderiza o círculo de progresso (spinner) com estilo customizado
    <CircularProgress
      size={30} // Tamanho do spinner (em pixels)
      color="secondary" // Cor definida como secundária do tema MUI
      sx={{
        position: "fixed",     // Posicionamento fixo na tela (não depende do fluxo do layout)
        top: '1%',             // Distância do topo da tela (1%)
        right: '1%',           // Distância da direita (1%)
        width: "100vw",        // Largura total da viewport (não necessário nesse contexto)
        height: "100vh",       // Altura total da viewport (não necessário nesse contexto)
        zIndex: 9999,          // Altamente sobreposto — fica acima de tudo
      }}
    />
  );
};

export default LoadingOverlay;
// O componente `LoadingOverlay` renderiza um círculo de carregamento (spinner) fixo na tela, posicionado no canto superior direito. Ele utiliza o componente `CircularProgress` da biblioteca Material-UI (MUI) para exibir o spinner, com tamanho e cor customizados. O estilo é aplicado através da propriedade `sx`, que permite definir estilos CSS diretamente no componente. O `zIndex` é definido como 9999 para garantir que o spinner fique sobreposto a outros elementos da página.