import PropTypes from 'prop-types';

const ExpProfissionais = ({ title, cargo }) => {
  return (
    <div className="mb-6">
      {/* Só renderiza o h3 se title existir */}
      {title && <h3 className="text-xl my-4 font-semibold text-gray-800">{title}</h3>}
      <p className="text-gray-600 font-semibold text-lg">{cargo}</p>
    </div>
  );
};

ExpProfissionais.propTypes = {
  title: PropTypes.string, // title é opcional
  cargo: PropTypes.string.isRequired,
};

export default ExpProfissionais;