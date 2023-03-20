import PropTypes from 'prop-types';

const LoginForm = ({ userName, password }) => {
  return (
    <form>
      <input type="text" name="username" value={userName} />
      <input type="password" name="password" value={password} />
      <input type="submit" value="Login" />
    </form>
  );
}

LoginForm.propTypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default LoginForm;