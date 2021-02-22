
import Container from '@/components/Container';


export default function About() {
  return (
    <Container title="About – Thien Tran">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Thien. I'm a self taught developer. Currently I'm learning Nextjs and react. 
          </p>
          <p>
            I have an obession with minimalist ui. 
          </p>
          <p>
            I have an innate desire to create - websites, programs, pictures, videos, music - you name it. My passion lies in the instersion of creation 
            and communication. I want to create tools to help humans solve problems better and faster. 
          </p>
          <p>
            I grew up in CT. I've went through a period of depression. With this blog and coding, I've found some clarity and path in my life. I hope to achieve my goal of becoming a professional developer one day.
            I hope this blog could one day be an inspiration to others to keep pushing, no matter how dark it may look.
          </p>
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
          My Stack
        </h2>
        <ul>
          <li>React</li>
          <li>Nextjs</li>
          <li>Tailwindcss</li>
          <li>Mongodb</li>
          <li>Firebase</li>
        </ul>
      </div>
    </Container>
  );
}
