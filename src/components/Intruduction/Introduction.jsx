import { Container, Row, Col } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'

function Intruduction () {
  return (
    <>
      <Container>
        <Row className='flex justify-center items-center flex-md-row gap-4 px-3 py-4 '>
          <Col md={12} xl={6} lg={6}>
            <div className='flex justify-center items-right flex-col   '>
              <div className='text-6xl font-bold text-center text-gray-800 dark:text-white'>
                <Typewriter
                  options={{
                    strings: ['سلام من'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50
                  }}
                />
              </div>
              <div className='text-6xl font-bold text-center text-gray-800 dark:text-white '>
                <Typewriter
                  options={{
                    strings: ['  سعید ثانی هستم ....'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 100
                  }}
                />
              </div>
            </div>

            <p className='mt-6 text-lg font-extrabold bg-gradient-to-r from-gray-500 via-black-500 to-gray-500 bg-clip-text text-transparent drop-shadow-md tracking-wide leading-relaxed font-[Vazirmatn] animate-fade-in'>
              سلام! من یک برنامه‌نویس طراحی سایت هستم، متخصص در ساخت رابط‌های
              کاربری جذاب و واکنش‌گرا با استفاده از
              <span className='text-blue-500'>HTML</span>،
              <span className='text-pink-500'>CSS</span>،
              <span className='text-yellow-500'>JavaScript</span> و
              فریم‌ورک‌هایی مثل
              <span className='text-cyan-500'>React</span> و
              <span className='text-purple-500'>Tailwind CSS</span>. عاشق خلق
              تجربه‌های بصری منحصربه‌فرد برای وب‌سایت‌ها هستم.
            </p>
          </Col>
          <Col
            md={12}
            xl={5}
            lg={5}
            className=' overflow-hidden rounded-full border-[5px] border-pink-400 dark:border-white relative'
          >
            {/* گرادیانت بک‌گراند فقط در حالت دارک مود */}
            <div className='absolute inset-0 rounded-full bg-gradient-to-b from-purple-600 via-pink-500 to-red-400 dark:block hidden z-0'></div>

            {/* تصویر با لایه بالاتر */}
            <img
              src='/image/Copilot_20251115_100910.png'
              alt='تصویر گرد'
              className='w-full h-full object-cover rounded-full relative z-10 shadow-xl hover:scale-105 transition-transform duration-500'
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Intruduction
