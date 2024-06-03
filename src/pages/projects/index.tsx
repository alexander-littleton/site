import styled from "styled-components";
import Project from "./Project";
import stockChangerThumbnail from "./projectThumbnails/stock_checker.png";
import clientSheetThumbnail from "./projectThumbnails/client_sheet.png";
import alphaNumericThumbnail from "./projectThumbnails/alphanumeric_tool.png";
import oosAdScriptThumbnail from "./projectThumbnails/python_stock_checker.png";

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
`;

export default function Projects() {
  document.title = "Projects - Alex Littleton";
  return (
    <ProjectsWrapper>
      <Project
        title="Portfolio Site"
        stack={["typescript", "react"]}
        gitHubLink="https://github.com/alexander-littleton/alexander-littleton.github.io/tree/main"
        description="Multi-page custom portfolio site with React Router for SPA routing. Built on top of Vite for a fast and lightweight DevX. Utilizes styled-components for atomic components and styling."
      />
      <Project
        title="Dynamic Calendar (2024)"
        stack={["go"]}
        gitHubLink="https://github.com/alexander-littleton/go-htmx-project"
        description="A simple server-side-rendered dynamic calendar utilizing Go, Tailwind, Templ, and HTMX."
      />
      <Project
        title="Cadence API (2023)"
        stack={["go", "mongo"]}
        gitHubLink="https://github.com/alexander-littleton/cadence-api"
        description="A RESTful Go + Mongo web server with Layered Architecture in the style of an enterprise application. Includes thorough BDD based automated testing using Ginkgo."
      />
      <Project
        title="Client Sheet (2020)"
        imageSource={clientSheetThumbnail}
        stack={["typescript"]}
        gitHubLink="https://github.com/alexander-littleton/csaTools"
        liveDemoLink="https://alexander-littleton.github.io/csaTools/client-sheet/"
        description="Spreadsheet used for tracking recurring tasks for Google Ads clients. All data is kept in localStorage which is limiting for users who switch between browsers or desktops frequently. Used as PoC for a larger project."
      />
      <Project
        title="Alphanumeric Query Tool (2020)"
        imageSource={alphaNumericThumbnail}
        stack={["javascript"]}
        gitHubLink="https://github.com/alexander-littleton/csaTools/tree/master/query-analysis-tool"
        liveDemoLink="https://alexander-littleton.github.io/csaTools/query-analysis-tool"
        description="Data processing application used to extract insights on search queries that are more likely to contain model numbers which typically are higher intent. The export modules ouput the individual n-grams for use keyword funneling. "
      />
      <Project
        title="Out of Stock Ad Script (2021)"
        imageSource={oosAdScriptThumbnail}
        stack={["javascript"]}
        gitHubLink="https://github.com/alexander-littleton/stock-check"
        description="Google Ads Script for pausing Paid Search ads within Google Ads campaigns where an HTML tag with a specified value is found. The primary use case for this script is to pause product ads if the product is out of stock. Biggest pitfall is the amount of time it takes to set up for each account."
      />
      <Project
        title="Product Feed Crawler (2021)"
        imageSource={stockChangerThumbnail}
        stack={["python"]}
        gitHubLink="https://github.com/alexander-littleton/stock-crawler"
        description="Python script used to crawl Google Shopping product feeds for stock status. Outputs a .csv of products marked 'in stock' within the feed but marked 'out of stock' or are unavailable on their landing pages.  "
      />
    </ProjectsWrapper>
  );
}
