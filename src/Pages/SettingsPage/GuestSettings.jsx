import ThemeButton from 'CustomComponents/ThemeButton/ThemeButton';
import React, { useContext }  from 'react'
import {useNavigate} from 'react-router-dom';
import ThemeContext from 'context/ThemeContext';
import Button from 'CustomComponents/Button';


const GuestSettings = () => {

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
            height: "75vh",
            fontSize: "calc(10px + 2vmin)",
          }}
        >
            <div style={{ marginBottom: "1rem" }}>
                <p>Guest Settings</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>

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

export default GuestSettings