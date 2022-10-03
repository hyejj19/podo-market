import Item from '@/components/item';
import Layout from '@/components/layout';

export default function Home() {
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
