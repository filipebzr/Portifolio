import PropTypes from "prop-types";

const Titles = ({ title }) => { 
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
        {title}
      </h2>
    </div>
  );
};

Titles.propTypes = {
  title: PropTypes.string.isRequired, // Corrigido para "title" (minúsculo)
};

export default Titles;