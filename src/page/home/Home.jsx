import Aboutme from "../../components/Aboutme/Aboutme"
import Headeritem from "../../components/Header/Headeritem"
import Helpme from "../../components/helpme/Helpme"
import Intruduction from "../../components/Intruduction/Introduction"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Sliderproject from "../../components/sliderprojects/SliderProjects";
import Footersaeed from "../../components/footersaeed/Footersaeed";
import ComponetArticle from "../../components/CardbodyArticle/ComponentArticle";




function Home(){
    useEffect(() => {
  AOS.init({
    duration: 800, // مدت زمان انیمیشن
    once: true,    // فقط یک بار اجرا بشه
  });
}, []);



    return (
<>
{/* بخش اول شامل هدر و معرقی خودم */}
<section className="bg-red-100 dark:bg-gray-900">
<Headeritem/>
<Intruduction/>
</section>



{/* بخش دوم شامل یک توضیح کوچک شامل خودم */}
<section className="w-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-12 px-6 font-vazir" >
<Aboutme/>
</section>


{/* خدمات من */}
<section className="bg-gray-100">
<Helpme/>
</section>


{/* پورتفولیوی من */}
<section className="bg-yellow-50 h-[700px]">
<div className="parentslider relative w-full h-[60%] rounded-b-[100px] bg-yellow-500 flex flex-col items-center justify-center px-6 text-center text-black">
  <h1 className="text-3xl font-bold mb-4">پورتفولیوی من</h1>
  <p className="text-lg leading-relaxed max-w-2xl">
    در این بخش، مجموعه‌ای از پروژه‌هایی را مشاهده می‌کنید که با استفاده از React، TailwindCSS و Node.js توسعه داده‌ام. تمرکز این پروژه‌ها بر طراحی مدرن، عملکرد سریع و ارائه تجربه کاربری روان و حرفه‌ای بوده است.
  </p>
<div className="absolute top-72 sliderproject">
<Sliderproject/>
</div>
</div>
</section>

{/* مقالات که باید خوانده شود */}
<section className="bg-slate-400 h-[800px]   " >
  <div className="parentslider relative w-full h-[60%] rounded-b-[100px] bg-green-500 flex flex-col items-center justify-center px-6 text-center text-black">
  <h1 className="text-3xl font-bold mb-4">وبلاگ برنامه نویسی</h1>
  <p  className="text-lg leading-relaxed max-w-2xl">مطالب کوتاه درباره پروژه‌ها، تکنولوژی‌های مورد استفاده، و تجربه‌های من در دنیای برنامه‌نویسی.</p>

<div className=" componentarticle absolute bottom-0 top-80">
<ComponetArticle/>
</div>



  </div>
</section>






<Footersaeed/>


</>

    )
}
export default Home