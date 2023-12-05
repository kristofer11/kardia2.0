import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import BioModal from './BioModal'
import AnimateOpacity from '@/components/animations/AnimateOpacity';

const StaffCard = ({ staff }) => {
    const { image, name, bio, title } = staff;

    return (
        <AnimateOpacity>
            <Card className='staff-card'>
                <CardContent className='card-content'>
                    <CardMedia
                        component='img'
                        height='140'
                        image={image}
                        alt={`Photo of ${title} ${name}`}
                    />
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {title}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                    {bio}
                </Typography> */}
                    <BioModal bio={bio} name={name} />
                </CardContent>
            </Card>
        </AnimateOpacity>
    );
};

export default StaffCard;