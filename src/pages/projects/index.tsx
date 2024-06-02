import styled from "styled-components";
import Project from "./Project";
import stockChangerThumbnail from "./projectThumbnails/stock_checker.png";
import clientSheetThumbnail from "./projectThumbnails/client_sheet.png";
import alphaNumericThumbnail from "./projectThumbnails/alphanumeric_tool.png";
import oosAdScriptThumbnail from "./projectThumbnails/python_stock_checker.png";

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: repeat(auto-fit, minmax(21.5em, 1fr));
  max-width: 900px;
  margin: auto;
  margin-top: 2em;
  grid-gap: 3em;
`;

export default function Projects() {
  return (
    <ProjectsWrapper>
      <Project
        title="Portfolio Site"
        stack={["typescript", "react"]}
        gitHubLink="https://github.com/alexander-littleton/alexander-littleton.github.io/tree/raw-react"
        description="Multi-page custom portfolio site with React Router. Built from scratch utilizing styled-components for styling. "
      />
      <Project
        title="Client Sheet"
        imageSource={clientSheetThumbnail}
        stack={["typescript"]}
        gitHubLink="https://github.com/alexander-littleton/csaTools"
        liveDemoLink="https://alexander-littleton.github.io/csaTools/clientsheet.html"
        description="Spreadsheet used for tracking recurring tasks for Google Ads clients. All data is kept in localStorage which is limiting for users who switch between browsers or desktops frequently. Used as PoC for a larger project."
      />
      <Project
        title="Alphanumeric Query Tool"
        imageSource={alphaNumericThumbnail}
        stack={["javascript"]}
        gitHubLink="https://github.com/alexander-littleton/csaTools/tree/master/query-analysis-tool"
        liveDemoLink="https://alexander-littleton.github.io/csaTools/query-analysis-tool"
        description="Data processing application used to extract insights on search queries that are more likely to contain model numbers which typically are higher intent. The export modules ouput the individual n-grams for use keyword funneling. "
      />
      <Project
        title="Out of Stock Ad Script"
        imageSource={oosAdScriptThumbnail}
        stack={["javascript"]}
        gitHubLink="https://github.com/alexander-littleton/stock-check"
        description="Google Script for pausing Paid Search ads within Google Ads campaigns where an HTML tag with a specified value is found. The primary use case for this script is to pause product ads if the product is out of stock. Biggest pitfall is the amount of time it takes to set up for each account."
      />
      <Project
        title="Product Feed Crawler"
        imageSource={stockChangerThumbnail}
        stack={["python"]}
        gitHubLink="https://github.com/alexander-littleton/stock-crawler"
        description="Python script used to crawl Google Shopping product feeds for stock status. Outputs a .csv of products marked 'in stock' within the feed but marked 'out of stock' or are unavailable on their landing pages.  "
      />
    </ProjectsWrapper>
  );
}
