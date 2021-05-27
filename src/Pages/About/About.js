import React from "react";
import styled from "styled-components";

import evans from "../../assets/images/people/evans.jpg";
import samuel from "../../assets/images/people/samuel.jpg";
import njogu from "../../assets/images/people/njogu.png";
import padu from "../../assets/images/people/padu.jpg";
import tim from "../../assets/images/people/tim.png";
import albert from "../../assets/images/people/albert.jpg";
import vincent from "../../assets/images/people/vincent.png";
import timothy from "../../assets/images/people/timothy.png";
import antonio from "../../assets/images/people/antonio.jpg";

const TeamMemberCard = styled.div`
  padding-top: 40px;
  
`;

const PeopleImage = styled.img`
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);

  height: 150px;
  width: 150px;
`;

const About = () => {
  const team = [
    {
      name: "Samuel Njuguna",
      role: "Business Development",
      background: "Bsc. Computer Science",
      school: "University of Nairobi",
      passion:
        "Holding idealism over financial security by founding startups that will see Africa out of poverty.",
      image: samuel,
    },
    {
      name: "Njogu Kinyanjui",
      role: "User Experience",
      background: "Bachelor of Architecture",
      school: "University of Nairobi",
      passion:
        "Designs that seek to solve problems and make this world a better place",
      image: njogu,
    },
    {
      name: "Titus Marenye",
      role: "Chief Financial Officer",
      background: "Bachelor of Actuarial science",
      school: "University of Nairobi",
      passion: "Generating value for others through sound investment decision",
      image: tim,
    },
    {
      name: "Samuel Njoki",
      role: "Operations Officer",
      background: "Bsc. Computer Science",
      school: "Moi University",
      passion:
        "Technology that solves actual pain points that’s easy to use through utilization of behavioural psychology approaches",
      image: padu,
    },
    {
      name: "Albert Kipkoskei",
      role: "Software Engineer",
      background: "Bsc. Computer Science",
      school: "Moi University",
      passion:
        "Solving specific end-user problems and developing solutions that align towards  users' experience",
      image: albert,
    },
    {
      name: "Evans Munene",
      role: "Software Engineer",
      background: "Bsc. Computer Science",
      school: "University of Nairobi",
      passion: "Building elegant software solutions for real world needs",
      image: evans,
    },
    {
      name: "Timothy Guoko",
      role: "Strategy",
      background: "B.Comm, CPA(K)",
      school: "University of Nairobi",
      passion: "Bringing creative ideas and projects to life",
      image: timothy,
    },
    {
      name: "Vincent M Muriithi",
      role: "Partnership Acquisition",
      background: "Bsc. Business Studies",
      school: "Kenyatta University",
      passion:
        "Bridging ideas and opportunities through strategic partnerships",
      image: vincent,
    },
    {
      name: "Antonio Maina",
      role: "Software Engineer",
      background: "BSc. Computer Science (Jomo Kenyatta University of Agriculture and Technology)",
      school: "Jomo Kenyatta University Of Science And Technology",
      passion:
        " Building user-centric products for the common human being",
      image: antonio,
    },
  ];
  return (
    <div>
      <section className="fdb-block team-8">
        <div className="container">
          <div className="row text-left justify-content-left">
            <div className="col-8">
              <h1>Our Amazing Team</h1>
            </div>
          </div>

          <div className="row-100" />

          <div className="row justify-content-left text-left">
            {team.map((member, index) => (
              <TeamMemberCard className="col-sm-6 col-md-4" key={index}>
                <div className="row align-items-top">
                  <div className="col-12">
                    <PeopleImage
                      alt="image"
                      className="img-fluid rounded-circle"
                      height="40"
                      src={member.image}
                    />
                  </div>

                  <div className="col-12">
                    <h3>
                      <strong>{member.name}</strong>
                    </h3>
                    <p className="lead">{member.role}</p>
                    <h5>
                      <strong>Background</strong>
                    </h5>
                    <p>{member.background}</p>
                    <p>({member.school})</p>
                    <h5>
                      <strong>Passion</strong>
                    </h5>
                    <p>{member.passion}</p>
                  </div>
                </div>
              </TeamMemberCard>
            ))}
          </div>

          <div className="row-70" />

          <div className="row-70" />
        </div>
      </section>
    </div>
  );
};

export default About;
