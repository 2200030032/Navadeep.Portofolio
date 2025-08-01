import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Globe, 
  Database, 
  Cloud, 
  Settings, 
  BookOpen,
  Users,
  Lightbulb
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "C", "HTML", "CSS", "JavaScript"],
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["Django", "Spring Boot", "Hibernate", "Node.js", "REST APIs", "React"],
      color: "bg-green-500/20 text-green-400"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
      color: "bg-purple-500/20 text-purple-400"
    },
    {
      title: "Cloud Technologies",
      icon: Cloud,
      skills: ["AWS"],
      color: "bg-orange-500/20 text-orange-400"
    },
    {
      title: "Developer Tools",
      icon: Settings,
      skills: ["Git", "GitHub", "IntelliJ", "Eclipse", "VS Code", "PyCharm"],
      color: "bg-pink-500/20 text-pink-400"
    },
    {
      title: "Core Subjects",
      icon: BookOpen,
      skills: ["OOPS", "Operating Systems", "DSA", "DBMS", "AI", "ML", "Deep Learning"],
      color: "bg-indigo-500/20 text-indigo-400"
    }
  ];

  const softSkills = [
    { skill: "Problem-Solving", level: 95 },
    { skill: "Communication", level: 90 },
    { skill: "Teamwork", level: 92 },
    { skill: "Leadership", level: 88 },
    { skill: "Time Management", level: 90 }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and soft skills
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="card-3d group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills Section */}
          <div className="animate-fade-in-up">
            <Card className="card-3d">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {softSkills.map((item, index) => (
                    <div 
                      key={item.skill} 
                      className="animate-fade-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-medium">{item.skill}</span>
                        <span className="text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary skill-bar rounded-full"
                          style={{ 
                            width: `${item.level}%`,
                            animationDelay: `${index * 0.2 + 0.5}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievement Highlight */}
          <div className="mt-16 text-center animate-fade-in-up">
            <Card className="card-3d inline-block">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-gradient">Continuous Learner</div>
                    <div className="text-muted-foreground">Always exploring new technologies and best practices</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;