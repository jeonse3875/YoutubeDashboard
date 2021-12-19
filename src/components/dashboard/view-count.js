import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const ViewCount = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>

      <Grid
        container
        spacing={3.5}
      >
        <Grid item xl={12} lg={12} sm={12} xs={12}>
          <Typography
            color="textPrimary"
            variant="h4"
            noWrap
          >
            {props.Title}
          </Typography>
        </Grid>

        <Grid item xl={3} lg={3} sm={3} xs={3}>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <PlayArrowIcon />
          </Avatar>
        </Grid>
        
        <Grid item xl={9} lg={9} sm={9} xs={9}>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            조회수
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {numberWithCommas(props.View)}
          </Typography>
        </Grid>

        <Grid item xl={3} lg={3} sm={3} xs={3}>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <ThumbUpIcon />
          </Avatar>
        </Grid>
        
        <Grid item xl={9} lg={9} sm={9} xs={9}>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            좋아요
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {numberWithCommas(props.Like)}
          </Typography>
        </Grid>

        <Grid item xl={3} lg={3} sm={3} xs={3}>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <InsertCommentIcon />
          </Avatar>
        </Grid>
        
        <Grid item xl={9} lg={9} sm={9} xs={9}>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            댓글
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {numberWithCommas(props.Comment)}
          </Typography>
        </Grid>

        
        
      </Grid>

      
      
    </CardContent>
  </Card>
);
