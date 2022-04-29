import { AreaStateType } from '../../types/Area.type';
import { PlayerType } from '../../types/Player.type';
import { Box, Container } from '../../styles/AreaDetailStyle';
import LensIcon from '@mui/icons-material/Lens';
import { IMAGE_PATH } from '../../constants/Area.constants';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { areaOneClose } from '../../util/store/AreaOne.reducer';
import { useDispatch } from 'react-redux';
import { areaReset } from '../../util/store/Area.reducer';
import { playerGameOver, playerTransfer } from '../../util/store/Player.reducer';

interface PayProps {
  detail: AreaStateType;
  player: PlayerType;
}

const Pay = ({ detail, player }: PayProps) => {
  const dispatch = useDispatch();

  const [sum, setSum] = useState(0);

  useEffect(() => {
    let num = 0;
    Object.keys(detail.possession).map((key) => detail.possession[key] && (num += detail.price[key]));
    setSum(num);
  }, [detail]);

  const onClose = () => {
    if (sum > player.point) {
      alert('플레이어 한명이 파산하였습니다.');
      dispatch(areaReset(player.key));
      dispatch(playerTransfer(player.key, detail.player, player.point));
      dispatch(playerGameOver(player.key));
    } else {
      dispatch(playerTransfer(player.key, detail.player, +sum.toFixed(2)));
    }

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
                땅값<span className="red ml">{detail.price.e1}만</span>
              </div>
              <div className="title">
                {detail.possession.e2 && (
                  <>
                    저택<span className="red ml">{detail.price.e2}만</span>
                  </>
                )}
              </div>
              <div className="title">
                {detail.possession.e3 && (
                  <>
                    빌딩<span className="red ml">{detail.price.e3}만</span>
                  </>
                )}
              </div>
              <div className="title">
                {detail.possession.e4 && (
                  <>
                    호텔<span className="red ml">{detail.price.e4}만</span>
                  </>
                )}
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
              총 지출 비용{' -> '}
              <span className="red">{sum}만</span>
            </div>
            <div className="current">보유현금{` -> ${player.point}만`}</div>
          </div>
        </div>
        <div className="bottom">
          <Button variant="contained" color={'error'} startIcon={<CloseIcon />} onClick={onClose}>
            취소
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default Pay;
