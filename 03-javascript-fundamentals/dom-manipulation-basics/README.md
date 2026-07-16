# DOM Manipulation Basics

تمرین دستکاری DOM با جاوااسکریپت خالص: انتخاب المان‌ها، تغییر محتوا/استایل، event listeners و classList.

## مفاهیم تمرین‌شده

- **querySelector / querySelectorAll / getElementById** — انتخاب یک یا چند المان از صفحه
- **textContent / style** — تغییر مستقیم محتوا و استایل یک المان
- **Event Listeners** — واکنش به کلیک (`click`) و تایپ کاربر (`keyup`)
- **classList** — اضافه، حذف و toggle کردن کلاس‌ها برای تغییر ظاهر/رفتار عناصر
- **cloneNode** — کپی کردن یک المان (همراه با فرزندهاش) و اضافه کردنش به صفحه

## نکات کلیدی

**preventDefault:**
لینک‌های ناوبری `href="#"` دارن؛ بدون `e.preventDefault()` داخل event listener، کلیک باعث رفتار پیش‌فرض مرورگر (جامپ به بالای صفحه) می‌شه.

**تغییر محتوای `::after`:**
چون `::after` یک pseudo-element‌ه و در DOM واقعی وجود نداره، `querySelector` هیچ‌وقت بهش دسترسی پیدا نمی‌کنه. تنها راه تغییر داینامیک محتوای اون از طریق JS، تغییر یک CSS custom property (`--after-content`) با `style.setProperty()` است.

## پیش‌نمایش

![cloneNode](./docs/preview.gif)

---
## اجرا

فایل `index.html` رو باز کن و با لینک‌ها، اینپوت و دکمه‌ها تعامل کن.