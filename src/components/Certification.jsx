import PropTypes from "prop-types";

const Certification = ({ title, description, link }) => { 
  return (
    <div className="m-6">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <a href={link}>
        <p className="text-gray-600">{description}</p> 
      </a>
    </div>
  );
};

Certification.propTypes = {
  title: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
  link: PropTypes.string.isRequired, 
};

export default Certification;