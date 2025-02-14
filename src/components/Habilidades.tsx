import React from "react";

const Habilidade = ({ habilidade, color, percentage }) => {
  const colors = {
    tech: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      stroke: "#93c5fd", // Cor correspondente ao azul
    },
    eng: {
      bg: "bg-green-200",
      text: "text-green-700",
      stroke: "#86efac", // Cor correspondente ao verde
    },
    default: {
      bg: "bg-gray-100",
      text: "text-gray-800",
      stroke: "#e5e7eb", // Cinza claro
    },
  };

  const selectedColor = colors[color] || colors.default;

  if (percentage !== undefined) {
    const raio = 40;
    const circunferencia = 2 * Math.PI * raio;
    const offset = circunferencia - (percentage / 100) * circunferencia;

    return (
      <div className="flex items-center justify-center"> 
        <div className="relative w-20 h-10 mr-2 mb-2 items-center justify-center">
          {/* Container para cortar a metade inferior */}
          <div className="absolute w-20 h-10">
            <svg
              className="w-20 h-20"
              viewBox="0 0 100 100"
              style={{ transform: "rotate(-90deg)" }}
            >
              {/* Fundo do gráfico */}
              <circle
                cx="50"
                cy="50"
                r={raio}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="10"
                opacity="0.3"
              />
              {/* Preenchimento baseado na porcentagem */}
              <circle
                cx="50"
                cy="50"
                r={raio}
                fill="none"
                stroke={selectedColor.stroke}
                strokeWidth="10"
                strokeDasharray={`${circunferencia} ${circunferencia}`}
                strokeDashoffset={offset}
              />
            </svg>
          </div>
          {/* Texto da habilidade */}
          <span
            className={`absolute text-base items-center justify-center -bottom-2 left-0 right-0 text-center ${selectedColor.text} text-sm font-semibold`}
          >
            {habilidade}
          </span>
        </div>
      </div>
    );
  }

  // Caso sem porcentagem (estilo original)
  return (
    <span
      className={`${selectedColor.bg} ${selectedColor.text} px-3 py-1 rounded-full text-lg font-semibold mr-2 mb-2`}
    >
      {habilidade}
    </span>
  );
};

export default Habilidade;
