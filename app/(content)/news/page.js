import NewsList from '@/components/news-list';

export default async function NewsPage() {
  const res = await fetch('http://localhost:8080/news');

  if (!res.ok) {
    throw new Error(`Failed to fetch news: ${res.status}`);
  }

  const news = await res.json();

  return (
    <>
      <h1>NewsPage</h1>
      <NewsList news={news} />
    </>
  );
}
