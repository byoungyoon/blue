import styled from 'styled-components';

export const Container = styled.div`
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

export const Box = styled.div`
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
    align-items: center;
    justify-content: space-around;
  }
`;
