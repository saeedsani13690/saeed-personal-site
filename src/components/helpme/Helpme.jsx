import { Container, Row ,Col} from "react-bootstrap"
import Cardbodyitem from "../cardbody/Cardbody";


function Helpme(){
const Skill = [
  {
    image: "/image/File_React-icon.svg .png",
    title: "توسعه رابط کاربری با React.js",
    description: "ساخت رابط‌های کاربری پویا، سریع و مدرن برای اپلیکیشن‌های تک‌صفحه‌ای با استفاده از کامپوننت‌های ."
  },
  {
    image: "/image/File_Node.js logo.sv.png",
    title: "توسعه بک‌اند با Node.js",
    description: "پیاده‌سازی سرورهای سریع و مقیاس‌پذیر با Node.js برای مدیریت APIها و ارتباط با پایگاه‌داده."
  },
  {
    image: "/image/File_Tailwind CSS Lo.png",
    title: "استایل‌دهی با TailwindCSS",
    description: "طراحی رابط‌های واکنش‌گرا و زیبا با کلاس‌های utility-first و سفارشی‌سازی سریع ظاهر صفحات."
  },
  {
    image: "/image/File_Bootstrap logo..png",
    title: "طراحی واکنش‌گرا با Bootstrap",
    description: "استفاده از کامپوننت‌های آماده و گرید سیستم برای ساخت صفحات سازگار با همه دستگاه‌ها."
  },
  {
    image: "/image/GitHub Logos and Usa.png",
    title: "مدیریت پروژه با GitHub",
    description: "کنترل نسخه، همکاری تیمی و انتشار پروژه‌ها با استفاده از Git و GitHub."
  },
  {
    image: "/image/figma.png",
    title: "طراحی رابط کاربری با Figma",
    description: "طراحی وایرفریم و رابط‌های کاربری حرفه‌ای با ابزارهای تعاملی و همکاری در زمان واقعی."
  }
];


return(


<Container className="py-5">
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">خدمات من</h1>
  <p className="text-lg text-gray-600 text-center mb-10 leading-relaxed">
    به‌عنوان توسعه‌دهنده‌ی وب، تمرکز من روی طراحی رابط‌های کاربری حرفه‌ای و پیاده‌سازی بک‌اند سریع و مقیاس‌پذیر برای ساخت تجربه‌ای کامل و بهینه در وب‌سایت‌ها و اپلیکیشن‌هاست.
  </p>

  <Row xs={1} sm={2} md={3} className="g-4">
    {Skill.map((item, index) => (
      <Col  key={index}>
        <div data-aos={index < 3 ? 'fade-down' : 'fade-left'}>
      <Cardbodyitem {...item} />
    </div>
      </Col>
    ))}
  </Row>
</Container>



)

}
export default Helpme