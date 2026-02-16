import './Hero_1.css'

export default function Hero_1(){
    return(
        <section className="hero">
            <div className="hero-container">
                <img src = "/images/hero-image.png" alt = "hero image" className = "hero-img" />

                <a href =  "#" className = "hero-responces-button">Смотреть отзывы</a>

                <div className="hero-info">
                    <img src = "/images/hero-image-2.png" alt = "hero image 2" className = "hero-img-2" />

                    <div className = "hero-info-text">
                        <h1 className="hero-info-heading">
                            <span className="highlight">Кто я</span> и почему мне стоит доверять?
                        </h1>

                        <p className = "hero-info-description">Меня знают <span className = "description-highlight">тысячи женщин.</span>  <br/> Я более <span className = "description-highlight">10 лет</span>  работаю в теме похудения   и трансформации тела. За это время через мои программы прошли более <span className = "description-highlight"> 10 000 клиенток</span></p>

                        <div className = "hero-info-card">
                            <p className = "hero-info-card-text"><span className = "card-highlight">Мой подход</span> - это не просто «похудеть», а изменить тело, мышление и образ жизни</p>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    );
}