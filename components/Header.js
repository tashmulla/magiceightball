import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  fontSize: 20
}

const Header = () => (
    <div>
        <Link href="/">
          <button style={linkStyle}>Play Magic 8 Ball</button>
        </Link>
        <Link href="/statistics">
          <button style={linkStyle}>Game Statistics</button>
        </Link>
    </div>
)

export default Header
