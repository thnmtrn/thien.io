import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Month = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Month>March</Month>
    <ul>
      <Step title="Team 1 Vs Team 2">
        march 1st 5pm
      </Step>
      <Step title="Team 1 Vs Team 2">
        march 1st 5pm
      </Step>
    </ul>
    <Divider />
    <Month>April</Month>
    <ul>
      <Step title="Team 1 Vs Team 2">
        april 1st 5pm
      </Step>
      <Step title="Team 1 Vs Team 2">
        april 1st 5pm
      </Step>
      <Step title="Team 1 Vs Team 2">
        april 1st 5pm
      </Step>
      <Step title="Team 1 Vs Team 2">
        april 1st 5pm
      </Step>
    </ul>
    <Divider />
    <Month>May</Month>
    <ul>
      <Step title="Team 1 Vs Team 2">
        may 1st 5pm
      </Step>
      <Step title="Team 1 Vs Team 2">
        may 1st 5pm
      </Step>
      <Step title="Team 1 Vs Team 2">
        may 1st 5pm
      </Step>
    </ul>
    <Divider />
    <Month>June</Month>
    <ul>
      <Step title="Team 1 Vs Team 2">
        June 1st 5pm
      </Step>
      <Step title="Team 1 Vs Team 2">
        June 1st 5pm
      </Step>
    </ul>
    <Divider />
    <Month>July</Month>
    <ul>
      <Step title="Team 1 Vs Team 2">
        July 1st 5pm
      </Step>
      <Step title="Team 1 Vs Team 2">
        July 1st 5pm
      </Step>
      <Step title="Team 1 Vs Team 2">
        July 1st 5pm
      </Step>
      <Step title="Team 1 Vs Team 2">
        July 1st 5pm
      </Step>
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Goals
      </h3>
      <Month>Future Projects</Month>
      <ul>
        <Step title="Fantasy Football App">
          Fantasy football app with graphs. api calls for stats
        </Step>
        <Step title="Launched React 2025 💯">
          Building a real SaaS application, from zero to production.
        </Step>
        <Step title="Emerging Technology Leader of the Month 🏆">
          I was extremely honored to be one of five finalists nominated for this
          award at the 2020 Prometheus Awards.
        </Step>
        <Step title="Got Married 🥳">
          Great Month for a wedding, huh? We had a small ceremony with family and
          it was better than I could have imagined.
        </Step>
        <Step title="Became a Tech Lead 👨🏻‍💻">
          Starting at the beginning of 2020, I moved into a tech leadership role
          on an e-commerce development team at Hy-Vee.
        </Step>
        <Step title="Mastering Next.js made $10K 📈">
          I taught hundreds of students from all over the world how to build web
          applications. Exceeded my wildest expectations.
        </Step>
      </ul>
      <Divider />
      <Month>2019</Month>
      <ul>
        <Step title="Software Engineer III ✨">
          Led design system architecture at Hy-Vee, building new components with
          React, Storybook, and styled-components.
        </Step>
        <Step title="Mastering Next.js ⚛️">
          Launched a 50+ lesson video course for building apps with Next.js and
          React.
        </Step>
        <Step title="Bought a Townhome 🏡">
          Who wants to do yardwork? Not me. Plus, Allie and I love living
          downtown Des Moines.
        </Step>
        <Step title="Got Engaged 💍">
          I asked my now fiancée, Allie, to marry me. She said yes! September
          was a busy month, to say the least – I also spoke at three events and
          sold my condo.
        </Step>
        <Step title="Spoke at Talent42 🎤">
          I spoke to over 100 technical recruiting leaders from across the
          country at Talent42 in Seattle during a 45-minute keynote.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
