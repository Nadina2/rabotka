const myName = "Надежда";
let programmingLanguage = "JavaScripts";
const courseCreatorName = "Никиты Михайловича";
let reasonText = "Зарабатывать";
let numberOfMonth = "666";

programmingLanguage.toUpperCase();

const result = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования \
 ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. \ 
 Я хочу стать веб-разработчиком, чтоб ${reasonText}. До этого я изучала ${programmingLanguage} ${numberOfMonth} месяцев. 
 Я уверена, что пройду данный курс до конца. `;
console.log(result);






let myInfoText = result;

console.log(
  result.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())
);
console.log(myInfoText.length);

console.log(myInfoText[0]);
console.log(myInfoText[myInfoText.length - 1]);