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
  Users
} from "lucide-react";
import header_photos from "@/assets/images/tourist_head_photo.jpg";
import old_trip_photo from "@/assets/images/old_trip_photo.jpg";
import train_photo from "@/assets/images/train_photo.jpg";
import friends_trip_photo from "@/assets/images/friends_trip_photo.jpg";
import logo_horizontal from "@/assets/images/logo_horizontal.png";
import logo_square from "@/assets/images/logo_square.png";
import step_photo from "@/assets/images/step_photo.jpg";
import { useState, useEffect } from "react";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [language, setLanguage] = useState("fr");
  const [resources, setResources] = useState(null);

  const languageNames = {
    fr: "Français",
    en: "English",
    es: "Español",
    de: "Deutsch"
  };

  useEffect(() => {
    const loadResources = async () => {
      try {
        const res = await fetch(`/content/${language}/ressource.json`);
        const data = await res.json();
        setResources(data);
      } catch (error) {
        console.error("Failed to load language resources:", error);
      }
    };

    loadResources();
  }, [language]);

  const getText = (path: string) => {
    if (!resources) return "";

    const keys = path.split(".");
    let current = resources;

    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }

    return current;
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/map.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const LanguageSelector = ({ isMobile = false }) => (
    <div className="relative">
      <div className="flex items-center">
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-3 overflow-hidden max-w-5">
          <Image
            src={`/flags/${language}.svg`}
            alt={`${languageNames[language as keyof typeof languageNames]} flag`}
            className="w-full h-full object-cover"
          />
        </div>
        <select
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          className="px-8 py-1 border border-slate-200 rounded-md font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-green focus:border-green hover:border-green transition-colors text-green-700 appearance-none"
        >
          <option value="fr">
            {isMobile ? languageNames.fr : "FR"}
          </option>
          <option value="en">
            {isMobile ? languageNames.en : "EN"}
          </option>
          <option value="es">
            {isMobile ? languageNames.es : "ES"}
          </option>
          <option value="de">
            {isMobile ? languageNames.de : "DE"}
          </option>
        </select>
      </div>
    </div>
  );

  if (!resources) {
    return (
      <div className="h-screen flex items-center justify-center">Loading...</div>
    );
  }

  return (
    <>
      <header className="z-50 fixed top-0 xl:top-4 xl:left-1/2 xl:-translate-x-1/2 w-full max-w-7xl ">
        <div className="z-20 relative bg-white flex justify-between items-center py-2 px-3 xl:px-12 xl:rounded-full shadow-[0_0_20px] shadow-black/20 ">
          <Link href="#head">
            <Image
              src={logo_horizontal}
              alt="Logo Locotrip"
              className="h-12 w-auto -translate-y-1 object-contain"
            />
          </Link>
          <Menu
            onClick={() => setMenu(true)}
            className={`lg:hidden stroke-green h-10 w-auto ${
              menu ? "hidden" : "block"
            }`}
          />
          <X
            onClick={() => setMenu(false)}
            className={`lg:hidden stroke-green h-10 w-auto ${
              menu ? "block" : " hidden"
            }`}
          />
          <div className="leading-4 hidden lg:flex gap-4 xl:gap-8 uppercase text-green font-bold xl:text-lg items-center">
            <Link
              href="#description"
              className="leading-2 hover:text-opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300/40 rounded"
            >
              {getText("navigation.ourProject")}
            </Link>
            <Link
              href="#europe"
              className="leading-2 hover:text-opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300/40 rounded"
            >
              {getText("navigation.destinations")}
            </Link>
            <Link
              href="#steps"
              className="leading-2 hover:text-opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300/40 rounded"
            >
              {getText("navigation.howItWorks")}
            </Link>
            <Link
              href="#newsletter"
              className="leading-2 hover:text-opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300/40 rounded"
            >
              {getText("navigation.newsletter")}
            </Link>
            <LanguageSelector />
          </div>
        </div>
        <div
          className={`z-10 lg:hidden flex absolute top-0 left-0 w-full ${
            menu ? "h-screen" : "h-0"
          } duration-500 overflow-hidden flex-col justify-center items-center bg-white gap-8 uppercase text-green font-bold xl:text-lg`}
        >
          <Link
            onClick={() => setMenu(false)}
            href="#description"
            className="hover:text-opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300/40 rounded"
          >
            {getText("navigation.ourProject")}
          </Link>
          <Link
            onClick={() => setMenu(false)}
            href="#europe"
            className="hover:text-opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300/40 rounded"
          >
            {getText("navigation.destinations")}
          </Link>
          <Link
            onClick={() => setMenu(false)}
            href="#steps"
            className="hover:text-opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300/40 rounded"
          >
            {getText("navigation.howItWorks")}
          </Link>
          <Link
            onClick={() => setMenu(false)}
            href="#newsletter"
            className="hover:text-opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300/40 rounded"
          >
            {getText("navigation.newsletter")}
          </Link>
          <LanguageSelector isMobile={true} />
        </div>
      </header>
      <main>
        <section id="head" className="h-screen relative min-h-[700px]">
          <Image
            src={header_photos}
            alt="Voyageurs en immersion avec des guides locaux"
            fill
            className="inset-0 object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col gap-6 justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-semibold">
              {getText("hero.title")}
            </h1>
            <p className="text-lg md:text-2xl">{getText("hero.subtitle")}</p>
            <Button
              href="#description"
              title={getText("hero.cta")}
              className="w-fit"
            />
          </div>
        </section>
        <section
          id="description"
          className="max-w-7xl mx-auto px-4 py-12 md:py-28 space-y-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-12">
            <Image
              src={logo_square}
              alt="Logo LocoTrip - Guides Locaux"
              className="mb-4 mx-auto w-10/12 md:w-1/3 max-w-xs"
            />
            <div className="space-y-4 text-base md:text-lg flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {getText("description.title")}
              </h2>
              <p>{getText("description.paragraph1")}</p>
              <p>{getText("description.paragraph2")}</p>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 pb-6 mb-8 lg:pb-28 space-y-20">
          <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center w-full">
            <div className="md:hover:scale-105 duration-500 relative z-0 aspect-square md:aspect-[0.85] bg-gray-300 w-full md:w-4/12 shadow-[0_0_20px] shadow-black/20 rounded-3xl overflow-hidden">
              <Image
                src={train_photo}
                alt="Guide local en action"
                fill
                className="inset-0 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent to-70%"></div>
              <div className="absolute bottom-0 left-0 text-white flex flex-col justify-end p-4 md:p-8 md:pr-10">
                <p className="text-xl xl:text-3xl font-bold mb-2">
                  {getText("features.card1.title")}
                </p>
                <p className="text-base xl:text-lg">
                  {getText("features.card1.description")}
                </p>
              </div>
            </div>
            <div className="md:hover:scale-105 duration-500 relative z-10 aspect-square md:aspect-[0.85] bg-gray-300 w-full md:w-5/12 shadow-[0_0_20px] shadow-black/20 rounded-3xl -mx-6 overflow-hidden">
              <Image
                src={old_trip_photo}
                alt="Visite guidée immersive"
                fill
                className="inset-0 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent to-70%"></div>
              <div className="absolute bottom-0 left-0 text-white flex flex-col justify-end p-4 md:p-8">
                <p className="text-2xl xl:text-4xl font-bold mb-2">
                  {getText("features.card2.title")}
                </p>
                <p className="text-lg xl:text-xl">
                  {getText("features.card2.description")}
                </p>
              </div>
            </div>
            <div className="md:hover:scale-105 duration-500 relative z-0 aspect-square md:aspect-[0.85] bg-gray-300 w-full md:w-4/12 shadow-[0_0_20px] shadow-black/20 rounded-3xl overflow-hidden">
              <Image
                src={friends_trip_photo}
                alt="Rencontre avec un guide local"
                fill
                className="inset-0 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent to-70%"></div>
              <div className="absolute bottom-0 left-0 text-white flex flex-col justify-end p-4 md:p-8 md:pl-10">
                <p className="text-xl xl:text-3xl font-bold mb-2">
                  {getText("features.card3.title")}
                </p>
                <p className="text-base xl:text-lg">
                  {getText("features.card3.description")}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="europe"
          className=" relative py-6 lg:py-16 flex flex-col items-end"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex-1 space-y-4 text-base md:text-lg py-8 lg:w-[45%]">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {getText("europe.title")}
              </h2>
              <p>{getText("europe.paragraph1")}</p>
              <p>{getText("europe.paragraph2")}</p>
              <p>{getText("europe.paragraph3")}</p>
            </div>
          </div>
          <object
            type="image/svg+xml"
            data="/svg_europe.svg"
            id="europe-map"
            className="max-w-xl w-full lg:max-w-none lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:w-[55%] object-contain pl-8"
          ></object>
        </section>
        <section
          id="reassurance"
          className="max-w-7xl mx-auto px-4 pt-16 mt-10 md:pt-40 pb-8 md:pb-24 text-center grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          <div>
            <ShieldCheck className="mx-auto w-12 h-12 text-green mb-4" />
            <h3 className="text-lg md:text-2xl font-bold">
              {getText("reassurance.item1.title")}
            </h3>
            <p className="text-sm md:text-base">
              {getText("reassurance.item1.description")}
            </p>
          </div>
          <div>
            <Globe className="mx-auto w-12 h-12 text-green mb-4" />
            <h3 className="text-lg md:text-2xl font-bold">
              {getText("reassurance.item2.title")}
            </h3>
            <p className="text-sm md:text-base">
              {getText("reassurance.item2.description")}
            </p>
          </div>
          <div>
            <CalendarCheck className="mx-auto w-12 h-12 text-green mb-4" />
            <h3 className="text-lg md:text-2xl font-bold">
              {getText("reassurance.item3.title")}
            </h3>
            <p className="text-sm md:text-base">
              {getText("reassurance.item3.description")}
            </p>
          </div>
          <div>
            <Train className="mx-auto w-12 h-12 text-green mb-4" />
            <h3 className="text-lg md:text-2xl font-bold">
              {getText("reassurance.item4.title")}
            </h3>
            <p className="text-sm md:text-base">
              {getText("reassurance.item4.description")}
            </p>
          </div>
        </section>
        <section
          id="steps"
          className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto px-4 gap-4 lg:gap-10 py-6 md:py-12"
        >
          <Image
            src={step_photo}
            alt=""
            className="h-auto lg:w-1/2 rounded-3xl shadow-[0_0_20px] shadow-black/20 object-cover"
          ></Image>
          <div className="flex-1 space-y-4 py-6 md:py-12 text-base lg:text-lg">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6">
              {getText("steps.title")}
            </h2>
            <p>{getText("steps.intro")}</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Search className="w-8 md:w-12 h-8 md:h-12 text-green" />
                <span className="flex-1">
                  <strong>{getText("steps.step1.title")}</strong> -{" "}
                  {getText("steps.step1.description")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Users className="w-8 md:w-12 h-8 md:h-12 text-green" />
                <span className="flex-1">
                  <strong>{getText("steps.step2.title")}</strong> -{" "}
                  {getText("steps.step2.description")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="w-8 md:w-12 h-8 md:h-12 text-green" />
                <span className="flex-1">
                  <strong>{getText("steps.step3.title")}</strong> -{" "}
                  {getText("steps.step3.description")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="ww-8 md:w-12 h-8 md:h-12 text-green" />
                <span className="flex-1">
                  <strong>{getText("steps.step4.title")}</strong> -{" "}
                  {getText("steps.step4.description")}
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section
          id="newsletter"
          className="bg-green max-w-7xl mx-4 xl:mx-auto my-6 md:my-12 p-4 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_0_20px] shadow-black/20"
        >
          <div className="text-white text-base md:text-lg lg:w-2/3">
            <h2 className="font-bold text-yellow text-3xl md:text-5xl mb-4">
              {getText("newsletter.title")}
            </h2>
            <p>{getText("newsletter.description")}</p>
          </div>
          <form
            action="post"
            className="flex gap-4 flex-col sm:flex-row sm:items-end"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder={getText("newsletter.placeholder")}
              className="px-4 py-2 text-2xl rounded-xl w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green focus:border-green"
            />
            <input
              type="submit"
              value={getText("newsletter.button")}
              className="uppercase px-6 py-2.5 bg-yellow hover:scale-110 font-semibold duration-500 text-xl cursor-pointer rounded-xl w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green"
            />
          </form>
        </section>
      </main>
      <footer className="py-12 relative px-4">
        <div className="bg-orange h-px max-w-5xl rounded-full w-10/12 left-1/2 -translate-x-1/2 px-4 absolute top-0" />
        <div className="flex md:flex-row flex-col max-w-7xl mx-auto items-center justify-between">
          <Image src={logo_square} alt="LocoTrip Logo" className="w-40 md:w-56" />
          <div className="flex flex-col gap-3 items-center mt-6 md:mt-0 md:items-end">
            <Link href="">Legal Notice</Link>
            <Link href="">Privacy Policy</Link>
            <p>All rights reserved - Loco Trip</p>
          </div>
        </div>
      </footer>
    </>
  );
}
