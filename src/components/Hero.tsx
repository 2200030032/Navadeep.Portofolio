import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code, Zap, Star } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      
      {/* Circuit Board Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 text-white">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 10,0 L 10,20 M 0,10 L 20,10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              <circle cx="10" cy="10" r="2" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/40 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-accent/30 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/25 rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/35 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-40 w-20 h-20 bg-primary/20 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">

          {/* Profile Photo */}
          <div className="mb-8 animate-bounce-in">
            <div className="relative inline-block group">
              {/* Main Photo Container */}
              <div className="relative w-64 h-64 mx-auto">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient-x p-1">
                  <div className="w-full h-full rounded-full bg-background p-1">
                    {/* Replace this src with your actual photo */}
                    <img
<<<<<<< HEAD
                      src="/api/placeholder/400/400"
=======
                      src="images/Sai.jpg"
>>>>>>> dca94c5 (Final Commit)
                      alt="Boddu Sai Navadeep"
                      className="w-full h-full rounded-full object-cover border-2 border-primary/20 group-hover:scale-105 transition-all duration-500 shadow-2xl shadow-primary/20"
                    />
                  </div>
                </div>
                
                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 p-3 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 animate-float">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 p-3 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 animate-float" style={{ animationDelay: '1s' }}>
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div className="absolute top-4 -left-6 p-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 animate-float" style={{ animationDelay: '2s' }}>
                  <Star className="h-5 w-5 text-primary" />
                </div>
              </div>
              
              {/* Status Indicator */}
              <div className="absolute bottom-4 right-8 flex items-center gap-2 px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400 font-medium">Available for work</span>
              </div>
            </div>
          </div>

          {/* Name and Roles */}
<<<<<<< HEAD
          <h1 className="text-6xl md:text-8xl font-black mb-4 animate-slide-up tracking-tight text-gradient">
            BODDU SAI NAVADEEP
          </h1>
=======
          <h1 className="text-5xl md:text-6xl font-black mb-4 animate-slide-up tracking-tight text-gradient">
            BODDU SAI NAVADEEP
          </h1>
          


>>>>>>> dca94c5 (Final Commit)

          {/* Animated Subtitle */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up">
            <div className="h-px bg-gradient-primary w-16"></div>
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'AI Enthusiast', 2000,
                'Open Source Contributor', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl text-accent font-semibold"
            />
            <div className="h-px bg-gradient-primary w-16"></div>
          </div>

          {/* Short Bio */}
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Computer Science Engineering student at <span className="text-primary font-semibold">KL University</span> with expertise in 
            <span className="text-accent font-semibold"> Java, Spring Boot, AI, AWS, Machine Learning, and Deep Learning</span>. 
            Passionate about building scalable web applications and solving complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-rotate-in">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sainavadeep-boddu-42b438255/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="hover-3d group magnetic glass-effect bg-primary text-primary-foreground border-2 border-primary/50 text-lg px-8 py-4">
                <Mail className="mr-3 h-6 w-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                Let's Connect
              </Button>
            </a>

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1EdBTGqpkxUBdzyxCeEZ8SCufnPX0EQw7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="hover-3d group magnetic glass-effect border-2 border-accent/50 text-accent text-lg px-8 py-4"
              >
                <ExternalLink className="mr-3 h-6 w-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                View Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-scale-in">
            <a 
              href="https://github.com/2200030032"
              className="p-6 rounded-2xl glass-effect hover-3d group magnetic transition-all duration-500 border border-primary/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-8 w-8 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 text-primary" />
              <p className="text-sm mt-2 text-muted-foreground group-hover:text-primary">GitHub</p>
            </a>
            <a 
              href="https://www.linkedin.com/in/sainavadeep-boddu-42b438255/"
              className="p-6 rounded-2xl glass-effect hover-3d group magnetic transition-all duration-500 border border-accent/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-8 w-8 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 text-accent" />
              <p className="text-sm mt-2 text-muted-foreground group-hover:text-accent">LinkedIn</p>
            </a>
            <a 
              href="mailto:2200030032cseh@gmail.com"
              className="p-6 rounded-2xl glass-effect hover-3d group magnetic transition-all duration-500 border border-primary/20"
            >
              <Mail className="h-8 w-8 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 text-primary" />
              <p className="text-sm mt-2 text-muted-foreground group-hover:text-primary">Email</p>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary/60 rounded-full flex justify-center bg-primary/10 backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-white">Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
