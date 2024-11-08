import "./S1Proposal.scss";

export default function S1Proposal() {
    return (
        <>

            <section className="proposal-section">

                <div className="proposal-background">
                    <div className="foreground-stars"></div>
                    <div class="proposal">
                        <div class="proposal-text">
                            <h1>Seja fluente, seja PRIME. Inglês que abre portas!</h1>
                            <p>Na PRIME Language School, nosso foco é sua fluência. Aprenda no seu ritmo e esteja preparado para qualquer desafio!</p>
                            <div class="proposal-image-mobile"></div>
                            <div class="CTA-container">
                                <button class="CTA-button">QUERO CONHECER</button>
                            </div>
                        </div>
                        <div class="proposal-image"></div>
                    </div>
                </div>


                <div className="methodology-background">
                    <div className="methodology-elipse"></div>
                    <div className="methodology">
                        <h3>Aprenda no seu ritmo: presencial ou online, você escolhe!</h3>
                        <p>Na Prime Language School, oferecemos aulas ao vivo que se encaixam perfeitamente a sua rotina.
                            Seja presencialmente em nossa unidade ou online via videochamadas, você aprende de forma dinâmica e personalizada.
                            Flexibilidade e resultados garantidos, do jeito que você precisa.</p>
                        <div className="methodology-image"></div>
                    </div>

                </div>
            </section>

        </>
    )
}