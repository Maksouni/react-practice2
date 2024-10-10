/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.scss'

export default function LandingPageSlider({ items }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "slick-dots slick-thumb",
        customPaging: () => (
            <div
                className="custom-dot"
                style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '100%',
                    border: '2px solid #FFFFFF4D',
                    margin: '0 5px',
                    cursor: 'pointer',
                }}
            />


        ),
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    }
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {items}
            </Slider>
        </div>
    )
}

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'transparent' }}
            onClick={onClick}
        >
            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.8672 7.9721C9.97881 8.0837 10.0346 8.21205 10.0346 8.35714C10.0346 8.50223 9.97881 8.63058 9.8672 8.74219L2.06586 16.5435C1.95425 16.6551 1.8259 16.7109 1.68081 16.7109C1.53573 16.7109 1.40738 16.6551 1.29577 16.5435L0.458716 15.7065C0.347109 15.5949 0.291306 15.4665 0.291306 15.3214C0.291306 15.1763 0.347109 15.048 0.458716 14.9364L7.03796 8.35714L0.458716 1.7779C0.347109 1.66629 0.291306 1.53795 0.291306 1.39286C0.291306 1.24777 0.347109 1.11942 0.458716 1.00781L1.29577 0.170758C1.40738 0.0591503 1.53573 0.00334668 1.68081 0.00334668C1.8259 0.00334668 1.95425 0.0591503 2.06586 0.170758L9.8672 7.9721Z" fill="white" />
            </svg>

        </div>
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'transparent' }}
            onClick={onClick}
        >
            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.8672 7.9721C9.97881 8.0837 10.0346 8.21205 10.0346 8.35714C10.0346 8.50223 9.97881 8.63058 9.8672 8.74219L2.06586 16.5435C1.95425 16.6551 1.8259 16.7109 1.68081 16.7109C1.53573 16.7109 1.40738 16.6551 1.29577 16.5435L0.458716 15.7065C0.347109 15.5949 0.291306 15.4665 0.291306 15.3214C0.291306 15.1763 0.347109 15.048 0.458716 14.9364L7.03796 8.35714L0.458716 1.7779C0.347109 1.66629 0.291306 1.53795 0.291306 1.39286C0.291306 1.24777 0.347109 1.11942 0.458716 1.00781L1.29577 0.170758C1.40738 0.0591503 1.53573 0.00334668 1.68081 0.00334668C1.8259 0.00334668 1.95425 0.0591503 2.06586 0.170758L9.8672 7.9721Z" fill="white" />
            </svg>

        </div>
    );
};