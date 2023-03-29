import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"

const ChannelDetail = () => {
	const { id } = useParams()
	const [videos, setvideos] = useState([])
	const [channelDetail, setChannelDetail] = useState(null)


	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`)
			.then((data) => setChannelDetail(data?.items[0]))

		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
			.then((data) => setvideos(data?.items))
	}, [id])

	return (
		<Box minHeight="95vh">
			<Box>
				<div style={{
					background: 'linear-gradient(90deg, rgba(1, 0, 11, 1) 0%, rgba(16, 16, 185, 1) 50%, rgba(0, 212, 255, 1) 98%)',
					zIndex: 10,
					height: '300px'
				}} />
				<ChannelCard channelDetail={channelDetail} marginTop='-110px' />
			</Box>
			<Box display="flex" p='2'>
				<Box sx={{ mr: { sm: '100px' } }} />
				<Videos videos={videos} />

			</Box>
		</Box>
	)
}

export default ChannelDetail