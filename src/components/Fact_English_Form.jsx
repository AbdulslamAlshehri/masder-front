import "./Main_Style.css";
import { useState } from 'react';
import { Modal, Button, Form, Container, Row, Col,Stack } from 'react-bootstrap';
import axios from 'axios';

const Text_Form_Component = () => {
  const [show, set_Show] = useState(false);
  const [text, set_Text] = useState('');
  const [upload_Status, set_Upload_Status] = useState(null); 
  const [show_Second_Modal, set_Show_Second_Modal] = useState(false);
  const [error_Visible, set_Error_Visible] = useState(false);  // New state for error visibility
  const [Links, set_Links] = useState([]);
  const [Cliam_Result, set_Cliam_Result] = useState('');
  const [Determination_Result, set_Determination_Result] = useState('');
  const [Explanation_Result, set_Explanation_Result] = useState('');
  const [percentage, set_Percentage] = useState('');
  
  const Handle_Show = () => set_Show(true);

  const Handle_Close_Second_Modal = () => { 
    set_Text(''); 
    set_Show_Second_Modal(false);
  }

  const Handle_Close = () => {
    set_Show(false);
    set_Upload_Status(null);
    set_Text(''); 
    set_Error_Visible(false);
  };

  const Submit_Form = () =>{
    set_Show_Second_Modal(true);
    set_Show(false);
    set_Upload_Status(null);
  }

  const Handle_Text_Change = (Event) => {
    const input_Text = Event.target.value;
    set_Text(input_Text);

    // Regex to detect non-English characters
    if (/[^a-zA-Z0-9 .,?!'"()&$%-_@:;\n]/.test(input_Text)) {
      set_Error_Visible(true);
    } else {
      set_Error_Visible(false);
    }
  };

  const handleFormSubmit = async (Event) => {
    Event.preventDefault();
    console.log('Show Text submitted:', text);

    try {
      const response = await axios.post('https://masdar-production.up.railway.app/predict/en', { text });

      console.log('Text uploaded successfully', response.data);
      set_Upload_Status('Text uploaded successfully');
      set_Determination_Result("True");
      var percentage = response.data.percentage * 100;
      percentage = percentage.toFixed(2);
      set_Percentage(percentage)
      Submit_Form()
    } catch (error) {
      console.error('Error uploading text', error);
      set_Upload_Status('Error uploading text');
    }
  };

  return (
    <>
      <Button variant="dark" className={"button-dimension D12"} onClick={Handle_Show} block>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={"bi bi-fonts ICONS"} viewBox="0 0 16 16">
          <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479z"/>
        </svg>
      </Button>
      <p className="Paragraph_Under_Button">Check English text</p>

      <Modal size="md" show={show} onHide={Handle_Close} backdrop="static" keyboard={false} centered>
        <Modal.Header className={"Modal_Header"} closeButton>
          <Modal.Title className="M10">Provide your English text:</Modal.Title>
        </Modal.Header>

        <Modal.Body className="Modal_Body" style={{paddingBottom: "30px", maxHeight: "520px"}}>
          <form onSubmit={handleFormSubmit}>
            <Form.Control className="custom-textarea" as="textarea" value={text} onChange={Handle_Text_Change} placeholder="Type your text here..." style={{ height: '200px', border: "none" }} />
            {error_Visible && (
              <div id="showMe" className='Text_Message_Error'>
                <svg style={{display:"inline"}} aria-hidden="true" className="stUf5b qpSchb" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                  </svg> &nbsp;&nbsp;Text must be in English
              </div>
            )}
            {text && !error_Visible ? (
              <div style={{ textAlign: "center" }}>                                         
                <Button variant="dark" className={"D12 D11"} type="submit" centered>Submit</Button>
              </div>
            ) : (
              <div style={{ textAlign: "center" }}>
                <Button disabled className={"D11"} variant="dark" type="submit">Submit</Button>
              </div>
            )}
          </form>
          {upload_Status && (<span></span>)}
        </Modal.Body>
      </Modal>

      <Modal show={show_Second_Modal} onHide={Handle_Close_Second_Modal} size="xl" animation={false} centered>
        <div className={"Result_Background_Color p-3 shadow"} style={{ opacity:"1",backgroundColor:"rgb(114, 181, 184)",borderRadius: "5px", color: "black" }}>
          <Container>
            <Row>
              <Col xs={12} md={12}>
                <Modal.Body className={"Result_Background_Color"} style={{padding:"1rem 0px"}}>
                  <h2 className="Title_Result">Results</h2>
                  <div style={{width:"0% 100%"}}>
                  <Stack  gap={3}>
                    <div id="scroll" style={{ maxHeight: "600px", overflowY: "auto",borderRadius: "5px",backgroundColor:"white",minHeight: "400px" }}>
                      <div className="p-2"><h5 style={{ display: "inline" }}>Cliam: </h5>{Cliam_Result}</div>
                      <div className="p-2"><h5 style={{ display: "inline" }}>Determination: </h5>{Determination_Result}</div>
                      <div className="p-2"><h5 style={{ display: "inline" }}>Explanation: </h5>{Explanation_Result}</div>
                      <div className="p-2"><h5 style={{ display: "inline" }}>Percentage: </h5>{percentage}%</div>
                        <div className="p-2"><h5 >Source:</h5>
                      <ul style={{ listStyleType: "none"}}>
                          {Links.map(Link => (
                              <li style={{margin:"0% 0% 0% 6%"}} className="p-2" key={Link.id} ><a href={Link.url}>{Link.title}</a></li>
                        ))}
                      </ul>
                        </div>
                    </div>
                  </Stack>
    </div>
                  <div style={{textAlign:"right"}}>
                    <Button className="Go_Back_Buttons D12" onClick={Handle_Close_Second_Modal} variant="dark">
                      ← Go Back
                    </Button>
                  </div>
                </Modal.Body>
              </Col>
            </Row>
          </Container>
        </div>
      </Modal>
    </>
  );
}

export default Text_Form_Component;
