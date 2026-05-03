import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  splitElementToChars,
  splitElementToWords,
} from "./customTextSplit";

gsap.registerPlugin(ScrollTrigger);

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  splitRevert?: () => void;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart =
    window.innerWidth <= 1024 ? "top 75%" : "top bottom";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    if (para.closest(".about-section")) {
      if (para.anim) {
        para.anim.progress(1).kill();
      }
      para.splitRevert?.();
      para.splitRevert = undefined;
      para.classList.add("visible");
      return;
    }

    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
    }
    para.splitRevert?.();
    para.splitRevert = undefined;

    const { words, splitRevert } = splitElementToWords(para);
    para.splitRevert = splitRevert;

    para.anim = gsap.fromTo(
      words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
          once: true,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });
  titles.forEach((title: ParaElement) => {
    /* “WHAT I DO” uses nested spans for layout; do not replace with char spans */
    if (title.closest(".whatIDO")) {
      return;
    }
    if (title.anim) {
      title.anim.progress(1).kill();
    }
    title.splitRevert?.();
    title.splitRevert = undefined;

    const { chars, splitRevert } = splitElementToChars(title);
    title.splitRevert = splitRevert;

    title.anim = gsap.fromTo(
      chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
          once: true,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });
}
