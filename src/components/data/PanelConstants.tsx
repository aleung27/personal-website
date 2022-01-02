import { css } from "@emotion/react";
import {
  faGitAlt,
  faAppStoreIos,
  faGooglePlay,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Colours } from "../../util/constants";
import Panel from "../Panel";

import bv from "../../images/bv-web.png";
import bvMobile from "../../images/bv-mob.png";
import vlc from "../../images/vlc.png";
import vs from "../../images/vs-statuses.png";
import atr from "../../images/atr.png";

const styles = {
  a: css({
    color: Colours.gray4,
    margin: "0 5px",
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
    image={bv}
    caption="Interactive map with a kml overlay of the train stations of Sydney"
    descriptionHeading="Photo and Video Capture for Construction Sites"
    links={[
      <a
        href="https://builtview.com/"
        target="_blank"
        rel="noopener external"
        css={styles.a}
        key={1}
      >
        <FontAwesomeIcon icon={faLink} size="xs" />
      </a>,
    ]}
    display="row"
  >
    <p>
      Imagine you're on a construction site. Documentation is THE currency -
      safety monitoring, progress updates and evidence for claims all rely on
      digital media. Yet, no streamlined process exists to capture and organize
      the thousands of photos and videos taken everyday across construction
      sites. Site engineers spend upwards of <strong>4 hours</strong> a week
      processing these photos manually but what if there was a better way? Thus
      Builtview was born - one platform to record, upload and access media for
      all your documentation needs.
    </p>

    <p>
      Builtview was the first project I ever worked on professionally so it
      holds a special place in my heart &#x2764;&#xFE0F; (doesn't everyone's
      first project?). We took this project from a mere concept to a
      fully-fledged product rolled out across multiple Laing O'Rourke sites with
      an ARR over $1M. Having the opportunity to work in a startup environment
      was amazing; I had lots of freedom and took on difficult features most
      junior engineers aren't tasked with. Our web app is built on React using
      TypeScript whereas our backend is instead built using C# .NET Core. It was
      actually here that I first learnt React and C# all while studying at uni
      too!
    </p>

    <div>
      Some of the integral features I implemented from my time here include:
      <ul>
        <li style={{ margin: "0.5em 0" }}>
          An interactive map leveraging the Azure Maps SDK allowing users to
          view the GPS location of their images whilst also supporting the
          uploading, processing and display of Keyhole Markup Language (KML) and
          image overlays
        </li>
        <li style={{ margin: "0.5em 0" }}>
          Design and architecture of Redux state patterns including actions and
          reducers as well as spearheading the integration of redux selectors
          into our state logic
        </li>
        <li style={{ margin: "0.5em 0" }}>
          Database and EF Core model transitions from a one-to-many schema to a
          many-to-many schema as well as integration of a Table per Hierarchy
          (TPH) backend infrastructure to leverage OOP concepts with 0 data loss
          and downtime.
        </li>
      </ul>
    </div>
  </Panel>,
  <Panel
    key={2}
    title="Builtview Mobile"
    subtitle="Laing O'Rourke Australia"
    tags={["IOS/Android", "React Native", "TypeScript"]}
    image={bvMobile}
    caption="Builtview Mobile App for Android and iOS"
    descriptionHeading="Companion Mobile App for the Builtview Platform"
    links={[
      <a
        href="https://apps.apple.com/us/app/builtview-mobile/id1560750101"
        target="_blank"
        rel="noopener external"
        css={styles.a}
        key={1}
      >
        <FontAwesomeIcon icon={faAppStoreIos} size="xs" />
      </a>,
      <a
        href="https://play.google.com/store/apps/details?id=com.builtview.mobile.dev"
        target="_blank"
        rel="noopener external"
        css={styles.a}
        key={2}
      >
        <FontAwesomeIcon icon={faGooglePlay} size="xs" />
      </a>,
    ]}
    display="row"
  >
    <p>
      The easiest and fastest way to take photos and videos has always been with
      your phone, hence leading to the creation of the Builtview Mobile App. By
      simply opening up the Builtview Mobile app and using the built-in camera
      function, photos and videos you take are instantly uploaded to our servers
      which can be accessed by other members of your team from both the mobile
      or the web. This removed the need to manually transfer and upload your
      photos to some sort of external storage which was the typical workflow
      prior to Builtview.
    </p>

    <p>
      Our mobile app is written in React Native and TypeScript and shares many
      of the same components as the web app - one of the benefits of using React
      Native! Sharing our Redux structure also let front-end developers easily
      jump into the mobile app if needed with little friction. That being said,
      we also have some native modules for both iOS and Android and we also
      opted to avoid using Expo in our project. One thing I definitely learnt
      from developing in mobile is how much more finnicky it is to debug when
      compared to typical web apps!
    </p>

    <div>
      Some of the cool features I got to work on included:
      <ul>
        <li style={{ margin: "0.5em 0" }}>
          Identifying bottlenecks in our application and mitigating excessive
          re-renders through the implementation of React Pure Components
        </li>
        <li style={{ margin: "0.5em 0" }}>
          Improving time to interaction (TTI) by 30% by researching, redesigning
          and implementing the usage of a JavaScript pre-compiler
        </li>
        <li style={{ margin: "0.5em 0" }}>
          Restructured and optimised Redux state storage to utilise rehydration
          to reduce friction for users whilst also increasing ease of use
          through authentication state persistance
        </li>
      </ul>
    </div>
  </Panel>,
  <Panel
    key={3}
    title="ATR Core"
    subtitle="Accenture Australia"
    tags={["Web App", "API", "React", "TypeScript", "Java"]}
    image={atr}
    caption="Health check page indicating the current status and resolution steps"
    descriptionHeading="Bespoke Platform for Ticket Automation"
    display="row"
    links={[
      <a
        href="https://www.accenture.com/au-en/services/applied-intelligence/mywizard-intelligent-automation-platform"
        target="_blank"
        rel="noopener external"
        css={styles.a}
        key={1}
      >
        <FontAwesomeIcon icon={faLink} size="xs" />
      </a>,
    ]}
  >
    <p>
      ATR Core is a greenfield web application developed by Accenture MyWizard
      AiOps used worldwide to automate and resolve tickets throughout
      multibillion dollar companies. Tickets are used in organisations for a
      range of purposes, from IT Support requests to incident management. ATR
      Core is able to plug directly into ticket provider sources such as
      ServiceNow and provide automation solutions. This includes the triaging of
      tickets to different support teams for manual resolution, machine learning
      to categorise and automatically resolve tickets as well as adhoc
      automations through user-created scripts.
    </p>

    <p>
      ATR Core is built on React TypeScript with a mix of legacy JavaScript in
      the codebase. The backend is instead written in Java 8 utilising Spring
      with a microservices architecture which highly leverages Docker. Due to
      the large amount of services which tie into the ATR Core platform, the
      application was quite complex and is broken into multiple different teams
      focussing on different aspects of the entire ATR platform. Despite
      Accenture Australia being well-established, MyWizard AiOps is much more
      modern and agile, feeling more like a startup than a corporate
      environment. Having the chance to work on ATR Core was extremely valuable
      and despite not knowing much Java, I was able to quickly and effectively
      adjust my backend knowledge from Builtview with little friction.
    </p>

    <div>
      The main features I worked on throughout my time there included:
      <ul>
        <li style={{ margin: "0.5em 0" }}>
          Implementing a custom health status checker which ran automated
          service routines on the backend to continuously monitor for errors in
          ticket source providers
        </li>
        <li style={{ margin: "0.5em 0" }}>
          Integrating the health status checker into the frontend UI, including
          the architecture of Redux sagas and state, to provide actionable
          methods of troubleshooting for clients to resolve issues in realtime
        </li>
        <li style={{ margin: "0.5em 0" }}>
          Holistically developing test suites using Jest and React Testing
          Library to provide stability and longevity for developed features
          whilst also integrating TypeScript where possible into the existing
          codebase
        </li>
      </ul>
    </div>
  </Panel>,
];

export const Projects = [
  <Panel
    key={4}
    title="VLC Media Player"
    subtitle="VideoLAN Organisation"
    tags={["Desktop", "C++", "Qt"]}
    image={vlc}
    caption="First run wizard for VLC 4.0 with colour scheme choices"
    links={[
      <a
        href="https://summerofcode.withgoogle.com/archive/2021/projects/5748007382810624"
        target="_blank"
        rel="noopener external"
        css={styles.a}
        key={2}
      >
        <FontAwesomeIcon icon={faLink} size="xs" />
      </a>,
      <a
        href="https://code.videolan.org/aleung27"
        target="_blank"
        rel="noopener external"
        css={styles.a}
        key={1}
      >
        <FontAwesomeIcon icon={faGitAlt} size="xs" />
      </a>,
    ]}
    display="column"
  >
    <p>
      Open source has always been something that I've been interested in
      participating in, with most of the world's technology being powered by
      OSS. Yet, the barrier to entry for contributing to an open source project
      has always seemed high. So I was delighted to see that Google's Summer of
      Code changed to a part-time basis in 2021 which allowed me to sign up and
      be a part of the action. VLC and it's iconic cone icon have become
      synonymous with the phrase 'media player' and being a long term user,
      being able to contribute and help a project I love and use was the main
      reason I joined VLC for GSOC 2021.
    </p>

    <p>
      My task for GSOC was to implement a new first run screen for VLC 4.0 which
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
    key={5}
    title="VS Statuses"
    subtitle="Visual Studio Code"
    tags={["Extension", "API", "Typescript"]}
    image={vs}
    caption="VS Statuses extension shown in the left panel"
    links={[
      <a
        href="https://marketplace.visualstudio.com/items?itemName=aleung27.vs-statuses"
        target="_blank"
        rel="noopener external"
        css={styles.a}
        key={1}
      >
        <FontAwesomeIcon icon={faLink} size="xs" />
      </a>,
      <a
        href="https://github.com/aleung27/VS-Statuses"
        target="_blank"
        rel="noopener external"
        css={styles.a}
        key={2}
      >
        <FontAwesomeIcon icon={faGithubSquare} size="xs" />
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
      develop an extension all in TypeScript. It was my first time using Express
      as well which I found to be quite a fast and simple process using TypeORM
      for the database models in the backend. Compared to more structured and
      conventional backend languages like C# or Java, it was nice to be able to
      work in TypeScript which made it much easier to swap between the front and
      back end. I also did a bit of DevOps work with AWS as part of the backend
      which would automatically monitor for new pushes to the master branch of
      the repository and redeploy a new version of the API with the new changes!
    </p>
  </Panel>,
];
