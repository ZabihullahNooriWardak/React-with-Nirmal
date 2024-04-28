import { useParams } from "react-router-dom";

function ProfileDetail() {
    let params=useParams();
  return (
    <div>
      <h1>Profile Detail for this profile is : {params.id}</h1>
    </div>
  );
}
export default ProfileDetail;