/**
 * Lightweight text splitting (replaces Club GSAP SplitText for production builds).
 * Wraps characters or words in spans for staggered GSAP animations.
 */

export type CharSplitResult = {
  chars: HTMLElement[];
  splitRevert: () => void;
};

export type WordSplitResult = {
  words: HTMLElement[];
  splitRevert: () => void;
};

export function splitElementToChars(el: HTMLElement): CharSplitResult {
  const original = el.innerHTML;
  const text = el.textContent ?? "";
  el.textContent = "";
  const chars: HTMLElement[] = [];
  for (const ch of Array.from(text)) {
    const span = document.createElement("span");
    span.textContent = ch;
    span.style.display = "inline-block";
    el.appendChild(span);
    chars.push(span);
  }
  return {
    chars,
    splitRevert: () => {
      el.innerHTML = original;
    },
  };
}

/** Merge characters from multiple selectors (document order). */
export function splitSelectorsToChars(selectors: string[]): CharSplitResult {
  const chars: HTMLElement[] = [];
  const reverts: (() => void)[] = [];

  selectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((node) => {
      const el = node as HTMLElement;
      const r = splitElementToChars(el);
      chars.push(...r.chars);
      reverts.push(r.splitRevert);
    });
  });

  return {
    chars,
    splitRevert: () => reverts.forEach((r) => r()),
  };
}

export function splitElementToWords(el: HTMLElement): WordSplitResult {
  const original = el.innerHTML;
  const raw = el.textContent ?? "";
  const parts = raw.split(/(\s+)/);
  el.textContent = "";
  const words: HTMLElement[] = [];

  parts.forEach((part) => {
    if (!part) return;
    if (/^\s+$/.test(part)) {
      el.appendChild(document.createTextNode(part));
    } else {
      const span = document.createElement("span");
      span.className = "split-word";
      span.style.display = "inline-block";
      span.textContent = part;
      el.appendChild(span);
      words.push(span);
    }
  });

  return {
    words,
    splitRevert: () => {
      el.innerHTML = original;
    },
  };
}
