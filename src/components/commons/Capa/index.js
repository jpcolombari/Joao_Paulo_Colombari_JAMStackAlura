import React from 'react';
import CapaWrapper from './CapaWrapper';

export default function Capa() {
  return (
    <CapaWrapper
      height={{
        xs: '190px',
        md: '220px',
      }}
    >
      <CapaWrapper.CapaIcon src="images/magento-icon.svg" alt="logo" width={{ xs: '110px', md: '160px' }} />
    </CapaWrapper>
  );
}
