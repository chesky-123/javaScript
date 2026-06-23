<div dir="rtl">

# Functions & Scope – תרגילים

---

## תרגילים בסיסיים

---

### תרגיל 1

כתוב פונקציה שמקבלת שם ומחזירה הודעת שלום.

</div>

```javascript
// input:  "Moshe"
// output: "Hello Moshe"
```

---

<div dir="rtl">

### תרגיל 2

כתוב פונקציה שמקבלת שני מספרים ומחזירה את הסכום שלהם.

---

### תרגיל 3

כתוב פונקציה שמחזירה `true` אם מספר זוגי, אחרת `false`.

---

### תרגיל 4

כתוב פונקציה שמקבלת מערך ומחזירה את האיבר הראשון.

---

### תרגיל 5

כתוב פונקציה שמקבלת מחרוזת ומחזירה אותה באותיות גדולות.

---

## תרגילים – הבנת Scope

---

### תרגיל 6

מה יודפס בקוד הבא? הסבר למה.

</div>

```javascript
let x = 5;

function test() {
  let x = 10;
  console.log(x);
}

test();
console.log(x);
```

---

<div dir="rtl">

### תרגיל 7

מה הבעיה בקוד הבא? תקן אותו.

</div>

```javascript
function test() {
  y = 10;
}

test();
console.log(y);
```

---

<div dir="rtl">

### תרגיל 8

מה יודפס?

</div>

```javascript
let x = 1;

function a() {
  console.log(x);
}

function b() {
  let x = 2;
  a();
}

b();
```

---

<div dir="rtl">

### תרגיל 9

כתוב פונקציה שמנסה לגשת למשתנה פנימי מחוץ לפונקציה — וגרום לשגיאה.

---

### תרגיל 10

תקן את הקוד כך שלא תהיה תלות במשתנה גלובלי.

</div>

```javascript
let count = 0;

function add() {
  count++;
}
```

---

<div dir="rtl">

## תרגילים בינוניים

---

### תרגיל 11

כתוב פונקציה שמקבלת מערך מספרים ומחזירה סכום — **בלי להשתמש במשתנה גלובלי**.

---

### תרגיל 12

כתוב פונקציה שמקבלת מספר ומחזירה את הריבוע שלו.

לאחר מכן כתוב פונקציה נוספת שמשתמשת בה.

---

### תרגיל 13

מה יודפס? הסבר למה.

</div>

```javascript
let x = 10;

function test(x) {
  return x * 2;
}

console.log(test(5));
```

---

<div dir="rtl">

## תרגילים מתקדמים

---

### תרגיל 14

כתוב פונקציה שמקבלת מערך ומחזירה רק מספרים זוגיים — **ללא שימוש במשתנים חיצוניים**.

---

### תרגיל 15

מצא את הבאג והסבר:

</div>

```javascript
let total = 0;

function addToTotal(num) {
  total += num;
}

function reset() {
  total = 0;
}

addToTotal(5);
addToTotal(10);
reset();
console.log(total);
```

<div dir="rtl">

- למה זה מסוכן?
- איך היית משפר את הקוד?

</div>
