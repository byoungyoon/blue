import styled from 'styled-components';
import { AreaConstants, AreaNameConstants } from '../../constants/Area.constants';
import Area from '../common/Area';
import AreaSpc from '../common/AreaSpc';

const AreaForm = () => {
  const onDefault = () => {
    return Object.keys(AreaConstants).map((key) => (
      <div key={key} className={`area_${key}`}>
        {Object.keys(AreaConstants[key]).map((key2, index) => (
          <div key={index} className="solid">
            <Area AreaData={AreaConstants[key][key2]} />
          </div>
        ))}
      </div>
    ));
  };

  return (
    <>
      <Container>{onDefault()}</Container>
      <TopLeft>
        <AreaSpc name={AreaNameConstants.SOCIAL_WELFARE} />
      </TopLeft>
      <TopRight>
        <AreaSpc name={AreaNameConstants.SPACE_TRAVEL} />
      </TopRight>
      <BottomLeft>
        <AreaSpc name={AreaNameConstants.UNINHABITED_ISLAND} />
      </BottomLeft>
      <BottomRight>
        <AreaSpc name={AreaNameConstants.START} />
      </BottomRight>
    </>
  );
};

const Edit = styled.div`
  width: 14.8%;
  height: 14.8%;

  position: absolute;
`;

const TopLeft = styled(Edit)`
  top: 0;
  left: 0;

  transform: rotate(90deg) translateY(-100%);
  transform-origin: 0% 0%;
`;

const TopRight = styled(Edit)`
  top: 0;
  right: 0;

  transform: rotate(180deg);
`;

const BottomLeft = styled(Edit)`
  bottom: 0;
  left: 0;
`;

const BottomRight = styled(Edit)`
  bottom: 0;
  right: 0;

  transform: rotate(-90deg) translateY(-100%);
  transform-origin: 100% 0%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  & > div {
    position: absolute;
    display: flex;
    justify-content: space-around;

    width: 70%;
    height: 15%;

    & .solid {
      width: calc(95.5% / 9);
      height: 100%;
    }
  }

  & .area_top {
    flex-direction: row-reverse;

    top: 0;
    left: 15%;

    transform: rotate(180deg);
  }

  & .area_bottom {
    flex-direction: row-reverse;

    left: 15%;
    bottom: 0;

    width: 70%;
    height: 15%;
  }

  & .area_left {
    flex-direction: row-reverse;

    top: 15%;
    left: 0;

    transform: rotate(90deg) translateY(-100%);
    transform-origin: 0% 0%;
  }

  & .area_right {
    flex-direction: row-reverse;

    top: 15%;
    right: 0;

    transform: rotate(-90deg) translateY(-100%);
    transform-origin: 100% 0%;
  }
`;

export default AreaForm;
