import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title="Aman Kumar" description="Node.js Solutions Architect" />
      }
    >
      <p>Hello World!</p>
    </Main>
  );
};

export default Index;
