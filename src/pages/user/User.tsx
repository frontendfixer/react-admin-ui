import './user.scss';

import Single from '../../components/single/Single';
import { singleUser } from '../../data';

function User() {
  return (
    <div className="single">
      <Single {...singleUser} />
    </div>
  );
}

export default User;
