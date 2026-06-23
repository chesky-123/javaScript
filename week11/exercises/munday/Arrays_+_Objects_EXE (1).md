<div dir="rtl">

# תרגילים: Arrays & Objects

---

## חלק 1 – Arrays

---

### תרגיל 1 – יצירת מערך

צור מערך בשם `numbers` שמכיל את המספרים: `1, 2, 3`.

הדפס את המערך.

---

### תרגיל 2 – גישה לפי אינדקס

</div>

```javascript
const fruits = ["apple", "banana", "cherry"];
```

<div dir="rtl">

- הדפס את הפרי הראשון
- הדפס את הפרי האחרון

---

### תרגיל 3 – שינוי ערך

שנה את `"banana"` ל-`"mango"` והדפס את המערך החדש.

---

### תרגיל 4 – push

הוסף למערך את `"orange"`.

בדוק:
- מה הערך שהפונקציה מחזירה
- מה מצב המערך אחרי

---

### תרגיל 5 – pop

מחק את האיבר האחרון.

הדפס:
- מה נמחק
- מה נשאר

---

### תרגיל 6 – unshift

הוסף לתחילת המערך `"kiwi"`.

---

### תרגיל 7 – shift

מחק את האיבר הראשון והדפס את המערך.

---

### תרגיל 8 – splice – מחיקה

</div>

```javascript
const arr = ["a", "b", "c", "d"];
```

<div dir="rtl">

מחק את `"b"` בלבד.

---

### תרגיל 9 – splice – הוספה

הוסף `"X"` בין `"a"` ל-`"b"`.

---

### תרגיל 10 – splice – החלפה

החלף את `"c"` ב-`"Y"`.

---

### תרגיל 11 – עבודה עם length

צור מערך של מספרים.

הדפס:
- כמה איברים יש
- האיבר האחרון

---

### תרגיל 12 – מערך מעורב

צור מערך שמכיל:
- מספר
- מחרוזת
- boolean

הדפס כל אחד בנפרד.

---

### תרגיל 13 – לולאה על מערך

</div>

```javascript
const nums = [10, 20, 30];
```

<div dir="rtl">

הדפס כל מספר בעזרת לולאת `for`.

---

### תרגיל 14 – סכום מערך

חשב את סכום כל המספרים במערך:

</div>

```javascript
[5, 10, 15]
```

---

<div dir="rtl">

### תרגיל 15 – סינון ידני

</div>

```javascript
[3, 8, 12, 1]
```

<div dir="rtl">

הדפס רק מספרים גדולים מ-5.

---

## חלק 2 – Objects

---

### תרגיל 16 – יצירת Object

צור אובייקט `person` עם:
- `name`
- `age`

הדפס את האובייקט.

---

### תרגיל 17 – גישה לשדות

</div>

```javascript
const person = { name: "Dan", age: 25 };
```

<div dir="rtl">

הדפס את השם ואת הגיל — גם עם **dot notation** וגם עם **bracket notation**.

---

### תרגיל 18 – הוספה ושינוי

- הוסף שדה `city`
- שנה את השם

הדפס את האובייקט המעודכן.

---

### תרגיל 19 – מחיקה ובדיקה

- מחק את השדה `age`
- בדוק אם הוא עדיין קיים עם `in`

---

### תרגיל 20 – Object עם Array

</div>

```javascript
const student = {
  name: "Yael",
  grades: [90, 80, 100]
};
```

<div dir="rtl">

בצע:
- הדפס את הציון הראשון
- הוסף ציון חדש
- מחק ציון אחד
- הדפס את המערך המעודכן

---

### תרגיל 21 – מעבר על Object (for...in)

</div>

```javascript
const product = {
  name: "Laptop",
  price: 3500,
  inStock: true
};
```

<div dir="rtl">

עבור על כל השדות בעזרת `for...in` והדפס בפורמט:

</div>

```
name: Laptop
price: 3500
inStock: true
```

<div dir="rtl">

**דגש:** שימוש נכון ב-`product[key]` ולא `product.key`.

---

### תרגיל 22 – שימוש ב-Object.keys / Object.values

</div>

```javascript
const user = {
  username: "admin",
  role: "manager",
  active: true
};
```

<div dir="rtl">

דרישות:
- הדפס מערך של כל המפתחות
- הדפס מערך של כל הערכים
- עבור על המפתחות עם לולאה והדפס בפורמט:

</div>

```
username = admin
role = manager
active = true
```

---

<div dir="rtl">

### תרגיל 23 – Object בתוך Object

</div>

```javascript
const order = {
  id: 101,
  customer: {
    name: "Roi",
    address: {
      city: "Tel Aviv",
      zip: "12345"
    }
  }
};
```

<div dir="rtl">

דרישות:
- הדפס את העיר
- שנה את ה-`zip`
- הוסף שדה חדש בתוך `customer` בשם `phone`
- מחק את השדה `city`

</div>
