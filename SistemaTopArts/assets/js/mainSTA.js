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
        openPage(page);
    } catch (error){alert(error);}
}

function openPage(page){
    const mainContentSTA = document.querySelector('.mainContentSTA');
    mainContentSTA.innerHTML = page;
}