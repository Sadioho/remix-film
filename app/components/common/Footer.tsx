export default function Footer() {
  return (
    <footer className="container mt-5">
      <div className="row footer">
        <div className="col-6 footer_cool">
          <h2>Coolidge Corner Theatre Foundation</h2>
          <p className="footer_cool__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam
            id esse laboriosam deserunt tempore impedit nostrum consequuntur
            facere sunt perferendis et ea, illum placeat nam blanditiis ipsum
            veniam expedita.
          </p>
        </div>
        <div className="col-2">
          <h3>CONTACT US </h3>
          <div className="widget">
            <ul>
              <li>290 Harvard Street, Brookline MA 02446</li>
              <li>P / 6176-938-2222</li>
              <li>Office 9389-393-3333</li>
            </ul>
          </div>
        </div>
        <div className="col-2">
          <h3>MORE LINKS</h3>
          <div className="widget">
            <ul>
              <li>Showtimes</li>
              <li>Programs</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        <div className="col-2">
          <h3>FOLLOW US</h3>
          <div className="widget">
            <ul className="icons">
              <li className="icon">
                <i className="fab fa-facebook"></i>
              </li>
              <li className="icon">
                <i className="fab fa-instagram-square"></i>
              </li>
              <li className="icon">
                <i className="fab fa-twitter-square"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
