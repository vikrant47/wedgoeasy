import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import { Router } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import { useEffect } from 'react';
import { AuthManager } from '../../../modules/cms/services/auth.manager';

const Login = () => {
  const login = async(event, addToast) => {
    event.preventDefault();
    const form = event.target;
    try {
      await AuthManager.instance().authenticate(form.email.value, form.password.value, form.rememberMe.value);
    } catch (error) {
      console.error('error while auth ', error);
      if (error.status === 401) {
        useEffect(() => {
          const { addToast } = useToasts();
          addToast('Invalid Email or Password', {
            appearance: 'error',
            autoDismiss: true,
          });
        });
      } else {
        // throw e;
      }
    }
    // Router.push('/p/home/en');
  };
  return (
    <div className='login-content space-pt--r70 space-pb--r70'>
      <Container>
        <Row className='justify-content-center'>
          <Col xl={6} md={10}>
            <div className='login-wrap'>
              <div className='heading-s1 space-mb--20'>
                <h3>Login</h3>
              </div>
              <div>
                <form method='post' onSubmit={login}>
                  <div className='form-group'>
                    <input
                      type='text'
                      required
                      className='form-control'
                      name='email'
                      placeholder='Your Email'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      required
                      type='password'
                      name='password'
                      placeholder='Password'
                    />
                  </div>
                  <div className='login-footer form-group'>
                    <div className='check-form'>
                      <div className='custom-checkbox'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          name='rememberMe'
                          id='exampleCheckbox1'
                          defaultValue
                        />
                        <label
                          className='form-check-label'
                          htmlFor='exampleCheckbox1'
                        >
                          <span>Remember me</span>
                        </label>
                      </div>
                    </div>
                    <a href='#'>Forgot password?</a>
                  </div>
                  <div className='form-group'>
                    <button
                      type='submit'
                      className='btn btn-fill-out btn-block'
                      name='login'
                    >
                      Log in
                    </button>
                  </div>
                </form>
                <div className='different-login'>
                  <span> or</span>
                </div>
                <ul className='btn-login text-center'>
                  <li>
                    <a href='#' className='btn btn-facebook'>
                      <FaFacebookF/>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href='#' className='btn btn-google'>
                      <FaGooglePlusG/>
                      Google
                    </a>
                  </li>
                </ul>
                <div className='form-note text-center space-mt--20'>
                  Don't Have an Account?{' '}
                  <Link href='/other/register'>
                    <a>Sign up now</a>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
