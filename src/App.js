import React from 'react';
import logo from "./assets/images/logo.jpg";
import { Drawer, Box, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Button,TextField, InputAdornment } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InsightsIcon from '@mui/icons-material/Insights';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './App.css';
import ApexCharts from 'react-apexcharts';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const drawerWidth = 240;


// Apex chart data
const UsersCard = () => {
  const chartData = {
    series: [{
      name: 'Users Growth',
      data: [200,24,220,260,240,380,100,240,280,240,300,340,320,360,340,380,360,400,380,420,400,640,340,460,440,480,460,800,880,920] // Sample data points
    }],
    options: {
      chart: {
        type: 'area',
        height: 50, // Adjust as per the card height
        sparkline: {
          enabled: true // Removes extra axis and gridlines
        }
      },
      stroke: {
        curve: 'smooth', // Smooths the line
        width: 2
      },
      fill: {
        type: "gradient",
      
      },
      colors: ['#4caf50'], // Line color
      tooltip: {
        enabled: true // Hides the tooltip for a minimalist design
      },
  
    }
  };


  return (
    <div>
      <ApexCharts
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={50} // Adjust as needed
      />
    </div>
  );
};


const Sidebar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar Drawer */}
      <Drawer
        backgroundColor="var(--bg-sidebar)"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* Sidebar Header */}
        <Box backgroundColor="var(--bg-sidebar)">
          <Box sx={{ display: 'flex', padding: 1, justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid  hsla(220, 20%, 80%, 0.4)', borderRadius: 2, px: 1.5, my: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 1, pr: 2 }}>
                {/* Icon */}
                <Box sx={{ display: 'flex', border: '1px solid  hsla(220, 20%, 80%, 0.4)', borderRadius: 5, p: 0.7, mr: 1.5 }}>
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M4 7c0-.55.45-1 1-1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v11h-.5c-.83 0-1.5.67-1.5 1.5S.67 20 1.5 20H14v-3H4zm19 1h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z" stroke="#bababa" strokeWidth="1.5">
                    </path>
                  </svg>
                </Box>
                {/* Text */}
                <Box sx={{ my: 0.8 }}>
                  <Box sx={{ fontWeight: 500, lineHeight: 1.43 }}>
                    <Typography variant="">Sitemark-web</Typography>
                  </Box>
                  <Box sx={{ fontSize: 12, lineHeight: 1.66 }}>
                    <Typography variant="" color="">Web app</Typography>
                  </Box>
                </Box>
              </Box>
              {/* Dropdown Icon */}
              <Box sx={{ display: 'flex', ml: 0.9 }}>
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" width="16px" height="16px" viewBox="0 0 24 24">
                  <path d="m12 5.83 2.46 2.46c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12.7 3.7a.996.996 0 0 0-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0zm0 12.34-2.46-2.46a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0z">
                  </path>
                </svg>
              </Box>
            </Box>
          </Box>
          <Divider />
        </Box>

        {/* sidebar top */}
        <Box backgroundColor="var(--bg-sidebar)" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

          <Box sx={{ p: 1 }}>
            <Box sx={{ px: 1, pt: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', py: 0.3, px: 1, gap: '8px', backgroundColor: 'var(--home-bg)', borderRadius: 2, fontWeight: 500 }}>
                <Box sx={{ display: 'flex' }}>
                  <HomeIcon sx={{ fontSize: 15 }}></HomeIcon>
                </Box>
                <Box sx={{ my: 0.5 }}>
                  <span>Home</span>
                </Box>
              </Box>
            </Box>
            <Box sx={{ px: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', py: 0.3, px: 1, gap: '8px', borderRadius: 2, fontWeight: 500, '&:hover': { backgroundColor: 'var(--home-bg)' } }}>
                <Box sx={{ display: 'flex' }}>
                  <InsertChartIcon sx={{ fontSize: 15, color: "var(--anylitics-text)" }}></InsertChartIcon>
                </Box>
                <Box sx={{ my: 0.5, color: "var(--anylitics-text)" }}>
                  <span>Analytics</span>
                </Box>
              </Box>
            </Box>
            <Box sx={{ px: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', py: 0.3, px: 1, gap: '8px', borderRadius: 2, fontWeight: 500, '&:hover': { backgroundColor: 'var(--home-bg)' } }}>
                <Box sx={{ display: 'flex' }}>
                  <PeopleIcon sx={{ fontSize: 15, color: "var(--anylitics-text)" }}></PeopleIcon>
                </Box>
                <Box sx={{ my: 0.5, color: "var(--anylitics-text)" }}>
                  <span>Clients</span>
                </Box>
              </Box>
            </Box>
            <Box sx={{ px: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', py: 0.3, px: 1, gap: '8px', borderRadius: 2, fontWeight: 500, '&:hover': { backgroundColor: 'var(--home-bg)' } }}>
                <Box sx={{ display: 'flex' }}>
                  <AssignmentIcon sx={{ fontSize: 15, color: "var(--anylitics-text)" }}></AssignmentIcon>
                </Box>
                <Box sx={{ my: 0.5, color: "var(--anylitics-text)" }}>
                  <span>Tasks</span>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Block */}
        <Box backgroundColor="var(--bg-sidebar)" sx={{ p: 1 }}>
          <Box sx={{ px: 1, pt: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', py: 0.3, px: 1, gap: '8px', backgroundColor: 'var(--home-bg)', borderRadius: 2, fontWeight: 500 }}>
              <Box sx={{ display: 'flex' }}>
                <SettingsIcon sx={{ fontSize: 15, color: "var(--anylitics-text)" }}></SettingsIcon>
              </Box>
              <Box sx={{ my: 0.5 }}>
                <span>Settings</span>
              </Box>
            </Box>
          </Box>
          <Box sx={{ px: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', py: 0.3, px: 1, gap: '8px', borderRadius: 2, fontWeight: 500, '&:hover': { backgroundColor: 'var(--home-bg)' } }}>
              <Box sx={{ display: 'flex' }}>
                <InfoIcon sx={{ fontSize: 15, color: "var(--anylitics-text)" }}></InfoIcon>
              </Box>
              <Box sx={{ my: 0.5, color: "var(--anylitics-text)" }}>
                <span>About</span>
              </Box>
            </Box>
          </Box>
          <Box sx={{ px: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', py: 0.3, px: 1, gap: '8px', borderRadius: 2, fontWeight: 500, '&:hover': { backgroundColor: 'var(--home-bg)' } }}>
              <Box sx={{ display: 'flex' }}>
                <FeedbackIcon sx={{ fontSize: 15, color: "var(--anylitics-text)" }}></FeedbackIcon>
              </Box>
              <Box sx={{ my: 0.5, color: "var(--anylitics-text)" }}>
                <span>Feedback</span>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Discount Block */}
        <Box backgroundColor="var(--bg-sidebar)" sx={{ p: 1, m: 1, border: '1px solid hsla(220, 20%, 80%, 0.4)', borderRadius: 2, backgroundColor: "var( --discount-bg)" }}>
          <div>
            <AutoAwesomeIcon sx={{ fontSize: 15 }} />
            <Box sx={{ mb: 0.7, fontWeight: 600 }}>Plan about to expire</Box>
            <Box sx={{ mb: 2, color: "var( --discount-text)" }}>Enjoy 10% off when renewing your plan today.</Box>
            <Button variant="contained" sx={{ backgroundColor: "var(--diascount-button)", width: '100%', borderRadius: 2, textTransform: 'none' }}>
              Get the discount
            </Button>
          </div>
        </Box>

        <Divider />

        {/* Mail Block */}
        <Box backgroundColor="var(--bg-sidebar)" sx={{ p: 1.5, display: 'flex', alignItems: 'center' }}>
          <Box marginRight='8px' display='flex' alignItems='center'>
            <img src={logo} alt="Logo" style={{ width: 38, height: 'auto', borderRadius: 50 }} />
          </Box>
          <Box sx={{ marginRight: 'auto' }}>
            <Box sx={{ m: 0, fontWeight: 600 }}>Riley Carter</Box>
            <Box sx={{ fontSize: 12 }}>riley@email.com</Box>
          </Box>
          <MoreVertIcon sx={{ fontSize: 17 }} />
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main"sx={{flexGrow: 1,mx: 3}}>
       {/* headertop */}
        <Box sx={{pt:1.5,display:'flex',justifyContent:'space-between',alignItems:'center'}}> 
          {/* header left */}
        <Box sx={{display:'flex',alignItems:'center'}}>
        <span>Dashboard</span>
        <Box sx={{display:'flex',alignItems:'center'}}>
          <NavigateNextIcon sx={{ fontSize: 20, color: "var(--anylitics-text)" }}></NavigateNextIcon>
        </Box>
        <Box sx={{display:'flex',alignItems:'center'}}>Home</Box>
        </Box>
        {/* header right */}
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:1}}>
          {/* search box */}
        <Box>
        <TextField
      variant="outlined"
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ padding: 0, marginRight: 0, }}>
            <SearchIcon sx={{ fontSize: 20, color: "var(--anylitics-text)", padding: 0 }} />
          </InputAdornment>
        ),
      }}
      sx={{ width: '25ch','& .MuiOutlinedInput-root': {color: "var(--anylitics-text)", borderRadius: '10px', paddingLeft:'8px',   }, '& .MuiInputBase-input': {padding: '5px 8px',  }, }} />
        </Box>
        {/*  calender*/}
  <Box>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DesktopDatePicker']} sx={{pt:'0px'}}>
      <DemoItem sx={{p:'0px'}}>
        <DesktopDatePicker
          defaultValue={dayjs('2022-04-17')}
          sx={{
            overflow: 'hidden',
            '& .MuiOutlinedInput-root': {
              padding: '5px 8px', 
              borderRadius: '10px', 
            },
            '& .MuiInputBase-input': {
              padding: '0px', 
              paddingTop: '0px',
            },
            '& .MuiIconButton-root': {  // Target the icon button
              padding: '0px', 
              marginRight:'1px'           // Remove the padding
            }
          }}
        />
      </DemoItem>
    </DemoContainer>
  </LocalizationProvider>
</Box>
{/* notificatiion icon */}
<Box sx={{ border: '1px solid hsla(220, 20%, 80%, 0.4)', borderRadius: 1.3, p: 0.9,display:'flex',alignItems:'center' }}>
  <Badge
    color="secondary"
    variant="dot"
    sx={{
      '& .MuiBadge-badge': {
        top: '-6px',   
        right: '-4px',  
      },
    }}
  >
    <NotificationsIcon sx={{ fontSize: 16, color: "var(--anylitics-text)", padding: 0 }} />
  </Badge>
</Box>
{/* icon */}
<Box sx={{ border: '1px solid hsla(220, 20%, 80%, 0.4)', borderRadius: 1.3, p: 0.9,display:'flex',alignItems:'center' }}>
    <WbSunnyIcon sx={{ fontSize: 16, color: "var(--anylitics-text)", padding: 0 }} />
</Box>


    
       {/* <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DesktopDatePicker']} sx={{ p: '0px' }}>
          <DemoItem>
            <DesktopDatePicker 
              defaultValue={dayjs('2022-04-17')}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarTodayIcon sx={{ fontSize: 16 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    width: '100%', // Set width if needed
                    '& .MuiOutlinedInput-root': {
                      padding: '0px', // Remove outer padding
                      borderRadius: '10px',
                    },
                    '& .MuiInputBase-input': {
                      padding: '0px', // Remove inner padding
                      '&:focus': {
                        padding: '0px', // Ensure padding stays removed on focus
                      },
                    },
                    '& .MuiOutlinedInput-input': {
                      padding: '0px', // Ensure padding stays removed for outlined input
                    },
                    '& .MuiInputBase-inputAdornedStart': {
                      paddingLeft: '0px', // Remove left padding if adorned
                    },
                    '& .MuiInputBase-inputAdornedEnd': {
                      paddingRight: '0px', // Remove right padding if adorned
                    },
                  }}
                />
              )}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </Box> */}
        </Box>
      
        </Box>
   {/* main content */}
   <Box mt={2}>
    <Box sx={{fontSize:'18px',fontWeight:500,mb:2}}>Overview</Box>
    <Box sx={{ flexGrow: 1,}}>
    <Grid container spacing={2} m="0px" width="auto">
      {/* grid item 1 */}
    <Grid item xs={12} md={3} sx={{pl: '0px !important', pt: '0px !important'}}>
      <Box sx={{boxShadow: 'none !important', border: '1px solid var(--header-border)', borderRadius: 2, p: '16px'}}>
        <Box>
          <Box sx={{textAlign: 'left !important', fontWeight: 500, lineHeight: 1.57, mb: '0.25em', color: "var(--anylitics-text)"}}>
            <span>Users</span>
          </Box>
          <Box>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Box sx={{textAlign: 'left !important', fontWeight: 500, lineHeight: 1.5, color: 'black'}}>
                <Box sx={{fontSize: '1.5rem'}}>14k</Box>
              </Box>
              <Box sx={{fontSize: '0.75rem', fontWeight: 600, color: 'var(--percentage-color)', px: 1, border: '1px solid var(--percent-border)', borderRadius: 2, backgroundColor: 'var(--percent-bg)'}}>
                <span>+25%</span>
              </Box>
            </Box>
            <Box sx={{fontSize: '0.75rem', textAlign: 'left !important', lineHeight: 1.66}}>
              <span>Last 30 days</span>
            </Box>
          <Box>
             
          <UsersCard />
            </Box> 
          </Box>
        </Box>
      </Box>
    </Grid>
    {/* grid item 2  */}
  <Grid item xs={12} md={3} sx={{pt:'0px !important'}}>
  <Box sx={{boxShadow: 'none !important', border: '1px solid var(--header-border)', borderRadius: 2, p: '16px'}}>
        <Box>
          <Box sx={{textAlign: 'left !important', fontWeight: 500, lineHeight: 1.57, mb: '0.25em', color: "var(--anylitics-text)"}}>
            <span>Conversions</span>
          </Box>
          <Box>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Box sx={{textAlign: 'left !important', fontWeight: 500, lineHeight: 1.5, color: 'black'}}>
                <Box sx={{fontSize: '1.5rem'}}>325</Box>
              </Box>
              <Box sx={{fontSize: '0.75rem', fontWeight: 600, color: 'hsl(0, 90%, 40%)', px: 1, border: '1px solid var(--percent-redborder)', borderRadius: 2, backgroundColor: 'var(--percent-redbg)'}}>
                <span>-25%</span>
              </Box>
            </Box>
            <Box sx={{fontSize: '0.75rem', textAlign: 'left !important', lineHeight: 1.66}}>
              <span>Last 30 days</span>
            </Box>
          <Box>
             
          <UsersCard />
            </Box> 
          </Box>
        </Box>
      </Box>
  </Grid>
  {/* grid item 3 */}
  <Grid item xs={12} md={3}  sx={{pt:'0px !important'}}>
  <Box sx={{boxShadow: 'none !important', border: '1px solid var(--header-border)', borderRadius: 2, p: '16px'}}>
        <Box>
          <Box sx={{textAlign: 'left !important', fontWeight: 500, lineHeight: 1.57, mb: '0.25em', color: "var(--anylitics-text)"}}>
            <span>Event Count</span>
          </Box>
          <Box>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Box sx={{textAlign: 'left !important', fontWeight: 500, lineHeight: 1.5, color: 'black'}}>
                <Box sx={{fontSize: '1.5rem'}}>200k</Box>
              </Box>
              <Box sx={{fontSize: '0.75rem', fontWeight: 600, color: 'hsl(220, 20%, 42%)', px: 1, border: '1px solid var(--percent-grayborder)', borderRadius: 2, backgroundColor: 'var(--percent-graybg)'}}>
                <span>+5%</span>
              </Box>
            </Box>
            <Box sx={{fontSize: '0.75rem', textAlign: 'left !important', lineHeight: 1.66}}>
              <span>Last 30 days</span>
            </Box>
          <Box>
             
          <UsersCard />
            </Box> 
          </Box>
        </Box>
      </Box>
  </Grid>
  {/* grid item 4 */}
  <Grid item xs={12} md={3}  sx={{pt:'0px !important'}}>
  <Box sx={{boxShadow: 'none !important', border: '1px solid var(--header-border)', borderRadius: 2, p: '16px',backgroundColor:'var(--percent-insightsbg)'}}>
  <div>
            <InsightsIcon sx={{ }} />
            <Box sx={{ mb:'0.35em', fontWeight: 600,fontSize:'0.875rem',lineHeight:1.57 }}>Explore your data</Box>
            <Box sx={{ mb: 1, color: "var( --discount-text)" }}>Uncover performance and visitor insights with our data wizardry.</Box>
            <Button variant="contained" sx={{ backgroundColor: "var(--diascount-button)", borderRadius: 2, textTransform: 'none' }}>
              Get the discount
              <span><ChevronRightIcon sx={{display:'flex',alignItems:'center',fontSize:18,ml:1}}></ChevronRightIcon></span>
            </Button>
          </div>   
      </Box>
  </Grid>
  {/* grid item 5 */}
  <Grid item xs={12} md={6} sx={{pl:'0px !important'}}>
  <Box sx={{boxShadow: 'none !important', border: '1px solid var(--header-border)', borderRadius: 2, p: '16px'}}>
        <Box>
          <Box sx={{textAlign: 'left !important', fontWeight: 500, lineHeight: 1.57, mb: '0.25em', color: "var(--anylitics-text)"}}>
            <span>Sessions</span>
          </Box>
          <Box>
            <Box display={'flex'} alignItems={'center'} gap={2}>
              <Box sx={{textAlign: 'left !important', fontWeight: 500, lineHeight: 1.5, color: 'black'}}>
                <Box sx={{fontSize: '1.5rem'}}>13,277</Box>
              </Box>
              <Box sx={{fontSize: '0.75rem', fontWeight: 600, color: 'var(--percentage-color)', px: 1, border: '1px solid var(--percent-border)', borderRadius: 2, backgroundColor: 'var(--percent-bg)'}}>
                <span>+25%</span>
              </Box>
            </Box>
            <Box sx={{fontSize: '0.75rem', textAlign: 'left !important', lineHeight: 1.66}}>
              <span>Sessions per day for the last 30 days</span>
         
            </Box>
          <Box>
             
       
            </Box> 
          </Box>
        </Box>
      </Box>
  </Grid>
  <Grid item xs={12} md={6}  >
    <Item sx={{boxShadow:'none !important',border: '1px solid var(--header-border)', borderRadius: 2,p:'16px'}}>xs=12 md=6</Item>
  </Grid>
</Grid>
    </Box>

   </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
