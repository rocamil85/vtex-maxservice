import React, { FC } from 'react';
import { Layout, PageBlock, Button  } from 'vtex.styleguide';
//import { useQuery } from 'react-apollo';
//import alasx from './graphql/alasx.gql';

const AdminAlas: FC = () => {
  //const { data } = useQuery(alasx)


  return (
    <Layout>
      <PageBlock
        title="Módulo de Integración"
        subtitle="Permite observar las órdenes en una bitácora de errores para que puedan ser reprocesadas. También puede consultar el estado actual de una orden en el sistema de Alas."
        variation="full"
      >
        <h1>Bitácora de Errores de AlasXpress</h1>
        <div className="mb4">
          <Button variation="primary" href="https://integration.alasxpress.com/vtex/myvtexalasstore/index.php" target="_blank">Ir al Dashboard</Button>
        </div>
        
  
      </PageBlock>
    </Layout>
  );
};

export default AdminAlas