import Link from 'next/link';

import Timeline from '../components/Timeline';
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
        <ProjectCard
          title="Project 1"
          description="Build and deploy a modern Jamstack application using the most popular open-source software."
          href="https://react2025.com/"
          icon="react2025"
        />
        <ProjectCard
          title="Project 2"
          description="A free video course for building static and server-side rendered applications with Next.js and React."
          href="https://masteringnextjs.com/"
          icon="nextjs"
        />
        <ProjectCard
          title="Project 3"
          description="The easiest way to add comments or reviews to your static site. Built as part of React 2025."
          href="https://fastfeedback.io/"
          icon="fastfeedback"
        />
        <Subscribe />
      </div>
    </Container>
  );
}
