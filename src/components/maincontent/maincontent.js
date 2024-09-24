import React from 'react';
import { Box, Button, TextField, InputAdornment } from '@mui/material';
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
import '../maincontent/maincontent.css';
import Chart from '../maincontent/charts.js/sparklinechart';
import Coverschart from'../maincontent/charts.js/Coverschart';
import Eventchart from '../maincontent/charts.js/Eventchart';
import Sessionschart from'../maincontent/charts.js/Sessionschart';
import Pagechart from '../maincontent/charts.js/Pagechart';

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
const MainContent = () => {
    return (
        <Box component="main" sx={{ flexGrow: 1, mx: 3 }}>
            {/* headertop */}
            <Box sx={{ pt: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* header left */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <span>Dashboard</span>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <NavigateNextIcon sx={{ fontSize: 20, color: "var(--anylitics-text)" }}></NavigateNextIcon>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>Home</Box>
                </Box>
                {/* header right */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
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
                            sx={{ width: '25ch', '& .MuiOutlinedInput-root': { color: "var(--anylitics-text)", borderRadius: '10px', paddingLeft: '8px', }, '& .MuiInputBase-input': { padding: '5px 8px', }, }} />
                    </Box>
                    {/*  calender*/}
                    <Box>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DesktopDatePicker']} sx={{ pt: '0px' }}>
                                <DemoItem sx={{ p: '0px' }}>
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
                                                marginRight: '1px'           // Remove the padding
                                            }
                                        }}
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                    {/* notificatiion icon */}
                    <Box sx={{ border: '1px solid hsla(220, 20%, 80%, 0.4)', borderRadius: 1.3, p: 0.9, display: 'flex', alignItems: 'center' }}>
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
                    <Box sx={{ border: '1px solid hsla(220, 20%, 80%, 0.4)', borderRadius: 1.3, p: 0.9, display: 'flex', alignItems: 'center' }}>
                        <WbSunnyIcon sx={{ fontSize: 16, color: "var(--anylitics-text)", padding: 0 }} />
                    </Box>




                </Box>

            </Box>
            {/* main content */}
            <Box mt={2}>
                <Box sx={{ fontSize: '18px', fontWeight: 500, mb: 2 }}>Overview</Box>
                <Box sx={{ flexGrow: 1, }}>
                    <Grid container spacing={2} m="0px" width="auto">
                        {/* grid item 1 */}
                        <Grid item xs={12} md={3} sx={{ pl: '0px !important', pt: '0px !important' }}>
                            <Box sx={{ boxShadow: 'none !important', border: '1px solid var(--header-border)', borderRadius: 2, p: '16px' }}>
                                <Box>
                                    <Box sx={{ textAlign: 'left !important', fontWeight: 500, lineHeight: 1.57, mb: '0.25em', color: "var(--anylitics-text)" }}>
                                        <span>Users</span>
                                    </Box>
                                    <Box>
                                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                            <Box sx={{ textAlign: 'left !important', fontWeight: 500, lineHeight: 1.5, color: 'black' }}>
                                                <Box sx={{ fontSize: '1.5rem' }}>14k</Box>
                                            </Box>
                                            <Box sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--percentage-color)', px: 1, border: '1px solid var(--percent-border)', borderRadius: 2, backgroundColor: 'var(--percent-bg)' }}>
                                                <span>+25%</span>
                                            </Box>
                                        </Box>
                                        <Box sx={{ fontSize: '0.75rem', textAlign: 'left !important', lineHeight: 1.66 }}>
                                            <span>Last 30 days</span>
                                        </Box>
                                        <Box>

                                        <Chart />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        {/* grid item 2  */}
                        <Grid item xs={12} md={3} sx={{ pt: '0px !important' }}>
                            <Box sx={{ boxShadow: 'none !important', border: '1px solid var(--header-border)', borderRadius: 2, p: '16px' }}>
                                <Box>
                                    <Box sx={{ textAlign: 'left !important', fontWeight: 500, lineHeight: 1.57, mb: '0.25em', color: "var(--anylitics-text)" }}>
                                        <span>Conversions</span>
                                    </Box>
                                    <Box>
                                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                            <Box sx={{ textAlign: 'left !important', fontWeight: 500, lineHeight: 1.5, color: 'black' }}>
                                                <Box sx={{ fontSize: '1.5rem' }}>325</Box>
                                            </Box>
                                            <Box sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'hsl(0, 90%, 40%)', px: 1, border: '1px solid var(--percent-redborder)', borderRadius: 2, backgroundColor: 'var(--percent-redbg)' }}>
                                                <span>-25%</span>
                                            </Box>
                                        </Box>
                                        <Box sx={{ fontSize: '0.75rem', textAlign: 'left !important', lineHeight: 1.66 }}>
                                            <span>Last 30 days</span>
                                        </Box>
                                        <Box>
                                        <Coverschart />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        {/* grid item 3 */}
                        <Grid item xs={12} md={3} sx={{ pt: '0px !important' }}>
                            <Box sx={{ boxShadow: 'none !important', border: '1px solid var(--header-border)', borderRadius: 2, p: '16px' }}>
                                <Box>
                                    <Box sx={{ textAlign: 'left !important', fontWeight: 500, lineHeight: 1.57, mb: '0.25em', color: "var(--anylitics-text)" }}>
                                        <span>Event Count</span>
                                    </Box>
                                    <Box>
                                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                            <Box sx={{ textAlign: 'left !important', fontWeight: 500, lineHeight: 1.5, color: 'black' }}>
                                                <Box sx={{ fontSize: '1.5rem' }}>200k</Box>
                                            </Box>
                                            <Box sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'hsl(220, 20%, 42%)', px: 1, border: '1px solid var(--percent-grayborder)', borderRadius: 2, backgroundColor: 'var(--percent-graybg)' }}>
                                                <span>+5%</span>
                                            </Box>
                                        </Box>
                                        <Box sx={{ fontSize: '0.75rem', textAlign: 'left !important', lineHeight: 1.66 }}>
                                            <span>Last 30 days</span>
                                        </Box>
                                        <Box>
                                       <Eventchart />
                                           
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        {/* grid item 4 */}
                        <Grid item xs={12} md={3} sx={{ pt: '0px !important' }}>
                            <Box sx={{ boxShadow: 'none !important', border: '1px solid var(--header-border)', borderRadius: 2, p: '16px', backgroundColor: 'var(--percent-insightsbg)' }}>
                                <div>
                                    <InsightsIcon sx={{}} />
                                    <Box sx={{ mb: '0.35em', fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.57 }}>Explore your data</Box>
                                    <Box sx={{ mb: 1, color: "var( --discount-text)" }}>Uncover performance and visitor insights with our data wizardry.</Box>
                                    <Button variant="contained" sx={{ backgroundColor: "var(--diascount-button)", borderRadius: 2, textTransform: 'none' }}>
                                        Get the discount
                                        <span><ChevronRightIcon sx={{ display: 'flex', alignItems: 'center', fontSize: 18, ml: 1 }}></ChevronRightIcon></span>
                                    </Button>
                                </div>
                            </Box>
                        </Grid>
                        {/* grid item 5 */}
                        <Grid item xs={12} md={6} sx={{ pl: '0px !important' }}>
                            <Box sx={{ boxShadow: 'none !important', border: '1px solid var(--header-border)', borderRadius: 2, p: '16px' }}>
                                <Box>
                                    <Box sx={{ textAlign: 'left !important', fontWeight: 500, fontSize:'0.875rem',lineHeight: 1.57, mb: '0.25em', color: "black" }}>
                                        <Box>Sessions</Box>
                                    </Box>
                                    <Box>
                                        <Box display={'flex'} alignItems={'center'} gap={2}>
                                            <Box sx={{ textAlign: 'left !important', fontWeight: 500, lineHeight: 1.5, color: 'black' }}>
                                                <Box sx={{ fontSize: '1.5rem' }}>13,277</Box>
                                            </Box>
                                            <Box sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--percentage-color)', px: 1, border: '1px solid var(--percent-border)', borderRadius: 2, backgroundColor: 'var(--percent-bg)' }}>
                                                <span>+25%</span>
                                            </Box>
                                        </Box>
                                        <Box sx={{ fontSize: '0.75rem', textAlign: 'left !important', lineHeight: 1.66 }}>
                                            <span>Sessions per day for the last 30 days</span>

                                        </Box>
                                        <Box>
                                <Sessionschart />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ }}>
                            <Box sx={{ boxShadow: 'none !important', border: '1px solid var(--header-border)', borderRadius: 2, p: '16px' }}>
                                <Box>
                                    <Box sx={{ textAlign: 'left !important', fontWeight: 500, lineHeight: 1.57, mb: '0.25em', color: "black" }}>
                                        <span>Page views and downloads</span>
                                    </Box>
                                    <Box>
                                        <Box display={'flex'} alignItems={'center'} gap={2}>
                                            <Box sx={{ textAlign: 'left !important', fontWeight: 500, lineHeight: 1.5, color: 'black' }}>
                                                <Box sx={{ fontSize: '1.5rem' }}>1.3M</Box>
                                            </Box>
                                            <Box sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'hsl(0, 90%, 40%)', px: 1, border: '1px solid var(--percent-redborder)', borderRadius: 2, backgroundColor: 'var(--percent-redbg)' }}>
                                                <span>-8%</span>
                                            </Box>
                                        </Box>
                                        <Box sx={{ fontSize: '0.75rem', textAlign: 'left !important', lineHeight: 1.66 }}>
                                            <span>Page views and downloads for the last 6 months</span>

                                        </Box>
                                        <Box>
                                <Pagechart />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </Box>
    );
};


export default MainContent;