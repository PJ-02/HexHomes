import Image from 'next/image';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-image">
                <Image
                    src='/images/heroImage.jpg'
                    alt="HexHome"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
        </section>
    );
}
