// components/category/AccommodationCard.tsx

import React from 'react';

import YourItemComponent, { YourItemComponentProps } from './YourItemComponent';

type AccommodationCardProps = YourItemComponentProps;

const AccommodationCard: React.FC<AccommodationCardProps> = (props) => {
  return <YourItemComponent {...props} />;
};

export default AccommodationCard;
