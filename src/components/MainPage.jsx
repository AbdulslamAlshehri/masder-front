import "./Main_Style.css";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ai_Check_Component from "./Ai_Check_Component";
import Fact_Check_Component from "./Fact_Check_Component.jsx.jsx";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Header_2 from './Header_2';
import Footer_1 from './Footer_1';
function Ai_Check_Page() {
  return <Ai_Check_Component/>;
}

function Fact_Check_Page() {
  return <Fact_Check_Component/>;
}

const MainPage = () => {
  const [Current_Page, set_Current_Page] = useState('Ai_Check_Page');
  const [selectedValue, setSelectedValue] = useState(1);

  const handleSelection = (value, setPage) => {
    setSelectedValue(value);
    setPage();
  };

  return (
    <>
      <div className='backgroundimage'>
     <Header_2/>
      <div className="middle">
    
        
      <h1 className={"centered Main_Page_Title"} style={{ textAlign: "center" }}>{Current_Page === 'Ai_Check_Page' ? 'Content Verfication' : 'Claim Authentication'}</h1>
        
        <div style={{textAlign:"center"}}>
        <ToggleButtonGroup style={{margin:"10px 0px 10px 0px",borderRadius:"18px"}} type="radio" name="options" defaultValue={1}>
        <ToggleButton className={`main-page-buttons ${selectedValue === 1 ? 'default-button' : ''}`} style={{borderRadius:"18px"}} variant="dark"  id="tbg-radio-1" value={1} onClick={() => handleSelection(1, () => set_Current_Page('Ai_Check_Page'))}>
        Content Verfication
        </ToggleButton>
        <ToggleButton size="sm" style={{visibility: "hidden"}} id="tbg-radio-2" value={2}>
         
        </ToggleButton>
        <ToggleButton className={`main-page-buttons ${selectedValue === 3 ? 'default-button' : ''}`} style={{borderRadius:"18px"}} variant="dark" id="tbg-radio-3" value={3} onClick={() => handleSelection(3, () => set_Current_Page('Fact_Check_Page'))}>
          Claim Authentication
        </ToggleButton>
    </ToggleButtonGroup>
    <br/>
       
    </div>

        <p className="centered" style={{ textAlign: "center",marginBottom:"20px" }}>
          Please select the type of content you will provide
        </p>

        {Current_Page === 'Ai_Check_Page' ? <Ai_Check_Page /> : <Fact_Check_Page />}

      </div>
    </div>
      <Footer_1/>
  </>
  )
}
export default MainPage;
