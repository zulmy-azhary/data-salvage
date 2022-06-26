import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout/Layout';

const salvages = () => {
  return (
    <Layout>
      <Head>
        <title>Salvage App | Data Salvage</title>
      </Head>
      <h1 className="content__header">DATA SALVAGE</h1>
    </Layout>
  );
};

export default salvages;