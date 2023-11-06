document.addEventListener('click', e=>{
    e.preventDefault();
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();
    if (tag === 'a'){
        processarPagina(elemento);
    }
});

async function processarPagina(pagina){
    try{
    const link = pagina.getAttribute('href');
    const response = await fetch(link);

    if (response.status !==200) throw new Error ('Página não encontrada');
    const html = await response.text();
    carregarPagina(html);
}catch (error){alert(error);}
}

function carregarPagina(html){
    const pageContent = document.querySelector('.pagesContent');
    pageContent.innerHTML = html;
    if(!document.querySelector('.fundoBranco'))
    document.querySelector('.pagesContainer').classList.add('fundoBranco');
}