import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function CardbodyArticle({title,image,description}){
 const navigate = useNavigate();
const limitedDescription = description
  .split(' ')
  .slice(0, 11)
  .join(' ') + (description.split(' ').length > 20 ? '...' : '');



return(
    <>
       
 <Card 
 className="shadow"
  style={{
    width: '100%',
    maxWidth: '300px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
    border: 'none',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems:"center"
    
  }}>

      <Card.Img
      style={{
    width: '100%',
    height: '160px', // ارتفاع ثابت برای همه عکس‌ها
    objectFit: 'cover',
    borderRadius: '10px', // اگر خواستی گوشه‌ها گرد باشه
  }}

      
      variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <Card.Text >
       {limitedDescription}
        </Card.Text>
        <Button onClick={()=>navigate("/article")} variant="primary">بیشتر بخوانید </Button>
      </Card.Body>
    </Card>
    
    
    </>
 




)

}
export default CardbodyArticle