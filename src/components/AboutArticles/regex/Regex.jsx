function RegexIntro() {
  return (
    <>
      <section className="py-16 bg-gradient-to-r from-green-100 via-blue-300 to-gray-500" id="regex">
        <div className="container mx-auto px-4 flex-wrap">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">نقش Regex در توسعه وب مدرن</h1>
            <p className="mt-4 text-gray-600 text-lg">
              عبارات باقاعده (Regex) ابزار قدرتمندی برای جستجو، اعتبارسنجی و پردازش رشته‌ها در برنامه‌نویسی هستند. در توسعه وب، Regex به توسعه‌دهندگان کمک می‌کند تا داده‌ها را به‌صورت دقیق و سریع تحلیل کنند.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">اعتبارسنجی فرم‌ها</h2>
              <p className="text-gray-700 text-sm">
                با Regex می‌توان ایمیل، شماره تلفن، کد ملی و سایر ورودی‌ها را به‌صورت دقیق اعتبارسنجی کرد.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">جستجوی پیشرفته</h2>
              <p className="text-gray-700 text-sm">
                امکان جستجوی الگوهای خاص در متن‌ها، مانند URLها، تاریخ‌ها یا کلمات کلیدی خاص را فراهم می‌کند.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">پاک‌سازی داده‌ها</h2>
              <p className="text-gray-700 text-sm">
                برای حذف یا جایگزینی کاراکترهای ناخواسته در داده‌ها، Regex ابزاری سریع و مؤثر است.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">تحلیل لاگ‌ها</h2>
              <p className="text-gray-700 text-sm">
                در DevOps و مانیتورینگ، Regex برای استخراج اطلاعات از فایل‌های لاگ بسیار کاربردی است.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">پشتیبانی در زبان‌های مختلف</h2>
              <p className="text-gray-700 text-sm">
                Regex در اکثر زبان‌های برنامه‌نویسی مانند JavaScript، Python، PHP و Java پشتیبانی می‌شود.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">ابزارهای تست آنلاین</h2>
              <p className="text-gray-700 text-sm">
                ابزارهایی مانند regex101 و RegExr به توسعه‌دهندگان کمک می‌کنند تا الگوهای خود را تست و اصلاح کنند.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegexIntro;