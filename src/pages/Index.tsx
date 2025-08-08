import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import SectionHeading from "@/components/site/SectionHeading";
import ProjectCard from "@/components/site/ProjectCard";
import ServiceCard from "@/components/site/ServiceCard";
import ContactForm from "@/components/site/ContactForm";
import { Briefcase, BarChart3 } from "lucide-react";

const skills = {
  Languages: ["SQL", "DAX", "M (Power Query)", "VBA Macros", "Python"],
  Technologies: ["Power BI", "Power Automate", "Excel", "SQL Server", "Jupyter"],
  Concepts: ["ETL", "Data Modeling", "Dashboards", "T-SQL", "Power BI Visuals Framework"],
};

const projects = [
  {
    title: "Library Management System",
    summary: "SQL database with ERD; improved efficiency by 30%",
    tags: ["SQL", "ERD"],
  },
  {
    title: "Customer Segmentation Dashboard",
    summary: "RFM analysis in Power BI; 15% churn reduction",
    tags: ["Power BI", "RFM"],
  },
  {
    title: "Bank Loan Analysis",
    summary: "Visual report of key loan metrics for trend analysis",
    tags: ["Power BI", "Finance"],
  },
  {
    title: "Covid-19 Data Exploration",
    summary: "SQL queries to track pandemic trends",
    tags: ["SQL", "Exploration"],
  },
  {
    title: "Sales Performance Analysis",
    summary: "Power BI dashboards for sales KPIs",
    tags: ["Power BI", "Sales"],
  },
  {
    title: "Uber Trip Analysis",
    summary: "Booking and revenue analytics in Power BI",
    tags: ["Power BI", "Analytics"],
  },
  {
    title: "Disney+ Data Exploration",
    summary: "Advanced SQL querying for content insights",
    tags: ["SQL", "Content"],
  },
  {
    title: "Movie Dataset Correlation Analysis",
    summary: "Python project with visual correlations",
    tags: ["Python", "EDA"],
  },
];

export default function Index() {
  // Simple SEO hooks
  document.title = "Ankit Mandal — Data Analyst | Power BI Specialist";

  return (
    <main>
      <Navbar />
      <Hero />

      {/* About */}
      <section id="about" className="py-16 md:py-24">
        <SectionHeading
          kicker="About"
          title="I'm Ankit Mandal"
          intro={
            <>I'm a data-focused professional with a Bachelor's in Manufacturing Processes and Automation Engineering and 2+ years of experience as a Business Analyst at Fluor Corporation. I specialize in transforming complex data into strategic business insights through modeling, interactive dashboards, and performance reporting. Passionate about leveraging analytics to solve business problems using Power BI, SQL, and Excel.</>
          }
        />
        <div className="container grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="rounded-lg border p-5">
            <h3 className="font-medium mb-1">Education</h3>
            <p className="text-sm text-muted-foreground">Bachelor of Engineering, Netaji Subhas Institute of Technology, New Delhi (2018–2022)</p>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="font-medium mb-1">Work Experience</h3>
            <p className="text-sm text-muted-foreground">Business Analyst, Fluor Daniel India Pvt Ltd (July 2022 – Present)</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 md:py-24 bg-secondary/40">
        <SectionHeading kicker="Skills" title="Technical Skillset" />
        <div className="container grid md:grid-cols-3 gap-6 max-w-5xl">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} className="rounded-lg border p-6">
              <h3 className="font-medium mb-3">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((item) => (
                  <span key={item} className="text-xs px-2 py-1 rounded-md bg-card border">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <SectionHeading kicker="Services" title="How I Can Help" />
        <div className="container grid md:grid-cols-2 gap-6 max-w-4xl">
          <ServiceCard
            title="Data Consulting"
            desc="Helping businesses make data-driven decisions with actionable insights."
            Icon={BarChart3}
          />
          <ServiceCard
            title="Freelance Analytics"
            desc="Dashboard design, data cleaning, reporting, and automation solutions tailored to specific needs."
            Icon={Briefcase}
          />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-24 bg-secondary/40">
        <SectionHeading kicker="Projects" title="Selected Work" />
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} summary={p.summary} tags={p.tags} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24">
        <SectionHeading
          kicker="Contact"
          title="Let's Connect"
          intro={
            <>
              Reach out for collaborations, consulting, or opportunities. Prefer email? mandalankit2229@gmail.com
            </>
          }
        />
        <div className="container grid md:grid-cols-2 gap-8 max-w-5xl">
          <div className="rounded-lg border p-6">
            <h3 className="font-medium mb-3">Contact Details</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li><span className="font-medium text-foreground">Email:</span> <a className="story-link" href="mailto:mandalankit2229@gmail.com">mandalankit2229@gmail.com</a></li>
              <li><span className="font-medium text-foreground">Phone:</span> <a className="story-link" href="tel:+918920902229">+91 8920902229</a></li>
              <li><span className="font-medium text-foreground">LinkedIn:</span> <a className="story-link" href="https://linkedin.com/in/ankit-m-5a0915183" target="_blank" rel="noreferrer">linkedin.com/in/ankit-m-5a0915183</a></li>
              <li><span className="font-medium text-foreground">GitHub:</span> <a className="story-link" href="https://github.com/Ankitmandal999" target="_blank" rel="noreferrer">github.com/Ankitmandal999</a></li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-medium mb-3">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
        <footer className="container text-center text-xs text-muted-foreground mt-10">
          © {new Date().getFullYear()} Ankit Mandal. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
