import { RiSunCloudyLine, RiMoonClearFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import "../theme/ThemeToggle.css";

const ThemeToggle = () => {
	const [darkMode, setDarkMode] = useState(false);
	const ActiveMode = async () => {
		setDarkMode(!darkMode);
		if (darkMode === true) {
			document.body.classList.add("light__mode");
			document.body.classList.remove("dark__mode");
			await localStorage.setItem("Theme", "light__mode");
		}
		if (darkMode === false) {
			document.body.classList.add("dark__mode");
			document.body.classList.remove("light__mode");
			await localStorage.setItem("Theme", "dark__mode");
		}
	};

	useEffect(() => {
		if (localStorage.getItem("Theme") === "light__mode") {
			document.body.classList.add("light__mode");
		} else if (localStorage.getItem("Theme") === "dark__mode") {
			document.body.classList.add("dark__mode");
			setDarkMode(!darkMode);
		}
	}, [darkMode]);


	return (
		<>
				<nav className="toggle-menu" style={{clear:"both"}}>
					<ul>
							<li>
								<button onClick={ActiveMode} className="toggle-btn switch-checkbox">
									{localStorage.getItem("Theme") === "dark__mode" ? (
										<RiMoonClearFill className="toggle" />
									) : (
										<RiSunCloudyLine className="toggle" />
									)}
								</button>
							</li>
					</ul>
				</nav>
		</>
	);
};

export default ThemeToggle;