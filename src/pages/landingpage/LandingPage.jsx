import MailchimpSubscribe from 'react-mailchimp-subscribe';

import MainLogo from '../../assets/main-logo.png';
import SecondaryLogo from '../../assets/secondary-logo.png';

import './LandingPage.css';

const LandingPage = () => {
  const url = process.env.REACT_APP_MAILCHIMP_URL;

  const SimpleForm = () => <MailchimpSubscribe url={url} />;

  return (
    <div className='LandingPage'>
      <div className='LandingPage-container'>
        <img
          src={MainLogo}
          alt='Chef Cella'
          className='LandingPage-main-logo'
        />
        <img
          src={SecondaryLogo}
          alt='Lunch Lady'
          className='LandingPage-secondary-logo'
        />
        <h4 className='LandingPage-h4'>
          Sign up with your email to get notified of when my site goes live!
        </h4>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div className='LandingPage-input-container'>
              <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
              {status === 'sending' && (
                <div style={{ color: 'white' }}>sending...</div>
              )}
              {status === 'error' && (
                <div
                  style={{ color: 'white' }}
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              {status === 'success' && (
                <div style={{ color: 'white' }}>Subscribed !</div>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};
export default LandingPage;
