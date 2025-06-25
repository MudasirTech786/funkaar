import React from 'react';
import { Metadata } from 'next';
import HomeSevenMain from '@/pages/homes/home-7';

export const metadata: Metadata = {
  title: "Funkaar - Home Seven Page",
};

const HomePageSeven = () => {
  return (
    <HomeSevenMain/>
  );
};

export default HomePageSeven;