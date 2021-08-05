import builtview1 from "../../images/builtview-1.png";
import Panel from "../Panel";

export const Portfolio = [
  <Panel
    key={1}
    title="Builtview"
    subtitle="Laing O'Rourke Australia"
    tags={["Web App", "API", "React", "TypeScript", "C#", ".NET Core"]}
    images={[builtview1]}
    descriptionHeading="Photo and Video Capture for Construction Sites"
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
        <li style={{ margin: "1em 0" }}>
          Dozens of React components - an interactive GPS map, a support ticket
          viewer and a custom list layout to name a few
        </li>
        <li style={{ margin: "1em 0" }}>
          Redux actions and reducers including spearheading the integration of
          redux selectors into our state logic
        </li>
        <li style={{ margin: "1em 0" }}>
          Transition from a one-to-many model to a many-to-many schema with 0
          data loss and downtime
        </li>
      </ul>
    </p>
  </Panel>,
  <Panel
    key={2}
    title="Builtview"
    subtitle="Laing O'Rourke Australia"
    tags={["Web App", "API", "React", "TypeScript", "C#", ".NET Core"]}
    images={[builtview1]}
    descriptionHeading="Photo and Video Capture for Construction Sites"
    display="row"
  >
    <p>INsert some text here</p>
  </Panel>,
  <Panel
    key={3}
    title="Builtview"
    subtitle="Laing O'Rourke Australia"
    tags={["Web App", "API", "React", "TypeScript", "C#", ".NET Core"]}
    images={[builtview1]}
    descriptionHeading="Photo and Video Capture for Construction Sites"
    display="row"
  >
    <p>INsert some text here</p>
  </Panel>,
];
