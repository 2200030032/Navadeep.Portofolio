import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Boddu Sai Navadeep</h3>
            <p className="text-muted-foreground">
              Full Stack Developer & AI Enthusiast passionate about creating 
              innovative solutions and building the future of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 2200030032cseh@gmail.com</p>
              <p>📱 +91 9182720578</p>
              <p>📍 Guntur, Andhra Pradesh</p>
              <p>🎓 KL University</p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a 
              href="https://github.com/2200030032" 
              className="p-2 rounded-full glass-effect hover-3d group transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sainavadeep-boddu-42b438255/" 
              className="p-2 rounded-full glass-effect hover-3d group transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:2200030032cseh@gmail.com" 
              className="p-2 rounded-full glass-effect hover-3d group transition-all duration-300"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="flex items-center text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
            <span>by Boddu Sai Navadeep</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;