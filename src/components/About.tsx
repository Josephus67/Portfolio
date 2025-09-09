import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code, Brain, Lightbulb } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm passionate about creating digital experiences that combine beautiful design with intelligent functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              As a web developer and junior machine learning engineer, I bring a unique perspective to every project. 
              I believe in the power of technology to solve real-world problems and create meaningful impact.
            </p>
            
            <p className="text-muted-foreground">
              My journey started with Software development, where I fell in love with creating user-centric applications. 
              This passion naturally evolved into exploring machine learning, where I discovered the excitement of 
              building intelligent systems that can learn and adapt.
            </p>

            <div className="grid gap-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4>Web Development</h4>
                    <p className="text-muted-foreground">
                      Full-stack development with modern frameworks and best practices
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4>Machine Learning</h4>
                    <p className="text-muted-foreground">
                      Building intelligent models and data-driven solutions
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4>Innovation</h4>
                    <p className="text-muted-foreground">
                      Combining creativity with technical expertise to solve complex problems
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU3NDA0MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTc0MjYzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Machine learning visualization"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}