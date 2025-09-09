import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import emailjs from "emailjs-com";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Mail, MapPin, Phone, Calendar, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget; // ✅ capture the form safely

  emailjs
    .sendForm("service_9xtrmso", "template_g9iqf12", form, "nYZnIeS8R8p_i_HwX")
    .then(() => {
      alert("Message sent!");
      form.reset(); // ✅ safe to reset
    })
    .catch((err) => {
      console.error("Failed to send message:", err);
      alert("Failed to send message. Check console for details.");
    });
};


  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p>bawahjosephus67@gmail.com</p>
                    <p className="text-muted-foreground">Email me directly</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p>+233 559823861</p>
                    <p className="text-muted-foreground">Call for urgent matters</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p>Ghana, Accra</p>
                    <p className="text-muted-foreground">Available for remote work</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p>Available for new projects</p>
                    <Badge variant="secondary" className="text-xs">Open to opportunities</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connect Online</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="https://github.com/Josephus67" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                  <span>github.com/Josephus67</span>
                </a>

                <a href="https://www.linkedin.com/in/josephus-bawah-57a309276" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/yourname</span>
                </a>
                
                <a href="https://x.com/bawah_josephus" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                  <span>@bawah_josephus</span>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name">Name</label>
                      <Input id="name" name="from_name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email">Email</label>
                      <Input id="email" name="from_email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject">Subject</label>
                    <Input id="subject" name="subject" placeholder="What's this about?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message">Message</label>
                    <Textarea 
                      id="message" 
                      name = "message"
                      placeholder="Tell me about your project..." 
                      className="min-h-32"
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}