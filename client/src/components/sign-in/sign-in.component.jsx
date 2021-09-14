import React from 'react';
import { Redirect } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { login } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            loading: false,
        };
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            loading: true,
          });

          const { dispatch, history } = this.props;

            dispatch(login(this.state.username, this.state.password))
              .then(() => {
                history.push("/profile");
                window.location.reload();
              })
              .catch(() => {
                this.setState({
                  loading: false
                });
              });
    }

    render() {
        const { isLoggedIn, message } = this.props;

         if (isLoggedIn) {
             return <Redirect to="/profile" />;
         }

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your Hash Handle and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='username' type='username' label='hash handle' handleChange={this.handleChange} value={this.state.username} required />
                    <FormInput name='password' type='password' label='password' handleChange={this.handleChange} value={this.state.password} required />
                    <CustomButton type='submit'>Sign in</CustomButton>
                    {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.user;
    const { message } = state.message;
    return {
      isLoggedIn,
      message
    };
  }
  
  export default connect(mapStateToProps)(SignIn);