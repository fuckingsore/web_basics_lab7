import React from "react";

function changeStyleById(id, style) {
    let el = document.getElementById(id)
    if (el.className === "normal") {
        el.className = style
    } else {
        el.className = "normal"
    }
}

function changeStyleBySelector(selector, style) {
    let el = document.querySelector("#" + selector)
    if (el.className === "normal") {
        el.className = style
    } else {
        el.className = "normal"
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <p>Народився в місті Кам'янське, Дніпропетровська область.</p>
                <p>Закінчив школу з поглибленим вивченням іноземних мов, колегіум №16. 
                   Зараз є студентом 4 курсу КПІ.</p>
                <h3 className="normal" id="art" onClick={() => changeStyleById("art", "style1")}>Мої хобі:</h3>
                <ul style={{display: "inline-block"}} type="square">
                    <li>подорожувати;</li>
                    <li>грати в футбол;</li>
                    <li>грати в КВН;</li>
                    <li>кататись на лижах та сноуборді;</li>
                </ul>
                <h3 className="normal" id="painting" onClick={() => changeStyleBySelector("painting", "style2")}>Мої улюблені фільми:</h3>
                <ol style={{display: "inline-block"}}>
                    <li>Стажери</li>
                    <li>Паразити</li>
                    <li>Гаррі Поттер</li>
                </ol>
                <h3>Тбілісі</h3>
                <p style={{display: "inline-block", width: "80%", textAlign: "center"}}>
                 Тбілісі — столиця Грузії, розташована в східній частині країни на берегах Кури (Мткварі). 
                 Це стародавнє місто, засноване в 5 столітті, в якому зараз проживають понад 1 млн чоловік. 
                 Тбілісі — одне з найчарівніших міст Кавказу, де серед вузьких атмосферних вуличок, затишних старих двориків 
                 і кривих будинків приховані дивовижні пам’ятки та унікальні скарби. 
                 Попри те, що за свою полуторатисячелітню історію Місто було зруйноване і перебудоване кілька десятків разів, 
                 старе місто зберегло середньовічний шарм і значною мірою свій оригінальний стан.
                 Найкращий час для відвідування Тбілісі період з травня по жовтень. У липні й серпні може бути досить жарко. 
                 Щоб насолодитися містом без туристів краще приїхати взимку або на початку весни.</p>
            </div>
        )
    }
}

export default Content