import Head from "next/head";
import { DM_Sans } from 'next/font/google'
import Hero from "@/containers/hero";
import AboutText from "@/containers/about/AboutText";
import AboutCards from "@/containers/about/AboutCards";
import AboutRoad from "@/containers/about/AboutRoad";
import Footer from "@/containers/footer";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from "react";

import SplitType from 'split-type'
import DownloadBtn from "@/components/button/DownloadBtn";

gsap.registerPlugin(ScrollTrigger);

const dmSans = DM_Sans({ subsets: ['latin'] })

export default function Home() {

  const rootRef = useRef();

  // Smooth Scroll
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
    }
  })

  useLenis(() => {
    // called every scroll
    ScrollTrigger.update()
  })

  useEffect(() => {
    let ctx = gsap.context(() => {

      // Fade In

      const fadeInEl = gsap.utils.toArray(".gsapFadeIn")

      fadeInEl.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          duration: 2,
          delay: 0.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "50% bottom",
            // markers: true
          }
        })
      })


      // Hero Transition

      // let tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '.hero-wrapper',
      //     pin: true,
      //     start: 'top top',
      //     end: '+=1000',
      //     scrub: 1,
      //   }
      // });

      // tl.add('start')
      //   .fromTo('.hero-wrapper .content .primary-text', { opacity: 1 }, { opacity: 0 }, "start")
      //   .fromTo('.hero-wrapper .content .secondary-text', { opacity: 0 }, { opacity: 1 }, "start")
      //   .fromTo('.hero-wrapper .content', { scale: 1 }, { scale: 1.1 }, "start")


      // Words Up

      SplitType.create('.wordsUpHero', { types: 'words' })
      SplitType.create('.wordsUp', { types: 'words' })

      const org_html = document.querySelectorAll(".word");

      org_html.forEach((word) => {
        const new_html = "<span class='word-text'>" + word.innerHTML + "</span>";
        word.innerHTML = new_html
      })

      const wordsUp = gsap.utils.toArray(".wordsUp");

      wordsUp.forEach((container) => {
        const words = container.querySelectorAll('.word-text')

        gsap.to(words, {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          delay: 0.5,
          duration: .1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: container,
            start: "50% bottom",
            // markers: true
          }
        })

      })

      // Hero Fade In

      const wordsUpHero = document.querySelector(".wordsUpHero");
      const wordsHero = wordsUpHero.querySelectorAll('.word-text');

      var tlLoader = gsap.timeline()

      tlLoader.to(wordsHero, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        delay: 0.5,
        duration: .1,
        ease: "power1.out",
      })

      tlLoader.to(".gsapFadeInHero", {
        opacity: 1,
        duration: 1,
        delay: 1,
      }, ">")

      tlLoader.to(".gsapFadeInHeroBtn", {
        opacity: 1,
        duration: 1,
        delay: 0,
      }, ">")


      // Parallax

      let mm = gsap.matchMedia();

      mm.add("(min-width: 1030px)", () => {
        const parallax = gsap.utils.toArray(".parallax-wrapper");

        parallax.forEach((item) => {
          const insideP = item.querySelectorAll(".parallax")
          const insideR = item.querySelectorAll(".parallax-reverse")

          insideP.forEach((ele) => {
            gsap.fromTo(ele, { yPercent: 15, }, {
              yPercent: -15,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom", // the default values
                // end: "bottom top",
                // markers: true,
                scrub: true
              },
            });
          })

          insideR.forEach((ele) => {
            gsap.fromTo(ele, { yPercent: -15, }, {
              yPercent: 15,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom", // the default values
                end: "bottom top",
                // markers: true,
                scrub: true
              },
            });
          })
        })
      });




      const cards = gsap.utils.toArray(".card-about-wrapper");
      const spacer = 20;
      const minScale = 0.8;

      const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

      cards.forEach((card, index) => {

        const scaleVal = distributor(index, cards[index], cards);

        const tween = gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: `top top`,
            scrub: true,
            // markers: true,
            invalidateOnRefresh: true
          },
          ease: "none",
          scale: scaleVal
        });

        ScrollTrigger.create({
          trigger: card,
          start: `top top`,
          endTrigger: '.content-cards',
          end: `bottom bottom`,
          pin: true,
          pinSpacing: false,
          // markers: true,
          id: 'pin',
          invalidateOnRefresh: true,
        });
      });

      ScrollTrigger.sort()

    }, rootRef);
    return () => ctx.revert();
  }, [])

  return (
    <>
      <Head>
        <title>INPATT</title>
        <meta name="description" content="Somos una plataforma colaborativa para diseñadores de moda." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ReactLenis root ref={lenisRef} autoRaf={false}>
        <div className={`${dmSans.className}`} ref={rootRef}>
          <main className="pausa-main-wrapper">

            <DownloadBtn className="gsapFadeInHeroBtn download-btn-main" />

            <Hero />
            <AboutText />
            <AboutCards />
            <AboutRoad />
          </main>

          <Footer />
        </div>
      </ReactLenis>

    </>
  );
}
