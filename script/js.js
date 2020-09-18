const portfolio = [
  ['Личный cайт студента GeekBrains',
  'http://v90630om.beget.tech/index.php', 
  'my_website1.jpg',
  'сайт']
];

const certificate = [
  ['Основы программирования. Интерактивный курс',
  'https://geekbrains.ru/certificates/954339',
  'cert1.jpg',
  'сертификат'],
  ['Операционные системы. Интерактивный курс',
  'https://geekbrains.ru/certificates/795162',
  'cert2.jpg',
  'сертификат'],
  ['«Git. Базовый курс»',
  'https://geekbrains.ru/certificates/956893',
  'cert3.jpg',
  'сертификат'],
  ['Основы баз данных. Видеокурс',
  'https://geekbrains.ru/certificates/956437',
  'cert4.jpg',
  'сертификат'],
  ['HTML/CSS. Интерактивный курс',
  'https://geekbrains.ru/certificates/796436',
  'cert5.jpg',
  'сертификат'],
  ['Javascript. Начальный уровень',
  'https://geekbrains.ru/certificates/796472',
  'cert6.jpg',
  'сертификат'],
  ['Photoshop. Начальный уровень',
  'https://geekbrains.ru/certificates/798096',
  'cert7.jpg',
  'сертификат']
];

function getRezyume() {
  show(["education", "skills", "hobby", "experience"]);
  hide(["portfolioInner"]);
  checkStyleOn("trapezoid1");
  checkStyleOff("trapezoid2");
  checkStyleOff("trapezoid3");
}

function getPortfolio() {
  hide(["education", "skills", "hobby", "experience"]);
  show("portfolioInner");
  write(
    ["portfolioInner"],
    compoundTextTag(portfolio)
  );
  checkStyleOn("trapezoid2");
  checkStyleOff("trapezoid1");
  checkStyleOff("trapezoid3");
}

function getCertificate() {
  hide(["education", "skills", "hobby", "experience"]);
  checkStyleOn("trapezoid3");
  checkStyleOff("trapezoid2");
  checkStyleOff("trapezoid1");
  write(
    ["portfolioInner"],
    compoundTextTag(certificate)
  );
 

}

function checkStyleOff(className) {
  document.getElementsByClassName(className)[0].style.borderLeft =
    "30px solid #646464";
  document.getElementsByClassName(className)[0].style.borderTop =
    "15px solid transparent";
  document.getElementsByClassName(className)[0].style.borderBottom =
    "15px solid transparent";
  document.getElementsByClassName(className)[0].firstChild.style.color =
    "#D8D8D8";
  document.getElementsByClassName(className)[0].firstChild.style.fontWeight =
    "";
}

function checkStyleOn(className) {
  document.getElementsByClassName(className)[0].style.borderLeft =
    "30px solid #D8D8D8";
  document.getElementsByClassName(className)[0].style.borderTop =
    "15px solid transparent";
  document.getElementsByClassName(className)[0].style.borderBottom =
    "15px solid transparent";
  document.getElementsByClassName(className)[0].firstChild.style.color =
    "#646464";
  document.getElementsByClassName(className)[0].firstChild.style.fontWeight =
    "bold";
}

function hide(className) {
    if(document.getElementsByClassName(className[0]).length == 0) {
            // document.getElementById(iterator).style.visibility = "hidden";
            document.getElementById(className).style.display = "none";
    } else {
       for (const iterator of className) {
            document.getElementsByClassName(iterator)[0].style.display = "none";
        } 
    }
}

function show(className) {
    if(document.getElementsByClassName(className[0]).length == 0) {
         // document.getElementById(className).style.visibility = "";
            document.getElementById(className).style.display = "block";
    } else {
        for (const iterator of className) {
            document.getElementsByClassName(iterator)[0].style.display = "block";
        }
    }
}

function write(teg, text) {
  for (const iterator of teg) {
    document.getElementById(iterator).innerHTML = text;
  }
}

function compoundTextTag(text) {
  let test = '';
  for (const iterator of text) {
    test += `<h5>${iterator[0]}</h5>
              <a href="${iterator[1]}" target="_blank">
                <img src="./img/${iterator[2]}" alt="${iterator[3]}">
              </a>`;
  }
  return test;
}
