const links = document.querySelectorAll('.buttonContainerSTA');

for (let element of links)
{
    element.addEventListener('click', el =>{
        el.preventDefault();
        loadPage(element.getAttribute('href'));
    });
}

async function loadPage(link){
    try{
        const response = await fetch(link);
        if (response.status !== 200) throw new Error('Esta página não pôde ser carregada.');
        const page = await response.text();
        changeTittle(link);
        openPage(page);
    } catch (error){alert(error);}
}

function changeTittle(link){
    const headerTitle = document.querySelector('#header-title');
    if(link.includes('ultimosEnvios')) headerTitle.innerText = 'Últimos Envios dos Sublimadores';
    if(link.includes('perfil')) headerTitle.innerText = 'Meu Perfil';
    if(link.includes('minhasMoedas')) headerTitle.innerText = 'Minhas Moedas';
    if(link.includes('adquirirArtes')) headerTitle.innerText = 'Adquirir Artes';
    if(link.includes('recompensas')) headerTitle.innerText = 'Minhas Recompensas';
    if(link.includes('minhasArtes')) headerTitle.innerText = 'Minhas Artes';
}

function openPage(page){
    const mainContentSTA = document.querySelector('.mainContentSTA');
    mainContentSTA.innerHTML = page;
}