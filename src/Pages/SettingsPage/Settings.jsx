import ThemeButton from 'CustomComponents/ThemeButton/ThemeButton';
import React, { useContext }  from 'react'
import {useNavigate} from 'react-router-dom';
import ThemeContext from 'context/ThemeContext';


const Settings = () => {

  const navigate = useNavigate();
  const {theme, toggle} = useContext(ThemeContext);
  
  return (
    <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
            <div style={{ marginBottom: "1rem" }}>
                <p>Settings Page</p>
            </div>

            <div style={{ marginBottom: "1rem" }}>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>

              {/* Got the change password page to work */}
              <button style={{ marginBottom: "0.5rem" }} onClick={() => navigate('/settings/password')}>Change Password</button>

              {/* Next we will get the change email maybe to work */}
              <button style={{ marginBottom: "0.5rem" }} onClick={() => navigate('/settings/email')}>Change Email</button>

              {/* I think the problem with this is it is changing the mode to a global setting, so when logging out it
              it is saving the setting. I am afraid this could be a very big problem. */}
              <div test-testid='theme-button'>
                <ThemeButton onClick={toggle} theme={theme} />
              </div>

            </div>

        </div>
    </>
  )
}

export default Settings