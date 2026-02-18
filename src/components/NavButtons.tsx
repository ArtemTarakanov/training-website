import './NavButtons.css';

const BUTTONS = [
    { text: 'Марафон «жиротопка»', id: '#' },
    { text: 'Оффлайн-тренировки (Астана)', id: '#' },
    { text: 'Марафон «голод»', id: '#' },
    { text: 'VIP-сопровождение', id: '#' },
];

export default function NavButtons() {
    return (
        <section className="nav-buttons">
            <div className="button-group-container">
                {BUTTONS.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="button"
                    >
                        {item.text}
                    </a>
                ))}
            </div>
        </section>
    );
}