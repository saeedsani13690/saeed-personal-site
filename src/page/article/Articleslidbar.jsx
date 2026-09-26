import Accordion from 'react-bootstrap/Accordion';
import Bootstrap from '../../components/AboutArticles/Bootstrap/Bootstrap';
import Gitup from "../../components/AboutArticles/gitup/Gitup"
import ReGex from "../../components/AboutArticles/regex/Regex"
import Npm from "../../components/AboutArticles/Npm/Npm"
function AcordingArticle(){




return(
 <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>  bootstrap</Accordion.Header>
        <Accordion.Body>
        <Bootstrap/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> Git up</Accordion.Header>
        <Accordion.Body>
         <Gitup/>
        </Accordion.Body>
      </Accordion.Item>

<Accordion.Item eventKey="1">
        <Accordion.Header>  Regex</Accordion.Header>
        <Accordion.Body>
       <ReGex/>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header>  npm</Accordion.Header>
        <Accordion.Body>
   <Npm/>
        </Accordion.Body>
      </Accordion.Item>



    </Accordion>





)



}
export default AcordingArticle