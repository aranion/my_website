const portfolio = {
  name: "Портфолио",
  img: "./img/portf.png",
  data: [
    [
      "Личный cайт студента GeekBrains",
      "http://v90630om.beget.tech/index.php",
      "my_website1.jpg",
      "сайт",
    ],
    [
      "Адаптивный cайт по макету",
      "https://aranion.github.io/gbproject/",
      "my_website2.jpg",
      "сайт2",
    ],
  ],
};
const certificate = {
  name: "Сертификаты",
  img: "./img/sert2.png",
  dataset: [
    {
      name: "Программирование",
      data: [
        [
          "Основы программирования",
          "https://geekbrains.ru/certificates/954339",
          "cert1.JPG",
          "сертификат",
        ],
	[
          "PHP. Начальный уровень",
          "https://geekbrains.ru/certificates/1033114",
          "cert19.JPG",
          "сертификат",
        ],
	[
          "JavaScript. Средний уровень",
          "https://geekbrains.ru/certificates/1033086",
          "cert18.JPG",
          "сертификат",
        ],
        [
          "Javascript. Начальный уровень",
          "https://geekbrains.ru/certificates/796472",
          "cert6.JPG",
          "сертификат",
        ],
        [
          "ES6 JS:синтаксис и обзор функций",
          "https://geekbrains.ru/certificates/977751",
          "cert14.JPG",
          "сертификат",
        ],
        [
          "React/Redux. Библиотека ARUI-Feather",
          "https://geekbrains.ru/certificates/977575",
          "cert15.JPG",
          "сертификат",
        ],
      ],
    },
    {
      name: "HTML/CSS",
      data: [
        [
          "HTML/CSS. Интерактивный курс",
          "https://geekbrains.ru/certificates/996503",
          "cert12.JPG",
          "сертификат",
        ],
        [
          "HTML5/CSS3",
          "https://geekbrains.ru/certificates/1024778",
          "cert10.JPG",
          "сертификат",
        ],
        [
          "HTML&CSS. Сложный уровень",
          "https://geekbrains.ru/certificates/1033013",
          "cert17.JPG",
          "сертификат",
        ],
        [
          "HTML&CSS. Средний уровень",
          "https://geekbrains.ru/certificates/1030674",
          "cert8.JPG",
          "сертификат",
        ],
        [
          "HTML&CSS. Начальный уровень",
          "https://geekbrains.ru/certificates/796436",
          "cert5.JPG",
          "сертификат",
        ],
      ],
    },
    {
      name: "Базы данных",
      data: [
        [
          "Основы баз данных. Видеокурс",
          "https://geekbrains.ru/certificates/956437",
          "cert4.JPG",
          "сертификат",
        ],
        [
          "База данных MySql",
          "https://geekbrains.ru/certificates/994905",
          "cert11.JPG",
          "сертификат",
        ],
        [
          "Базы данных",
          "https://geekbrains.ru/certificates/994766",
          "cert13.JPG",
          "сертификат",
        ],
      ],
    },
    {
      name: "Операционные системы",
      data: [
        [
          "Операционные системы",
          "https://geekbrains.ru/certificates/795162",
          "cert2.JPG",
          "сертификат",
        ],
        [
          "Linux. Начальный уровень",
          "https://geekbrains.ru/certificates/1030645",
          "cert9.JPG",
          "сертификат",
        ],
      ],
    },
    {
      name: "Прочее",
      data: [
        [
          "«Git. Базовый курс»",
          "https://geekbrains.ru/certificates/956893",
          "cert3.JPG",
          "сертификат",
        ],
        [
          "Photoshop. Начальный уровень",
          "https://geekbrains.ru/certificates/798096",
          "cert7.JPG",
          "сертификат",
        ],
        [
          "Безопасность веб",
          "https://geekbrains.ru/certificates/1002074",
          "cert16.JPG",
          "сертификат",
        ],
      ],
    },
  ],
};
const skillsTechnical = [
  ['Технические'],
  ['Microsoft Office',95],
  ['Windows 7/8.1/10',91],
  ['Windows Server 2012R2',76],
  ['Hyper-V, GPO',67],
  ['AD, DHCP, DNS, WINS',71],
  ['C++, C#, Java',45],
  ['HTML, CSS, XML',85],
  ['JS, React, Redux',85],
  ['Kaspersky (KSC/KES)',87],
  ['1C Предприятие 8.3',40],
  ['Unix/Linux/MacOS',55],  
];

const skillsLanguage = [
  ['Языки'],
  ['Русский',95],
  ['Английский',40],
  ['Немецкий',30],
];  
const skillsOther = [
  ['Общие'],
  ['Графика',80],
  ['Ремонт ПЭВМ',80],
  ['Диагностика',90],
  ['Работа с ККТ',70],
  ['SAP',65],
  ['СЗПД',75],
  ['Самообучение',100],
]              

