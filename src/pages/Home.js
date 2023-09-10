import Courses from '../components/Courses';
import Banner from '../components/Banner';
import AboutForm from '../components/AboutForm';
import CodeEditor from '../pages/CodeEditor';
import Infinite from './Infinite';


function Home(props) {
    return (

<div>
<Banner />
<Courses />
<CodeEditor/>
<AboutForm />
<Infinite />
</div>

  );
}

export default Home;