import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Award,
  BookOpen,
  Trophy,
  Users,
  Target,
} from "lucide-react";

const Experience = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      icon: Cloud,
      color: "bg-orange-500/20 text-orange-500",
    },
    {
      title: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      year: "2024",
      icon: Award,
      color: "bg-red-500/20 text-red-500",
    },
    {
      title: "Java SE 11 Developer (1Z0-819)",
      issuer: "Oracle",
      year: "2025",
      icon: Award,
      color: "bg-purple-500/20 text-purple-500",
    },
    {
      title: "Linguaskill CEFR Level B1",
      issuer: "Cambridge Assessment",
      year: "2023",
      icon: BookOpen,
      color: "bg-blue-500/20 text-blue-500",
    },
  ];

  const moocs = [
    {
      title: "Design and Analysis of Algorithms",
      platform: "NPTEL",
      status: "Certified",
    },
    {
      title: "Machine Learning",
      platform: "NPTEL",
      status: "Certified",
    },
  ];

  const achievements = [
    {
      title: "Smart India Hackathon Participant",
      description:
        "Built AYUSH Startup Registration Portal for improved efficiency and accessibility.",
      icon: Target,
      color: "bg-green-500/20 text-green-500",
    },
    {
      title: "Team Leadership in Hackathons",
      description:
        "Led teams in EP and JFSD hackathons, demonstrating leadership and technical expertise.",
      icon: Users,
      color: "bg-pink-500/20 text-pink-500",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey through internships, certifications, and leadership experiences.
            </p>
          </div>

          {/* Internship */}
          <div className="mb-16 animate-fade-in-up">
            <Card className="card-3d">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Cloud className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Cloud Virtual Internship</CardTitle>
                    <p className="text-muted-foreground text-lg">EduSkills AWS Academy • 2024</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  Completed comprehensive AWS cloud training covering services, architecture, and real-world implementation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
              Professional <span className="text-gradient">Certifications</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="card-3d group text-center transition-transform duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div
                      className={`w-14 h-14 mx-auto rounded-xl ${cert.color} flex items-center justify-center mb-4`}
                    >
                      <cert.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <Badge variant="secondary" className="mt-2">{cert.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* MOOCs */}
          <div className="mb-16 animate-fade-in-up">
            <Card className="card-3d">
              <CardHeader>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Online Learning (MOOCs)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {moocs.map((course, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover-3d"
                    >
                      <div>
                        <h4 className="font-semibold">{course.title}</h4>
                        <p className="text-muted-foreground">{course.platform}</p>
                      </div>
                      <Badge variant="secondary">{course.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
              Leadership & <span className="text-gradient">Achievements</span>
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {achievements.map((item, index) => (
                <Card
                  key={index}
                  className="card-3d group hover:scale-105 transition-transform duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}
                      >
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Summary */}
          <div className="mt-16 animate-fade-in-up">
            <Card className="card-3d">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-2">4</div>
                    <div className="text-muted-foreground">Certifications</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-2">2</div>
                    <div className="text-muted-foreground">NPTEL Courses</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-2">1</div>
                    <div className="text-muted-foreground">Internship</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-2">Multiple</div>
                    <div className="text-muted-foreground">Hackathons</div>
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

export default Experience;
