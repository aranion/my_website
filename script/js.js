const portfolio = ` <p>Личный cайт студента GeekBrains</p>
                    <a href="http://v90630om.beget.tech/index.php" target="_blank">
                    <img src="./img/my_website1.jpg" alt="сайт первый">
                    </a>`;
const certificate = `   <p>Сертификаты:</p>
                        <h5>Основы программирования. Интерактивный курс</h5>
                        <a href="https://geekbrains.ru/certificates/954339" target="_blank">
                        <img src="./img/cert1.jpg" alt="сертификат 1">
                        </a>
                        <h5>Операционные системы. Интерактивный курс</h5>
                        <a href="https://geekbrains.ru/certificates/795162" target="_blank">
                        <img src="./img/cert5.jpg" alt="сертификат 5">
                        </a>
                        <h5>«Git. Базовый курс»</h5>
                        <a href="https://geekbrains.ru/certificates/956893" target="_blank">
                        <img src="./img/cert6.jpg" alt="сертификат 4">
                        </a>
                        <h5>Основы баз данных. Видеокурс</h5>
                        <a href="https://geekbrains.ru/certificates/956437" target="_blank">
                        <img src="./img/cert7.jpg" alt="сертификат 4">
                        </a>
                        <h5>HTML/CSS. Интерактивный курс</h5>
                        <a href="https://geekbrains.ru/certificates/796436" target="_blank">
                        <img src="./img/cert2.jpg" alt="сертификат 2">
                        </a>
                        <h5>Javascript. Начальный уровень</h5>
                        <a href="https://geekbrains.ru/certificates/796472" target="_blank">
                        <img src="./img/cert3.jpg" alt="сертификат 3">
                        </a>
                        <h5>Photoshop. Начальный уровень</h5>
                        <a href="https://geekbrains.ru/certificates/798096" target="_blank">
                        <img src="./img/cert4.jpg" alt="сертификат 4">
                        </a>
                        
                    `;
console.log(document.getElementsByClassName('portfolioInner'));
console.log(document.getElementById('education'));

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
    portfolio
  );
  checkStyleOn("trapezoid2");
  checkStyleOff("trapezoid1");
  checkStyleOff("trapezoid3");
}

function getCertificate() {
  hide(["education", "skills", "hobby", "experience"]);
  write(
    ["portfolioInner"],
    certificate);
  checkStyleOn("trapezoid3");
  checkStyleOff("trapezoid2");
  checkStyleOff("trapezoid1");
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
