import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, Phone, MapPin, Github, Linkedin, Code2, Trophy, Send 
} from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = 'service_8nk4pxv';
const TEMPLATE_ID = 'template_xfcmmdl';
const PUBLIC_KEY = '8qBOq0NcdC7QZ0SOd';
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone, label: "Phone", value: "+91 9182720578",
      href: "tel:+919182720578", color: "bg-green-500/20 text-green-400"
    },
    {
      icon: Mail, label: "Email", value: "2200030032cseh@gmail.com",
      href: "mailto:2200030032cseh@gmail.com", color: "bg-blue-500/20 text-blue-400"
    },
    {
      icon: MapPin, label: "Location", value: "Guntur, Andhra Pradesh",
      href: null, color: "bg-purple-500/20 text-purple-400"
    }
  ];

  const socialLinks = [
    {
      icon: Github, label: "GitHub", href: "https://github.com/2200030032",
      color: "bg-gray-500/20 text-gray-400"
    },
    {
      icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sainavadeep-boddu-42b438255/",
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/kl_2200030032/",
      color: "bg-orange-500/20 text-orange-400"
    },
    {
      icon: Trophy, label: "CodeChef", href: "https://www.codechef.com/users/kl_2200030032",
      color: "bg-yellow-500/20 text-yellow-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a tech chat!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info & Social */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-3d group">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{info.label}</h3>
                    {info.href ? (
                      <a href={info.href} className="text-muted-foreground hover:text-primary">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="card-3d">
              <CardHeader>
                <CardTitle className="text-xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg glass-effect hover-3d group"
                    >
                      <div className={`w-8 h-8 rounded-lg ${link.color} flex items-center justify-center`}>
                        <link.icon className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Contact Form */}
          <div>
            <Card className="card-3d">
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <p className="text-muted-foreground">
                  I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="glass-effect"
                      required
                    />
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="glass-effect"
                      required
                    />
                  </div>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="glass-effect"
                    required
                  />
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="glass-effect"
                    required
                  />
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    className="glass-effect resize-none"
                    required
                  />
                  <Button type="submit" size="lg" className="w-full hover-3d group" disabled={isSending}>
                    <Send className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    {isSending ? "Sending..." : "Send Message"}
                  </Button>
                  {status && <p className="text-center mt-2 text-sm text-muted-foreground">{status}</p>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
