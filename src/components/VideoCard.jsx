import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl, demoThumbnailUrl } from "../utils/constants"

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
	<Card sx={{
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'black'
	}}>
		<Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
			<CardMedia
				image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
				title="Image Title"
				sx={{ paddingTop: '56.25%' }}
			/>
		</Link>
		<CardContent sx={{ flexGrow: 1 }}>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
				<Typography variant="subtitle1" fontWeight="bold" color="#FFF">
					{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
				</Typography>
			</Link>
			<Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
				<Typography variant="subtitle2" color="gray">
					{snippet?.channelTitle || demoChannelTitle}
					<CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
				</Typography>
			</Link>
		</CardContent>
	</Card>
);

export default VideoCard