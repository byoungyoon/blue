import React from 'react';
import PlayerForm from './PlayerForm';
import AreaDetailForm from './AreaDetailForm';
import { CustomDialog } from '../common/Dialog';
import DialogForm from './DialogForm';

const Fixed = () => (
  <>
    <CustomDialog title="플레이어 선택" width="sm">
      <DialogForm />
    </CustomDialog>
    <PlayerForm />
    <AreaDetailForm />
  </>
);

export default Fixed;
