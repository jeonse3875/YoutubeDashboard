import { Doughnut } from 'react-chartjs-2';
import { Grid, Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import MoodIcon from '@mui/icons-material/Mood';

export const PieChart = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [props.GoodCount, props.BadCount],
        backgroundColor: ['#3F51B5', '#e53935'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['긍정', '부정']
  };

  const options = {
    animation: true,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const reactionCategory = [
    {
      title: '긍정',
      value: ((props.GoodCount/(props.GoodCount + props.BadCount)) * 100.0).toFixed(1),
      icon: ThumbUpOffAltIcon,
      color: '#3F51B5'
    },
    {
      title: '부정',
      value: ((props.BadCount/(props.GoodCount + props.BadCount)) * 100.0).toFixed(1),
      icon: ThumbDownOffAltIcon,
      color: '#E53935'
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title={<Grid container direction="row" alignItems="center"> <MoodIcon />&nbsp;&nbsp;영상 반응</Grid>} />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 200,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
            onElementsClick={elems => {
              console.log("ok")
          }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {reactionCategory.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h5"
              >
                &nbsp;&nbsp;
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
