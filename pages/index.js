import React from 'react';
import Capa from '../src/components/commons/Capa';
import Cabecalho from '../src/components/commons/Cabecalho';
import Box from '../src/components/foundation/layout/Box';
import WrapperProjetos from '../src/components/WrapperProjetos';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
    >
      <Capa />
      <Cabecalho />
      <WrapperProjetos />
    </Box>
  );
}
