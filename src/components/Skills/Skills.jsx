import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SkillsSlider = () => {
  const skills = [
    { name: 'C', image: 'skills_icons/c.png', level: 80 },
    { name: 'C++', image: 'skills_icons/cpp.png', level: 85 },
    { name: 'Python', image: 'skills_icons/python.png', level: 75 },
    { name: 'HTML', image: 'skills_icons/html.png', level: 90 },
    { name: 'CSS.js', image: 'skills_icons/css.png', level: 70 },
    { name: 'ReactJs', image: 'skills_icons/react.png', level: 80 },
    { name: 'Node.js', image: 'skills_icons/nodejs.png', level: 75 },
    { name: 'SQL', image: 'skills_icons/mysql.png', level: 80 },
    { name: 'PostgreSQL', image: 'skills_icons/postgres.png', level: 70 },
    { name: 'MongoDB', image: 'skills_icons/mongo.png', level: 70 },
    { name: 'GIT', image: 'skills_icons/git.png', level: 80},
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };

  const handleMouseEnter = (skillName) => {
    setHoveredSkill(skillName);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div className="skillContainer">

      <div className="skill_description">
        <p>
        Passionate about designing and developing scalable, high-performance web applications with expertise in both front-end and back-end technologies.
        Skilled in ReactJS, Node.js, Express.js, and PostgreSQL, with a deep understanding of state management, API development, and database optimization. Strong problem-solving abilities, particularly in Data Structures and Algorithms, with a focus on writing efficient and optimized code.Experienced in deploying and maintaining applications using modern DevOps practices, including GitHub Actions.Always eager to explore new technologies and improve system performance while ensuring a seamless user experience.
        </p>
      </div>

      <div className="skills-slider-container">
        <Slider {...settings} ref={sliderRef}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-item"
              onMouseEnter={() => handleMouseEnter(skill.name)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="item_box">
                <img src={skill.image} alt={skill.name} className="skill-image" />
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              {(hoveredSkill === skill.name || window.innerWidth <= 768) && (
                <div className="skill-level">
                  <div
                    className="skill-level-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                  <p>{skill.level}%</p>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
  </div>
  );
};

export default SkillsSlider;