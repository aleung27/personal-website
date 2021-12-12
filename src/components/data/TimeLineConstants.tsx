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
      Planting, growing and tending to crops and messing around on the farm are
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
      Imagine flying across the world at the age of 19 to live in America for
      over a month, learning from some of the coolest professors. As part of my
      time there I took a variety of leadership and entrepreneurship focussed
      courses which helped me develop a lot of soft skills in communication and
      critical thinking.
    </p>
    <p>
      The people that I met and the friends that I made were also amazing and it
      was incredible to see the difference in how America approached education
      in its tertiary system in comparison to Australia. It truly was a once in
      a lifetime experience and it was amazing being able to travel and have a
      bit of a holiday afterwards too with a weeks stay in NYC.
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
      The University of Sydney is where I am undertaking my current degree - a
      Bachelors of Engineering (Mechatronics)/Bachelors of Science (Computer
      Science/Maths). I wanted to supplement my love of coding and programming
      with the physical side of products which is why I chose to do a double
      degree (although I'll probably end up working in software).
    </p>
    <div>
      <p>
        I've been a part of a few clubs and societies through my time here
        including being one of the founders for DogSoc, a society for dog owners
        and lovers. Since the founding, we've expanded to over 200 members and
        host weekly events which help bring our members (and their dogs)
        together. I'm also an avid archery fan and played competitively for the
        Sydney University Archery Club. I've also received a few scholarships
        and awards:
      </p>
      <ul>
        <li>Engineering Leadership Scholarship</li>
        <li>Dean's List for Academic Excellence</li>
        <li>University of Sydney Academic Merit Prize</li>
        <li>Engineering Minor Prize</li>
      </ul>
    </div>
  </TimeLinePanel>,
];
