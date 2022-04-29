import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../util/store';
import LensIcon from '@mui/icons-material/Lens';
import { IMAGE_PATH } from '../../constants/Area.constants';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { areaOneClose } from '../../util/store/AreaOne.reducer';
import { areaUpdate } from '../../util/store/Area.reducer';
import { playerPointUpdate } from '../../util/store/Player.reducer';

const AreaDetailForm = () => {
  const detail = useSelector(({ AreaOneReducer }: RootState) => AreaOneReducer);
  const player = useSelector(({ PlayerReducer }: RootState) => PlayerReducer[`player${detail.turn}`]);

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
    if (!detail.value) return;

    setCheck({ ...check, [str]: !check[str] });
    setSum(check[str] ? +(sum - detail.value.pay[str]).toFixed(2) : +(sum + detail.value.pay[str]).toFixed(2));
  };

  const onAllCheck = () => {
    if (!detail.value) return;

    const temp = {
      e2: true,
      e3: true,
      e4: true,
    };
    setCheck(temp);
    setSum(+(detail.value.pay.e2 + detail.value.pay.e3 + detail.value.pay.e4).toFixed(2));
  };

  const onBuy = () => {
    if (!detail.value || !detail.turn) return;

    if (sum + detail.value?.pay.e1 > player.point) {
      alert('보유현금이 부족합니다.');
      return;
    }

    dispatch(areaUpdate(detail.value.key, detail.turn, true, check.e2, check.e3, check.e4));
    dispatch(playerPointUpdate(detail.turn, detail.value.pay.e1 + sum));
    dispatch(areaOneClose());
  };

  const onClose = () => {
    dispatch(areaOneClose());
  };

  return detail.isOpen ? (
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
            {detail.value?.name} ( {detail.value?.eName} )
          </div>
          <div className="content">
            <div className="info">
              <div className="default">
                땅값<span className="red ml">{detail.value?.pay.e1}만</span>
              </div>
              <div className={check.e2 ? 'title titleCheck' : 'title'} onClick={onCheck('e2')}>
                저택<span className="red ml">{detail.value?.pay.e2}만</span>
              </div>
              <div className={check.e3 ? 'title titleCheck' : 'title'} onClick={onCheck('e3')}>
                빌딩<span className="red ml">{detail.value?.pay.e3}만</span>
              </div>
              <div className={check.e4 ? 'title titleCheck' : 'title'} onClick={onCheck('e4')}>
                호텔<span className="red ml">{detail.value?.pay.e4}만</span>
              </div>
              <div className="title" onClick={onAllCheck}>
                모두 선택
              </div>
            </div>
            <div className="infoImg">
              <div className="flag">
                <img src={`${IMAGE_PATH}/${detail.value?.eName}.png`} />
              </div>
              <div className="tour">
                <img src={`${IMAGE_PATH}/${detail.value?.eName}2.png`} />
              </div>
            </div>
          </div>
          <div className="pay">
            <div className="buy">
              총 구매비용{' -> '}
              <span className="red">{detail.value && sum + detail.value?.pay.e1}만</span>
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
  ) : (
    <></>
  );
};

const Container = styled.div`
  width: calc(100% / 4);
  height: 60vh;

  position: fixed;
  top: 20vh;
  left: calc(100% / 8 * 3);
  z-index: 999;

  background-color: #605c3c;
  box-shadow: 1px 1px 2px 4px #3c3b3f;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
`;

const Box = styled.div`
  width: 97%;
  height: 97%;

  border: 2px dashed #3c3b3f;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & .red {
    color: brown;
  }

  & .ml {
    margin-left: 40%;
  }

  & .top {
    width: 50%;
    height: 5%;

    background-image: linear-gradient(to left, #bdbbbe 0%, #9d9ea3 100%),
      radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%),
      radial-gradient(50% 100%, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%);
    background-blend-mode: normal, lighten, soft-light;
    box-shadow: 1px -1px 5px 1px #3c3b3f;
    border-radius: 5px 5px 0 0;

    position: relative;

    & .pin {
      position: absolute;
      top: 20%;
      left: 12%;

      width: 72%;
      height: 110%;

      border: 1.5mm ridge #605c3c;
      border-radius: 20%;
    }

    & .leftPin {
      position: absolute;
      top: 20%;
      left: 2%;
    }

    & .rightPin {
      position: absolute;
      top: 20%;
      right: 2%;
    }
  }

  & .center {
    width: 94%;
    height: 74%;

    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    box-shadow: 3px 3px 5px #3c3b3f;
    border-radius: 5px;

    box-sizing: border-box;
    padding: 8px 12px 12px 12px;

    font-weight: 700;

    & .name {
      width: 100%;
      height: 15%;

      display: flex;
      justify-content: center;
      align-items: center;

      letter-spacing: 0.2em;
      font-size: 1.1em;
      color: #3c3b3f;

      box-shadow: 0 0 0 3.5px #3c3b3f inset;
      background-image: linear-gradient(
        to top,
        lightgrey 0%,
        lightgrey 1%,
        #e0e0e0 26%,
        #efefef 48%,
        #d9d9d9 75%,
        #bcbcbc 100%
      );
    }

    & .content {
      width: 100%;
      height: 60%;
      display: flex;
      margin: 12px 0 12px 0;

      & .info {
        width: 60%;
        height: 100%;
        margin-right: 12px;

        box-sizing: border-box;
        padding: 10px;

        box-shadow: 0 0 0 3.5px #3c3b3f inset;
        background-image: linear-gradient(
          to top,
          lightgrey 0%,
          lightgrey 1%,
          #e0e0e0 26%,
          #efefef 48%,
          #d9d9d9 75%,
          #bcbcbc 100%
        );

        & .default {
          width: 100%;
          height: 20%;

          display: flex;
          align-items: center;

          border-bottom: 3px dashed gray;
        }

        & .title {
          width: 100%;
          height: 20%;

          display: flex;
          align-items: center;

          border-bottom: 1px solid gray;
          cursor: pointer;
        }

        & .titleCheck {
          background-color: #aaaaaa;
        }
      }

      & .infoImg {
        width: 40%;
        height: calc(100% - 12px);

        & > div {
          box-sizing: border-box;
          padding: 5px;

          box-shadow: 0 0 0 3.5px #3c3b3f inset;
          background-image: linear-gradient(
            to top,
            lightgrey 0%,
            lightgrey 1%,
            #e0e0e0 26%,
            #efefef 48%,
            #d9d9d9 75%,
            #bcbcbc 100%
          );
        }

        & img {
          width: 100%;
          height: 100%;
        }

        & .flag {
          width: 100%;
          height: 41%;
        }

        & .tour {
          width: 100%;
          height: 59%;
          margin-top: 12px;
        }
      }
    }

    & .pay {
      width: 100%;
      height: 20%;

      box-sizing: border-box;
      padding: 10px;

      box-shadow: 0 0 0 3.5px #3c3b3f inset;
      background-image: linear-gradient(
        to top,
        lightgrey 0%,
        lightgrey 1%,
        #e0e0e0 26%,
        #efefef 48%,
        #d9d9d9 75%,
        #bcbcbc 100%
      );

      & > div {
        width: 100%;
        height: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      & .buy {
        color: #3c3b3f;
        border-bottom: 1px solid gray;
      }

      & .current {
        color: gray;
      }
    }
  }

  & .bottom {
    width: 70%;
    height: 15%;

    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
  }
`;

export default AreaDetailForm;
