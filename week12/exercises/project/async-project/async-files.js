import fs from 'fs';
import { promises as fsPromises } from 'fs';


fs.writeFile("./input.txt","hello world\nthis is my input file\nnode.js is cool","utf-8",(e) => {
    if (e)
        return console.log(e);
        console.log("file created successfully");
});

fs.readFile("./input.txt", "utf-8", (e, data) => {
    if (e) return console.log("Error: ", e);
    console.log(" data: ", data);
});

fs.writeFile("output.txt", "successfully written by node.js", "utf-8", (err) => {
    if (err)
        return console.log("typing error: ", err);
    console.log("file writed successfully");
});

fs.readFile("./input.txt", "utf-8", (e, data) => {
    if (e)
        return console.log(e);
    const fileCountent = data.toUpperCase();
    fs.writeFile("./output-upper.txt", fileCountent, "utf-8", (e) => {
        if (e)
            return console.log(e);
        console.log("evrything ended successfully");
    });
});

//////////////////////////// promises //////////////////////////////////


fsPromises.readFile("./input.txt", "utf-8")
    .then((v) => {
        console.log("readed by promise:\n",v);
    }).catch((e) => console.error("Error: \n",e)
    );

fsPromises.readFile("input.txt","utf-8")
    .then((v) => {
        const upperData = v.toUpperCase()
        return fsPromises.writeFile("./output-upper.txt",upperData,"utf-8")
    }).then((data) => {
        console.log("file create successfully");
        
    }).catch((e) => {
        console.error(e.message);
        
    })

Promise.all([
    fsPromises.readFile('input.txt', 'utf8'),
    fsPromises.readFile('output.txt', 'utf8')
])
    .then((data) => data.map((v) => { console.log(v.length) }))
    .catch((e) => { console.error(e) });

// 1. fs.readFile משתמש ב-callback כדי לטפל בתוצאה, בעוד fsPromises.readFile מחזיר אובייקט Promise שמאפשר שימוש ב-then ו-catch.
// 2.  כיוון שכל פעולה תלויה בתוצאה של הקודמת, אנחנו חייבים לקנן את הקריאות בתוך ה-callback של הפעולה הקודמת כדי להבטיח את סדר הפעולות.
// 3. שיפור הקריאות (מבנה שטוח וליניארי) וניהול שגיאות ריכוזי (catch אחד תופס שגיאות מכל השלבים).   
// 4. השרשרת לא תחכה לפעולה הפנימית, מה שעלול לגרום לפעולות לקרות לפני הזמן (Race Condition).














































