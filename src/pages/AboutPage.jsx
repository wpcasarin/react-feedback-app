import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At natus ea
          impedit dolorem laudantium quisquam, asperiores eum pariatur magnam
          quod.
        </p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
