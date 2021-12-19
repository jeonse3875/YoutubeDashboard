import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../icons/bell';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { Users as UsersIcon } from '../icons/users';
import React, { useState } from 'react';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;


const [inputText, setInputText] = useState('');

const onChange = e => setInputText(e.target.value);
const onClick = () => {
  var afterStr = inputText.split('watch?v=');
  var reqURL = "http://hacker-hci.hopto.org/" + afterStr[1]
  console.log(reqURL)
  props.changeLink(inputText)
  fetch(reqURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    props.getData(data)
  })
  setInputText('');
};
const onKeyPress = (e) => {
    if(e.key == 'Enter') {
        onClick();
    }
}

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 202
          },
          width: {
            lg: 'calc(88.8% - 202px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <TextField value={inputText} onChange={onChange} onKeyPress={onKeyPress} sx={{ flexGrow: 1, mb: 1.7, ml:1.5 }}
          autoFocus id="standard-basic"
          label="유튜브 링크" variant="standard" />
         
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
