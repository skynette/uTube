import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => (
	<Card sx={{
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'black'
	}}>
		<Link to={`/channel/${channelDetail?.id?.channelId}`}>
			<CardContent sx={{ flexGrow: 1 }} align='center'>
				<CardMedia
					image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
					alt={channelDetail?.snippet?.title}
					sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}

				/>
				<Typography variant='h6' color="#fff" align='center'>
					{channelDetail?.snippet?.title}
					<CheckCircle sx={{ fontSize: 14, color: '#fff', ml: '5px' }} />
				</Typography>
				{channelDetail?.statistics?.subscriberCount && (
					<Typography>
						{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
					</Typography>
				)}
			</CardContent>
		</Link>
	</Card>
)


export default ChannelCard