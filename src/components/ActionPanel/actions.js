import React from 'react';
import PlantForm from 'components/Forms/PlantForm';

export default {
  newPlant: {
    label: 'New Plant',
    component: () => {
      return <PlantForm />;
    },
  },
};
