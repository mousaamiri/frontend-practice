# Card Hover Effects

سه کارت معرفی خدمات، هرکدام با یک افکت هاور متفاوت؛ محتوای هر کارت هنگام هاور از پایین ظاهر می‌شود.

## تکنیک‌های استفاده‌شده

- سه نوع transform مستقل روی هاور: `scale`، `translateY`، `rotateX/rotateY` (با `perspective`)
- سایه‌ی گرادیانی نورانی پشت کارت اول با `::before` و `filter: blur()`
- نمایش تدریجی محتوای کارت با `opacity` + `transform` روی هاور

## پیش‌نمایش

![Card Hover Effects Preview](docs/card-hover-effect.gif)

## اجرا

فایل `index.html` را مستقیم در مرورگر باز کنید — بدون build step.
