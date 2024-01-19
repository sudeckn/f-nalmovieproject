import Image from "next/image";
import React from "react";
import movieApp from "../../../public/movieapp.jpg"
import movieApp2 from "../../../public/movieapp2.jpg"
const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="lg:w-10/12 w-full">
        <p className="font-normal text-sm leading-3 text-black ">About</p>
        <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-white lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
          Sinema Tutkunları İçin En İyi Film Sitesi: Kapsamlı İncelemeler,
          Haberler ve İzleme Rehberleri
        </h2>
        <p className="font-normal text-base leading-6 text-white mt-6">
          Hoş geldiniz! Sinema dünyasına dair en güncel bilgiler, derinlemesine
          film incelemeleri ve heyecan verici haberlerle dolu film sitesine hoş
          geldiniz. Bizimle birlikte sinemanın büyülü dünyasını keşfedin, en
          yeni filmleri yakından takip edin ve favori yönetmenlerinizin eserleri
          hakkında detaylı bilgiler edinin. Ayrıca, izleme rehberlerimizle film
          keyfinizi en üst seviyeye çıkarın. Sizi etkileyen, düşündüren ya da
          sizi güldüren her türde film için doğru adrestesiniz. Sinemaya dair
          her şey burada, keyifli seyirler dileriz!,
        </p>
      </div>

      <div className="lg:mt-14 sm:mt-10 mt-12 relative">
        <Image
          className="lg:block hidden w-full"
          height={1200}
          width={1920}
          src={movieApp}
          alt="Group of people Chilling"
        />
        <Image
          className="lg:hidden sm:block hidden w-full"
          height={1200}
          width={1920}
          src={movieApp}
          alt="Group of people Chilling"
        />
        <Image
          className="sm:hidden block w-full"
          height={1200}
          width={1920}
          src={movieApp}
          alt="Group of people Chilling"
        />
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-white">
            Hikayemiz
          </h2>
          <p className="font-normal text-base leading-6 text-white mt-4">
            "Sinemanın büyülü dünyasında sınırsız bir yolculuk için hazır olun!
            En kapsamlı film sitesinde, her türden sinema tutkunu için bir şölen
            sunuyoruz. Son çıkan filmlerden klasiklere, unutulmaz sahnelerden
            yönetmen portrelerine kadar geniş bir içeriğe sahibiz. Detaylı film
            incelemelerimiz ve güncel haberlerimizle sinema dünyasının nabzını
            tutuyoruz. Ayrıca, izleme listelerimiz ve önerilerimizle size uygun
            olan filmi kolayca bulmanızı sağlıyoruz. Sizi sinemanın büyüsüyle
            tanışmaya davet ediyor, keyifli seyirler dileriz!"
          </p>
        </div>
        <div className="lg:flex items-center relative w-full lg:w-1/2 ">
          <Image
            className="lg:block hidden w-full"
            src={movieApp2}
            height={800}
            width={1280}
            alt="people discussing on board"
          />
          <Image
            className="lg:hidden sm:block hidden w-full h-3/4"
            src={movieApp2}
            height={800}
            width={1280}
            alt="people discussing on board"
          />
          <Image
            className="sm:hidden block w-full"
            src={movieApp2}
            height={800}
            width={1280}
            alt="people discussing on board"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
