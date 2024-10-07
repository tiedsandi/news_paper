import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href='news/news1'>News 1</Link>
        </li>
        <li>
          <Link href='news/news2'>News 2</Link>
        </li>
        <li>
          <Link href='news/news3'>News 3</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
