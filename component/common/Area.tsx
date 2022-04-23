import styled from 'styled-components';
import { AreaDetailType } from '../../types/Area.type';
import KeyIcon from '@mui/icons-material/Key';
import { AreaTypeConstants } from '../../constants/Area.constants';
import { yellow } from '@mui/material/colors';

interface AreaProps {
  AreaData: AreaDetailType;
}

const Area = ({ AreaData }: AreaProps) => {
  const onNameBr = () => {};

  return (
    <Container type={AreaData.type}>
      <Header></Header>
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

const Header = styled.div`
  width: 100%;
  height: 30%;

  /* border-bottom: 1px solid white; */
`;

const Title = styled.div`
  position: absolute;
  bottom: 15%;

  font-size: 0.75em;
  font-weight: 700;
  color: gray;
`;

export default Area;
