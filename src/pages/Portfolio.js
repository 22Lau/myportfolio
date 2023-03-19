import React, { useState, useEffect } from "react";
import { PortfolioWrapper, Card, PortfolioTitle } from "../styled/PortfolioStyles";

function Portfolio() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/apirepo/list")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los repositorios.");
        }
        return response.json();
      })
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <PortfolioTitle>Here are some of my projects.</PortfolioTitle>
      <PortfolioWrapper>
        {repos.map((repo) => (
          <Card key={repo.id}>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <img src={repo.image} alt={repo.name} />
            <a href={repo.link} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </Card>
        ))}
      </PortfolioWrapper>
    </div>
  );
}

export default Portfolio;

