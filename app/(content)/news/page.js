'use client';

import NewsList from '@/components/news-list';
import {useState, useEffect} from 'react';

const NewsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const res = await fetch('http://localhost:8080/news');

      if (!res.ok) {
        setError('failde to fetch news.');
        setIsLoading(false);
      }

      const news = await res.json();
      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>NewsPage</h1>
      {newsContent}
    </>
  );
};

export default NewsPage;
