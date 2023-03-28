import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail }) => (
	<Box
		sx={{ boxShadow: 'none', borderRadius: '20px' }}
	>
		<Link to={`/channel/${channelDetail?.id?.ChannelId}`}>
			<CardContent
				sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#FFF' }}
			>
				<CardMedia
					image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
					alt={channelDetail?.snippet?.title}
					sx={{ borderRadius: '50%', height: '100%', width: '180px' }}
				/>
			</CardContent>
		</Link>
	</Box>
)


export default ChannelCard