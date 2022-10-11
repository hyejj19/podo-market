import Item from '@/components/item';
import Layout from '@/components/layout';
import useUser from '@/lib/client/useUser';

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
    </Layout>
  );
}
