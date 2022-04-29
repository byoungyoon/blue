import { useSelector } from 'react-redux';
import { RootState } from '../../util/store';
import Buy from '../common/Buy';
import BuyUpdate from '../common/BuyUpdate';
import Pay from '../common/Pay';

const AreaDetailForm = () => {
  const detail = useSelector(({ AreaOneReducer }: RootState) => AreaOneReducer);
  const player = useSelector(({ PlayerReducer }: RootState) => PlayerReducer[`player${detail.turn}`]);

  const onForm = () => {
    if (!detail.value) return <></>;

    if (detail.value.player === 0) return <Buy detail={detail.value} player={player} />;
    else {
      if (detail.value.player === player.key) return <BuyUpdate />;
      else return <Pay detail={detail.value} player={player} />;
    }
  };

  return detail.isOpen ? onForm() : <></>;
};

export default AreaDetailForm;
