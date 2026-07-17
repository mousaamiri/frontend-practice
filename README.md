# Frontend Practice

این ریپو محل تمرین‌های من برای یادگیری **HTML, CSS و JavaScript خالص (Vanilla)** است — در کنار تخصص اصلیم که **Backend (.NET/C#, Clean Architecture, DDD, CQRS)** است.

هدف این ریپو تخصص‌یابی در frontend نیست؛ هدف تقویت مهارت کافی برای پیاده‌سازی بهتر رابط کاربری پروژه‌های شخصی (مثل [پورتفولیوی من](https://github.com/mousaamiri)) و درک عمیق‌تر لایه‌ای که با API‌های بک‌اندم ارتباط می‌گیره.

هر پوشه یک بخش از مسیر یادگیری است و هر زیرپوشه‌ی داخل آن، یک تمرین یا پروژه‌ی مستقل و قابل اجرا (بدون build step).

---

## نقشه راه

### 📁 [01 - HTML & CSS Basics](./01-html-css-basics)
پایه‌گذاری: layout, flexbox, grid, responsive design

- [ ] [Responsive Bio Card](./01-html-css-basics/responsive-bio-card) — کارت معرفی شخصی با Flexbox
- [ ] [Pricing Table](./01-html-css-basics/pricing-table) — جدول قیمت‌گذاری با CSS Grid
- [ ] [Responsive Navbar](./01-html-css-basics/responsive-navbar/) — نوار ناوبری با منوی همبرگری برای موبایل
- [ ] [Mini Landing Page](./01-html-css-basics/mini-landing-page) — ترکیب Flexbox + Grid در یک صفحه کامل

### 📁 [02 - CSS Advanced](./02-css-advanced)
تکنیک‌های پیشرفته CSS: انیمیشن، ترنزیشن، pseudo-classes مدرن (`:has()`)

- [x] [Toggle Switch](./02-css-advanced/toggle-switch) — سوییچ روشن/خاموش با `:has()`
- [x] [Accordion / FAQ](./02-css-advanced/animated-accordion) — آکاردئون تک‌بازشو با انیمیشن `max-height`
- [x] [Card Hover Effects](./02-css-advanced/card-hover-effects) — سه افکت هاور مختلف روی کارت
- [x] [Modal / Dialog](./02-css-advanced/modal-enter-exit-effect) — مودال با انیمیشن ورود/خروج
- [x] [Loading Spinner / Skeleton Loading](./02-css-advanced/loading-spinner) — اسپینر، پراگرس‌بار و اسکلتون لودینگ
- [x] [Toast / Notification](./02-css-advanced/toast-notification) — نوتیفیکیشن با انیمیشن ورود/خروج و حذف تأخیری از DOM
- [x] [Animated Navbar Underline](./02-css-advanced/animated-navbar-underline) — هایلایت انیمیشنی روی لینک‌ها و دکمه‌ها با hover

### 📁 [03 - JavaScript Fundamentals](./03-javascript-fundamentals)
*(در حال کار)*

هدف این بخش نه فقط یادگیری JS، بلکه آماده‌سازی ذهنی برای **React** است. تمرین‌ها طوری چیده شدن که مفاهیمی مثل state، event handling و component thinking را حتی بدون فریم‌ورک تمرین کنی.

- [X] [Modern JS Playground (ES6+: let/const, arrow functions, destructuring, spread/rest, template literals)](./03-javascript-fundamentals/modern-js-playground)
- [X] [Array Methods Drills (map, filter, reduce, find — پایه‌ی رندر لیست‌ها در React)](./03-javascript-fundamentals/array-methods-drills)
- [X] [DOM Manipulation Basics (querySelector, event listeners, classList)](./03-javascript-fundamentals/dom-manipulation-basics)
- [X] [Vanilla JS To-Do List (مدیریت state با یک آبجکت JS ساده، بدون فریم‌ورک)](./03-javascript-fundamentals/vanilla-js-do-do-list)
- [ ] Component-style Counter (تابعی که یک تکه UI را «رندر» می‌کند و با تغییر state دوباره رندر می‌شود — شبیه‌سازی ذهنی الگوی React)
- [ ] Fetch API Practice (async/await, error handling, loading state)
- [ ] Mini Weather App with Fetch (ترکیب DOM + async + state)

### 📁 04 - Mini Projects
*(بعداً تکمیل و لینک می‌شود)*

- [ ] Calculator (منطق + event handling)
- [ ] Quiz App (state management پیچیده‌تر: سوال فعلی، امتیاز، پاسخ‌ها)
- [ ] Filterable Product List (رندر پویا از یک آرایه‌ی داده — دقیقاً همون کاری که بعداً با React انجام می‌دی)

### 📁 05 - React Readiness *(پل بین JS و React)*
*(بعداً تکمیل و لینک می‌شود)*

- [ ] بازنویسی To-Do List با الگوی "state + render function" به شکل خالص‌تر
- [ ] آشنایی مفهومی با JSX (بدون نصب چیزی، فقط مقایسه با کدی که خودت نوشتی)

---

## قوانین این ریپو

- بدون فریم‌ورک، بدون build step — فقط HTML/CSS/JS خالص
- هر تمرین در پوشه‌ی خودش با `index.html`, `style.css`, `script.js`
- هر commit پیام واضح دارد (`add: responsive bio card exercise`)
- چک‌لیست بالا به‌مرور که پیش می‌روم تیک می‌خورد

