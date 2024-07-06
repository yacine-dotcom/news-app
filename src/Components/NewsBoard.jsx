import { useEffect, useState } from "react";

import NewsItem from "./NewsItem";

// eslint-disable-next-line react/prop-types
const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const key = "16461f31fca04029998cbe323cac7ff7";

      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`http error: Status  ${response.status}`);
        }
        const data = await response.json();
        return setArticles(data.articles);
      } catch (error) {
        console.log("ERROR: FETCHING DATA", error);
      }
    };
    getData();
  }, [category]);

  return (
    <>
      <div>
        <div className="col-12 text-center ">
          <h2 className="text-center mt-5">
            Latest <span className="badge text-bg-danger fs-4"> News</span>
          </h2>
          {articles.map((article, index) => {
            return (
              <NewsItem
                key={index}
                author={article.author}
                title={article.title}
                src={article.urlToImage}
                description={article.description}
                url={article.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewsBoard;
