import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { Fragment } from 'react';
import { DialogContent, DialogTitle } from '@mui/material';
import { CustomDialogProps, CustomDialogTitleProps } from '../../types/Dialog.type';
import { useSelector } from 'react-redux';
import { RootState } from '../../util/store';

const CustomDialogTitle = (props: CustomDialogTitleProps) => {
  const { children, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
    </DialogTitle>
  );
};

export const CustomDialog = (props: CustomDialogProps) => {
  const { title, children, width, ...outer } = props;

  const open = useSelector((state: RootState) => state.DialogReducer.isOpen);

  return (
    <Fragment>
      <BootstrapDialog open={open} fullWidth={true} maxWidth={width} {...outer}>
        <CustomDialogTitle id="title">{title}</CustomDialogTitle>
        <DialogContent>{children}</DialogContent>
      </BootstrapDialog>
    </Fragment>
  );
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
