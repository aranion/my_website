function getRezyume() {
    show(["education", "skills", "hobby", "experience"]);
    hideId(["portfolioInner"]);
    checkStyleOn('trapezoid1');
    checkStyleOff('trapezoid2');
    checkStyleOff('trapezoid3'); 
}

function getPortfolio() { 
    hide(["education", "skills", "hobby", "experience"]);
    showId('portfolioInner');
    write(["portfolioInner"], '<p>Личный cайт студента GeekBrains</p><a href="http://v90630om.beget.tech/index.php" target="_blank"><img src="./img/my_website1.jpg" alt="сайт первый"></a>')
    checkStyleOn('trapezoid2');
    checkStyleOff('trapezoid1');
    checkStyleOff('trapezoid3'); 
}

function getCertificate() {
    hide(["education", "skills", "hobby", "experience"]);
    hideId(["portfolioInner"]);
    checkStyleOn('trapezoid3');
    checkStyleOff('trapezoid2');
    checkStyleOff('trapezoid1'); 
}

function checkStyleOff(className) {
    document.getElementsByClassName(className)[0].style.borderLeft = '30px solid #646464';
    document.getElementsByClassName(className)[0].style.borderTop = '15px solid transparent';
    document.getElementsByClassName(className)[0].style.borderBottom = '15px solid transparent';
    document.getElementsByClassName(className)[0].firstChild.style.color = '#D8D8D8';
    document.getElementsByClassName(className)[0].firstChild.style.fontWeight = '';
}

function checkStyleOn(className) {
    document.getElementsByClassName(className)[0].style.borderLeft = '30px solid #D8D8D8';
    document.getElementsByClassName(className)[0].style.borderTop = '15px solid transparent';
    document.getElementsByClassName(className)[0].style.borderBottom = '15px solid transparent';
    document.getElementsByClassName(className)[0].firstChild.style.color = '#646464';
    document.getElementsByClassName(className)[0].firstChild.style.fontWeight = 'bold';
}

function hide(className) {
  for (const iterator of className) {
    document.getElementsByClassName(iterator)[0].style.display = "none";
  }
}

function hideId(className) {
    for (const iterator of className) {
        // document.getElementById(iterator).style.visibility = "hidden";
        document.getElementById(iterator).style.display = 'none';
      }
}
function show(className) {
    for (const iterator of className) {
        document.getElementsByClassName(iterator)[0].style.display = "block";
      }
}
function showId(className) {
        // document.getElementById(className).style.visibility = "";
        document.getElementById(className).style.display = 'block';
}

function write(teg, text){
    for (const iterator of teg) {
        document.getElementById(iterator).innerHTML = text;
    }
}