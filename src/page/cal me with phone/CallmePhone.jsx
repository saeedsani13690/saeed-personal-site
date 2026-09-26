import { Container, Row, Col } from "react-bootstrap";
import Headeritem from "../../components/Header/Headeritem";
import Footersaeed from "../../components/footersaeed/Footersaeed";

function CallmePhone() {
  return (
    <>
      <Headeritem />
      <Container className="my-6">
        <Row>
          {/* اطلاعات تماس */}
          <Col xs={12} lg={4} className="mb-4">
            <div className="w-full bg-[#f5f5dc] rounded-xl shadow-lg p-6 h-full flex flex-col justify-center gap-4">
              <h1 className="text-2xl font-bold text-gray-800">📞 تماس با من</h1>
              <p className="text-gray-700 leading-relaxed text-sm">
                برای هر گونه سؤال، پیشنهاد یا همکاری می‌تونید از طریق یکی از روش‌های زیر با من در تماس باشید.
                من همیشه مشتاق همکاری‌های جدید و چالش‌های خلاقانه هستم.
              </p>

              <div className="flex items-center gap-3 text-gray-800">
                <i className="bi bi-telephone-fill text-xl text-blue-600"></i>
                <span className="font-medium text-sm">09157060293</span>
              </div>

              <div className="flex items-center gap-3 text-gray-800">
                <i className="bi bi-envelope-fill text-xl text-red-500"></i>
                <a
                  href="mailto:s.sani1369@gmail.com"
                  className="text-blue-600 hover:underline font-medium text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  s.sani1369@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-800">
                <i className="bi bi-telegram text-xl text-sky-500"></i>
                <a
                  href="https://t.me/elavator1369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium text-sm"
                >
                  @elavator1369
                </a>
              </div>
            </div>
          </Col>

          {/* فرم تماس */}
          <Col xs={12} lg={8}>
            <div className="w-full bg-slate-600 rounded-md p-6 flex items-center justify-center">
              <form className="w-full space-y-4 text-white">
                <h2 className="text-xl font-bold text-center mb-2">فرم تماس</h2>

                {/* نام و ایمیل */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2">
                    <label htmlFor="name" className="block mb-1 text-sm">نام شما</label>
                    <div className="flex items-center gap-2">
                      <i className="bi bi-person text-lg"></i>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="مثلاً سعید"
                        className="w-full px-3 py-2 bg-transparent border border-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <label htmlFor="email" className="block mb-1 text-sm">ایمیل</label>
                    <div className="flex items-center gap-2">
                      <i className="bi bi-envelope-fill text-lg"></i>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="مثلاً saeed@gmail.com"
                        className="w-full px-3 py-2 bg-transparent border border-white rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* شماره تماس */}
                <div>
                  <label htmlFor="phone" className="block mb-1 text-sm">شماره تماس</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="مثلاً 0915xxxxxxx"
                    className="w-full px-3 py-2 bg-transparent border border-white rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                {/* پیام */}
                <div>
                  <label htmlFor="message" className="block mb-1 text-sm">پیام شما</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="پیام خود را بنویسید..."
                    className="w-full px-3 py-2 bg-transparent border border-white rounded-2xl text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  ></textarea>
                </div>

                {/* دکمه ارسال */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm"
                  >
                    ارسال پیام
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footersaeed />
    </>
  );
}

export default CallmePhone;