function checkBookmark(id) {
  switch (id) {
    case "rezyume":
      show(["education", "skills", "hobby", "experience"]);
      hide(["contents_inner"]);
      checkStyleOn(id);
      checkStyleOff("portfolio");
      checkStyleOff("certificate");
      break;
    case "portfolio":
      hide(["education", "skills", "hobby", "experience"]);
      show("contents_inner");
      write(["contents_inner"], compoundTextTag(portfolio));
      checkStyleOn(id);
      checkStyleOff("rezyume");
      checkStyleOff("certificate");
      break;
    case "certificate":
      hide(["education", "skills", "hobby", "experience"]);
      show("contents_inner");
      checkStyleOn(id);
      checkStyleOff("portfolio");
      checkStyleOff("rezyume");
      write(["contents_inner"], compoundTextTag(certificate));
      break;
    default:
      break;
  }
}

function checkStyleOff(idName) {
  document.querySelector(`#${idName}`).classList.remove("trapezoid_active");
}

function checkStyleOn(idName) {
  document.querySelector(`#${idName}`).classList.add("trapezoid_active");
}

function hide(className) {
  if (document.getElementsByClassName(className[0]).length == 0) {
    document.getElementById(className).style.visibility = "hidden";
    document.getElementById(className).style.display = "none";
  } else {
    for (const iterator of className) {
      document.getElementsByClassName(iterator)[0].style.display = "none";
    }
  }
}

function show(className) {
  if (document.getElementsByClassName(className[0]).length == 0) {
    document.getElementById(className).style.visibility = "visible";
    document.getElementById(className).style.display = "block";
  } else {
    for (const iterator of className) {
      document.getElementsByClassName(iterator)[0].style.display = "block";
    }
  }
}

function write(teg, text) {
  teg.forEach((el) => (document.getElementById(el).innerHTML = text));
}

function compoundTextTag(elements) {
  const oneFirstElem = `
    <div class="header_content">
      <img src="${elements.img}" alt="${elements.name}" />
        <h3> 
        ${elements.name}
        </h3> 
      <div class="hr"></div>
    </div> 
    <div class="dynamic_content">`;
  if (elements.dataset === undefined) {
    return elements.data
      .map((el, i) => {
        return `
      ${i === 0 ? oneFirstElem : ""}
      <div class="content">
        <h5>${el[0]}</h5>
          <a href="${el[1]}" target="_blank">
          <img src="./img/${el[2]}" alt="${el[3]}">
        </a>
      </div>
      ${i === elements.data.length - 1 ? "</div>" : ""}`;
      })
      .join("");
  } else {
    return elements.dataset
      .map((elem, i) => {
        return `
      ${i === 0 ? oneFirstElem : ""}
      <div class="header_content_type">
        <div class="hr"><p> ${elem.name} </p></div>
      </div>  
      ${elem.data
        .map((el) => {
          return `
        <div class="content">
          <h5>${el[0]}</h5>
          <a href="${el[1]}" target="_blank">
            <img src="./img/${el[2]}" alt="${el[3]}">
          </a>
        </div>`;
        })
        .join("")}
      ${i === elements.dataset.length - 1 ? "</div>" : ""}`;
      })
      .join("");
  }
}

function compoundTagSkills(skills) {
  return skills.map( (el,i) => {
    if ( i === 0) {
      return `
    <div class="hr">
      <p>${el[0]}</p>
    </div>`;
    } else {
      
      return `
        <div class="skill">
          <p>${el[0]}</p>
          <div class="skill-max-value">
            <div style="width:${el[1]}%" class="skill-value">
              <div class="hover_wrapper">
                ${el[1]}%
              </div>
            </div>
          </div>
        </div>`;
    }
  }).join('');
}

function init() {
  const rezyumeElem = document.querySelector("#rezyume");
  const portfolioElem = document.querySelector("#portfolio");
  const certificateElem = document.querySelector("#certificate");

  write(['skill_technical'],compoundTagSkills(skillsTechnical));
  write(['skills_language'],compoundTagSkills(skillsLanguage));
  write(['skills_other'],compoundTagSkills(skillsOther));

  rezyumeElem.addEventListener("click", (event) => {
    checkBookmark(event.currentTarget.id);
  });
  portfolioElem.addEventListener("click", (event) => {
    checkBookmark(event.currentTarget.id);
  });
  certificateElem.addEventListener("click", (event) => {
    checkBookmark(event.currentTarget.id);
  });
}

document.addEventListener("DOMContentLoaded", init);
