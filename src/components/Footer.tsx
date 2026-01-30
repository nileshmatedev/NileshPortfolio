import { Heart, Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:contact.nileshmate@gmail.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/nileshmatedev",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/nileshmatedev",
      label: "GitHub",
    },
  ];

  return (
    <footer className="py-8 px-6 border-t border-slate-900 relative z-50">
      <div className="absolute inset-0 backdrop-blur-sm bg-black/60" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-teal-400/20 border border-white/10 hover:border-teal-400/50 rounded-lg transition-all group"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5 text-white/70 group-hover:text-teal-400 transition-colors" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-slate-400 flex items-center justify-center gap-2 text-center">
          Built with <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400" /> by
          Nilesh © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}