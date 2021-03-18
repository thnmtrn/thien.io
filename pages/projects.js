import ProjectCard from '@/components/ProjectCard'
import Container from '@/components/Container'

const projects = () => {
  return (
    <Container>
      <ProjectCard
          title="To-do"
          description="Built with React, NextJS, TailwindCSS. Uses Local Stroage"
          href="https://next-todo-delta.vercel.app/"
          icon="fastfeedback"
        />
      <ProjectCard
          title="Pokedex"
          description="Built with React, NextJS, TailwindCSS. Axios"
          href="https://next-dex.vercel.app/"
          icon="fastfeedback"
        />
      <ProjectCard
          title="Notes App"
          description="Built with React, NextJS, Mongoose, Mongodb"
          href="https://next-dex.vercel.app/"
          icon="fastfeedback"
        />
      <ProjectCard
          title="Coach Thai"
          description="Built with React, NextJS, TailwindCSS. for fun"
          href="https://next-dex.vercel.app/"
          icon="fastfeedback"
        />
      <ProjectCard
          title="Annie's NailSpa"
          description="Built with React, NextJS, TailwindCSS. simple landing page"
          href="https://next-dex.vercel.app/"
          icon="fastfeedback"
        />
      <ProjectCard
          title="Nice Dist & MFG"
          description="Built with React, NextJS, TailwindCSS. planning stage"
          href="https://next-dex.vercel.app/"
          icon="fastfeedback"
        />
      <ProjectCard
          title="Nice Dist & MFG"
          description="Built with React, NextJS, TailwindCSS. planning stage"
          href="https://next-dex.vercel.app/"
          icon="fastfeedback"
        />
        
        
    </Container>
  )
}

export default projects
