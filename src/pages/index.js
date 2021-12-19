import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { ViewCount } from '../components/dashboard/view-count';
import { Comments } from '../components/dashboard/comments';
import { LatestProducts } from '../components/dashboard/latest-products';
import { KeywordChart } from '../components/dashboard/keyword-chart';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { YoutubePlayer } from '../components/dashboard/youtube-player';
import { TotalProfit } from '../components/dashboard/total-profit';
import { PieChart } from '../components/dashboard/pie-chart';
import { DashboardLayout } from '../components/dashboard-layout';
import { DashboardNavbar } from 'src/components/dashboard-navbar';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { v4 as uuid } from 'uuid';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '90%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 180
  }
}));



const Dashboard = () => {

  const [youtubeURL, setYoutubeURL] = useState("https://www.youtube.com/watch?v=7C2z4GqqS5E");
  const [BadCount, setBadCount] = useState(3);
  const [GoodCount, setGoodCount] = useState(10);
  const [Title, setTitle] = useState("BTS (방탄소년단) 'FAKE LOVE' Official MV");
  const [View, setView] = useState(1046224934);
  const [Like, setLike] = useState(18616234);
  const [Comment, setComment] = useState(4504146);
  const [CommentContent, setCommentContent] = useState([
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
    }])

  function changeURL(newVal)
  {
    setYoutubeURL(newVal)
    console.log("링크바뀜")
  }

  function getData (data)
  {
    console.log("데이터받음")
    setBadCount(Number(data.CommentInfo.BadCount))
    setGoodCount(Number(data.CommentInfo.GoodCount))
    setTitle(data.VideoInfo.Title)
    setView(data.VideoInfo.VeiwCount)
    setLike(data.VideoInfo.LikeCount)
    setComment(data.VideoInfo.CommentCount)
    var badComments = Object.values(data.CommentInfo.BadComment)
    var goodComments = Object.values(data.CommentInfo.GoodComment)
    var allComments = badComments.concat(goodComments)
    var commentDataList = []

    badComments.forEach(function (element){
      var info = new Object()
      info.id = uuid()
      info.like = element.CommentLikes
      info.tag = (Number(element.Label) + 2).toString()
      info.content = element.Comment
      info.name = element.Author
      commentDataList.push(info)
    })

    goodComments.forEach(function (element){
      var info = new Object()
      info.id = uuid()
      info.like = element.CommentLikes
      info.tag = element.Label
      info.content = element.Comment
      info.name = element.Author
      commentDataList.push(info)
    })

    setCommentContent(commentDataList)
  }



  return (
  <>
  <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
    <Head>
      <title>
        Dashboard | Material Kit
      </title>
    </Head>
    <DashboardNavbar changeLink = {changeURL} getData = {getData}></DashboardNavbar>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xl={7.35}
            lg={7.35}
            sm={12}
            xs={12}
          >
            <YoutubePlayer url={youtubeURL} />
          </Grid>

          <Grid
            item
            xl={4.65}
            lg={4.65}
            sm={3}
            xs={3}
          >
            <ViewCount Title={Title} View={View} Like={Like} Comment={Comment}/>
          </Grid>

          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <PieChart BadCount={BadCount} GoodCount={GoodCount} />
          </Grid>

          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <KeywordChart />
          </Grid>

          
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Comments CommentContent={CommentContent} />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </Box>
      </DashboardLayoutRoot>
  </>
  )
};

// Dashboard.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

export default Dashboard;