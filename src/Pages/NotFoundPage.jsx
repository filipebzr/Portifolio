import { Link } from 'react-router-dom'; // Ou o seu gerenciador de rotas

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#f3f6f8] flex flex-col items-center justify-center p-5 relative">

      <div className="max-w-3xl text-center space-y-6 md:space-y-8">
        {/* Número 404 */}
        <div className="text-[#d3d8dd] text-7xl md:text-9xl font-semibold">
          404
        </div>

        {/* Título */}
        <h1 className="text-2xl md:text-3xl text-gray-900 font-medium">
          Página não encontrada
        </h1>

        {/* Descrição */}
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          O link que você seguiu pode estar quebrado ou a página pode ter sido removida.
          Verifique se você digitou o endereço corretamente ou volte para a página inicial.
        </p>

        {/* Botão de ação */}
        <Link
          to="/"
          className="inline-block bg-[#0a66c2] text-white px-6 py-3 rounded-full
          font-medium hover:bg-[#004182] transition-colors duration-200
          text-base md:text-lg"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;