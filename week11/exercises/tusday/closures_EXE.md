<div dir="rtl">

# Closures – תרגילים

---

## רמה בסיסית (1–5)

---

### תרגיל 1

כתוב פונקציה `createLogger` שמחזירה פונקציה שמדפיסה `"Hello"` בכל קריאה.

---

### תרגיל 2

כתוב פונקציה `createGreeting(name)` שמחזירה פונקציה שמדפיסה:

</div>

```
Hello <name>
```

---

<div dir="rtl">

### תרגיל 3

כתוב פונקציה `createCounter` שמתחילה מ-0 ומחזירה פונקציה שמחזירה את המספר הנוכחי ומגדילה אותו בכל קריאה.

---

### תרגיל 4

מה יודפס? הסבר למה.

</div>

```javascript
function outer() {
  let x = 10;
  return function () {
    console.log(x);
  };
}

const fn = outer();
fn();
```

---

<div dir="rtl">

### תרגיל 5

כתוב פונקציה `createMultiplier(x)` שמחזירה פונקציה שמכפילה מספר ב-`x`.

</div>

```javascript
const double = createMultiplier(2);
double(5); // 10
```

---

<div dir="rtl">

## רמה בינונית – שליטה ב-state (6–10)

---

### תרגיל 6

כתוב פונקציה `createAdder` שמקבלת מספר ומחזירה פונקציה שמוסיפה אליו מספר חדש.

</div>

```javascript
const add5 = createAdder(5);
add5(3); // 8
```

---

<div dir="rtl">

### תרגיל 7

כתוב פונקציה `createSecret` שמחזיקה ערך פנימי ולא מאפשרת גישה ישירה אליו.

הפונקציה תחזיר אובייקט עם:

- `getSecret`
- `setSecret`

---

### תרגיל 8

כתוב פונקציה `once(fn)` שמחזירה פונקציה שמריצה את `fn` **רק פעם אחת**.

---

### תרגיל 9

מה יודפס? (חשוב להבין!)

</div>

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
```

---

<div dir="rtl">

### תרגיל 10

פתור את הבעיה בתרגיל 9 באמצעות closure כך שיודפס:

</div>

```
0
1
2
```

---

<div dir="rtl">

## רמה קשה – חשיבה מתקדמת (11–15)

---

### תרגיל 11

כתוב פונקציה `memoize(fn)` ששומרת תוצאות של קריאות קודמות (cache).

</div>

```javascript
const fastAdd = memoize((a, b) => a + b);
fastAdd(1, 2); // מחשב
fastAdd(1, 2); // משתמש ב-cache
```

---

<div dir="rtl">

### תרגיל 12

כתוב פונקציה `createStack` שמחזירה אובייקט עם:

- `push`
- `pop`
- `peek`

הנתונים צריכים להיות **פרטיים** (לא גלובליים!).

---

### תרגיל 13

כתוב פונקציה `createIdGenerator` שמחזירה פונקציה שמחזירה ID ייחודי עולה בכל קריאה.

</div>

```javascript
const gen = createIdGenerator();
gen(); // 1
gen(); // 2
```

---

<div dir="rtl">

### תרגיל 14

כתוב פונקציה `debounce(fn, delay)` שמחזירה פונקציה שמריצה את `fn` רק אם לא נקראה שוב תוך `delay` ms.

---

### תרגיל 15

כתוב פונקציה `createBankAccount(initialBalance)` שמחזירה:

- `deposit(amount)`
- `withdraw(amount)`
- `getBalance()`

ה-`balance` חייב להיות **פרטי** ולא ניתן לגישה ישירה.

</div>
