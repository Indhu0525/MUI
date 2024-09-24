import React from 'react';
import logo from "../sidebar/assets/logo.jpg";
import { Drawer, Box, Divider, Typography, Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../sidebar/sidebar.css';

const drawerWidth = 240;

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


        </Box>
    );
};

export default Sidebar;