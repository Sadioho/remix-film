export default function Index() {
  return (
    <div className="container-fluid detail">
      <div className="detail_banner">
        <img
          src="https://img2.thuthuatphanmem.vn/uploads/2019/02/22/hinh-nen-gai-xinh-full-hd_121751381.jpg"
          alt=""
        />
      </div>

      <div className="contents">
        <div className="row">
          <div className="col-9 contents_view-content">
            <div className="contents_content">
              <div className="contents_content__badge">
                <div className="badge_item">
                  <p>NEW RELEASE</p>
                </div>
                <div className="badge_item">
                  <p>SHOWN IN 35MM</p>
                </div>
              </div>
              <div className="contents_content__title">PHANTOM THREAD</div>
              <div className="container contents_content__description ">
                <p className="description_first mt-5 mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis minima reprehenderit quidem eveniet architecto
                  dolores molestiae perspiciatis blanditiis rerum numquam soluta
                  repellendus animi perferendis, expedita laudantium impedit
                  repellat enim quis! Et recusandae rerum fugiat doloribus
                  consectetur deserunt provident laudantium tempore ab expedita
                  earum repellendus eveniet, molestias, doloremque quas
                  distinctio similique molestiae quis sed enim minus odit
                  reiciendis. Nisi, voluptates autem?
                </p>
                <p className="description_second">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis minima reprehenderit quidem eveniet architecto
                  dolores molestiae perspiciatis blanditiis rerum numquam soluta
                  repellendus animi perferendis, expedita laudantium impedit
                  repellat enim quis! Et recusandae rerum fugiat doloribus
                  consectetur deserunt provident laudantium tempore ab expedita
                  earum repellendus eveniet, molestias, doloremque quas
                  distinctio similique molestiae quis sed enim minus odit
                  reiciendis. Nisi, voluptates autem?
                </p>
                <div className="contents_content__auth">
                  <div className="row justify-content-around mt-5">
                    <div className="col-6">
                      <b>Director: ipsum dolor sit amet consectetur</b>
                      <b>Screenplay: psum dolor sit amet consectetur</b>
                      <b>Cinematography: ipsum dolor sit amet consectetur</b>
                      <b>Budget: ipsum dolor sit amet consectetur</b>
                    </div>
                    <div className="col-6">
                      <b>Director: ipsum dolor sit amet consectetur</b>
                      <b>Screenplay: ipsum dolor sit amet consectetur</b>
                      <b>Cinematography: ipsum dolor sit amet consectetur</b>
                      <b>Budget: ipsum dolor sit amet consectetur</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 contents_category">
            <button className="btn">GET TICKETS</button>
            <div className="contents_category__hour">
                  <p className="text1">Showtimes</p>
                  <p className="text2">Monday, January 15</p>
                  <p className="text2">MOIVEHOUSE 2</p>
                  <span className="text2 time-first">1:00 pm</span>
                  <span className="text2 time-second">4:00 pm</span>

            </div>
          </div>
        </div>
        <div className="contents_review mt-5">
          <video
            className="vid"
            src="https%3A%2F%2Fsubtitles.netpop.app%2Fsubtitles%2F20211220%2F1639967257015_Snowdrop.S01E01.1080p.DSNP.WEB-DL.AAC2.0.H.264-NYH%5Bvi%5D.srt"
            controls
            height="500"
            width="100%"
          ></video>
        </div>
        {/* view img */}
        <div className="contents_view">
          <img
            className="contents_view__img-thirst "
            src="https://img2.thuthuatphanmem.vn/uploads/2019/02/22/hinh-nen-gai-xinh-full-hd_121751381.jpg"
            alt=""
          />
          <div className="row">
            <div className="col-6 col-md-6 col-xs-6 col-sm-6 col-lg-6 contents_view__img-first">
              <img
                src="https://img2.thuthuatphanmem.vn/uploads/2019/02/22/hinh-nen-gai-xinh-full-hd_121751381.jpg"
                alt=""
              />
            </div>
            <div className="col-6 col-md-6 col-xs-6 col-sm-6 col-lg-6 contents_view__img-second">
              <p className="contents_view__session">10/10</p>
              <p className="contents_view__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis minima reprehenderit quidem eveniet architecto dolores
                molestiae perspiciatis blanditiis rerum numquam soluta
              </p>
              <p className="contents_view__auth">-Danny Ho</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
