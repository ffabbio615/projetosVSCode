import './Certificate.scss';

export default function Certificate({name, cpf, course, beginDate, endDate, hours, level}){

    return(
        <>
        <div className='certificate-container'>
            <div className='red-triangles-container'>
                <div className='certificate-container-logo'>
                    <div className='certificate-logo'></div>
                    <p className='cnpj'></p>
                </div>
            </div>
            <div className='watermark'></div>
            <div className='watermark-colored'></div>
            <div className='blue-border'></div>

            <div className='certificate-data-container'>
                <h1 className='certificate-data-title'>Certificado</h1>
                <p className='certificate-description'>Certificamos que</p>
                <p className='certificate-description'><strong>{name}</strong>, portador do CPF <strong>{cpf}</strong></p>
                <p className='certificate-description'>Concluiu o curso</p>
                <h2 className='course-title'>{course}</h2>
                <p className='certificate-description'>Ministrado no período entre <strong>{beginDate}</strong> e 
                <strong>{endDate}</strong>, totalizando a carga horária de <strong>{hours}</strong> horas
                    de estudo, tendo alcançado o nível <strong>{level}</strong> .
                </p>
                <p className='certificate-description'>Rio de Janeiro, 16 de dezembro de 2024.</p>
                <div className='signature-container'>
                    <div className='signature'></div>
                    <p className='principal-name'>Alexandre Mello</p>
                    <p className='principal'>Diretor</p>
                </div>
            </div>
        </div>
            {/* <h1>{name + ' ' + cpf + ' ' + course + ' ' + beginDate + ' ' + endDate + ' ' + level}</h1> */}
        </>
    );

}