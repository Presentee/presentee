// components/Protected.js
import VContainer from './VContainer';
import Button from './Button';

const Join = () => {  
  return(
    <>
      <VContainer style={{display: "inline", marginTop: "30%"}}>
      <input type="text" className="custom-text-input" placeholder="Enter Presentee room ID" />
      <Button style={{width: 200, fontSize: "3rem"}}> Join</Button>
      </VContainer>
    </>
  )
}

export default Join;