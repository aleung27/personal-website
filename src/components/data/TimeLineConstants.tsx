import TimeLinePanel from "../TimelinePanel";
import jrahs from "../../images/jrahs.jpg";
import penn from "../../images/penn.png";
import usyd from "../../images/usyd.png";

export const Timeline = [
  <TimeLinePanel
    key={1}
    title="James Ruse Agricultural High School"
    subtitle="2013 - 2018 (ATAR: 99.65)"
    logo={jrahs}
    logoPos="left"
  >
    <p>
      Planting, learning to tend to crops and messing around on the farm are
      some of the fondest memories that come to mind when thinking about my high
      school experience. It was here that I first touched code in my life in the
      after school Informatics class. I distinctly remember having two choices -
      joining Cadets or Informatics, both of which ran after schools on Monday.
      I tossed up the two choices: marching for hours in the 40°C summer or
      hiding inside an airconditioned room learning how to code (I chose the
      latter of course!)
    </p>
    <p>
      As part of the informatics team, I went on to compete in the Australian
      Informatics Olympiad, French-Australian Regional Informatics Olympiad and
      the Australian Invitational Informatics Olympiad as well as attending the
      Summer School of Excellence. Apart from that, I was involved heavily in
      student life as a student prefect, peer support leader and library
      assistant.
    </p>
  </TimeLinePanel>,
  <TimeLinePanel
    key={2}
    title="Pennsylvania State University"
    subtitle="2020 - 2020"
    logo={penn}
    logoPos="right"
  >
    <p>
      I was lucky enough to have the chance to undergo a short-term exchange
      program at Penn State University as part of my scholarship at the
      University of Sydney at the start of early 2020 - right before covid hit.
      Imagine flying across the world to live in America for over a month,
      learning from some of the best professors! As part of my time there I took
      a variety of courses focussed on leadership and entrepreneurship which I
      found insightful due to my interest in startups. Engaging in discussion
      and practical exercises (like pitching and developing a vending machine
      prototype!) also helped develop my skills in communication and critical
      thinking.
    </p>
    <p>
      The people that I met and the friends that I made were amazing and it was
      incredible to see the difference in how America approached education in
      its tertiary system in comparison to Australia. It truly was a once in a
      lifetime experience and it was exciting being able to travel and have a
      bit of a holiday afterwards too in NYC.
    </p>
  </TimeLinePanel>,
  <TimeLinePanel
    key={3}
    title="The University of Sydney"
    subtitle="2019 - Present (WAM: 88)"
    logo={usyd}
    logoPos="left"
  >
    <p>
      The University of Sydney is where I'm undertaking my current degree - a
      Bachelors of Engineering (Mechatronics)/Bachelors of Science (Computer
      Science/Maths). I wanted to supplement my love of programming with the
      physical aspect of engineering which is why I chose to do a double degree.
      After doing engineering though, I can definitely say I like software much
      more!
    </p>
    <div>
      <p>
        I'm part of a few student clubs and societies including being one of the
        founders for DogSoc, a society for dog owners and lovers. Since
        founding, we've expanded to over 200 members and host weekly events
        which help bring our members (and their dogs) together. I'm also one of
        the founders for USYD's Google Developer Student Club (GDSC) where we
        host bi-weekly tech focussed events for students of all backgrounds.
        Acting as a CS Tech Lead, I spearheaded projects such as our inaugural
        chess bots competition.
      </p>
      <p>
        I'm also an avid archery fan and played competitively for the Sydney
        University Archery Club where I hold a state record for Under 20's
        Barebow Archery. I've also received a few scholarships and awards from
        my time here:
      </p>
      <ul>
        <li>Engineering Leadership Scholarship</li>
        <li>Dean's List for Academic Excellence (2x)</li>
        <li>University of Sydney Academic Merit Prize</li>
        <li>Sydney Scholars Award</li>
        <li>Engineering Minor Prize</li>
      </ul>
    </div>
  </TimeLinePanel>,
];
