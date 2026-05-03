import gsap from "gsap";
import {
  splitSelectorsToChars,
  splitElementToChars,
  type CharSplitResult,
} from "./customTextSplit";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingText = splitSelectorsToChars([
    ".landing-info h3",
    ".landing-intro h2",
    ".landing-intro h1",
  ]);
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const landingH2Info = document.querySelector(".landing-h2-info");
  const landingText2 = landingH2Info
    ? splitElementToChars(landingH2Info as HTMLElement)
    : null;

  if (landingText2) {
    gsap.fromTo(
      landingText2.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3,
      }
    );
  }

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const el3 = document.querySelector(".landing-h2-info-1");
  const el4 = document.querySelector(".landing-h2-1");
  const el5 = document.querySelector(".landing-h2-2");
  const landingText3 = el3 ? splitElementToChars(el3 as HTMLElement) : null;
  const landingText4 = el4 ? splitElementToChars(el4 as HTMLElement) : null;
  const landingText5 = el5 ? splitElementToChars(el5 as HTMLElement) : null;

  if (landingText2 && landingText3) {
    LoopText(landingText2, landingText3);
  }
  if (landingText4 && landingText5) {
    LoopText(landingText4, landingText5);
  }
}

function LoopText(Text1: CharSplitResult, Text2: CharSplitResult) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
