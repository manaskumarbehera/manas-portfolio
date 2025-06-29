import React from 'react';

interface HeroProps {
    name: string;
    title: string;
}

const Hero: React.FC<HeroProps> = ({ name, title }) => {
    return (
        <section style={{ textAlign: 'center', padding: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem' }}>Hi, I’m {name}</h1>
            <p style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>{title}</p>
        </section>
    );
};

export default Hero;
