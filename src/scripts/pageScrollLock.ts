type PageScrollLock = {
  lock: (key: string) => void;
  unlock: (key: string) => void;
  clear: () => void;
};

type WindowWithPageScrollLock = Window & { __bptPageScrollLock?: PageScrollLock };

const createPageScrollLock = (): PageScrollLock => {
  const locks = new Set<string>();
  let previousHtmlOverflow = "";
  let previousBodyOverflow = "";
  let previousBodyPaddingRight = "";

  const applyLock = () => {
    const scrollbarWidth = Math.max(0, window.innerWidth - document.documentElement.clientWidth);
    previousHtmlOverflow = document.documentElement.style.overflow;
    previousBodyOverflow = document.body.style.overflow;
    previousBodyPaddingRight = document.body.style.paddingRight;
    document.documentElement.classList.add("site-scroll-locked");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  };

  const releaseLock = () => {
    document.documentElement.classList.remove("site-scroll-locked");
    document.documentElement.style.overflow = previousHtmlOverflow;
    document.body.style.overflow = previousBodyOverflow;
    document.body.style.paddingRight = previousBodyPaddingRight;
  };

  return {
    lock(key) {
      const hadLocks = locks.size > 0;
      if (locks.has(key)) return;

      locks.add(key);
      if (!hadLocks) {
        applyLock();
      }
    },
    unlock(key) {
      if (!locks.has(key)) return;

      locks.delete(key);
      if (locks.size === 0) {
        releaseLock();
      }
    },
    clear() {
      const hadLocks = locks.size > 0;
      locks.clear();
      if (hadLocks) {
        releaseLock();
      }
    },
  };
};

const scrollWindow = window as WindowWithPageScrollLock;

export const pageScrollLock = scrollWindow.__bptPageScrollLock ?? createPageScrollLock();

scrollWindow.__bptPageScrollLock = pageScrollLock;
