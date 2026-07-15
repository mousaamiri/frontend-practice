# Modern JS Playground

تمرین مفاهیم پایه‌ای ES6+ که پیش‌نیاز کار با React و کتابخانه‌های مدرن JS هستن.

## مفاهیم تمرین‌شده

- **let/const vs var** — تفاوت block scope در حلقه‌ها همراه با `setTimeout`
- **Arrow functions vs function عادی** — رفتار متفاوت `this` در متدهای آبجکت
- **Destructuring** — استخراج از object (با تغییر نام) و array (با skip کردن عنصر) + destructuring در پارامتر تابع
- **Spread/Rest** — merge و copy کردن array/object، و جمع‌آوری آرگومان‌های نامحدود با rest
- **Template literals** — ساخت رشته‌ی چندخطی با متغیر، به‌جای concat با `+`

## نکته‌ی کلیدی

بزرگ‌ترین یادگیری این تمرین، رفتار `this` بود:

- تو `function` عادی، مقدار `this` بسته به نحوه‌ی صدا زدن تابع تغییر می‌کنه (مثلاً داخل `setTimeout` دیگه به آبجکت اصلی اشاره نمی‌کنه)
- تو `arrow function`، `this` از scope بیرونی به ارث می‌رسه — پس اگه یه arrow function رو مستقیم متد یه آبجکت کنی، `this` اون آبجکت رو نمی‌شناسه

## اجرا

فایل `index.html` رو باز کن و Console مرورگر رو نگاه کن.