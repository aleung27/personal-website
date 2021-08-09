import { css } from "@emotion/react";
import {
  faGitAlt,
  faAppStoreIos,
  faGooglePlay,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faExternalLinkAlt,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import builtview1 from "../../images/builtview-1.png";
import { Colours } from "../../util/constants";
import Panel from "../Panel";

const styles = {
  a: css({
    color: Colours.gray4,
    margin: "0 0.5rem",
    "&:hover": {
      color: Colours.black,
    },
  }),
};

export const Portfolio = [
  <Panel
    key={1}
    title="Builtview"
    subtitle="Laing O'Rourke Australia"
    tags={["Web App", "API", "React", "TypeScript", "C#", ".NET Core"]}
    images={[builtview1]}
    descriptionHeading="Photo and Video Capture for Construction Sites"
    links={[
      <a
        href="https://builtview.com/"
        target="_blank"
        rel="noopener noreferrer external"
        css={styles.a}
      >
        <FontAwesomeIcon icon={faLink} size="sm" />
      </a>,
    ]}
    display="row"
  >
    <p>
      Imagine you're on a construction site. Documentation is THE currency -
      safety monitoring, progress updates, evidence for claims; all of these
      revolve around having the proof to back up what you say and what better
      documentation is there than photos and videos? Yet, no streamlined process
      exists to capture and organize the thousands of photos taken everyday
      across construction sites. Site engineers spend upwards of{" "}
      <strong>4 hours</strong> a week processing these photos manually but what
      if we could streamline this process? Thus Builtview was born - one
      platform to record, upload and access media for all your documentation
      needs.
    </p>

    <p>
      Builtview was the first project I ever worked on professionally so it
      holds a special place in my heart &#x2764;&#xFE0F; (doesn't everyone's
      first project?). We took this project from a mere concept to a
      fully-fledged product rolled out across multiple Laing O'Rourke sites with
      an ARR over $1M. Having the opportunity to work in a startup environment
      was amazing; I had lots of freedom and took on difficult features most
      junior engineers aren't tasked with. Our web app is built on React with
      TypeScript (although it started out with JavaScript) whereas our backend
      is instead built using C# .NET Core. It was actually here that I first
      learnt React and C# all while studying at uni too!
    </p>

    <p>
      Some of the real standout features I implemented from my time here
      include:
      <ul>
        <li style={{ margin: "0.5em 0" }}>
          Dozens of React components - an interactive GPS map, a support ticket
          viewer and a custom list layout to name a few
        </li>
        <li style={{ margin: "0.5em 0" }}>
          Redux actions and reducers including spearheading the integration of
          redux selectors into our state logic
        </li>
        <li style={{ margin: "0.5em 0" }}>
          Transition from a one-to-many model to a many-to-many schema with 0
          data loss and downtime
        </li>
      </ul>
    </p>
  </Panel>,
  <Panel
    key={2}
    title="Builtview Mobile"
    subtitle="Laing O'Rourke Australia"
    tags={["IOS/Android", "React Native", "TypeScript"]}
    images={[builtview1]}
    descriptionHeading="Companion Mobile App for the Builtview Platform"
    links={[
      <a
        href="https://apps.apple.com/us/app/builtview-mobile/id1560750101"
        target="_blank"
        rel="noopener noreferrer external"
        css={styles.a}
      >
        <FontAwesomeIcon icon={faAppStoreIos} size="sm" />
      </a>,
      <a
        href="https://play.google.com/store/apps/details?id=com.builtview.mobile.dev"
        target="_blank"
        rel="noopener noreferrer external"
        css={styles.a}
      >
        <FontAwesomeIcon icon={faGooglePlay} size="sm" />
      </a>,
    ]}
    display="row"
  >
    <p>
      The easiest and fastest way to take photos and videos is with your phone
      and the Builtview Mobile App aimed to streamline this process. By simply
      opening up the Builtview Mobile app and using the built-in camera
      function, photos and videos you take are instantly uploaded to our servers
      which can be accessed by other members of your team from both the mobile
      or the web. This removed the need to manually transfer and upload your
      photos to some sort of external storage which was the typical workflow
      prior to Builtview.
    </p>

    <p>
      Our mobile app is written in React Native and TypeScript and shares many
      of the same components as the web app - one of the main benefits of using
      React Native! Sharing our Redux structure also let front-end developers
      easily jump into the mobile app if needed with little learning due to
      relying on the same fundamentals as React. That being said though, we also
      had some native modules for both IOS and Android and we also opted to
      avoid using Expo in our project. One thing I definitely learnt from
      developing in mobile is how much more finnicky it is to debug when
      compared to typical web apps!
    </p>

    <p>
      Some of the cool features I got to work on included:
      <ul>
        <li style={{ margin: "0.5em 0" }}>
          Identifying bottlenecks in our application and mitigating excessive
          re-renders through the implementation of Pure Components
        </li>
        <li style={{ margin: "0.5em 0" }}>
          Improving time to interaction by 30% by researching and enabling a
          JaveScript pre-compiler
        </li>
      </ul>
    </p>
  </Panel>,
  <Panel
    key={3}
    title="CR+"
    subtitle="Accenture Australia"
    tags={["Web App", "Python", "Django"]}
    images={[builtview1]}
    descriptionHeading="Automation Platfrom for Quote Generation"
    display="row"
  >
    <p>
      CR+ was a bespoke web application used internally in order to automate the
      process of generating quotes for clients of Accenture. These lengthy
      quotes would often be over 10 pages in length and took multiple hours to
      generate manually by hand. With hundreds of these quotes being made
      yearly, thousands of hours would be saved by having this process
      automated. As an intern at Accenture, I was assigned to help develop CR+
      and assist in the rollout across the organisation.
    </p>

    <p>
      CR+ was built using Python and Django by a past employee and was not being
      actively developed when I joined. The project had been handed around
      between employees a number of times, resulting in poor documentation and
      coding practices due to a lack of rigour in the development process. This
      made working with CR+ a difficult but valuable experience over the time
      that I was there.
    </p>

    <p>
      Some of the main features I worked on included:
      <ul>
        <li style={{ margin: "0.5em 0" }}>
          Implementing an automation algorithm for the generation of Gantt
          Charts based upon historical data of the time to complete each subtask
        </li>
        <li style={{ margin: "0.5em 0" }}>
          Integrating new database models in Django to effectively link data
          between tables
        </li>
        <li style={{ margin: "0.5em 0" }}>
          Lots of refactoring and documentation of old code!
        </li>
      </ul>
    </p>
  </Panel>,
];

