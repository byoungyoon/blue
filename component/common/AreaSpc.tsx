import styled from 'styled-components';

interface AreaSpcProps {
  name: string;
}

const AreaSpc = ({ name }: AreaSpcProps) => {
  return (
    <Container>
      <Title>{name}</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);

  position: relative;
`;

const Title = styled.div`
  width: 100%;

  position: absolute;
  bottom: 10%;

  text-align: center;
  font-size: 0.75em;
  font-weight: 700;
  color: gray;

  transform: rotate(45deg) translateX(-20%);
`;

export default AreaSpc;
