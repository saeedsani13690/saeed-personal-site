import { Container,Row,Col } from "react-bootstrap"
import Headeritem from "../../components/Header/Headeritem"
import Footersaeed from "../../components/footersaeed/Footersaeed"

function About(){



    return(
        <>
        <Headeritem/>

<Container>
  <Row className="flex flex-wrap justify-center items-start">
    {/* ستون اول: کارت پروفایل */}
    <Col md={6} xl={4} lg={4} style={{margin:"auto"}}>
      <div className="flex h-full">
        <div className="relative bg-gradient-to-b from-gray-700 to-gray-900 min-h-[700px] w-64 my-8 flex flex-col items-center justify-start rounded-full shadow-2xl border-4 border-gray-800 px-4 py-6">
          {/* تصویر پروفایل */}
          <div className="w-40 h-40 p-1 rounded-full bg-white shadow-md mt-4">
            <img
              src="/image/profilesaeed.jpg"
              alt="پروفایل سعید"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* نام و عنوان */}
          <h2 className="text-white text-xl font-bold mt-6 text-center">سعید ثانی</h2>
          <p className="text-gray-300 text-sm text-center">
            نصاب آسانسور در روز، توسعه‌دهنده فرانت‌اند در شب
          </p>

          {/* جمله انگیزشی */}
          <p className="text-gray-200 text-center text-sm italic mt-4 px-2 leading-relaxed">
            «هر آسانسوری که نصب می‌کنم، هر کامپوننتی که می‌سازم، یه قدم به آینده‌ام نزدیک‌ترم»
          </p>

          {/* لینک‌های شبکه اجتماعی */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
            <a  rel="noopener noreferrer">
              <svg className="w-6 h-6 text-white hover:text-blue-400 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.75 17.25l-.375 3.375c.525 0 .75-.225 1.05-.525l2.55-2.4 5.325 3.9c.975.675 1.65.3 1.95-.9l3.525-13.2c.3-1.2-.45-1.725-1.425-1.425L2.1 9.6c-1.2.375-1.2 1.125-.225 1.425l5.325 1.65 12.3-7.725-9.75 12.3z"/>
              </svg>
            </a>
            <a  rel="noopener noreferrer">
              <svg className="w-6 h-6 text-white hover:text-pink-500 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zm9 1.5c2.21 0 4 1.79 4 4v9c0 2.21-1.79 4-4 4h-9c-2.21 0-4-1.79-4-4v-9c0-2.21 1.79-4 4-4h9zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 1.5a3 3 0 110 6 3 3 0 010-6zm4.875-.75a.75.75 0 100 1.5.75.75 0 000-1.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Col>

    {/* ستون دوم: متن معرفی */}
    <Col md={6} xl={6} lg={6}>
      <div className="flex h-full">
        <div className="bg-white shadow-xl rounded-xl min-h-[700px] w-full px-6 py-8 border border-red-300 my-8 flex flex-col justify-start">
          <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">سلام! من سعید ثانی هستم</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            یه ترکیب متفاوت اما واقعی: <span className="font-semibold text-red-500">نصاب آسانسور در روز، توسعه‌دهنده فرانت و بک‌اند در شب 😄</span><br /><br />
            یعنی صبح‌ها مشغول نصب آهن‌کشی، درب و ریل آسانسور هستم، شب‌ها درگیر دیباگ کردن کامپوننت‌ها و ساخت رابط‌های کاربری مدرن!<br /><br />
            شاید عجیب به نظر برسه، ولی دنیای فنی نصب آسانسور و دنیای دقیق برنامه‌نویسی، بیشتر از چیزی که فکر می‌کنی به هم شباهت دارن. هر دو نیاز به <span className="font-medium text-gray-900">دقت، نظم، صبر، و خلاقیت</span> دارن. تو یکی باید کابین رو کنترل کنی، تو اون یکی باید استیت رو!<br /><br />
            مسیر یادگیری من آسون نبوده. از روزهایی که با سختی‌های فیزیکی، کار در ارتفاع، فشار مالی و خستگی‌های شدید روبه‌رو بودم، تا شب‌هایی که با چشم‌های خسته اما با دل پرانگیزه پشت لپ‌تاپ می‌نشستم و کد می‌زدم.<br /><br />
            اما همین سختی‌ها باعث شدن یاد بگیرم چطور با پشتکار، تمرکز و امید، مسیرم رو بسازم.<br /><br />
            توی این مسیر پرانرژی، عاشق ساخت رابط‌های کاربری تمیز، سریع و کاربرپسند شدم و تمرکزم رو گذاشتم روی توسعه فرانت‌اند با ابزارهای مدرن.
          </p>
        </div>
      </div>
    </Col>
  </Row>
</Container>

<Footersaeed/>


        
        </>
       
    )
}
export default About