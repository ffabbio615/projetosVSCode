const imgR = [];
const imgHome = [];
const textInformationLeft = document.querySelector(".textInformationLeft");
let timeoutID = setTimeout(activateRadios, 7000);
// setTimeout(function () {
//     activateRadios();
// }, 7000);

function activateRadios(){
    for (let i = 1; i <= 5; i++) {
        if(imgR[i-1].checked==true){
            // setTimeout(function () {
            //     activateRadios();
            // }, 7000);
            if(i==5){
                imgR[0].checked = true;
                const event = new Event("change", { bubbles: true, cancelable: true });
                imgR[0].dispatchEvent(event);
                break;
            }
            imgR[i].checked = true;
            const event = new Event("change", { bubbles: true, cancelable: true });
            imgR[i].dispatchEvent(event);
            break;
        }
    }
}

for(let i = 0; i<5; i++)
{
    imgR[i] = document.querySelector(`#imgR${i+1}`);
    imgHome[i] = document.querySelector(`.imgHome${i+1}`);
}

for (let i = 1; i <= 5; i++) {
    imgR[i-1].addEventListener("change", function () {
        if (imgR[i-1].checked) {
            clearTimeout(timeoutID);
            timeoutID = setTimeout(activateRadios, 7000);
            textInformationLeft.classList = "textInformationLeft textInformationLeftOut";
            setTextInformation(i);
            imgHome[i-1].classList = `imgHome${i} imgMainPosition`;
            for (let j = 1; j <= 5; j++) {

                if(j!==i && imgHome[j-1].classList.contains(`imgMainPosition`)){
                    imgHome[j-1].classList = `imgHome${j} imgEndPosition`;
                    freezeImgR();
                    setTimeout(function () {
                        setClassImg(j);
                    }, 2000);
                }
            }
        }
    });
}

function setTextInformation(i){
    let title, subtitle, paragraph;
    if (i===1){
        title = "DESTAQUE-SE NO MERCADO";
        subtitle = "Lorem Ipsum";
        paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
        "Sint repellat officia, facilis blanditiis laboriosam illo molestias maiores."+ 
        "Corporis consequuntur, quaerat earum quibusdam eius veniam laborum, alias voluptat.";
    }
    if (i===2){
        title = "AUMENTE SUAS HABILIDADES";
        subtitle = "Sublimação";
        paragraph = "Com instrutores experientes, você explorará um mundo de possibilidades criativas. Além disso, a sublimação é uma técnica versátil e lucrativa, abrindo portas para novas oportunidades de negócios. É um investimento no seu crescimento pessoal e profissional.";
    }
    if (i===3){
        title = "AUMENTE SUAS HABILIDADES";
        subtitle = "Segundo Plano";
        paragraph = "Um curso de sublimação é uma excelente oportunidade de aprendizado. Ele proporciona conhecimentos práticos e habilidades valiosas, permitindo a criação de produtos personalizados e únicos. Com instrutores experientes, você explorará um mundo de possibilidades criativas. Além disso, a sublimação é uma técnica versátil e lucrativa, abrindo portas para novas oportunidades de negócios. É um investimento no seu crescimento pessoal e profissional.";
    }
    if (i===4){
        title = "AUMENTE SUAS HABILIDADES";
        subtitle = "Sublimação";
        paragraph = "Um curso de sublimação é uma excelente oportunidade de aprendizado. Ele proporciona conhecimentos práticos e habilidades valiosas, permitindo a criação de produtos personalizados e únicos. Com instrutores experientes, você explorará um mundo de possibilidades criativas. Além disso, a sublimação é uma técnica versátil e lucrativa, abrindo portas para novas oportunidades de negócios. É um investimento no seu crescimento pessoal e profissional.";
    }
    if (i===5){
        title = "AUMENTE SUAS HABILIDADES";
        subtitle = "Segundo Plano";
        paragraph = "Um curso de sublimação é uma excelente oportunidade de aprendizado. Ele proporciona conhecimentos práticos e habilidades valiosas, permitindo a criação de produtos personalizados e únicos. Com instrutores experientes, você explorará um mundo de possibilidades criativas. Além disso, a sublimação é uma técnica versátil e lucrativa, abrindo portas para novas oportunidades de negócios. É um investimento no seu crescimento pessoal e profissional.";
    }
    setTimeout(function () {
        showTextInformation(title, subtitle, paragraph)
    }, 700);
}

function showTextInformation(title, subtitle, paragraph){
    document.querySelector(".titleInformation").innerHTML = title;
    document.querySelector(".subtitleInformation").innerHTML = subtitle;
    document.querySelector(".paragraphInformation").innerHTML = paragraph;
    textInformationLeft.classList = "textInformationLeft textInformationLeftIn";
}

function freezeImgR(){
    for(let i=1; i<=5; i++){
        imgR[i-1].disabled = true;
    }
}

function setClassImg(i){
    if(i!==1)
    imgHome[i-1].classList = `imgHome${i-1} imgStartPosition`;
    for(let j=1; j<=5; j++){
        imgR[j-1].disabled = false;
    }
}