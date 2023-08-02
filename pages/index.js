import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import WelcomeForm from '../components/forms/WelcomeForm';

function Home() {
  const { user } = useAuth();

  const [budget] = useState(false);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {
        !budget ? (
          <>
            <WelcomeForm />
          </>
        ) : (
          <div>
            <h1>Hello {user.fbUser.displayName}! </h1>
            <p>Your Bio: {user.bio}</p>
            <p>Click the button below to logout!</p>
            <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        )
    }
    </div>
  );
}

export default Home;
