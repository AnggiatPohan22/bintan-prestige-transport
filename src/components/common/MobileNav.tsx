import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "../../data/navigation";
import { site } from "../../data/site";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-[#e2e8f0]"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-16 z-50 border-b border-white/10 bg-[#0b0c10]/96 px-4 py-5 shadow-[0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl">
          <div className="mx-auto grid w-full max-w-[1180px] gap-2">
            {navigation.map((item) => (
              <a
                className="rounded-[8px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-[#e2e8f0]"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#e2e8f0] px-5 text-sm font-semibold text-[#0b0c10]"
              href={whatsappHref}
              onClick={() => setIsOpen(false)}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
