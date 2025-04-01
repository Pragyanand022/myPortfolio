import { useState } from "react";
import "./App.css";
import "./Index.css";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Projects from "./components/Project/index";
import ProjectDetails from "./components/ProjectDetails/index";
import SkillsSlider from "./components/Skills/Skills";
import SideMenu from "./components/SideMenu";
import { Typewriter } from "react-simple-typewriter";

window.addEventListener("scroll", function () {
	const navbar = document.querySelector(".header");
	if (window.scrollY > 50) {
		navbar.classList.remove("transparent");
		navbar.classList.add("black-bg");
	} else {
		navbar.classList.remove("black-bg");
		navbar.classList.add("transparent");
	}
});

document.addEventListener(
	"touchend",
	(event) => {
	  event.stopImmediatePropagation(); // Stops all other `touchend` listeners
	},
	true // Capture phase
  );
  

function App() {
	const [openModal, setOpenModal] = useState({ state: false, project: null });
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<BackgroundAnimation/>
			{/* <!-- home section starts  --> */}

			<SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
			<header className="header transparent">
				<div className="navbar">
					<div className="hero">
						<a href="#home">Pragyanand</a>
					</div>
					<div className="nav">
						<ul>
							<li>
								<a className="nav_item" href="#home">
									Home
								</a>
							</li>
							<li>
								<a className="nav_item" href="#about">
									About
								</a>
							</li>
							<li>
								<a className="nav_item" href="#education">
									Education
								</a>
							</li>
							<li>
								<a className="nav_item" href="#skills">
									Skills
								</a>
							</li>
							<li>
								<a className="nav_item" href="#projects">
									Projects
								</a>
							</li>
							<li>
								<a className="nav_item" href="#contact">
									Contact
								</a>
							</li>
						</ul>
					</div>
					<button className="menu-btn event" onClick={toggleMenu}>
						<span
							className={"material-symbols-outlined"}
							style={{ fontSize: "1.8rem" }}
						>
							{isMenuOpen ? "close" : "menu"}
						</span>
					</button>
				</div>
			</header>

			<section className="home" id="home">
				<div className="home_details">
					<h5>Pragyanand Singh</h5>
					<h1>
						I'm a 
						<br />
						<span>
							<Typewriter
								words={[
									" Full Stack Developer",
									" App Developer",
									" Programmer",
								]}
								loop
								cursor
							/>
						</span>
					</h1>
					<p>
						{" "}
						A Computer Science and Engineering student at MMMUT,
						Gorakhpur
						<br />
						and executive board member at Computer Engineering
						Society.
						<br />
						Interested in competetive coding and web-development.
					</p>
					<a href="#about">
						<button className="btn">
							about me <i className="fas fa-user"></i>
						</button>
					</a>
				</div>
				<div className="profile">
					<div className="img_frame">
						<img src="./images/pic2.png" alt="profile" />
					</div>
				</div>
			</section>

			{/* <!-- home section ends --> */}

			{/* <!-- about section starts  --> */}

			<section className="about" id="about">
				<h1 className="heading">
					{" "}
					<span>about</span> me{" "}
				</h1>

				<div className="photo">
					<img src="images/pic1.png" alt=" " />
				</div>
				<div className="row">
					<div className="info setmobile">
						<h3>
							{" "}
							<span> name : </span> Pragyanand Singh{" "}
						</h3>
						<h3>
							{" "}
							<span> age : </span> 21{" "}
						</h3>
						<h3>
							{" "}
							<span> interests : </span> Web development and
							Competitive programming{" "}
						</h3>
						<h3>
							{" "}
							<span> language : </span> Hindi / English{" "}
						</h3>
						<a href="https://drive.google.com/file/d/1JxgbD0t4vRRPvhyO5uaBRkQwpcbzCGQv/view?usp=drive_link">
							<button className="btn">
								{" "}
								Resume <i className="fas fa-download"></i>{" "}
							</button>
						</a>
					</div>

					<div className="counter">
						<a className="about_links" href="#about">
							<div className="box">
								<span>1+</span>
								<h3>years of experience</h3>
							</div>
						</a>

						<a className="about_links" href="#projects">
							<div className="box">
								<span>15+</span>
								<h3>porject completed</h3>
							</div>
						</a>

						<a className="about_links" href="#skills">
							<div className="box">
								<span>10+</span>
								<h3>skills gained</h3>
							</div>
						</a>

						<a className="about_links" href="#about">
							<div className="box">
								<span>5+</span>
								<h3>awards won</h3>
							</div>
						</a>
					</div>
				</div>
			</section>

			{/* <!-- about section ends --> */}

			{/* <!-- education section starts  --> */}

			<section className="education" id="education">
				<h1 className="heading">
					{" "}
					my <span>education</span>{" "}
				</h1>

				<div className="box-container">
					<div className="box">
						<i className="fas fa-graduation-cap"></i>
						<span>2016-2018</span>
						<h3>High-School</h3>
						<p>
							I have completed my High-School from Aman
							International School, Mainpuri which is effiliated
							to Cenral boared of secondary education with an
							aggrigate score of 95%.
						</p>
					</div>

					<div className="box">
						<i className="fas fa-graduation-cap"></i>
						<span>2018-2020</span>
						<h3>Intermediate</h3>
						<p>
							I have completed my Intermediate from Aman
							International School, Mainpuri which is effiliated
							to Cenral boared of secondary education with an
							aggrigate score of 93.8%.
						</p>
					</div>

					<div className="box">
						<i className="fas fa-graduation-cap"></i>
						<span>2021-present</span>
						<h3>B.Tech.</h3>
						<p>
							I am persuing my B.tech degree in Computer Science
							and Engineering from Madan Mohan Malaviya University
							of Technology, Gorakhpur. My current CGPA is 8.11.
						</p>
					</div>
				</div>

				<div className="edu_back event">
					<img src="./images/Designer.png" alt="backGround" />
				</div>
			</section>

			{/* <!-- education section ends --> */}

			{/* <!-- skills section starts  --> */}

			<section className="skills" id="skills">
				<h1 className="heading">
					{" "}
					my <span>skills</span>{" "}
				</h1>

				<SkillsSlider />
				{/* <Skills/> */}
			</section>

			{/* <!-- skills section ends --> */}

			{/* <!-- projects section starts  --> */}

			<section className="projects" id="projects">
				<h1 className="heading">
					{" "}
					my <span>projects</span>{" "}
				</h1>

				<Projects openModal={openModal} setOpenModal={setOpenModal} />
			</section>

			{/* <!-- projects section ends --> */}

			{/* <!-- contact section starts  --> */}

			<section className="contact" id="contact">
				<h1 className="heading">
					{" "}
					<span>contact</span> me{" "}
				</h1>

				<div className="row">
					<div className="content">
						<h3 className="title">contact info</h3>

						<div className="info">
							<h3>
								{" "}
								<i className="fas fa-envelope"></i>{" "}
								pragyanand022@gmail.com{" "}
							</h3>
							<h3>
								{" "}
								<i className="fas fa-phone"></i> +91 8960216277{" "}
							</h3>
							<h3>
								{" "}
								<i className="fas fa-map-marker-alt"></i>{" "}
								Gorakhpur, UP, India{" "}
							</h3>
						</div>
					</div>

					<form action="" className="event">
						<input
							type="text"
							placeholder="name"
							className="box event"
						/>
						<input
							type="email"
							placeholder="email"
							className="box event"
						/>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							className="box message event"
							placeholder="message"
						></textarea>
						<button type="submit" className="btn event">
							{" "}
							send <i className="fas fa-paper-plane"></i>{" "}
						</button>
					</form>
				</div>
				{/* <!-- contact section ends --> */}
			</section>
			<footer>
				<div className="container-fluid">
					{/* <!-- social media icons --> */}
					<div className="social-icons">
						<p>© Pragyanand Singh (2025)</p>
						<div className="icons_group">
							<a
								href="https://www.facebook.com/pragyanand.singh.92/"
								target="_blank"
							>
								<i className="fab fa-facebook"></i>
							</a>
							<a
								href="https://www.instagram.com/pragyanand.022/"
								target="_blank"
							>
								<i className="fab fa-instagram"></i>
							</a>
							<a href="https://twitter.com/" target="_blank">
								<i className="fab fa-twitter"></i>
							</a>
							<a href="https://www.linkedin.com/" target="_blank">
								<i className="fab fa-linkedin"></i>
							</a>
							<a
								href="https://github.com/Pragyanand022"
								target="_blank"
							>
								<i className="fab fa-github"></i>
							</a>
						</div>
					</div>
				</div>
			</footer>
			{openModal.state && (
				<ProjectDetails
					openModal={openModal}
					setOpenModal={setOpenModal}
				/>
			)}

			{/* </div> */}

			{/* <!-- jquery cdn link  --> */}
			<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

			{/* <!-- custom js file link  --> */}
		</>
	);
}

export default App;
