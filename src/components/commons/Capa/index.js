import React from 'react';
import CapaWrapper from './CapaWrapper';

export default function Capa() {
  return (
    <CapaWrapper
      backgroundImage="url(/images/magento-capa.jpg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      backgroundSize="cover"
      height={{
        xs: '190px',
        md: '300px',
      }}
    >
      <CapaWrapper.Title>
        João Paulo
      </CapaWrapper.Title>
    </CapaWrapper>
  );
}
