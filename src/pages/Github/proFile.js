import "./GithubTodo.scss";
function ProFile(props) {
  const { data } = props;
  //   console.log(data);
  return (
    <div>
      <div className="information">
        <img className="avatar" src={data?.avatar_url} />
        <div className="profile">
          <div className="name">{data?.name}</div>
          <div className="bio">{data?.bio}</div>
          <div className="tinder">
            <div>{data.followers} followers</div>
            <div>{data.following} following</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProFile;
