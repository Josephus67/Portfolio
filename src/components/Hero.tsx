import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import professional_photo from "../assets/professional_photo.jpeg";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <div className="mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-primary/10 bg-secondary/10">
            <ImageWithFallback 
              
              src={professional_photo}
              alt="Professional headshot"
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">Software Developer</Badge>
              <Badge variant="secondary">ML Engineer jr</Badge>
            </div>
            
            <h1 className="max-w-3xl mx-auto">
              Building the Future with Code & Intelligence
            </h1>
            
            <p className="max-w-2xl mx-auto text-muted-foreground">
              I'm a passionate Software Developer and Machine Learning engineer, crafting innovative digital experiences 
              and intelligent solutions. I bridge the gap between beautiful user interfaces and powerful data-driven insights.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={() => scrollToSection('projects')} size="lg">
            View My Work
          </Button>
          <Button variant="outline" onClick={() => scrollToSection('contact')} size="lg">
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/Josephus67" target="_blank" rel="noopener noreferrer" 
             className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/josephus-bawah-57a309276" target="_blank" rel="noopener noreferrer"
             className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:bawahjosephus67@gmail.com"
             className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>

        <div className="flex justify-center pt-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}