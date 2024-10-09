import MainHeader from '@/components/main-header';

export default function NotFoundPage() {
  return (
    <main id='page'>
      <MainHeader />
      <div className='error'>
        <h1>Not Found!</h1>
        <p>The requested resource could not be found!</p>
      </div>
    </main>
  );
}
