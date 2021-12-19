import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import ReactPlayer from 'react-player'

export const YoutubePlayer = (props) => (
  <Card {...props}>
    <CardContent>
    <ReactPlayer url={props.url} playing controls/>
    </CardContent>
  </Card>
);
