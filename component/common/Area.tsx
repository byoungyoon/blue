import styled from 'styled-components';

interface AreaProps {
  position?: string;
}

const Area = ({ position }: AreaProps) => {
  return (
    <Container>
      <Solid>
        <div className="face front">1</div>
        {/*<div className="face back">2</div>*/}
        {/*<div className="face left">3</div>*/}
        {/*<div className="face right">4</div>*/}
        {/*<div className="face top">5</div>*/}
        {/*<div className="face bottom">6</div>*/}
      </Solid>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  //transform-style: preserve-3d;
  //opacity: 0.8;
  background-color: palegreen;
  border: 1px solid darkblue;

  position: relative;
`;

const Solid = styled.div`
  & .face {
    position: absolute;
    top: 0;
    left: 0;
  }

  & .front {
    //width: 100%;
    //height: 100%;
    //
    //background-color: #222;
    //transform: perspective(300px) translateZ(50px);
  }

  & .back {
    width: 100%;
    height: 100%;

    background-color: #333;
    transform: perspective(300px) rotateY(180deg);
  }

  & .left {
    width: 20px;
    height: 100%;

    background-color: green;
    transform: perspective(300px) translateX(-50%) translateZ(50px) rotateY(80deg);
  }

  //& .right {
  //  background-color: #555;
  //  transform: perspective(300px) rotateY(90deg) translateX(500px) translateZ(10px);
  //
  //  width: 500px;
  //  height: 100%;
  //}
  //
  //& .top {
  //  background-color: skyblue;
  //  transform: perspective(300px) translateY(-50%) translateZ(10px) rotateX(90deg);
  //
  //  width: 100%;
  //  height: 20px;
  //}
  //
  //& .bottom {
  //  background-color: #777;
  //  transform: perspective(300px) translateY(50%) translateZ(10px) rotateX(90deg);
  //
  //  width: 100%;
  //  height: 20px;
  //}
`;

export default Area;
