import {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider = ({children}) => {
    
    const [movieList, setMovieList] = useState(
        [
            {
                id: 1,
                nome: 'Titanic',
                capa: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/22/Titanic_poster.jpg/240px-Titanic_poster.jpg',
                descricao: 'Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912. Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor.',
                genero:'Romance/Aventura',
                classificacao: 12
            },
            {
                id: 2,
                nome: 'Interestellar',
                capa: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3a/Interstellar_Filme.png/250px-Interstellar_Filme.png',
                descricao: 'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos.',
                genero:'Ficção',
                classificacao: 12
            },
            {
                id: 3,
                nome: 'Os Incríveis',
                capa: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4b/Os_Incr%C3%ADveis.jpg/240px-Os_Incr%C3%ADveis.jpg',
                descricao: 'Seres humanos dotados de superpoderes — uma vez foram vistos como heróis, mas os danos colaterais de suas várias boas ações levaram o governo a criar um "programa de realocação de Supers", forçando os Supers a se encaixarem entre os civis, não usando mais seus superpoderes. Beto e Helena Pêra, que são Supers, se casaram e agora têm três filhos: Violeta, Flecha e o bebê Zezé, na cidade de Metroville.',
                genero:'Animação/Aventura',
                classificacao: 0
            },
            {
                id: 4,
                nome: 'O Diabo Veste Prada',
                capa: 'https://upload.wikimedia.org/wikipedia/pt/e/e8/The_Devil_Wears_Prada_-_filme.jpg',
                descricao: 'Andrea Sachs, é uma jovem que conquistou um emprego na revista Runaway Magazine, a mais importante do gênero de moda em Nova Iorque. Ela passa a trabalhar como a assistente da principal executiva Miranda Priestly. Apesar da chance, Andrea logo percebe que trabalhar com Miranda não é tão fácil.',
                genero:'Comédia Dramática',
                classificacao: 12
            },
            {
                id: 5,
                nome: 'Jogos Mortais',
                capa: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ad/Saw_poster_promocional.jpg/200px-Saw_poster_promocional.jpg',
                descricao: 'Dois homens acordam acorrentados em um banheiro como prisioneiros de um assassino em série que leva suas vítimas a situações limítrofes em um jogo macabro. Para sobreviver, eles terão de desvendar juntos as peças desse quebra-cabeças doentio.',
                genero:'Terror',
                classificacao: 18
            },
            
        ]
    );

    return(
        <MovieContext.Provider value={{movieList}}>
            {children}
        </MovieContext.Provider>
    )
}