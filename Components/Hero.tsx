"use client"
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Encontre, reserve ou alugue - 
                rápido e simples!
            </h1>
            <p className="hero__sutitle">
                Simplifique sua experiência de alugar um carro
                com a gente, sem esforço 
            </p>
            
            <CustomButton
            title="Buscar Carros"
            containerStyles="bg-primary-blue
            text-white rounded-full mt-10"
            handleClick={handleScroll}
            />

        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image
                src="public/hero.png" alt="hero" 
                fill className="object-contain" />
        </div>

                <div className="hero__image-overlay" />

            </div>
    </div>
  )
}

export default Hero
