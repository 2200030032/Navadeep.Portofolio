import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate developer with a strong foundation in computer science and a drive for innovation
            </p>
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Current Education */}
            <Card className="card-3d group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-bounce">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">B.Tech CSE</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold text-lg mb-2">K L University, Guntur</p>
                <p className="text-muted-foreground mb-2">2022 - 2026</p>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  CGPA: 9.68
                </Badge>
              </CardContent>
            </Card>

            {/* Intermediate */}
            <Card className="card-3d group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-bounce">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Intermediate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold text-lg mb-2">Sri Chaitanya, Vijayawada</p>
                <p className="text-muted-foreground mb-2">2020 - 2022</p>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  CGPA: 9.4
                </Badge>
              </CardContent>
            </Card>

            {/* SSC */}
            <Card className="card-3d group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-bounce">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">SSC</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold text-lg mb-2">Sri Chaitanya, Vijayawada</p>
                <p className="text-muted-foreground mb-2">2019 - 2020</p>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  CGPA: 10
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a dedicated Computer Science Engineering student at K L University with an exceptional 
                  academic record and a passion for building innovative solutions. My journey in technology 
                  started with a curiosity about how things work and evolved into a deep understanding of 
                  software development principles.
                </p>
                <p>
                  With expertise in Java, Spring Boot, React, and cloud technologies like AWS, I enjoy 
                  creating full-stack applications that solve real-world problems. My experience ranges 
                  from developing robust backend systems to crafting intuitive user interfaces.
                </p>
                <p>
                  I'm particularly interested in enterprise application development, cloud computing, 
                  and emerging technologies. I believe in continuous learning and staying updated with 
                  the latest industry trends and best practices.
                </p>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="animate-fade-in-up">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-xl glass-effect hover-3d">
                  <div className="text-4xl font-bold text-gradient mb-2">9.68</div>
                  <div className="text-muted-foreground">Current CGPA</div>
                </div>
                <div className="text-center p-6 rounded-xl glass-effect hover-3d">
                  <div className="text-4xl font-bold text-gradient mb-2">2+</div>
                  <div className="text-muted-foreground">Years Coding</div>
                </div>
                <div className="text-center p-6 rounded-xl glass-effect hover-3d">
                  <div className="text-4xl font-bold text-gradient mb-2">3+</div>
                  <div className="text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center p-6 rounded-xl glass-effect hover-3d">
                  <div className="text-4xl font-bold text-gradient mb-2">10+</div>
                  <div className="text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;