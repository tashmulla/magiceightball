import Link from "next/link"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const linkStyle = {
  marginRight: 15,
  fontSize: 20
}

const Header = () => (
    <div>
      <AppBar position="static" style={{ background: "#685fa8" }}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            <Link href="/">
              <Button color="inherit" style={linkStyle}>Play Magic 8 Ball</Button>
            </Link>
            <Link href="/statistics">
              <Button color="inherit" style={linkStyle}>Game Statistics</Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
)

export default Header
