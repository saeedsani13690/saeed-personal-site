import{Container,Row,Col} from "react-bootstrap";
import CardbodyArticle from "../../components/CardbodyArticle/CardbodyArticle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';





import "./ComponentArticle.css"




function ComponetArticle(){

const myarticle=[
{ image:"/image/npm commands every d.png", title:"  پکیج منیجر npm ", description:"یک ابزار مدیریت بسته برای جاوااسکریپت است که نصب و به‌روزرسانی کتابخانه‌ها را آسان می‌کند"   },
{ image:"/image/GitHub Logos and Usa.png", title:"  گیت و گیت هاب ", description:"ابزارهایی برای کنترل نسخه و همکاری تیمی در پروژه‌های برنامه‌نویسی هستند که امکان مدیریت کد را آسان می‌کنند"   },
{ image:"/image/libaraly react.png", title:";کتاب خانه های پرکاربرد ریکت   ", description:"کتابخانه‌های پرکاربرد در React شامل ابزارهایی برای مدیریت وضعیت، فرم‌ها، روتینگ، درخواست‌های API و طراحی رابط کاربری هستند که توسعه پروژه‌ها را سریع‌تر و حرفه‌ای‌تر می‌کنند"   },
{ image:"/image/regex.png", title:"regex   ", description:"رجکس (Regex) یا عبارات با قاعده، یک ابزار قدرتمند برای جستجو، اعتبارسنجی و ویرایش رشته‌ها در برنامه‌نویسی است."   },
{ image:"/image/File_Bootstrap logo..png", title:"  bootstrap ", description:"بوت‌استرپ (Bootstrap) یک فریم‌ورک فرانت‌اند متن‌باز است که برای طراحی سریع و واکنش‌گرا صفحات وب استفاده می‌شود"   },
{ image:"/image/File_Tailwind CSS Lo.png", title:"Tailwind", description:"تلویند (Tailwind CSS) یک فریم‌ورک سبک و مدرن برای طراحی رابط کاربری است که با استفاده از کلاس‌های کاربردی، امکان ساخت صفحات واکنش‌گرا و زیبا را بدون نوشتن CSS سفارشی فراهم می‌کند."   },
]


    return(
        <>
         <Container  className="px-4">
            {/* <Row> */}

 <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={10}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
          style={{ width: '100%', height: 'auto', paddingBottom: '60px' }}


         


      >
        {myarticle.map((item, index) => (
          <SwiperSlide style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    // height: '100%',
  }}

   
 key={index}>
            <CardbodyArticle {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

            {/* </Row> */}
     
    </Container>



  


        </>
    )
}
export default ComponetArticle