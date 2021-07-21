import './App.css';

function App() {
  return (
    <div className="bodycontainer">
      <div className="parent">
        <h1>About Me</h1>
      </div>
      <p>
        Hey there! Though I'm currently working as a Senior Data Analyst for an e-commerce company out of
        Philadelphia, I've recently found a passion for coding which is probably why you're here (in which case
        you're probably looking for the "Projects" section or my <a
          href="https://www.github.com/littale12">GitHub</a>
      </p>
      <div className="parent">
        <h1>Languages and Frameworks</h1>
      </div>
      <div className="icon-row">
        <i className="icon devicon-css3-plain-wordmark"></i>
        <i className="icon devicon-javascript-plain-wordmark"></i>
        <i className="icon devicon-git-plain-wordmark"></i>
        <i className="icon devicon-html5-plain-wordmark"></i>
        <i className="icon devicon-postgresql-plain-wordmark"></i>
        <i className="icon devicon-python-plain-wordmark"></i>
        <i className="icon devicon-ruby-plain-wordmark"></i>
      </div>
    </div>

  )
}

export default App;
