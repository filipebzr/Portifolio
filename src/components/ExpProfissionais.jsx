const ExpProfissionais = ({ title, cargo }) => {
  return (
    <div className="m-6">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="text-gray-600">{cargo}</p>
    </div>
  );
};

export default ExpProfissionais;
