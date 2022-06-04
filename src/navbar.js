import Logo from './Airbnb-Logo.png';
import Group from './Group.png';
function Navbar (){
    return (
        <div>
            <nav class="navbar navbar-light bg-light shadow">
                <div class="container-fluid p-1 mx-4">
                    <a class="navbar-brand" href="#">
                    <img src={Logo} alt="Airbnb logo" width="150" class="d-inline-block align-text-top"/>
                    </a>
                </div>
            </nav>
            <div className='text-center'>
                <img src={Group} className="my-5" id='groupPhoto'></img>
            </div>
            <div className='mx-3'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}

export default Navbar;  