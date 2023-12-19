import '../ResumeNav/Style.scss'

const ResumeNav = () => {
  return (
    <div className='navbar-wrapper'>
        <nav className='navbar'>
            <div className="navbar-div"><i class="fa-brands fa-jedi-order"></i></div>
            <div className="navbar-div">Home</div>
            <div className="navbar-div">About</div>
            {/* <div className="navbar-div">Skills</div> */}
            <div className="navbar-div">Contact</div>
            {/* <div className="navbar-div"><input placeholder='Search '></input></div> */}
            <div className="navbar-div"><span>Profile</span></div>
        </nav>
    </div>
  )
}

export default ResumeNav