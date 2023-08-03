import ExperienceBox from "../UI/ExperienceBox";

const Experiences = () => {
  const experiences = [
    {
      title: "Research Assistant",
      description:
        "Teaching in the EMBER program offered at McMaster to assist incoming students as well as updating the McMaster website with relavent content.",
      location: "McMaster University",
      duration: "May 2023 - Present",
      link1: "https://www.eng.mcmaster.ca/programs/ember/#tab-content-ov",
    },
    {
      title: "Code Sensei",
      description:
        "Teaching chidren introductory level scratch, java-script, lua-script, 3-D design, and working with the Unity enviornment.",
      location: "Code Ninjas",
      duration: "June 2022 - May 2023",
      link1:
        "https://www.codeninjas.com/milton-on-ca?utm_campaign=soci_listings&utm_source=soci&utm_medium=listing&utm_content=milton-on-ca&utm_term=gmb",
    },
  ];

  return (
    <div>
      <h1 className="title">
        Experiences <hr />
      </h1>
      <ExperienceBox
        title={experiences[0].title}
        description={experiences[0].description}
        location={experiences[0].location}
        duration={experiences[0].duration}
        link={experiences[0].link1}
      />
      <ExperienceBox
        title={experiences[1].title}
        description={experiences[1].description}
        location={experiences[1].location}
        duration={experiences[1].duration}
        link={experiences[1].link1}
      />
    </div>
  );
};

export default Experiences;
