import PropTypes from "prop-types";

const BtnMenu = ({ Title, Section }) => {
  const scrollToSection = (sectionRef) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }
  };

  return (
    <button
      className="bg-slate-500 rounded-lg hover:bg-slate-200 text-white hover:text-black 
                 px-2 py-1 sm:py-2 text-sm sm:text-base transition-all duration-300
                 w-20 sm:w-full" // Tamanho fixo para mobile e flexível para desktop
      onClick={() => scrollToSection(Section)}
    >
      {Title}
    </button>
  );
};

BtnMenu.propTypes = {
  Title: PropTypes.string.isRequired,
  Section: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default BtnMenu;