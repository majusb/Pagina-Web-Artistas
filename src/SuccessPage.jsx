import PropTypes from 'prop-types';

const SuccessPage = ({ onRepeat }) => (
  <div>
    <h2>Contratação Registrada com Sucesso!</h2>
    <button onClick={onRepeat}>Voltar para a pesquisa</button>
  </div>
);

SuccessPage.propTypes = {
  onRepeat: PropTypes.func.isRequired,
};

export default SuccessPage;