import LensIcon from '@mui/icons-material/Lens';
import { IMAGE_PATH } from '../../constants/Area.constants';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { AreaStateType } from '../../types/Area.type';
import { PlayerType } from '../../types/Player.type';
import { areaUpdate } from '../../util/store/Area.reducer';
import { playerPointUpdate } from '../../util/store/Player.reducer';
import { areaOneClose } from '../../util/store/AreaOne.reducer';
import { useDispatch } from 'react-redux';
import { Container, Box } from '../../styles/AreaDetailStyle';

interface BuyProps {
  detail: AreaStateType;
  player: PlayerType;
}

const Buy = ({ detail, player }: BuyProps) => {
  const dispatch = useDispatch();

  const [check, setCheck] = useState({
    e2: false,
    e3: false,
    e4: false,
  } as {
    [key: string]: boolean;
  });
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(0);
    setCheck({ e2: false, e3: false, e4: false });
  }, [detail]);

  const onCheck = (str: string) => () => {
    setCheck({ ...check, [str]: !check[str] });
    setSum(check[str] ? +(sum - detail.pay[str]).toFixed(2) : +(sum + detail.pay[str]).toFixed(2));
  };

  const onAllCheck = () => {
    const temp = {
      e2: true,
      e3: true,
      e4: true,
    };
    setCheck(temp);
    setSum(+(detail.pay.e2 + detail.pay.e3 + detail.pay.e4).toFixed(2));
  };

  const onBuy = () => {
    if (sum + detail.pay.e1 > player.point) {
      alert('보유현금이 부족합니다.');
      return;
    }

    dispatch(areaUpdate(detail.key, player.key, true, check.e2, check.e3, check.e4));
    dispatch(playerPointUpdate(player.key, detail.pay.e1 + sum));
    dispatch(areaOneClose());
  };

  const onClose = () => {
    dispatch(areaOneClose());
  };

  return (
    <Container>
      <Box>
        <div className="top">
          <div className="leftPin">
            <LensIcon fontSize="small" sx={{ color: '#3c3b3f' }} />
          </div>
          <div className="pin" />
          <div className="rightPin">
            <LensIcon fontSize="small" sx={{ color: '#3c3b3f' }} />
          </div>
        </div>
        <div className="center">
          <div className="name">
            {detail.name} ( {detail.eName} )
          </div>
          <div className="content">
            <div className="info">
              <div className="default">
                땅값<span className="red ml">{detail.pay.e1}만</span>
              </div>
              <div className={check.e2 ? 'title titleCheck' : 'title'} onClick={onCheck('e2')}>
                저택<span className="red ml">{detail.pay.e2}만</span>
              </div>
              <div className={check.e3 ? 'title titleCheck' : 'title'} onClick={onCheck('e3')}>
                빌딩<span className="red ml">{detail.pay.e3}만</span>
              </div>
              <div className={check.e4 ? 'title titleCheck' : 'title'} onClick={onCheck('e4')}>
                호텔<span className="red ml">{detail.pay.e4}만</span>
              </div>
              <div className="title" onClick={onAllCheck}>
                모두 선택
              </div>
            </div>
            <div className="infoImg">
              <div className="flag">
                <img alt="flag" src={`${IMAGE_PATH}/${detail.eName}.png`} />
              </div>
              <div className="tour">
                <img alt="tour" src={`${IMAGE_PATH}/${detail.eName}2.png`} />
              </div>
            </div>
          </div>
          <div className="pay">
            <div className="buy">
              총 구매비용{' -> '}
              <span className="red">{sum + detail.pay.e1}만</span>
            </div>
            <div className="current">보유현금{` -> ${player.point}만`}</div>
          </div>
        </div>
        <div className="bottom">
          <Button variant="contained" color={'success'} startIcon={<CheckIcon />} onClick={onBuy}>
            구입
          </Button>
          <Button variant="contained" color={'error'} startIcon={<CloseIcon />} onClick={onClose}>
            취소
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default Buy;
