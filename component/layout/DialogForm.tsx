import * as yup from 'yup';
import { useFormik } from 'formik';
import { ErrorMessageConstants } from '../../constants/ErrorMessage.constants';
import { CustomRegex } from '../../util/common/Regex.util';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const DialogForm = () => {
  const validationSchema = yup.object({
    player1: yup
      .string()
      .required(ErrorMessageConstants.PLAYER_REQUIRED)
      .max(20, ErrorMessageConstants.PLAYER_VALID_FAILURE)
      .test('', ErrorMessageConstants.PLAYER_VALID_FAILURE, (value) => CustomRegex(value, 1)),
    player2: yup
      .string()
      .max(20, ErrorMessageConstants.PLAYER_VALID_FAILURE)
      .test('', ErrorMessageConstants.PLAYER_VALID_FAILURE, (value) => CustomRegex(value, 1)),
    player3: yup
      .string()
      .max(20, ErrorMessageConstants.PLAYER_VALID_FAILURE)
      .test('', ErrorMessageConstants.PLAYER_VALID_FAILURE, (value) => CustomRegex(value, 1)),
    player4: yup
      .string()
      .max(20, ErrorMessageConstants.PLAYER_VALID_FAILURE)
      .test('', ErrorMessageConstants.PLAYER_VALID_FAILURE, (value) => CustomRegex(value, 1)),
  });

  const formik = useFormik({
    initialValues: {
      player1: '',
      player2: '',
      player3: '',
      player4: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Item>
          <AccessibilityIcon className="icons" fontSize="large" />
          <TextField
            fullWidth
            id="player1"
            name="player1"
            label="플레이어 1"
            type="text"
            value={formik.values.player1}
            onChange={formik.handleChange}
            error={formik.touched.player1 && Boolean(formik.errors.player1)}
            helperText={formik.touched.player1 && formik.errors.player1}
            margin="normal"
          />
        </Item>
        <Item>
          <AccessibilityIcon className="icons" fontSize="large" />
          <TextField
            fullWidth
            id="player2"
            name="player2"
            label="플레이어 2"
            type="text"
            value={formik.values.player2}
            onChange={formik.handleChange}
            error={formik.touched.player2 && Boolean(formik.errors.player2)}
            helperText={formik.touched.player2 && formik.errors.player2}
            margin="normal"
          />
        </Item>
        <Item>
          <AccessibilityIcon className="icons" fontSize="large" />
          <TextField
            fullWidth
            id="player3"
            name="player3"
            label="플레이어 3"
            type="text"
            value={formik.values.player3}
            onChange={formik.handleChange}
            error={formik.touched.player3 && Boolean(formik.errors.player3)}
            helperText={formik.touched.player3 && formik.errors.player3}
            margin="normal"
          />
        </Item>
        <Item>
          <AccessibilityIcon className="icons" fontSize="large" />
          <TextField
            fullWidth
            id="player4"
            name="player4"
            label="플레이어 4"
            type="text"
            value={formik.values.player4}
            onChange={formik.handleChange}
            error={formik.touched.player4 && Boolean(formik.errors.player4)}
            helperText={formik.touched.player4 && formik.errors.player4}
            margin="normal"
          />
        </Item>
        <ButtonFrame>
          <Button id="button" variant="contained" fullWidth type="submit">
            시작
          </Button>
        </ButtonFrame>
      </form>
    </>
  );
};

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & .icons {
    width: 13%;
  }
`;

const ButtonFrame = styled.div`
  margin-top: 40px;

  & #button {
    background-color: #4d4d4d;
  }
`;

export default DialogForm;
