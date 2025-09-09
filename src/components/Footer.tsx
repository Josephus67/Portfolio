import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-muted-foreground">Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="text-muted-foreground">by Bawah Josephus</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com/Josephus67" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/josephus-bawah-57a309276" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:bawahjosephus67@gmail.com"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-muted-foreground">
            © {currentYear} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}