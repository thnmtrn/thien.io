import Link from 'next/link';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hello, I'm Thien.
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I am javascript enthusiast, currently going through the freecodecamp and theOdinProject developer program online.
          This is my personal homepage where I test out some of the new materials I learn.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Latest Blog Posts
        </h3>
        <BlogPost
          title="tailwind"
          summary="tailwind stuff"
          slug="tailwind"
        />
        <BlogPost
          title="cheetsheets"
          summary="cheatsheets"
          slug="cheatsheets"
        />
        <BlogPost
          title="APIs with NextJS"
          summary="SSR"
          slug="api-nextjs"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
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
        <Subscribe />
      </div>
    </Container>
  );
}
