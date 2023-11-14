import { styled } from '@mui/material'

const Root = styled('div')(({ theme }) => {
    return {
        textAlign: 'center',
        paddingTop: theme.spacing(4),
    }
})

export default Root;