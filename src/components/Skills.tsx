import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function Skills() {
  const webDevSkills = [
    { name: "React/Next.js", level: 90 },
    { name: "React Native", level: 70 },
    { name: "Web-scrapping", level: 60 },
    { name: ".Net forms", level: 50 },
    { name: "Flask", level: 60 },
    { name: "FastAPI", level: 65 },
    { name: "TypeScript", level: 55 },
    { name: "Node.js", level: 60 },
    { name: "Tailwind CSS", level: 75 },
    { name: "API Development", level: 75 }
  ];

  const mlSkills = [
    { name: "Python", level: 80 },
    { name: "TensorFlow/Keras", level: 70 },
    { name: "Scikit-learn", level: 75 },
    { name: "Data Analysis", level: 80 },
    { name: "Pandas/NumPy", level: 85 },
    { name: "Model Deployment", level: 65 },
    { name: "Natural Language Processing", level: 70 },
    { name: "Computer Vision", level: 75 },
    { name: "Image Classification & Object Detection", level: 80 }
  ];

  const tools = [
    "Git", "GitHub", "AWS", "Jupyter", "VS Code", "Figma", "TensorFlow", 
    "Pandas", "Keras", "PyTorch", "Matplotlib"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit spans across web development and machine learning, 
            enabling me to build comprehensive solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                Web Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {webDevSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Machine Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mlSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Tools & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge key={tool} variant="outline" className="text-sm">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}