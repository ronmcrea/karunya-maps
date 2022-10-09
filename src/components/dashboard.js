import './dashboard.css';
import { LinearProgress } from '@mui/material';
function dashboard() {
    return (
        <div className="main-container">
            <div className="container-1">
                <h1 className="Heading">KARUNYA NOW</h1>
            </div>
            <div className='container-2'>
                <div className='container-2-1'>
                    <div className='container-2-1-1'>
                        <LinearProgress variant="determinate" sx={{transform: "rotate(-90deg)",width: 100}} value={40} />
                    </div>
                    <div className='container-2-1-2'>
                        <LinearProgress variant="determinate" sx={{transform: "rotate(-90deg)",width: 100}} value={40} />
                    </div>
                    <div className='container-2-1-3'>
                        <LinearProgress variant="determinate" sx={{transform: "rotate(-90deg)",width: 100}} value={40} />
                    </div>
                </div>
                <div className='container-2-2'>
                    <div className='container-2-2-1'>
                        <LinearProgress variant="determinate" sx={{width: 200}} value={40} />
                    </div>
                    <div className='container-2-2-2'>
                        <LinearProgress variant="determinate" sx={{width: 200}} value={40} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default dashboard;

{/* <Box display='flex' justifyContent='center' alignItems='center'>
                        <CircularProgress size={120} />
                        <Typography position='absolute' color={'white'}>{99}%</Typography>
                    </Box> */}