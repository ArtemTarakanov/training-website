import './Programs.css';

export default function Programs() {
    return(
        <section className="programs">
            <div className="programs-container">
                <div className="programs-card">
                    <div className="programs-card-header">
                        Программы
                        <br/>
                        <span className="programs-card-highlight">
                            похудения
                        </span>
                    </div>

                        <img src = '/images/programs-image.png' alt = "programs-card-image" className = "programs-card-image"/>

                </div>
            </div>
        </section>
    );
}