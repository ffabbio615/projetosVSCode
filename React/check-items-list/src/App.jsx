import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //lista com ID, nome, sobrenome, idade e habilitação
  const lista = [
    {
      id: 1,
      nome: "Fábio",
      sobrenome: "Marques Melo",
      idade: 33,
      habilitacao: true
    },

    {
      id: 2,
      nome: "Marli",
      sobrenome: "Dos Santos Marques Melo",
      idade: 63,
      habilitacao: true
    },

    {
      id: 3,
      nome: "José",
      sobrenome: "Santos Melo",
      idade: 66,
      habilitacao: true
    },

    {
      id: 4,
      nome: "Tatiane",
      sobrenome: "Marques Melo",
      idade: 39,
      habilitacao: true
    },

    {
      id: 5,
      nome: "Fabiana de Jesus",
      sobrenome: "Lopes Machado",
      idade: 37,
      habilitacao: false
    },

    {
      id: 6,
      nome: "Valéria",
      sobrenome: "Cristina Rangel de Lima",
      idade: 35,
      habilitacao: false
    },

    {
      id: 7,
      nome: "Ramilson",
      sobrenome: "Martins de Oliveira Junior",
      idade: 35,
      habilitacao: true
    },

    {
      id: 8,
      nome: "Marly",
      sobrenome: "Rosa dos Santos Marques",
      idade: 86,
      habilitacao: false
    },

    {
      id: 9,
      nome: "Manoel",
      sobrenome: "Mortágua Marques",
      idade: 89,
      habilitacao: true
    },

    {
      id: 10,
      nome: "Kiara",
      sobrenome: "Marques Melo",
      idade: 9,
      habilitacao: false
    },

  ];

  function listagemTotal(lista){
    
    let habilitacapTexto;
    if(lista.habilitacao) habilitacapTexto = "Sim"; else habilitacapTexto = "Não";

    return (
    <tr key={lista.id}>
      <td>{lista.nome}</td>
      <td>{lista.sobrenome}</td>
      <td>{lista.idade}</td>
      <td>{habilitacapTexto}</td>
    </tr>
    );
  }

  function listagemDeHabilitados(lista, habilitado){
    if(habilitado && lista.habilitacao || !habilitado && !lista.habilitacao){
        return(
        <tr key={lista.id}>
          <td>{lista.nome}</td>
          <td>{lista.sobrenome}</td>
          <td>{lista.idade}</td>
          <td>{lista.habilitacao ? "Sim" : "Não"}</td>
        </tr>
        )
      }
    }

  return (
    <>
      <section>
        <h1>Listagem total das Pessoas</h1>
        <table> 
          <thead>
            <tr>
              <th>NOME</th>
              <th>SOBRENOME</th>
              <th>IDADE</th>
              <th>HABILITAÇÃO</th>
            </tr>
          </thead>
          <tbody>
              {lista.map((pessoa) => listagemTotal(pessoa))}
              {/* {lista.map((pessoa) => listagemDeHabilitados(pessoa, true))} */}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default App
