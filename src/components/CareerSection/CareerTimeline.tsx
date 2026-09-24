import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Users, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "Aug 2026 – Present",
      title: "Robotics and AI Trainer Intern",
      subtitle: "i-RoboChakra, Coimbatore",
      description:
        "Developed and tested robotics control modules using Python and ROS, enabling coordinated motion and sensor-based decision-making on Arduino-driven hardware.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Jul 2026 – Aug 2026",
      title: "Python Full Stack Developer Intern",
      subtitle: "Infosys Virtual Internship 7.0",
      description:
        "Developing full-stack web applications using Python and modern web technologies. Strengthening practical skills through project-based learning aligned with industry requirements.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Dec 2025",
      title: "Python Full Stack Developer Intern",
      subtitle: "Live Wire Technologies, Myladuthurai",
      description:
        "Built 3 responsive web application modules using a Django REST Framework backend and ReactJS frontend, following Agile sprint methodology.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Jun 2025",
      title: "Full Stack Web Developer Intern",
      subtitle: "GetIn Technologies, Virudhunagar",
      description:
        "Engineered 2 production-grade full-stack web applications using Python, Django, and JavaScript, reducing manual processing time by 30% based on internal team benchmarks.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Aug 2024 – Sep 2024",
      title: "AI/ML Intern",
      subtitle: "InternPe",
      description:
        "Gained hands-on experience with core ML libraries including NumPy, Pandas, Matplotlib, and Scikit-learn for data preprocessing, visualization, and model building.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="An evolving path of leadership, innovation, and impact"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
