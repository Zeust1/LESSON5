const ProductLists = [
  {
    id: 1,
    productimg: "./public/productImg/1.png",
    title: "Granola siêu hạt ăn kiêng 15% yến mạch",
    price: "133.000 VND",
    discount: "-99%",
  },
  {
    id: 2,
    productimg: "./public/productImg/2.png",
    title: "Hạnh nhân rang muối biển, 240g, hũ",
    price: "150.000 VND",
    discount: "-99%",
  },
  {
    id: 3,
    productimg: "./public/productImg/3.png",
    title: "Ngũ hạt thập cẩm, 135g, hũ",
    price: "42.000 VND",
    discount: "-99%",
  },
  {
    id: 4,
    productimg: "./public/productImg/4.png",
    title: "Đậu hòa lan wasabi, 150g, hũ",
    price: "42.000 VND",
    discount: "-99%",
  },
  {
    id: 5,
    productimg: "./public/productImg/5.png",
    title: "Nước cốt dâu tằm, 300ml, chai",
    price: "54.000 VND",
    discount: "-99%",
  },
  {
    id: 6,
    productimg: "./public/productImg/6.png",
    title: "Trà sencha hoa hồng, 86g, hộp",
    price: "109.000 VND",
    discount: "-99%",
  },
  {
    id: 7,
    productimg: "./public/productImg/7.png",
    title: "Bột trà xanh matcha túi 4g",
    price: "36.000 VND",
    discount: "-99%",
  },
  {
    id: 8,
    productimg: "./public/productImg/8.png",
    title: "Bột rau má, 100g, bịch",
    price: "100.000 VND",
    discount: "-99%",
  },
];

const addProduct = (event) => {
  event.preventDefault();
  const newProduct = {
    productImg: event.target[0].value,
    title: event.target[1].value,
    price: event.target[2].value,
    discount: event.target[3].value,
  };
  console.log(newProduct);
};

const Body = () => {
  return (
    <>
        {/* body product list */}
      <div className="body">
        <div className="add-product-btn">
          <h3>Quà tặng</h3>
          <a href="#form">Tạo</a>
        </div>
        <div className="product-lists">
          {ProductLists.map((product) => {
            return (
              <div className="card" key={product.id}>
                <img src={product.productimg} alt={product.title} />
                <div className="product-title-wrapper">
                  <p>{product.title}</p>
                  <i className="fa-solid fa-cart-plus"></i>
                </div>
                <div className="price-wrapper">
                  <p>{product.price}</p>
                  <p>{product.discount}</p>
                </div>
              </div>
            );
          })}
        </div>
        <nav aria-label="Page navigation example" className="navigation">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
          {/* form */}
      <div className="form" id="form">
        <h3>Thêm sản phẩm</h3>
        <form onSubmit={addProduct}>
          <label htmlFor="img-input">Hình ảnh sản phẩm</label>
          <br />
          <input
            type="text"
            name="src"
            id="img-input"
            placeholder="Đường dẫn hình ảnh"
          />
          <br />
          <label htmlFor="tilte-product">Tiêu đề sản phẩm</label>
          <br />
          <input
            type="text"
            name="title"
            id="title-product"
            placeholder="Nhập mô tả sản phẩm"
          />
          <br />
          <label htmlFor="price-product">Giá sản phẩm</label>
          <br />
          <input
            type="number"
            name="price"
            id="price-product"
            placeholder="Nhập giá bán"
          />
          <label htmlFor="discount-product">% giảm giá</label>
          <br />
          <input
            type="text"
            name="discount"
            id="discount-product"
            placeholder="% giảm giá"
          />
          <div className="btn-form">
            <button id="btn-close">Đóng</button>
            <button type="subbmit" id="btn-submit">Lưu sản phẩm</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Body;
