import "./S5ProposalLocation.scss";

export default function S5ProposalLocation() {
    return (
        <>
            <section id="location" className="proposal-location-section">
                <div className="proposal-location-background">
                    <div className="foreground-stars"></div>
                    <div className="proposal-location">

                    </div>
                </div>

                <div className="location-background">
                    <div className="location-elipse"></div>
                    <div className="location">
                        <div className="location-informations">
                            <div className="location-icon"></div>
                            <div className="location-text">
                                <h2>Localização e Contato</h2>
                                <p>R. Francisco Sá, 38 - Loja B - Copacabana, Rio de Janeiro - RJ, 22080-010</p>
                                <p>Tel.: (21) 96514-7515</p>
                            </div>
                        </div>
                        <div className="location-map">
                                <a className="map" href="https://www.google.com/maps/place/Prime+Language+School/@-22.9830217,-43.1941098,17z/data=!3m1!4b1!4m6!3m5!1s0x9bd53c5e99f93d:0x87dee3db96d9f8f9!8m2!3d-22.9830267!4d-43.1915349!16s%2Fg%2F11w4tpzgfc?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D" target="blank"></a>
                        </div>
                    </div>
                </div>

            </section >

        </>
    )
}