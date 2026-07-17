# Fetch API Practice

دریافت و نمایش داده از یک API واقعی با `async/await`، مدیریت loading state و مدیریت خطا.

## مفاهیم تمرین‌شده

- **async/await** — دریافت داده از [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) به‌صورت غیرهمزمان
- **Loading state** — نمایش/مخفی کردن spinner قبل و بعد از دریافت پاسخ
- **Error handling** — بررسی `response.ok` (چون `fetch` خودش روی خطاهای HTTP مثل 404/500 reject نمی‌کنه) و نمایش خطا به‌عنوان بخشی از UI، نه با `alert`
- **try/catch/finally** — اجرای تضمینی `hiddenLoading()` در `finally`، صرف‌نظر از موفق یا ناموفق بودن درخواست
- **ساخت UI پویا از داده‌ی API** — تبدیل هر آبجکت کاربر به یک کارت با `createElement`

## پیش‌نمایش

![Demo](docs/images/preview.gif)

## نکته‌ی کلیدی

`fetch` فقط در خطای شبکه (مثل قطعی اینترنت) reject می‌کنه. برای خطاهای HTTP مثل 404 یا 500 باید خودت `response.ok` رو چک کنی:

```js
if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`)
}
``` 

نمایش خطا باید بخشی از UI باشه، نه `alert()` — چون `alert` قابل استایل‌دهی نیست و رابط کاربری رو قفل می‌کنه.

## اجرا

فایل `index.html` رو باز کن؛ بعد از چند ثانیه لودینگ، لیست کاربران به‌صورت کارت نمایش داده می‌شه.