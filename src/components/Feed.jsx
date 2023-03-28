import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './'

const Feed = () => {
	return (
		<Stack sx={{ flexDirection: { sx: 'column', md: "row" } }}>
			<Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
				<Sidebar />
				<Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
					Copyright 2023 Skynette
				</Typography>
			</Box>
			<Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
				<Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
					New <span style={{ color: '#F31503' }}>Videos</span>
				</Typography>
				<Videos/>
			</Box>
		</Stack >
	)
}

export default Feed