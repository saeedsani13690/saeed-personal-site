function NpmIntro() {
  return (
    <>
      <section className="py-16 bg-gradient-to-r from-green-100 via-green-300 to-green-500" id="npm">
        <div className="container mx-auto px-4 flex-wrap">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">نقش NPM در توسعه وب مدرن</h1>
            <p className="mt-4 text-gray-600 text-lg">
              NPM (Node Package Manager) قلب اکوسیستم Node.js است و به توسعه‌دهندگان امکان مدیریت وابستگی‌ها، ابزارها و کتابخانه‌ها را در پروژه‌هایشان می‌دهد.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">مدیریت وابستگی‌ها</h2>
              <p className="text-gray-700 text-sm">
                با NPM می‌توان کتابخانه‌های مورد نیاز را نصب، به‌روزرسانی یا حذف کرد و نسخه‌ها را کنترل نمود.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">جامعه گسترده</h2>
              <p className="text-gray-700 text-sm">
                هزاران بسته متن‌باز در NPM منتشر شده‌اند که توسعه سریع‌تر و بهتر را ممکن می‌سازند.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">اسکریپت‌های سفارشی</h2>
              <p className="text-gray-700 text-sm">
                با تعریف اسکریپت‌ها در فایل package.json می‌توان وظایف متداول مانند build، test و deploy را خودکار کرد.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">انتشار بسته‌ها</h2>
              <p className="text-gray-700 text-sm">
                توسعه‌دهندگان می‌توانند بسته‌های خود را در NPM منتشر کرده و با دیگران به اشتراک بگذارند.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">ادغام با ابزارهای مدرن</h2>
              <p className="text-gray-700 text-sm">
                NPM با ابزارهایی مانند Webpack، Babel و ESLint به‌راحتی ادغام می‌شود و توسعه را بهینه می‌کند.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">پشتیبانی از نسخه‌بندی معنایی</h2>
              <p className="text-gray-700 text-sm">
                با SemVer می‌توان کنترل دقیقی بر نسخه‌های بسته‌ها داشت و از ناسازگاری جلوگیری کرد.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NpmIntro;