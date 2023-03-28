import { Stack, Typography } from "@mui/material"

import { categories } from "../utils/constants"

const Sidebar = () => {
	console.log('current loaded sidebar hhehehehe');
	(
		<Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
			Some Side bar content heh
		</Typography>
		// <Stack direction="row" sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
		// 	{categories.map((category) => (
		// 		<button className="category-btn" key={category.name}> 
		// 			<span>{category.icon}</span>
		// 			<span>{category.name}</span>
		// 		</button>
		// 	))}
		// </Stack>
	)
}

export default Sidebar