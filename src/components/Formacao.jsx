const Formacao = () => {
  return (
    <div className="p-6 border-b">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Formação Acadêmica
      </h2>
      <div className=" flex">
        <div className="mb-4 p-2 w-1/3">
        {/* Formação 1 */}
          <h3 className="text-lg font-medium text-gray-900">
            UNIESP Centro Universitário
          </h3>
          <p className="text-gray-600">
            Tecnólogo em Análise e Desenvolvimento de Sistemas | Ago 2023 - Jul
            2025
          </p>
        </div>

        {/* Formação 2 */}
        <div className="mb-4  p-2 w-1/3">
          <h3 className="text-lg font-medium text-gray-900">
            Universidade Federal da Paraíba
          </h3>
          <p className="text-gray-600">
            Bacharelado em Engenharia Ambiental e Sanitária | 2014 - 2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default Formacao;
