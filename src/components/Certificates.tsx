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
      description:
        "Introduced core Python concepts: data types, control flow, functions & modules, file I/O, basic OOP, exception handling, asyncio for concurrency, and web scraping with requests & BeautifulSoup. Includes hands-on exercises and mini projects.",
      image: python_programming,
      technologies: [
        "Python",
        "Asyncio",
        "Control Flow",
        "Functions & Modules",
        "Object-Oriented Programming",
        "File I/O",
        "Exception Handling",
        "Web Scraping (requests, BeautifulSoup)"
      ],
      category: "Huawei",
    },
    {
      title: "Artificial Intelligence Fundamentals with Capstone Project",
      description:
        "Comprehensive AI course covering supervised and unsupervised learning, feature engineering, model evaluation, and neural networks. Culminated in a capstone project that built and deployed an end-to-end ML pipeline on a real dataset.",
      image: Ibm_AI,
      technologies: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Feature Engineering",
        "Model Evaluation",
        "Neural Networks",
        "TensorFlow / Keras"
      ],
      category: "IBM",
    },
    {
      title: "Basics of Network Layer Protocols (Micro Certification)",
      description:
        "Focused study of the network (Layer 3) concepts: IP addressing (IPv4/IPv6), subnetting, routing fundamentals, ICMP, fragmentation, NAT, and packet analysis techniques using Wireshark.",
      image: NetworkLayer,
      technologies: [
        "IP Addressing & Subnetting",
        "IPv4 / IPv6",
        "Routing Basics (static / OSPF)",
        "ICMP & ARP",
        "NAT & Fragmentation",
        "Packet Analysis (Wireshark)"
      ],
      category: "Networking",
    },
    {
      title: "HCIA-Datacom",
      description:
        "Huawei HCIA-Datacom certification covering datacom fundamentals: OSI/TCP-IP models, switching and routing basics, VLANs, STP, VRRP, QoS basics and an introduction to automating network tasks with Python scripts.",
      image: HCI_Datacom,
      technologies: [
        "OSI Model",
        "TCP/IP",
        "Switching & Routing",
        "VLANs & STP",
        "VRRP",
        "Network Automation (Python)"
      ],
      category: "Huawei",
    },
    {
      title: "AI Basics: Overview",
      description:
        "Introductory AI module that explains the machine learning workflow, core algorithms (regression, classification), evaluation metrics, and simple prototyping with scikit-learn and pandas.",
      image: AI_Basics,
      technologies: [
        "Machine Learning Basics",
        "Regression & Classification",
        "Model Evaluation",
        "Pandas",
        "Scikit-learn",
        "Streamlit (prototyping)"
      ],
      category: "Huawei",
    },
    {
      title: "AI Basics: Overview of AI (CRA Training Program)",
      description:
        "Short CRA training covering AI history, major paradigms (ML/DL), practical use cases, ethics and governance, plus hands-on demos and group exercises introducing basic AI algorithms.",
      image: AI_Basics_training,
      technologies: [
        "AI Concepts & History",
        "Use Cases & Applications",
        "Ethics in AI",
        "Basic Algorithms",
        "Hands-on Demos"
      ],
      category: "Huawei",
    },
    {
      title: "Accra Mobility Hackathon",
      description:
        "Team project at a city mobility hackathon: developed a prototype combining geospatial analysis, routing optimization and a dashboard. Tasks included data cleaning, model prototyping, and frontend mapping integration.",
      image: zindi_cert,
      technologies: [
        "Geospatial Analysis (GeoPandas)",
        "Routing Optimization",
        "Data Cleaning & EDA",
        "TensorFlow (modeling)",
        "Frontend (React, Mapbox)",
        "PostGIS / Spatial DB"
      ],
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