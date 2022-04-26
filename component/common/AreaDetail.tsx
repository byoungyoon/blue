import { AreaDetailType } from '../../types/Area.type';
import { useEffect, useLayoutEffect } from 'react';

interface AreaDetailProps {
  detail?: AreaDetailType;
}

const AreaDetail = ({ detail }: AreaDetailProps) => {
  useEffect(() => {}, [detail]);

  return detail ? <div></div> : <></>;
};

export default AreaDetail;
