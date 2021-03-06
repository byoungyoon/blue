import styled from 'styled-components';
import { AreaDetailType, AreaStateType } from '../../types/Area.type';
import KeyIcon from '@mui/icons-material/Key';
import { AreaTypeConstants } from '../../constants/Area.constants';
import { yellow } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../util/store';

import E2 from '@mui/icons-material/Bungalow';
import E3 from '@mui/icons-material/Synagogue';
import E4 from '@mui/icons-material/Mosque';
import { useEffect, useState } from 'react';

interface AreaProps {
  AreaData: AreaDetailType;
}

const Area = ({ AreaData }: AreaProps) => {
  const player = useSelector(({ PlayerReducer }: RootState) => PlayerReducer);
  const area = useSelector(({ AreaReducer }: RootState) => AreaReducer);

  const [detail, setDetail] = useState<AreaStateType>();

  useEffect(() => {
    setDetail(area.filter((key) => key.key === AreaData.key)[0]);
  }, [area]);

  const onHeaderColor = () => {
    if (!detail || detail.player === 0) return;

    return player[`player${detail.player}`].color;
  };

  return (
    <Container type={AreaData.type}>
      <Header color={onHeaderColor()}>
        {detail && detail.possession.e2 && (
          <div className="e2">
            <E2 sx={{ fontSize: 14, color: 'white' }} />
          </div>
        )}
        {detail && detail.possession.e3 && (
          <div className="e3">
            <E3 sx={{ fontSize: 13, color: 'white' }} />
          </div>
        )}
        {detail && detail.possession.e4 && (
          <div className="e4">
            <E4 sx={{ fontSize: 13, color: 'white' }} />
          </div>
        )}
      </Header>
      <Title>
        {AreaData.type !== AreaTypeConstants.CARD ? AreaData.name : <KeyIcon sx={{ color: yellow[800] }} />}
      </Title>
    </Container>
  );
};

const handleColorType = (type: string) => {
  switch (type) {
    case AreaTypeConstants.CARD:
      return 'radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%)';
      break;
    case AreaTypeConstants.COUNTRY_LAND:
      return 'linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)';
      break;
    case AreaTypeConstants.SPECIAL:
      return 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)';
    default:
      break;
  }

  return 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)';
};

const Container = styled.div<{ type: string }>`
  width: 100%;
  height: 100%;

  background-image: ${(props) => handleColorType(props.type)};

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div<{ color?: string }>`
  width: 100%;
  height: 30%;

  background-color: ${(props) => props.color};

  display: flex;
  align-items: center;
  justify-content: space-around;

  & > div {
    width: 30%;
    height: 90%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: 15%;

  font-size: 0.75em;
  font-weight: 700;
  color: gray;
`;

export default Area;
