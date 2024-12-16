import { useParams } from "react-router-dom";
import React, {useState} from "react";
import './CertificateForm.scss';
import Certificate from "./Certificate";

export default function CertificateForm(){

    const {username} = useParams();

    function showPicker(id)
    {
        const date = document.querySelector(`#${id}`);
        date.showPicker();
    }

    const [student, setStudent] = useState([
        {
            name:'',
            cpf:'',
            course:'',
            beginDate:'',
            endDate:'',
            hours:'',
            level:''
        }
    ]);

    function validateFields(){
        const name = document.querySelector("#name").value;
        const cpf = document.querySelector("#cpf").value;
        const course = document.querySelector("#course").value;
        const beginDate = document.querySelector("#begin-date").value;
        const endDate = document.querySelector("#end-date").value;
        const hours = document.querySelector("#hours").value;
        const level = document.querySelector("#level").value;

        if(name && cpf && course && beginDate && endDate && level !== '')
        {
            setStudent([
                {
                    name,
                    cpf,
                    course,
                    beginDate,
                    endDate,
                    hours,
                    level
                }
            ]);
        }
        else{
            alert("Preencha todos os campos corretamente.");
        }
    }

    return(
        <>
        { student[0].name === '' ?
            <>
            <h1 className="certificate-form-title">Olá, {username}!</h1>
            <div className="certificate-form-container">
                <div className="form">
                    <label htmlFor="name">Nome do Aluno:</label>
                    <input type="text" id="name" placeholder="Ex.: Alexandre Mello" />
                    <label htmlFor="ncpf">CPF:</label>
                    <input type="text" id="cpf" placeholder="Somente números" />
                    <label htmlFor="course">Curso:</label>
                    <select name="course" id="course">
                        <option defaultValue="kids">PRIME KIDS</option>
                        <option defaultValue="teens">PRIME TEENS</option>
                        <option defaultValue="plus">PRIME PLUS</option>
                        <option defaultValue="master">PRIME MASTER</option>
                        <option defaultValue="essential">PRIME ESSENTIAL</option>
                        <option defaultValue="inter">PRIME INTER</option>
                        <option defaultValue="high">PRIME HIGH</option>
                    </select>
                    <label htmlFor="begin-date">Selecione a data inicial:</label>
                    <input onClick={() => showPicker("begin-date")} type="date" id="begin-date" defaultValue="2023/12/25" min="2023/12/25" />
                    <label htmlFor="end-date">Selecione a data final:</label>
                    <input onClick={() => showPicker("end-date")} type="date" id="end-date" defaultValue="2024/12/25" min="2023/12/25" />
                    <label htmlFor="hours">Carga horária:</label>
                    <input type="text" id="hours" placeholder="Somente números. Ex.: 48" />
                    <label htmlFor="level">Selecione o nível:</label>
                    <select name="level" id="level">
                        <option defaultValue="a1">A1</option>
                        <option defaultValue="a2">A2</option>
                        <option defaultValue="b1">B1</option>
                        <option defaultValue="b2">B2</option>
                        {/* <option value="c1">C1</option>
                        <option value="c2">C2</option> */}
                    </select>
                    <button onClick={validateFields}>Gerar Certificado</button>
                </div>
            </div>
            </>
            : 
            <Certificate 
                name={student[0].name}
                cpf={student[0].cpf}
                course={student[0].course}
                beginDate={student[0].beginDate}
                endDate={student[0].endDate}
                hours={student[0].hours}
                level={student[0].level}
            />
        }
        </>
    )
}