import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { Grid, Chip } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { SeverityPill } from '../severity-pill';
import { DataGrid } from '@mui/x-data-grid';
import MessageIcon from '@mui/icons-material/Message';
import React, { useState } from 'react';

const columns = [
  {
    field: 'like',
    headerName: 'Like',
    type: 'number',
    width: 100,
  },
  {
    field: 'tag',
    headerName: 'Tag',
    width: 100,
    editable: false,
    renderCell: (CellParams) => {
      if(CellParams.value == "1")
      {
        return <Chip label= "희망찬" color="success" />
      }
      else if (CellParams.value == "2")
      {
        return <Chip label= "재밌음" color="primary" />
      }
      else if (CellParams.value == "3")
      {
        return <Chip label= "불안함" color="warning" />
      }
      else (CellParams.value == "4")
      {
        return <Chip label= "화가남" color="error" />
      }
  
    },
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 120,
    sortable: false,
    editable: false,
  },
  {
    field: 'content',
    headerName: 'Comment',
    width: 700,
    sortable: false,
    editable: false,
  }
];

const comments = [
  {
    id: uuid(),
    like: 35152,
    name: 'BTS BEING BTS',
    content: 'Fake Love to 1B!',
    tag: "1"
  },
  {
    id: uuid(),
    like: 1242151,
    name: 'Ekaterina Tankova',
    content: '댓글 내용',
    tag: "2"
  },
  {
    id: uuid(),
    like: 10,
    name: 'Ekaterina Tankova',
    content: '댓글 내용',
    tag: "3"
  },
  {
    id: uuid(),
    like: 10,
    name: 'Ekaterina Tankova',
    content: '댓글 내용',
    tag: "4"
  },
  {
    id: uuid(),
    like: 10,
    name: 'Ekaterina Tankova',
    content: '댓글 내용',
    tag: "1"
  },
  {
    id: uuid(),
    like: 10,
    name: 'Ekaterina Tankova',
    content: '댓글 내용',
    tag: "1"
  }
];



export const Comments = (props) => {

  const [sortModel, setSortModel] = useState([{ field: "like", sort: "desc" }]);

  function onClick(header,event,details)
  {
    if (header.field == "like")
    {
      if (sortModel[0].sort == "desc")
      {
        setSortModel([{ field: "like", sort: "asc" }])
      }
      else
      {
        setSortModel([{ field: "like", sort: "desc" }])
      }
    }
    
  }

  return (
  <Card {...props}>
    <CardHeader title={<Grid container direction="row" alignItems="center"> <MessageIcon />&nbsp;&nbsp;주요 댓글</Grid>} />

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.CommentContent}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        sortModel={sortModel}
        onColumnHeaderClick={onClick}
      />
    </div>

  </Card>
)};