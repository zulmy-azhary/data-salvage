import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import Table from '../components/Table';

const Dashboard = () => {
  return (
    <Layout>
      <h1 className="content__header">DASHBOARD</h1>
      <div className="content__body grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-max gap-8">
          <Card className="px-5 py-10 md:col-span-2 xl:col-span-1">
              <h2 className="text-lg md:text-xl xl:text-2xl text-center font-bold">TOTAL SALVAGE ASURANSI</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5">5000</h3>
          </Card>
          <Card className="px-5 py-10">
              <h2 className="text-lg md:text-xl xl:text-2xl text-center font-bold">WIS</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5">2000</h3>
          </Card>
          <Card className="px-5 py-10">
              <h2 className="text-lg md:text-xl xl:text-2xl text-center font-bold">SPA</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5">3000</h3>
          </Card>
          <Card className="p-8 text-left row-span-2 col-span-1 md:col-span-2 xl:col-span-3">
              <Table name="Dashboard" />
          </Card>
          {/* <Card className="p-5 row-span-2 md:col-span-2 xl:col-span-1">NOTE</Card> */}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      protected: true
    }
  }
}

export default Dashboard;