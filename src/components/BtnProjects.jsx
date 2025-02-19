import PropTypes from "prop-types";

const BtnProjects = ({ projeto, cor, link }) => {
  return (
    <a
      href={`/${link}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`mt-2 inline-block bg-${cor}-400 font-semibold text-black hover:text-white px-4 py-2 rounded-lg hover:bg-${cor}-700 transition-colors text-sm`}
    >
      Projetos {projeto} →
    </a>
  );
};
BtnProjects.propTypes = {
  projeto: PropTypes.string.isRequired,
  cor: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BtnProjects;
