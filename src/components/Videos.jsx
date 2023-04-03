import { Container, Grid } from "@mui/material"
import { VideoCard, ChannelCard, Loader } from "./"


const Videos = ({ videos, direction }) => {

	if (!videos?.length) return <Loader />

	return (
		<Container maxWidth="xl" sx={{ padding: '20px 0' }}>
			<Grid container spacing={2}>
				{videos.map((item, idx) => (
					<Grid item key={idx} xs={12} sm={6} md={4} lg={3} xl={2}>
						{item.id.videoId && <VideoCard video={item} />}
						{item.id.channelId && <ChannelCard channelDetail={item} />}
					</Grid>
				))}
			</Grid>
		</Container>


	)
}
export default Videos