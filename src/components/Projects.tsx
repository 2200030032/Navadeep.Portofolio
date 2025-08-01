import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Car, ShoppingBag } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Car Showroom Management System",
      description: "A robust web-based application to optimize car showroom operations with secure authentication, CRUD operations, and sales analytics dashboard.",
      icon: Car,
      technologies: ["Java EE", "JSF", "JPA", "MySQL"],
      features: [
        "Secure user authentication with role-based access control",
        "CRUD operations for cars, customers, and bookings",
        "Dynamic frontend using JavaServer Faces (JSF)",
        "Sales analytics dashboard for business insights"
      ],
      github: "https://github.com/2200030032/CarManagementSystem", // ✅ Your repo link
      live:" null",
      image: "/images/imag2.png", // 🖼️ stored in /public/images
      year: "2024",
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      title: "Tribal E-commerce Website",
      description: "A scalable e-commerce platform promoting tribal products with full-stack architecture, secure payments, and responsive design.",
      icon: ShoppingBag,
      technologies: ["Spring Boot", "React", "MySQL", "Razorpay"],
      features: [
        "Full-stack application with Spring Boot and React",
        "Secure payment gateway integration with Razorpay",
        "Relational database design for efficient data management",
        "Responsive UI with advanced filtering and sorting"
      ],
      github: "https://github.com/navadeep/tribal-ecommerce",
      live: "https://tribe-snv.vercel.app/",
      image: "/images/image1.png",
      year: "2024",
      color: "bg-green-500/20 text-green-400"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my expertise in full-stack development and problem-solving
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="card-3d group overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Project Info */}
                  <div className="space-y-6">
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 rounded-xl ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <project.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">{project.year}</Badge>
                          <CardTitle className="text-2xl">{project.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-lg text-muted-foreground mb-6">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 flex-wrap">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="default" size="lg" className="hover-3d group">
                              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                              View Code
                            </Button>
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="hover-3d group">
                              <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                              Live Demo
                            </Button>
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </div>

                  {/* Project Features & Screenshot */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold">Key Features</h4>
                    <div className="space-y-4">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 animate-fade-in-left"
                          style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.1)}s` }}
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{feature}</p>
                        </div>
                      ))}
                    </div>

                    {/* Screenshot */}
                    <div className="mt-8">
                      <div className="aspect-video rounded-xl border border-border overflow-hidden shadow-lg hover:scale-105 transition-transform">
                        <img
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16 animate-fade-in-up">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/2200030032"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="hover-3d group">
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View All Projects on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
