# zaravand-assistent-number
this library convert English numbers to Persian numbers with some other options

<p dir="rtl">
بسیار پیش می‌آید که در زمان طراحی صفحات وب یا موبایل برای فارسی سازی اعداد به مشکل برمی‌خوریم،
کتابخانه دستیار زراوند مجموعه‌ای از چهار تابع پر کاربرد جهت فارسی سازی و  سهولت در خوانایی اعداد است که بر اساس زبان جاوا اسکریپت در محیط اجرایی نود نوشته شده است. با استفاده از این کتابخانه شما قادر خواهید بود اعداد انگلیسی را به یونیکد اعداد فارسی تبدیل کنید .
</p>

<div dir="rtl">
    از آنجایی که اغلب کاربران این کتابخانه فارسی زبان هستند، تا حد امکان سعی شده اسناد آن به زبان فارسی تهیه شود.
</div>

## <div dir="rtl" >نصب</div>

<p dir="rtl">
    برای نصب این کتابخانه می‌توانید از سیستم مدیرت بسته نود (npm) استفاده کنید:
</p>

```javascript
    npm install zaravand-assistent-number
```

<p dir="rtl">
    درصورتی که از  yarn برای نصب استفاده می‌کنید:
</p>

```javascript
    yarn add zaravand-assistent-number
```

## <div dir="rtl" id="usage">نحوه استفاده</div>


```javascript

    import Assistent from "zaravand-assistent-number";
    // [or] const Assistent = require("zaravand-assistent-number");

    const _asist = new Assistent();

    
    let persian_number =  _asist.number(20000); 

    let persian_number_with_1000_seprator = _asist.PSeparator(20000);

    let english_number_with_1000_seprator = _asist.ESeparator(20000);

    let number_to_letter = _asist.word(20000);

```


method | input type | decription 
--- | --- | --- 
number | string or number | اگر ورودی شامل حروف باشد مشکلی ایجاد نمی‌شود، فقط اعداد را فارسی می‌کند
PSeparator | string or number | اگر ورودی شامل حروف باشد مشکلی ایجاد نمی‌شود، فقط اعداد را فارسی و سه رقم سه رقم جدا می‌کند
ESeparator | string or number | اگر ورودی شامل حروف باشد مشکلی ایجاد نمی‌شود، فقط اعداد را سه رقم سه رقم جدا می‌کند
word | number | عدد را به حروف می‌نویسد، ورودی حتما باید عدد باشد

