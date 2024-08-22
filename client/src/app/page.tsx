import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  FileIcon,
  MessageCircleIcon,
  PenIcon,
  ScaleIcon,
} from "@/components/custom/icons";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Link
            href="#"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <ScaleIcon className="h-6 w-6 text-primary" />
            <span className="sr-only">LegalAI</span>
          </Link>
          <span className="sr-only">LegalAI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6 text-center text-primary-foreground">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Simplify Legal Document Creation with AI
              </h1>
              <p className="text-xl md:text-2xl">
                Our AI-powered platform streamlines the process of creating,
                managing, and understanding legal documents.
              </p>
              <div>
                <Link
                  href="/upload"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-12 text-center">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Streamline Your Legal Workflow
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Our AI-powered platform simplifies legal document creation,
                  management, and understanding.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="grid gap-2">
                  <FileIcon className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">Document Summarization</h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes legal documents and provides concise
                    summaries to help you quickly understand key information.
                  </p>
                </div>
                <div className="grid gap-2">
                  <MessageCircleIcon className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">AI Chatbot</h3>
                  <p className="text-muted-foreground">
                    Get instant answers to your legal questions with our
                    AI-powered chatbot, available 24/7.
                  </p>
                </div>
                <div className="grid gap-2">
                  <PenIcon className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">Automated Generation</h3>
                  <p className="text-muted-foreground">
                    Streamline document creation with our AI-powered templates
                    and automated generation capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-12 text-center">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Streamline Your Legal Workflow
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Our platform simplifies the legal document creation and
                  management process in 3 easy steps.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="grid gap-2">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Upload Document</h3>
                  <p className="text-muted-foreground">
                    Simply upload your legal document, and our AI will analyze
                    it.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Get Insights</h3>
                  <p className="text-muted-foreground">
                    Receive a concise summary of the document's key information.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Automate Generation</h3>
                  <p className="text-muted-foreground">
                    Use our AI-powered templates to generate new documents with
                    ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                  Feedback
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Give Us Your Feedback
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  We'd love to hear your thoughts on our platform. Please fill
                  out the form below.
                </p>
              </div>
              <form className="bg-card rounded-lg p-6 shadow-sm text-left">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="feedback">Feedback</Label>
                    <Textarea id="feedback" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Feedback
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                  Meet the Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The Developers Behind LegalAI
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Click the button below to see the developers who helped build
                  our platform.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-card rounded-lg p-6 shadow-sm text-left flex flex-col items-center">
                  <img
                    src="https://github.com/shadcn.png"
                    alt="Developer Avatar"
                    width={80}
                    height={80}
                    className="rounded-full mb-4"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-muted-foreground">Lead Developer</p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm text-left flex flex-col items-center">
                  <img
                    src="https://github.com/shadcn.png"
                    alt="Developer Avatar"
                    width={80}
                    height={80}
                    className="rounded-full mb-4"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p className="text-muted-foreground">Senior Developer</p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm text-left flex flex-col items-center">
                  <img
                    src="https://github.com/shadcn.png"
                    alt="Developer Avatar"
                    width={80}
                    height={80}
                    className="rounded-full mb-4"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold">Bob Johnson</h3>
                  <p className="text-muted-foreground">Junior Developer</p>
                </div>
              </div>
              <Link
                href="/team"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 LegalAI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-muted-foreground"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-muted-foreground"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
