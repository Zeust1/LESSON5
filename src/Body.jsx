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
    id: 9,
    productImg: event.target[0].value,
    title: event.target[1].value,
    price: event.target[2].value,
    discount: event.target[3].value,
  };
  ProductLists.push(newProduct)
  console.log(ProductLists)
};

const Body = () => {
  return (
    <>
      {/* body product list */}
      <div className="body">
        <div className="add-product-btn">
          <h3>Quà tặng</h3>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Tạo
          </button>
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

      {/* <!-- Modal form --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Thêm sản phẩm
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* form */}
              <form onSubmit={addProduct} className="form">
                <label htmlFor="product-img">Đường dẫn ảnh sản phẩm</label>
                <br />
                <input
                  type="text"
                  name="product-img"
                  id="product-img"
                  placeholder="vd: ./public/..."
                />
                <br />
                <label htmlFor="product-title">Mô tả sản phẩm</label>
                <br />
                <input type="text" name="product-title" id="product-title" />
                <br />
                <label htmlFor="product-price">Giá bán</label>
                <br />
                <input type="number" name="product-price" id="product-price" />
                <br />
                <label htmlFor="product-discount">% giảm giá</label>
                <br />
                <input
                  type="text"
                  name="product-discount"
                  id="product-discount"
                />
                <br />
                <div className="btn-form">
                  <button className="btn btn-secondary" data-bs-dismiss="modal">Lưu</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
