import './MainStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgFormComponent from "./ImgFormComponent.jsx";
import TextFormComponent from "./TextFormComponent.jsx";
import VoiceFormComponent from "./VoiceFormComponent.jsx";
import VideoFormComponent from "./VideoFormComponent.jsx";

const Ai_Check_Component = () => {
  return (
    <div >
          <div style={{textAlign:"center"}}>
              <ul style={{ display: "inline-block",textAlign: "center",marginRight: "30px",listStyle: "none"}} > 
                <li><TextFormComponen/></li>
                <li><VoiceFormComponent/></li>
              </ul>
              <ul style={{ display: "inline-block",textAlign: "center",marginRight: "30px",listStyle: "none"}} > 
                <li><ImgFormComponent/></li>
                <li><VideoFormComponent/></li>
              </ul>
          </div>
    </div>
  )
}
export default AiCheckComponent;