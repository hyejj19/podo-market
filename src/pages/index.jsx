import Item from '@/components/Item';
import Layout from '@/components/Layout';
import useUser from '@/lib/client/useUser';
import Circle from '@/components/circle';

export default function Home() {
  const user = useUser();
  console.log(user);
  return (
    <Layout title="홈" hasTabBar>
      <div className="w-full divide-y">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((_, idx) => (
          <Item key={idx} />
        ))}
        <Item />
      </div>
      <Circle />
    </Layout>
  );
}
