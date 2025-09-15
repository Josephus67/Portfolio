import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";
// @ts-ignore
import python_programming from '../assets/python_programming.png';
// @ts-ignore
import Ibm_AI from '../assets/Ibm_AI.png';
// @ts-ignore
import AI_Basics from '../assets/AI_Basics.png';
// @ts-ignore
import HCI_Datacom from '../assets/HCI_Datacom.png';
// @ts-ignore
import NetworkLayer from '../assets/NetworkLayer.png';
// @ts-ignore
import AI_Basics_training from '../assets/AI_Basics_training.png';
// @ts-ignore
import zindi_cert from '../assets/zindi_cert.png';
export function Certificates() {
  const projects = [
    {
      title: "Python Programming Basics",
      description: "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and customer insights.",
      image: python_programming,
      technologies: ["Asynchrnous Programming", "Control flows", "web scrapping", "ML Basics", "Condtionals","Error Handling","Try Catch"],
      category: "Huawei",
    },
    {
      title: "Artificial Intelligence Fundamentals with Capstone Project",
      description: "A secure and intuitive mobile banking application with biometric authentication, transaction history, and budget tracking features.",
      image: Ibm_AI,
      technologies: ["supervised ML", "Unsupervised ML", "Sentiment Analysis", "Classical ML Algorithms","Deep Learning","Neural Networks"],
      category: "IBM",
    },
    {
      title: "Customer Sentiment Analysis",
      description: "ML model that analyzes customer reviews and feedback to provide sentiment insights and automated categorization for business intelligence.",
      image : NetworkLayer,
      technologies: ["Python", "TensorFlow", "NLTK", "FastAPI", "Docker"],
      category: "Machine Learning",
    },
    {
      title: "HCIA-Datacom",
      description: "A scalable chat application with real-time messaging, file sharing, and video calling capabilities for team collaboration.",
      image : HCI_Datacom,
      technologies: ["OSI reference Model", "TCP/IP", "VRRP", "Python Basics"],
      category: "Huawei",
    },
    {
      title: "Predictive Analytics Tool",
      description: "ML-powered tool that predicts sales trends and customer behavior using historical data and advanced forecasting algorithms.",
      image : AI_Basics,
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit", "AWS"],
      category: "Huawei",
    },
    {
      title: "Al Basic: Overview of Al. (CRA Training Program)",
      description: "##",
      image : AI_Basics_training,
      technologies: ["##", "##", "##", "##", "##"],
      category: "Huawei",
    },
    {
      title: "Accra Mobility Hackathon",
      description: "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and customer insights.",
      image: zindi_cert,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      category: "Zindi",
    },
  ];

  const getCategoryColor = (category: string) => {
    return category === "Machine Learning" ? "bg-green-500" : 
           category === "Mobile Development" ? "bg-orange-500" : "bg-blue-500";
  };

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">My Certificates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
        A showcase of Certificates i have acquired from various courses studied.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-55 object-cover"
                />
                <div className={`absolute top-4 left-4 w-3 h-3 ${getCategoryColor(project.category)} rounded-full`}></div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}