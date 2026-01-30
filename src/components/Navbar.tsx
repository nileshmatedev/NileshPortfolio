import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import profilePhoto from "figma:asset/478799b6fa4c38e57b780286908539c135a78446.png";
import StaggeredMenu from "./StaggeredMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
  ];

  // Menu items for StaggeredMenu
  const menuItems = navLinks.map((link) => ({
    label: link.label,
    ariaLabel: `Go to ${link.label}`,
    onClick: () => scrollToSection(link.id),
  }));

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'Twitter', link: 'https://twitter.com' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl text-white flex items-center gap-3 relative z-[60]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={profilePhoto} 
                alt="Nilesh" 
                className="w-10 h-10 rounded-full object-cover ring-2 ring-cyan-400/50"
              />
              <span className="text-lg" style={{ fontWeight: 400 }}>Nilesh</span>
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white/80 hover:text-cyan-400 transition-colors capitalize"
                >
                  {link.label}
                </button>
              ))}
              <Button
                size="sm"
                className="bg-cyan-400 hover:bg-cyan-500 text-black rounded-full px-6"
                onClick={() => scrollToSection("contact")}
              >
                Connect
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* StaggeredMenu - Mobile only */}
      <div className="md:hidden">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#14b8a6"
          openMenuButtonColor="#14b8a6"
          changeMenuColorOnOpen={false}
          colors={['#0a0a0a', '#14b8a6', '#06b6d4']}
          accentColor="#14b8a6"
          isFixed={true}
          closeOnClickAway={true}
        />
      </div>
    </>
  );
}