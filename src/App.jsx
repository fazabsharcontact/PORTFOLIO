import { profile, projects, skills, contacts } from "./assets/data/portfolio.js";
import Container from "./components/Container.jsx";

function App() {
  return (
    <main>
      <header className="sticky top-3 z-50 mx-3 mt-3 rounded-3xl bg-[#efefef]/90 py-3 text-xs text-black shadow-sm backdrop-blur-md sm:mx-6">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href={`mailto:${contacts.email}`} className="hidden sm:block">
              {contacts.email}
            </a>

            <a
              href={`mailto:${contacts.email}`}
              className="rounded-full bg-white px-5 py-2 font-medium shadow-sm"
            >
              Email
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-5 py-2 font-medium shadow-sm"
            >
              CV
            </a>
          </div>

          <nav className="flex items-center gap-2">
            <a href={contacts.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span aria-hidden="true">/</span>
            <a href={contacts.github} target="_blank" rel="noreferrer">GitHub</a>
            <span aria-hidden="true">/</span>
            <a href="#contact">Contact</a>
          </nav>
        </Container>
      </header>

      <section
        id="home"
        className="relative z-30 flex min-h-screen flex-col justify-between overflow-hidden rounded-b-[3rem] bg-black py-16 text-white sm:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_85%,rgba(0,180,216,0.55),transparent_70%),radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(0,180,216,0.25),transparent_70%)]"
        />
        <Container>
          <div className="flex flex-col items-center gap-6 py-20 text-center text-white">
            <div className="relative">
              <img
                src="/profil.png"
                alt={`Foto ${profile.name}`}
                className="size-25 rounded-full object-cover sm:size-30"
              />
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
              {profile.role}
              <br />
              <span className="text-neutral-500">{profile.subRole}</span>
            </h1>

            <a
              href="#profile"
              className="rounded-full bg-white px-6 py-3 text-xs font-medium text-black"
            >
              Show More.
            </a>
          </div>
        </Container>
      </section>

      <section className="border-b py-14 sm:py-16 bg-white relative z-20 -mt-12 rounded-b-[3rem]">
        <Container>
          <div className="mb-6">
            <p className="mb-3 font-mono text-[11px] tracking-[0.08em] text-[#92938d]">
              currently under development
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.05em] text-[#191a17]">Skills</h2>
          </div>
        </Container>
        <Container size="normal">
          <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-none px-4"
                  aria-hidden={index >= skills.length}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    title={skill.name}
                    className="h-16 w-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        className="py-14 sm:py-16 bg-[#efefef] relative z-10 -mt-12"
        id="projects"
      >
        <Container>
          <div className="mb-6">
            <p className="mb-3 font-mono text-[11px] tracking-[0.08em] text-[#92938d]">
              selected works
            </p>
            <h2 className="text-3xl text-black font-bold tracking-[-0.05em]">Personal Projects</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <article
                className="overflow-hidden rounded border border-[#2b2c28] bg-[#191a17]"
                key={project.title}
              >
                <div className="relative">
                  <div className="flex h-40 snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth">
                    {(project.images ?? []).map((image, imageIndex) => (
                      <img
                        key={image}
                        src={image}
                        alt={`${project.title} — gambar ${imageIndex + 1}`}
                        className="h-40 w-full flex-none snap-center object-cover"
                      />
                    ))}
                  </div>

                  <span className="pointer-events-none absolute bottom-4 left-4 font-mono text-[28px] text-[#191a17]">
                    0{index + 1}
                  </span>

                  <span className="pointer-events-none absolute bottom-4 right-4 font-mono text-[9px] tracking-[0.08em] text-white">
                    GESER UNTUK LIHAT →
                  </span>
                </div>

                <div className="p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-semibold">{project.title}</h3>
                    <span className="text-[10px] text-white">
                      {project.status}
                    </span>
                  </div>

                  <p className="min-h-[42px] text-xs leading-6 text-[#92938d]">
                    {project.description}
                  </p>

                  <div className="my-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((technology) => (
                      <span
                        className="rounded bg-[#252621] px-2 py-1.5 text-[10px] text-[#c3c4bc]"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    className="text-xs text-white"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat repository
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

       <section
        id="home"
        className="flex min-h-screen flex-col justify-between py-16 sm:py-24 relative z-30 rounded-b-[3rem] bg-[#efefef]"
      >
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_220px] py-20 text-black" id="profile">
            <div>
              <h1 className="text-4xl font-extrabold tracking-[-0.07em]">
                {profile.name}
              </h1>

              <h2 className="mb-3 mt-5 text-xl font-semibold">{profile.profile}</h2>

              <p className="max-w-[590px] text-justify text-[15px] leading-8 text-[#a3a3a1]">
                {profile.intro}
              </p>
            </div>

            <img
              src="/profil.png"
              alt={`Foto ${profile.name}`}
              className="mx-auto aspect-square w-48 border border-[#2b2c28] object-cover sm:w-full"
            />
          </div>

          <div
            className="grid grid-cols-2 justify-items-center text-center text-black gap-3 border-y border-[#2b2c28] py-7 sm:gap-6"
            aria-label="Ringkasan"
          >
            <div className="grid content-start gap-2">
              <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
                {profile.experience}
              </strong>
              <span className="text-xs leading-relaxed text-[#92938d]">
                academic, personal & internship projects
              </span>
            </div>
            
            <div className="grid content-start gap-2">
              <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
                {profile.workExperience}
              </strong>
              <span className="text-xs leading-relaxed text-[#92938d]">
                Fullstack Developer Intern at PT. INOVINDO Digital Media
              </span>
            </div>

            <div className="grid content-start gap-2">
              <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
                {profile.projectsCompleted}
              </strong>
              <span className="text-xs leading-relaxed text-[#92938d]">
                Portfolio Project 
              </span>
            </div>

            <div className="grid content-start gap-2">
              <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
                {profile.technologies.length}
              </strong>
              <span className="text-xs leading-relaxed text-[#92938d]">
                Tech
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16 bg-white rounded-t-[3rem]" id="contact">
        <Container>
          <p className="mb-3 font-mono text-[11px] tracking-[0.08em] text-[#92938d]">
            OPEN TO OPPORTUNITIES
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.05em]">
            Contact
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#b2b3ac]">
          I'm open to junior full-stack developer and software engineering opportunities, as well as collaborative projects.
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 py-3">
            <a
              className="flex min-h-12 items-center gap-2.5 rounded border border-[#2b2c28] bg-[#191a17] px-3.5 text-xs text-[#d5d5ce] hover:text-[#c4f36b]"
              href={`mailto:${contacts.email}`}
            >
              <img src="/images/icons/mail.png" alt="github.icon" aria-hidden="true" className="size-5 object-contain" />
              <span>fazaabsharcontact@gmail.com</span>
            </a>

            <a
              className="flex min-h-12 items-center gap-2.5 rounded border border-[#2b2c28] bg-[#191a17] px-3.5 text-xs text-[#d5d5ce] hover:text-[#c4f36b]"
              href={contacts.github}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/github.png" alt="github.icon" aria-hidden="true" className="size-5 object-contain" />
              <span>fazabsharcontact</span>          
            </a>

            <a
              className="flex min-h-12 items-center gap-2.5 rounded border border-[#2b2c28] bg-[#191a17] px-3.5 text-xs text-[#d5d5ce] hover:text-[#c4f36b]"
              href={contacts.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/linkedin.png" alt="github.icon" aria-hidden="true" className="size-5 object-contain" />
              <span>Faza Abshar</span> 
            </a>
            <a
              className="flex min-h-12 items-center gap-2.5 rounded border border-[#2b2c28] bg-[#191a17] px-3.5 text-xs text-[#d5d5ce] hover:text-[#c4f36b]"
              href={contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/whatsapp.png" alt="github.icon" aria-hidden="true" className="size-5 object-contain" />
              <span>+62 822-1310-2425</span> 
            </a>
          </div>
        </Container>
      </section>

      <footer className="justify-center flex flex-wrap gap-4 py-6 text-[11px] text-[#92938d] bg-white">
        <Container>
          <span>
            © {new Date().getFullYear()} fazaabsharcontact
          </span>
        </Container>
      </footer>
    </main>
  );
}

export default App;