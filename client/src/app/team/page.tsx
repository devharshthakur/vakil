import { TwitterIcon, GithubIcon } from "@/components/custom/icons";
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <section className="container mx-auto py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Meet the Team</h1>
            <p className="text-muted-foreground">
              Get to know the talented individuals behind our success.
            </p>
          </div>
          <div className="grid gap-12">
            <div className="grid gap-6 md:grid-cols-[1fr_2fr] items-center">
              <div className="relative w-full aspect-square overflow-hidden rounded-full">
                <img
                  src="https://github.com/shadcn.png"
                  alt="Priya Sharma"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">Priya Sharma</h3>
                  <p className="text-muted-foreground">Full-Stack Developer</p>
                </div>
                <div className="prose text-muted-foreground">
                  <p>
                    Priya is a passionate full-stack developer with a keen eye
                    for detail and a love for problem-solving. He brings a
                    unique blend of technical expertise and creative thinking to
                    every project he works on.
                  </p>
                  <p>
                    Originally from <strong>New Delhi, India</strong>, Priya
                    studied Computer Science at <strong>IIT Bombay</strong>{" "}
                    before joining our team. In his free time, he enjoys yoga,
                    reading Indian literature, and contributing to open-source
                    projects on GitHub.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-[1fr_2fr] items-center">
              <div className="relative w-full aspect-square overflow-hidden rounded-full">
                <img
                  src="https://github.com/shadcn.png"
                  alt="Aadhav Raj"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">Aadhav Raj</h3>
                  <p className="text-muted-foreground">Frontend Developer</p>
                </div>
                <div className="prose text-muted-foreground">
                  <p>
                    Aadhav is a talented frontend developer with a passion for
                    creating beautiful and intuitive user interfaces. He excels
                    at translating design concepts into functional code, always
                    striving to deliver the best possible experience for our
                    users.
                  </p>
                  <p>
                    Hailing from <strong>Chennai, India</strong>, Aadhav
                    graduated from <strong>IIT Madras</strong> with a degree in
                    Computer Science. In his free time, he enjoys experimenting
                    with the latest web technologies and contributing to
                    open-source projects on GitHub.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-[1fr_2fr] items-center">
              <div className="relative w-full aspect-square overflow-hidden rounded-full">
                <img
                  src="https://github.com/shadcn.png"
                  alt="Aditya Sharma"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">Aditya Sharma</h3>
                  <p className="text-muted-foreground">DevOps Engineer</p>
                </div>
                <div className="prose text-muted-foreground">
                  <p>
                    Aditya is a skilled DevOps engineer with a deep
                    understanding of infrastructure and automation. He excels at
                    building and maintaining reliable and scalable systems that
                    power our applications.
                  </p>
                  <p>
                    Originally from <strong>Bangalore, India</strong>, Aditya
                    studied Computer Science at <strong>IIT Delhi</strong>
                    before joining our team. In his free time, he enjoys
                    tinkering with new technologies, hiking, and contributing to
                    open-source projects on GitHub.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-[1fr_2fr] items-center">
              <div className="relative w-full aspect-square overflow-hidden rounded-full">
                <img
                  src="https://github.com/shadcn.png"
                  alt="Aadhav Raj"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">Aadhav Raj</h3>
                  <p className="text-muted-foreground">Backend Developer</p>
                </div>
                <div className="prose text-muted-foreground">
                  <p>
                    Aadhav is a skilled backend developer with a deep
                    understanding of server-side architecture and
                    infrastructure. He excels at building robust and scalable
                    systems that power our applications.
                  </p>
                  <p>
                    Hailing from <strong>Chennai, India</strong>, Aadhav
                    graduated from <strong>IIT Madras</strong> with a degree in
                    Computer Science. In his free time, he enjoys experimenting
                    with the latest web technologies and contributing to
                    open-source projects on GitHub.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
