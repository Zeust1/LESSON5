const Header = () => {
  return (
    <div className="header">
      <h1>Yêu thích ngay</h1>
      <div style={{ display: "flex", gap: "24px" }}>
        <video style={{ maxWidth: "400px", maxWidth: "400px" }} controls loop autoPlay>
          <source src="./public/video/video.mp4"></source>
        </video>
        <h3>
          Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản phẩm có
          ưu đãi
        </h3>
      </div>
      <h1>Mục yêu thích của bạn.</h1>
      <div className="input-wrapper">
        <span className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input type="text" placeholder="Tìm kiếm" />
      </div>
      <div className="fill-wrapper">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Trạng thái
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Danh mục
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Đã thêm gần đây
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
        <i className="fa-solid fa-list-ul fa-xl"></i>
      </div>
    </div>
  );
};

export default Header;
