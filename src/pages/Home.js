import { Typography } from "@mui/material";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className="App">
      <h1>Andrew Merz</h1>
      <h4>Portfolio</h4>
      <div className="summary">
        <Typography align="center">
          I am a full stack software engineer based in the greater New York City
          area with a background in business and finance. I am currently
          enrolled in General Assembly's full time Software Engineering
          Immersive program where I am learning programming and computer science
          fundamentals. Upon graduation I am looking to embark on my journey as
          a software engineer working on cutting edge software and technology.
        </Typography>
      </div>
      <Projects />
    </div>
  );
}

export default Home;
