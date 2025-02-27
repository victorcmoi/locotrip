"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/globals/Button";
import {
  CalendarCheck,
  CheckCircle,
  Globe,
  Menu,
  X,
  Search,
  ShieldCheck,
  Train,
  Users, MessageSquareText
} from "lucide-react";
import header_photos from "@/assets/images/tourist_head_photo.jpg";
import old_trip_photo from "@/assets/images/old_trip_photo.jpg";
import train_photo from "@/assets/images/train_photo.jpg";
import friends_trip_photo from "@/assets/images/friends_trip_photo.jpg";
import logo_horizontal from "@/assets/images/logo_horizontal.png";
import logo_square from "@/assets/images/logo_square.png";
import europe_map from "@/assets/images/europe_map.png";
import step_photo from "@/assets/images/step_photo.jpg";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [language, setLanguage] = useState("fr");

  const getLocalizedString = (text: string, language: string = "en", defaultLang: string = "en"): string => {
    const regex = /\[(\w+)]\s*([^[]+)/g;
    let match: RegExpExecArray | null;
    const texts: Record<string, string> = {};

    while ((match = regex.exec(text)) !== null) {
      texts[match[1]] = match[2].trim();
    }

    return texts[language] || texts[defaultLang] || text.trim();
  };

  return (
    <>
      <header className="z-50 fixed top-0 xl:top-4 xl:left-1/2 xl:-translate-x-1/2 w-full max-w-7xl ">
        <div className="z-20 relative bg-white flex justify-between items-center py-2 px-3 xl:px-12 xl:rounded-full shadow-[0_0_20px] shadow-black/20 ">
          <Link href="#head"><Image src={logo_horizontal} alt="Logo Locotrip" className="h-12 w-auto -translate-y-1 object-contain"/></Link>
          <Menu onClick={() => setMenu(true)} className={`lg:hidden stroke-green h-10 w-auto hover:scale-110 duration-500 ${menu ? 'hidden' : 'block'}`}/>
          <X onClick={() => setMenu(false)} className={`lg:hidden stroke-green h-10 w-auto hover:scale-110 duration-500 ${menu ? 'block' : ' hidden'}`}/>
          <div className=" leading-4 hidden lg:flex gap-4 xl:gap-8 uppercase items-center text-green font-bold  ">
            <Link href="#description" className="hover:underline">{getLocalizedString("[fr]Notre projet [en]Our Project", language)}</Link>
            <Link href="#europe" className="hover:underline">{getLocalizedString("[fr]Destinations [en]Destinations", language)}</Link>
            <Link href="#steps" className="hover:underline">{getLocalizedString("[fr]Fonctionnement [en]How It Works", language)}</Link>
            <Link href="#newsletter" className="hover:underline">{getLocalizedString("[fr]Newsletter [en]Newsletter", language)}</Link>
            <select onChange={(e) => setLanguage(e.target.value)} value={language} className="border p-1 rounded">
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
        <div className={`z-10 lg:hidden flex absolute top-0 left-0  w-full ${menu ? 'h-screen' : 'h-0'} duration-500 overflow-hidden flex-col justify-center items-center bg-white gap-8 uppercase text-green font-bold xl:text-lg `}>
          <Link onClick={() => setMenu(false)} href="#description" className="hover:underline">{getLocalizedString("[fr]Notre projet [en]Our Project", language)}</Link>
          <Link onClick={() => setMenu(false)} href="#europe" className="hover:underline">{getLocalizedString("[fr]Destinations [en]Destinations", language)}</Link>
          <Link onClick={() => setMenu(false)} href="#steps" className="hover:underline">{getLocalizedString("[fr]Fonctionnement [en]How It Works", language)}</Link>
          <Link onClick={() => setMenu(false)} href="#newsletter" className="hover:underline">{getLocalizedString("[fr]Newsletter [en]Newsletter", language)}</Link>
          <select onChange={(e) => setLanguage(e.target.value)} value={language} className="border p-1 rounded">
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
      </header>
      <main>
        <section id="head" className="h-screen relative min-h-[700px]">
          <Image src={header_photos} alt="Voyageurs en immersion avec des guides locaux" fill className="inset-0 object-cover"/>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col gap-6 justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-semibold">
              {getLocalizedString("[fr]Voyagez autrement avec des guides locaux passionnés [en]Travel differently with passionate local guides", language)}
            </h1>
            <p className="text-lg md:text-2xl">
              {getLocalizedString("[fr]Découvrez les villes à travers les yeux de leurs habitants grâce à nos guides locaux expérimentés. [en]Discover cities through the eyes of their residents with our experienced local guides.", language)}
            </p>
            <Button href="#description" title={getLocalizedString("[fr]Découvrir LocoTrip [en]Discover LocoTrip", language)} className="w-fit" />
          </div>
        </section>
        <section id="description" className="max-w-7xl mx-auto px-4 py-12 md:py-28 space-y-20">
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-12">
            <Image src={logo_square} alt="Logo LocoTrip - Guides Locaux" className="mb-4 mx-auto w-10/12 md:w-1/3 max-w-xs"/>
            <div className="space-y-4 text-base md:text-lg flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {getLocalizedString("[fr]Pourquoi choisir un guide local avec LocoTrip ? [en]Why choose a local guide with LocoTrip?", language)}
              </h2>
              <p>
                {getLocalizedString("[fr] LocoTrip est la plateforme idéale pour les voyageurs souhaitant explorer les villes en compagnie de guides locaux certifiés. Nos guides locaux offrent des visites personnalisées adaptées à vos centres d'intérêt, que ce soit l’histoire, la gastronomie, l’architecture ou la culture. [en]LocoTrip is the ideal platform for travelers looking to explore cities with certified local guides. Our local guides offer personalized tours tailored to your interests, whether it’s history, gastronomy, architecture, or culture.", language)}
              </p>
              <p>
                {getLocalizedString("[fr]Contrairement aux circuits touristiques classiques, nos guides locaux vous emmènent dans des lieux secrets, des quartiers vivants et vous font découvrir l’âme véritable des villes que vous visitez. Grâce à notre système de mise en relation intelligente, vous trouverez facilement le guide parfait pour votre voyage. [en]Unlike traditional tourist tours, our local guides take you to hidden gems, vibrant neighborhoods, and help you discover the true soul of the cities you visit. Thanks to our smart matching system, you can easily find the perfect guide for your trip.", language)}
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 pb-6 lg:pb-28 space-y-20">
          <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center w-full">
            <div className="md:hover:scale-105 duration-500 relative z-0 aspect-square md:aspect-[0.85] bg-gray-300 w-full md:w-4/12 shadow-[0_0_20px] shadow-black/20 rounded-3xl overflow-hidden">
              <Image src={train_photo} alt="Guide local en action" fill className="inset-0 object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent to-70%"></div>
              <div className="absolute bottom-0 left-0 text-white flex flex-col justify-end p-4 md:p-8 md:pr-10">
                <p className="text-xl xl:text-3xl font-bold mb-2">
                  {getLocalizedString("[fr]Explorez avec un expert [en]Explore with an expert ", language)}
                </p>
                <p className="text-base xl:text-lg">
                  {getLocalizedString("[fr]Nos guides locaux vous font découvrir les secrets cachés de chaque destination [en]Our local guides reveal the hidden secrets of each destination ", language)}
                </p>
              </div>
            </div>
            <div className="md:hover:scale-105 duration-500 relative z-10 aspect-square md:aspect-[0.85] bg-gray-300 w-full md:w-5/12 shadow-[0_0_20px] shadow-black/20 rounded-3xl -mx-6 overflow-hidden">
              <Image src={old_trip_photo} alt="Visite guidée immersive" fill className="inset-0 object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent to-70%"></div>
              <div className="absolute bottom-0 left-0 text-white flex flex-col justify-end p-4 md:p-8">
                <p className="text-2xl xl:text-4xl font-bold mb-2">
                  {getLocalizedString("[fr]Vivez une expérience unique [en]Enjoy a unique experience", language)}
                </p>
                <p className="text-lg xl:text-xl">
                  {getLocalizedString("[fr]Plongez au cœur des traditions et de la culture locale grâce à nos experts passionnés [en]Dive into the heart of local traditions and culture with our passionate experts ", language)}
                </p>
              </div>
            </div>
            <div className="md:hover:scale-105 duration-500 relative z-0 aspect-square md:aspect-[0.85] bg-gray-300 w-full md:w-4/12 shadow-[0_0_20px] shadow-black/20 rounded-3xl overflow-hidden">
              <Image src={friends_trip_photo} alt="Rencontre avec un guide local" fill className="inset-0 object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent to-70%"></div>
              <div className="absolute bottom-0 left-0 text-white flex flex-col justify-end p-4 md:p-8 md:pl-10">
                <p className="text-xl xl:text-3xl font-bold mb-2">
                  {getLocalizedString("[fr]Des rencontres authentiques [en]Authentic encounters", language)}
                </p>
                <p className="text-base xl:text-lg">
                  {getLocalizedString("[fr]Échangez avec des guides passionnés et vivez des moments inoubliables [en]Engage with passionate guides and experience unforgettable moments", language)}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="europe" className=" relative py-6 lg:py-16 flex flex-col items-end">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex-1 space-y-4 text-base md:text-lg py-8 lg:w-[60%]">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {getLocalizedString("[fr]LocoTrip : Guides Locaux dans toute l'Europe [en]LocoTrip: Local Guides Across Europe", language)}
              </h2>
              <p>
                {getLocalizedString("[fr]Nous avons pour ambition d’étendre notre réseau de guides locaux dans 20 grandes villes européennes d’ici 5 ans. Que vous visitiez Paris, Rome, Barcelone ou Berlin, trouvez un guide local qui correspond à vos attentes et profitez d'une expérience unique. [en]We aim to expand our network of local guides to 20 major European cities within the next 5 years. Whether you're visiting Paris, Rome, Barcelona, or Berlin, find a local guide that suits your needs and enjoy a unique experience.", language)}
              </p>
              <p>
                {getLocalizedString("[fr]Notre plateforme facilite la rencontre entre voyageurs et guides locaux afin de vous offrir des aventures immersives. Vous pourrez explorer des lieux méconnus, goûter à la cuisine locale et découvrir la culture authentique de chaque destination. [en]Our platform makes it easy for travelers to connect with local guides, offering you immersive adventures. You can explore hidden spots, taste local cuisine, and discover the authentic culture of each destination.", language)}
              </p>
              <p>
                {getLocalizedString("[fr]Nous nous engageons à rendre le voyage plus accessible et plus respectueux de l’environnement en encourageant l’utilisation des transports durables comme le train pour se déplacer entre les villes européennes. [en]We are committed to making travel more accessible and environmentally friendly by encouraging the use of sustainable transport, such as trains, to travel between European cities.", language)}

              </p>
            </div>
          </div>
          <Image src={europe_map} alt="Logo Locotrip" className="max-w-xl w-full lg:max-w-none lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:w-[38%] object-contain pl-8"/>
        </section>
        <section id="reassurance" className="max-w-7xl mx-auto px-4 pt-16 md:pt-40 pb-8 md:pb-24 text-center grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <div>
            <ShieldCheck className="mx-auto w-12 h-12 text-green mb-4" />
            <h3 className="text-lg md:text-2xl font-bold">
              {getLocalizedString("[fr]Sélection Rigoureuse [en]Strict Selection", language)}
            </h3>
            <p className="text-sm md:text-base">
              {getLocalizedString("[fr]Nos guides locaux sont soigneusement sélectionnés pour garantir des expériences de qualité et une sécurité optimale. [en]Our local guides are carefully selected to ensure high-quality experiences and optimal safety.", language)}
            </p>
          </div>
          <div>
            <Globe className="mx-auto w-12 h-12 text-green mb-4" />
            <h3 className="text-lg md:text-2xl font-bold">
              {getLocalizedString("[fr]Expériences Authentiques [en]Authentic Experiences", language)}
            </h3>
            <p className="text-sm md:text-base">
              {getLocalizedString("[fr]Vivez des moments uniques en immersion totale avec des habitants passionnés qui connaissent leur ville mieux que personne. [en]Experience unique moments in complete immersion with passionate locals who know their city better than anyone.", language)}
            </p>
          </div>
          <div>
            <CalendarCheck className="mx-auto w-12 h-12 text-green mb-4" />
            <h3 className="text-lg md:text-2xl font-bold">
              {getLocalizedString("[fr]Facilité et Flexibilité [en]Ease and Flexibility", language)}
            </h3>
            <p className="text-sm md:text-base">
              {getLocalizedString("[fr]Réservez en toute simplicité et profitez d’une expérience personnalisée selon vos envies et votre rythme. [en]Book with ease and enjoy a personalized experience tailored to your desires and pace.", language)}

            </p>
          </div>
          <div>
            <Train className="mx-auto w-12 h-12 text-green mb-4" />
            <h3 className="text-lg md:text-2xl font-bold">
              {getLocalizedString("[fr]Voyager Éco-responsable [en]Eco-friendly Travel", language)}
            </h3>
            <p className="text-sm md:text-base">
              {getLocalizedString("[fr]Nous mettons en avant le train comme moyen de transport privilégié pour réduire l’empreinte carbone et favoriser un tourisme plus durable. [en]We highlight the train as the preferred mode of transport to reduce carbon footprints and promote more sustainable tourism.", language)}
            </p>
          </div>
        </section>
        <section id="steps" className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto px-4 gap-4 lg:gap-10 py-6 md:py-12">
          <Image src={step_photo} alt="" className="h-auto lg:w-1/2 rounded-3xl shadow-[0_0_20px] shadow-black/20 object-cover"></Image>
          <div className="flex-1 space-y-4 text-lg py-6 md:py-12 text-base lg:text-lg">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6">
              {getLocalizedString("[fr]Comment réserver un guide local avec LocoTrip ? [en]How to book a local guide with LocoTrip?", language)}
            </h2>
            <p>
              {getLocalizedString("[fr]Réserver un guide local sur LocoTrip est simple et rapide. Suivez ces étapes pour vivre une expérience immersive unique avec un expert local. [en]Booking a local guide on LocoTrip is simple and fast. Follow these steps to enjoy a unique immersive experience with a local expert.", language)}
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Search className="w-8 md:w-12 h-8 md:h-12 text-green" />
                <span className="flex-1"><strong>{getLocalizedString("[fr]Recherchez votre destination [en]Search for your destination", language)}</strong> - {getLocalizedString("[fr]Saisissez votre ville et dates de voyage puis explorez les profils de guides locaux disponibles. [en]Enter your city and date of your trip then explore the profiles of available local guides.", language)}</span>
              </li>
              <li className="flex items-center gap-3">
                <Users className="w-8 md:w-12 h-8 md:h-12 text-green" />
                <span className="flex-1"><strong>{getLocalizedString("[fr]Choisissez votre guide [en]Choose your guide", language)}</strong> - {getLocalizedString("[fr]Consultez les avis, l’expérience et les spécialités de chaque guide pour trouver celui qui correspond à vos attentes. [en]Check reviews, experience, and specialties of each guide to find the one that meets your expectations.", language)}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquareText className="w-8 md:w-12 h-8 md:h-12 text-green" />
                <span className="flex-1"><strong>{getLocalizedString("[fr]Echanger avec votre guide [en]Exchange with your guide", language)}</strong> - {getLocalizedString("[fr]Affiner les détails et procédez à la réservation sécurisée en ligne. [en]Slim the details and proceed with secure online booking.", language)}</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="ww-8 md:w-12 h-8 md:h-12 text-green" />
                <span className="flex-1"><strong>{getLocalizedString("[fr]Profitez de votre visite [en]Enjoy your tour", language)}</strong> - {getLocalizedString("[fr]Retrouvez ou restez en contact avec votre guide le jour J et vivez une aventure authentique et mémorable. [en]Meet or stay in contact with your guide on the day and enjoy an authentic and memorable adventure.", language)}</span>
              </li>
            </ul>
          </div>
        </section>
        <section id="newsletter" className="bg-green max-w-7xl mx-4 xl:mx-auto my-6 md:my-12 p-4 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_0_20px] shadow-black/20">
          <div className="text-white text-base md:text-lg lg:w-2/3">
            <h2 className="font-bold text-yellow text-3xl md:text-5xl mb-4">{getLocalizedString("[fr]Rejoignez notre communauté de voyageurs [en]Join our traveler community", language)}</h2>
            <p>{getLocalizedString("[fr]Inscrivez-vous à notre newsletter et suivez toutes les étapes importantes du projet de la beta, à la sortie, jusqu'au offres promotionelles de l'application. [en]Sign up for our newsletter and follow all the important steps of the project, from beta release to promotional offers for the app.", language)}</p>
          </div>
          <form className="flex gap-4 flex-col sm:flex-row sm:items-end">
            <input type="email" name="email" id="email" placeholder={getLocalizedString("[fr]Votre e-mail [en]Your email", language)} className="px-4 py-2 text-2xl rounded-xl w-full sm:w-auto"/>
            <input type="submit" value={getLocalizedString("[fr]S'inscrire [en]Sign Up", language)} className="uppercase px-6 py-2.5 bg-yellow hover:scale-110 font-semibold duration-500 text-xl cursor-pointer rounded-xl w-full sm:w-auto"/>
          </form>
        </section>
      </main>
      <footer className="py-12 relative px-4">
        <div className="bg-orange h-px max-w-5xl rounded-full w-10/12 left-1/2 -translate-x-1/2 px-4 absolute top-0"/>
        <div className="flex md:flex-row flex-col max-w-7xl mx-auto items-center justify-between">
          <Link href="#head"><Image src={logo_square} alt="LocoTrip Logo" className="w-40 md:w-56"/></Link>
          <div className="flex flex-col gap-3 items-center mt-6 md:mt-0 md:items-end">
            <Link href="">{getLocalizedString("[fr]Mentions légales [en]Legal Notice", language)} </Link>
            <Link href="">{getLocalizedString("[fr]Politique de confidentialité [en]Privacy Policy", language)}</Link>
            <p>{getLocalizedString("[fr]Tout droits réservés [en]All rights reserved", language)} - Loco Trip</p>
          </div>
        </div>
      </footer>

    </>
  );
}
