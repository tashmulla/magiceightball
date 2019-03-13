import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const linkStyle = {
  marginRight: 15,
  fontSize: 20
}

const Header = () => (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <Link href="/">
              <Button variant="contained" color="secondary" style={linkStyle}>Play Magic 8 Ball</Button>
            </Link>
            <Link href="/statistics">
              <Button variant="contained" color="secondary" style={linkStyle}>Game Statistics</Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
)

export default Header
