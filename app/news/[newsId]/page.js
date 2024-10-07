import React from 'react';

const NewsDetailPage = ({params}) => {
  const newsId = params.newsId;
  return (
    <>
      <h1> NewsDetailPage</h1>
      <p>News Id : {newsId}</p>
    </>
  );
};

export default NewsDetailPage;
