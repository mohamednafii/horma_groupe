import React from 'react';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#302219] text-[#f8eee4]">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-9 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-right">
          <img
            src="/media/shared/logo-footer.png"
            alt="شعار AL HURRA"
            className="mx-auto mb-3 h-24 w-auto object-contain sm:h-28"
            width="1536"
            height="1024"
            loading="lazy"
          />
          <p className="max-w-xs text-[11px] leading-6 text-[#d7c8bc]">
            نؤمن أن الجمال الطبيعي يبدأ من العناية. منتجاتنا مصممة بعناية
            لترافق روتينك اليومي.
          </p>
        </div>

        <div className="text-center sm:text-right">
          <h2 className="font-black text-white">روابط سريعة</h2>
          <nav className="mt-4 flex flex-col items-center gap-2 text-xs text-[#d7c8bc] sm:items-start">
            <a href="#" className="w-fit transition hover:text-[#e3aa51]">
              الرئيسية
            </a>
            <a href="#commande" className="w-fit transition hover:text-[#e3aa51]">
              المنتجات
            </a>
            <a href="#" className="w-fit transition hover:text-[#e3aa51]">
              من نحن
            </a>
            <a href="#contact" className="w-fit transition hover:text-[#e3aa51]">
              اتصل بنا
            </a>
          </nav>
        </div>

        <div id="contact" className="text-center sm:text-right">
          <h2 className="font-black text-white">تواصل معنا</h2>
          <div className="mt-4 flex flex-col items-center gap-3 text-xs text-[#d7c8bc] sm:items-start">
            <a
              href="tel:0668615964"
              className="flex items-center gap-2.5 transition hover:text-[#e3aa51]"
            >
              <Phone className="size-4 shrink-0 text-[#d99834]" />
              <span dir="ltr" className="font-semibold">
                0668615964
              </span>
            </a>
            <a
              href="mailto:alhurra177@gmail.com"
              className="flex items-center gap-2.5 transition hover:text-[#e3aa51]"
            >
              <Mail className="size-4 shrink-0 text-[#d99834]" />
              <span dir="ltr" className="font-semibold">
                alhurra177@gmail.com
              </span>
            </a>
            <a
              href="https://instagram.com/alhurra_officiel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 transition hover:text-[#e3aa51]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 shrink-0 text-[#d99834]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span dir="ltr" className="font-semibold">
                @alhurra_officiel
              </span>
            </a>
          </div>
        </div>

        <div className="text-center sm:text-right">
          <h2 className="font-black text-white">معلومات</h2>
          <nav className="mt-4 flex flex-col items-center gap-2 text-xs text-[#d7c8bc] sm:items-start">
            <a href="#" className="w-fit transition hover:text-[#e3aa51]">
              سياسة الخصوصية
            </a>
            <a href="#" className="w-fit transition hover:text-[#e3aa51]">
              شروط الاستخدام
            </a>
            <a href="#" className="w-fit transition hover:text-[#e3aa51]">
              سياسة الإرجاع والاستبدال
            </a>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-3 text-center text-[10px] text-[#a9988a]">
        © 2026 AL HURRA — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
