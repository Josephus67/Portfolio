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
// @ts-ignore
import aws_cloud_practitioner from '../assets/AWS Certified Cloud Practitioner certificate.png';
// @ts-ignore
import aws_restart_graduate from '../assets/aws_restart_graduate.png';
// @ts-ignore
import ibm_design from '../assets/ibm_design.png';
// @ts-ignore
import datacamp_supervised_learning from '../assets/datacamp_supervised_learning.png';
// @ts-ignore
import datacamp_cloud_computing from '../assets/datacamp_cloud_computing.png';
// @ts-ignore
import datacamp_aws_concepts from '../assets/datacamp_aws_concepts.png';
// @ts-ignore
import datacamp_aws_cloud_tech from '../assets/datacamp_aws_cloud_tech.png';
// @ts-ignore
import datacamp_understanding_ai from '../assets/datacamp_understanding_ai.png';
// @ts-ignore
import datacamp_aws_practitioner from '../assets/datacamp_aws_practitioner.png';
// @ts-ignore
import datacamp_mlops from '../assets/datacamp_mlops.png';
// @ts-ignore
import forage_software_engineering from '../assets/forage_software_engineering.png';
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
    {
      title: "AWS Certified Cloud Practitioner",
      description:
        "AWS Cloud Practitioner certification covering foundational cloud concepts, AWS core services (compute, storage, database, networking), security and compliance, billing and pricing models, and cloud architectural best practices.",
      image: aws_cloud_practitioner,
      technologies: [
        "AWS Cloud Concepts",
        "EC2 & S3",
        "IAM & Security",
        "RDS & DynamoDB",
        "VPC & Networking",
        "AWS Pricing & Billing",
        "Cloud Architecture"
      ],
      category: "AWS",
    },
    {
      title: "AWS re/Start Graduate",
      description:
        "Completed AWS re/Start program, an intensive training covering cloud fundamentals, Linux, Python scripting, networking, security, and hands-on labs with AWS services. Prepared for entry-level cloud support and operations roles.",
      image: aws_restart_graduate,
      technologies: [
        "Cloud Fundamentals",
        "Linux Administration",
        "Python Scripting",
        "AWS Core Services",
        "Networking & Security",
        "Troubleshooting",
        "DevOps Basics"
      ],
      category: "AWS",
    },
    {
      title: "IBM Design Thinking",
      description:
        "IBM Design Thinking certification focusing on user-centered design principles, empathy mapping, ideation techniques, prototyping, and iterative testing. Applied design thinking methodology to solve real-world business challenges.",
      image: ibm_design,
      technologies: [
        "Design Thinking",
        "User Research",
        "Empathy Mapping",
        "Ideation & Brainstorming",
        "Prototyping",
        "User Testing",
        "Agile Design"
      ],
      category: "IBM",
    },
    {
      title: "Supervised Learning with scikit-learn",
      description:
        "DataCamp course covering supervised learning algorithms including classification and regression techniques. Hands-on practice with scikit-learn implementing models like decision trees, random forests, support vector machines, and evaluating model performance.",
      image: datacamp_supervised_learning,
      technologies: [
        "Scikit-learn",
        "Classification",
        "Regression",
        "Decision Trees",
        "Random Forests",
        "SVM",
        "Model Evaluation"
      ],
      category: "DataCamp",
    },
    {
      title: "Understanding Cloud Computing",
      description:
        "DataCamp course introducing cloud computing fundamentals, deployment models (IaaS, PaaS, SaaS), cloud architecture patterns, virtualization concepts, and cost optimization strategies for cloud-based solutions.",
      image: datacamp_cloud_computing,
      technologies: [
        "Cloud Computing Basics",
        "IaaS/PaaS/SaaS",
        "Cloud Architecture",
        "Virtualization",
        "Cost Optimization",
        "Scalability"
      ],
      category: "DataCamp",
    },
    {
      title: "AWS Concepts",
      description:
        "DataCamp course covering core AWS concepts including compute services (EC2), storage options (S3, EBS), database services (RDS), networking fundamentals (VPC), and introduction to AWS management tools and best practices.",
      image: datacamp_aws_concepts,
      technologies: [
        "AWS EC2",
        "S3 Storage",
        "AWS RDS",
        "VPC",
        "IAM",
        "CloudWatch",
        "AWS Best Practices"
      ],
      category: "DataCamp",
    },
    {
      title: "AWS Cloud Technology and Services",
      description:
        "Comprehensive DataCamp course on AWS cloud technologies covering advanced services, serverless computing (Lambda), container services (ECS, EKS), CI/CD pipelines, infrastructure as code, and cloud security practices.",
      image: datacamp_aws_cloud_tech,
      technologies: [
        "AWS Lambda",
        "ECS/EKS",
        "CI/CD",
        "CloudFormation",
        "API Gateway",
        "DynamoDB",
        "Cloud Security"
      ],
      category: "DataCamp",
    },
    {
      title: "Understanding Artificial Intelligence",
      description:
        "DataCamp course providing comprehensive overview of AI concepts, machine learning fundamentals, deep learning basics, natural language processing, computer vision, and ethical considerations in AI development and deployment.",
      image: datacamp_understanding_ai,
      technologies: [
        "AI Fundamentals",
        "Machine Learning",
        "Deep Learning",
        "NLP Basics",
        "Computer Vision",
        "AI Ethics",
        "Neural Networks"
      ],
      category: "DataCamp",
    },
    {
      title: "AWS Cloud Practitioner (CLF-C02)",
      description:
        "In-depth DataCamp course preparing for AWS Cloud Practitioner certification. Covers AWS global infrastructure, core services, security and compliance, pricing models, support plans, and cloud architecture best practices.",
      image: datacamp_aws_practitioner,
      technologies: [
        "AWS CLF-C02",
        "Cloud Architecture",
        "AWS Services",
        "Security & Compliance",
        "Pricing Models",
        "Well-Architected Framework"
      ],
      category: "DataCamp",
    },
    {
      title: "MLOps Concepts",
      description:
        "DataCamp course on Machine Learning Operations covering model deployment strategies, CI/CD for ML, model monitoring and versioning, experiment tracking, automated retraining pipelines, and production ML system architecture.",
      image: datacamp_mlops,
      technologies: [
        "MLOps",
        "Model Deployment",
        "CI/CD for ML",
        "Model Monitoring",
        "Experiment Tracking",
        "MLflow",
        "Production ML"
      ],
      category: "DataCamp",
    },
    {
      title: "Software Engineering Job Simulation",
      description:
        "Forage job simulation program covering real-world software engineering practices including system architecture design, security implementation, test-driven development, agile methodologies, and collaborative coding workflows.",
      image: forage_software_engineering,
      technologies: [
        "Software Architecture",
        "Security Best Practices",
        "Test-Driven Development",
        "Agile/Scrum",
        "Code Review",
        "CI/CD Pipelines"
      ],
      category: "Forage",
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