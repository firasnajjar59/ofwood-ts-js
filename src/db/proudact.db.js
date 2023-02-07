import { Prouduct } from "../model/Product.model.js";
export let productArr;
if (localStorage.getItem("productArr")) {
    productArr = JSON.parse(localStorage.getItem("productArr"));
}
else {
    productArr = [
        new Prouduct("מגדל למידה", {
            description: "יחידות אחסון אלה הם אפשרויות נחמדות לסידור ספרי ילדים, שכן לפריטים הללו יש בדרך כלל כמה מדפים שעוזרים בארגון. הגלגלים מאפשרים לקחת את הספרים לחדרים שונים בלי הרבה עבודה ומאמץ (וגם מקלים על ניקיון הבית).",
            width: "140",
            hight: "12",
            length: "ssas",
            notes: "sdf",
        }, 100, "ילדים", ["red", "blue", "green"], [
            "./assets/imgs/מגדל למידה 2/2_v1_2022-Mar-30_08-38-33AM-000_CustomizedView16296925770.png",
            "./assets/imgs/מגדל למידה/child_chair_2022-Mar-29_03-57-21PM-000_CustomizedView24958014254.png",
        ], "popular"),
        new Prouduct("יחידת אחסון נגררת", {
            description: "יחידות אחסון אלה הם אפשרויות נחמדות לסידור ספרי ילדים, שכן לפריטים הללו יש בדרך כלל כמה מדפים שעוזרים בארגון. הגלגלים מאפשרים לקחת את הספרים לחדרים שונים בלי הרבה עבודה ומאמץ (וגם מקלים על ניקיון הבית).",
            width: "140",
            hight: "12",
            length: "ssas",
            notes: "sdf",
        }, 200, "פתרונות אחסון", ["red", "blue", "green"], [
            "./assets/imgs/bookshelvess%20photo/il_794xN.1952623782_6wgy.webp", "./assets/imgs/bookshelvess%20photo/il_794xN.1952623782_6wgy.webp",
            "./assets/imgs/shoes shelf/shoes_holder_2022-Apr-02_10-43-32AM-000_CustomizedView945146340.png", "./assets/imgs/bookshelvess%20photo/il_794xN.1952623782_6wgy.webp"
        ], "popular"),
        new Prouduct("כסא מתקפל", {
            description: "יחידות אחסון אלה הם אפשרויות נחמדות לסידור ספרי ילדים, שכן לפריטים הללו יש בדרך כלל כמה מדפים שעוזרים בארגון. הגלגלים מאפשרים לקחת את הספרים לחדרים שונים בלי הרבה עבודה ומאמץ (וגם מקלים על ניקיון הבית).",
            width: "140",
            hight: "12",
            length: "ssas",
            notes: "sdf",
        }, 300, "ילדים", ["red", "blue", "green"], [
            "./assets/imgs/kid chair/kid_chair_2022-Apr-02_09-48-45AM-000_CustomizedView34925127440.png",
        ], "popular"),
        new Prouduct("chair3", {
            description: "יחידות אחסון אלה הם אפשרויות נחמדות לסידור ספרי ילדים, שכן לפריטים הללו יש בדרך כלל כמה מדפים שעוזרים בארגון. הגלגלים מאפשרים לקחת את הספרים לחדרים שונים בלי הרבה עבודה ומאמץ (וגם מקלים על ניקיון הבית).",
            width: "140",
            hight: "12",
            length: "ssas",
            notes: "sdf",
        }, 400, "פתרונות אחסון", ["red", "blue", "green"], ["./assets/imgs/bookshelvess%20photo/il_794xN.1952623782_6wgy.webp"], "popular"),
        new Prouduct("table", {
            description: "יחידות אחסון אלה הם אפשרויות נחמדות לסידור ספרי ילדים, שכן לפריטים הללו יש בדרך כלל כמה מדפים שעוזרים בארגון. הגלגלים מאפשרים לקחת את הספרים לחדרים שונים בלי הרבה עבודה ומאמץ (וגם מקלים על ניקיון הבית).",
            width: "140",
            hight: "12",
            length: "ssas",
            notes: "sdf",
        }, 500, "ילדים", ["red", "blue", "green"], [
            "./assets/imgs/kid chair/kid_chair_2022-Apr-02_10-00-45AM-000_CustomizedView2213782764.png",
        ], "upcomming"),
        new Prouduct("table2", {
            description: "יחידות אחסון אלה הם אפשרויות נחמדות לסידור ספרי ילדים, שכן לפריטים הללו יש בדרך כלל כמה מדפים שעוזרים בארגון. הגלגלים מאפשרים לקחת את הספרים לחדרים שונים בלי הרבה עבודה ומאמץ (וגם מקלים על ניקיון הבית).",
            width: "140",
            hight: "12",
            length: "ssas",
            notes: "sdf",
        }, 600, "אחסון", ["red", "blue", "green"], ["./assets/imgs/bookshelvess%20photo/il_794xN.1952623782_6wgy.webp"], "upcomming"),
        new Prouduct("table3", {
            description: "יחידות אחסון אלה הם אפשרויות נחמדות לסידור ספרי ילדים, שכן לפריטים הללו יש בדרך כלל כמה מדפים שעוזרים בארגון. הגלגלים מאפשרים לקחת את הספרים לחדרים שונים בלי הרבה עבודה ומאמץ (וגם מקלים על ניקיון הבית).",
            width: "140",
            hight: "12",
            length: "ssas",
            notes: "sdf",
        }, 700, "אחסון", ["red", "blue", "green"], ["./assets/imgs/bookshelvess%20photo/1.png"], "upcomming"),
        new Prouduct("2יחידת אחסון ספרים", {
            description: "יחידות אחסון אלה הם אפשרויות נחמדות לסידור ספרי ילדים, שכן לפריטים הללו יש בדרך כלל כמה מדפים שעוזרים בארגון. הגלגלים מאפשרים לקחת את הספרים לחדרים שונים בלי הרבה עבודה ומאמץ (וגם מקלים על ניקיון הבית).",
            width: "140",
            hight: "12",
            length: "ssas",
            notes: "sdf",
        }, 800, "אחסון", ["red", "blue", "green"], ["./assets/imgs/bookshelvess%20photo/il_794xN.1952623782_6wgy.webp"], "upcomming"),
        new Prouduct("3יחידת אחסון ספרים", {
            description: "יחידות אחסון אלה הם אפשרויות נחמדות לסידור ספרי ילדים, שכן לפריטים הללו יש בדרך כלל כמה מדפים שעוזרים בארגון. הגלגלים מאפשרים לקחת את הספרים לחדרים שונים בלי הרבה עבודה ומאמץ (וגם מקלים על ניקיון הבית).",
            width: "140",
            hight: "12",
            length: "ssas",
            notes: "sdf",
        }, 900, "אחסון", ["red", "blue", "green"], ["./assets/imgs/bookshelvess%20photo/il_794xN.1952623782_6wgy.webp"], "new"),
    ];
    localStorage.setItem("productArr", JSON.stringify(productArr));
}
