function Footersaeed(){





    return(
        <>
        <footer className="bg-gray-900 text-white py-8 px-4">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6" >

<div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-red-400">سعید ثانی</h3>
          <p className="text-sm text-gray-400 mt-1">توسعه‌دهنده فرانت‌اند و بک اند با روحیه خستگی‌ناپذیر</p>
        </div>


 <div className="flex gap-6">

<a
  href="mailto:s.sani1369@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-red-400 transition"
>
  <svg
    className="w-6 h-6 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
  </svg>
</a>




          <a href="https://t.me/elavator1369"
           target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-400 transition">
            <i className="fab fa-telegram-plane text-xl"></i>  </a>
        
    
          <a href="https://github.com/saeedsani13690"
           target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-400 transition">
            <i className="fab fa-github text-xl"></i>  </a>
        
        </div>

 <div className="mt-6 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ساخته شده با عشق توسط سعید ثانی
      </div>




</div>
        </footer>
        
        </>
    )
}
export default Footersaeed