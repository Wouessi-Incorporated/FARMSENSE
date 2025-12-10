import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const acceptLang = context.req.headers['accept-language'] || '';
  const lower = Array.isArray(acceptLang) ? acceptLang.join(',').toLowerCase() : acceptLang.toLowerCase();
  const prefersFr = lower.includes('fr');
  return {
    redirect: {
      destination: prefersFr ? '/fr' : '/en',
      permanent: false,
    },
  };
};

export default function IndexRedirect() {
  return null;
}