import Image from 'next/image';

const sponsors = [
    { id: 1, name: 'McCarthy', src: '/images/Sponsors/McCarthyLogo.png', alt: 'McCarthy Logo' },
    { id: 2, name: 'Arcadia Customs', src: '/images/Sponsors/ArcadiaLogo.png', alt: 'Arcadia Customs Logo' },
    { id: 3, name: 'nVIDEA', src: '/images/Sponsors/nvideaLogo.png', alt: 'NVIDIA Logo' },
    { id: 4, name: 'MiTek', src: '/images/Sponsors/MiTekLogo.jpg', alt: 'MiTek Logo' },
    { id: 5, name: 'Solar Max', src: '/images/Sponsors/SolarMaxLogo.png', alt: 'Solar Max Logo' },
    { id: 6, name: 'Raising Canes', src: '/images/Sponsors/RaisingCanesLogo.png', alt: 'Raising Canes Logo' },
    { id: 7, name: 'UCR EPIC', src: '/images/Sponsors/UCREPICLogo.png', alt: 'UCR EPIC Logo' },
];

export default function Sponsors() {
    return (
        <section className='sponsorsSection'>
            <h2>Our Sponsors</h2>
            <div className='logoGrid'>
                {sponsors.map((sponsor) => (
                    <div key={sponsor.id} className='logoItem'>
                        <Image src={sponsor.src} width={200} height={200} alt={sponsor.alt} className='logoImage' />
                    </div>
                ))}
            </div>
        </section>
    );
}