export const Projects = [
  <Panel
    key={1}
    title="VLC Media Player"
    subtitle="VideoLAN Organisation"
    tags={["Desktop", "C++", "Qt"]}
    images={[builtview1]}
    links={[
      <a
        href="https://code.videolan.org/aleung27"
        target="_blank"
        rel="noopener noreferrer external"
        css={styles.a}
      >
        <FontAwesomeIcon icon={faGitAlt} size="sm" />
      </a>,
    ]}
    display="column"
  >
    <p>
      Open source has always been something that I have been interested in down
      to even the operating system I use (Ubuntu ofc!). Yet, the barrier to
      entry to contributing meaningfully to an open-source project has always
      been high so I was delighted to see that Google's Summer of Code changed
      to a part-time basis in 2021 which allowed me to sign up and be a part of
      the action. VLC and it's iconic cone icon have become synonymous with the
      phrase 'media player' and being a long term user, being able to contribute
      and help a project I love and use was the main reason I joined VLC for
      GSOC 2021.
    </p>

    <p>
      My task for GSOC was to implement a new first run screen for VLC4.0 which
      has been in the works for the last couple of years. This involved using
      C++ combined with the Qt API to design a responsive interface which was
      easy to follow and use. My C++ experience was limited to what I used in
      competitive programming so I had a lot of other concepts I had to learn
      (not to mention learning Qt too!). My mentors were a great help here and
      being able to communicate across opposite timezones really showed me the
      strength of the open source community. Despite being a steep learning
      curve, this was an extremely valuable experience and I hope to continue
      contributing to VLC in the future. Next time you open VLC and have to
      click through that wizard, you can blame me for it &#x1F60B;
    </p>
  </Panel>,
  <Panel
    key={2}
    title="VS Statuses"
    subtitle="Visual Studio Code"
    tags={["Extension", "API", "Typescript"]}
    images={[builtview1]}
    links={[
      <a
        href="https://marketplace.visualstudio.com/items?itemName=aleung27.vs-statuses"
        target="_blank"
        rel="noopener noreferrer external"
        css={styles.a}
      >
        <FontAwesomeIcon icon={faCode} size="sm" />
      </a>,
      <a
        href="https://github.com/aleung27/VS-Statuses"
        target="_blank"
        rel="noopener noreferrer external"
        css={styles.a}
      >
        <FontAwesomeIcon icon={faGithubSquare} size="sm" />
      </a>,
    ]}
    display="column"
  >
    <p>
      VS Statuses was a project I made a while back that was a Visual Studio
      Code extension which would interface with a custom Express API in order to
      display 'status updates' from friends that you follow on Github. Think of
      that neat little friend panel on Spotify but for VSCode and with coding
      instead. Users could opt to show as much or as little data as they wanted,
      from file names and languages down to even setting custom status messages
      about what they were working on. The idea was to make coding a little less
      lonely and spark conversations between you and your friends on projects
      that you were working on. While VS Statuses may not have become a viral
      hit it was still a delightful project to work on!
    </p>

    <p>
      Through this project I learnt to interface with the VSCode API in order to
      develop and extension all in TypeScript. It was my first time using
      Express as well which I found to be quite a fast and simple process using
      TypeORM for the database models in the backend. Compared to more
      structured and conventional backend langauges like C# or Java, it was nice
      to be able to work in TypeScript which made it much easier to swap between
      the front and back end. I also did a bit of DevOps work with AWS as part
      of the backend which would automatically monitor for new pushes to the
      master branch of the repository and redeploy a new version of the API with
      the new changes!
    </p>
  </Panel>,
];
