// components/Protected.js
import VContainer from 'components/CustomComponents/Containers';
import Button from 'components/CustomComponents/Button';

const Join = () => {  
  return (
    <>
      <VContainer style={{display: "inline", marginTop: "30%"}}>
        <input type="text" className="custom-text-input" placeholder="Enter Presentee room ID" />
        <Button style={{width: 200, fontSize: "3rem"}}>Join</Button>
      </VContainer>
    </>
  );
}

export default Join;