import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <main className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Your Name
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Software Developer • Building web apps with React, TypeScript, and Node.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a href="mailto:you@example.com">
            <Button>
              <Mail className="mr-2 h-4 w-4" /> Contact
            </Button>
          </a>
          <a href="https://github.com/Ankii04" target="_blank" rel="noreferrer">
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <Button variant="outline">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </a>
        </div>
      </main>
    </div>
  );
}
