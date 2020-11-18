import React, { Component } from "react";
import ArtistCard from "./artist-cards.js";
import Loading from "./loading.js";
import Error from "./error.js";

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    data: {
      similarartists: {
        artist: [],
      },
    },
  };
  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    console.log(termino, "cuando me agregan");
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        termino +
        "&api_key=9ee7e37392e6fd2f62d8d8fe825f9212&format=json"
    );
  }
  // componentDidMount() {
  //   this.fetchData(
  //     "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=tool&api_key=9ee7e37392e6fd2f62d8d8fe825f9212&format=json"
  //   );
  // }
  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "lo que trae la api");
    if (data.error) {
      this.setState({
        loading: false,
        error: true,
        errorMensaje: data.message,
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data,
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && (
          <Error errorMensaje={this.state.errorMensaje}></Error>
        )}
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[2]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })}
            {/* <ArtistCard
              img="https://img.discogs.com/3hF3DmRguoW5WyuqSs5U2u8-VY4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-13388816-1567052157-8381.jpeg.jpg"
              titulo="Messugah"
            />
            <ArtistCard
              img="https://images.equipboard.com/uploads/group/image/1505/tool-big.jpg"
              titulo="TOOL"
            />
            <ArtistCard
              img="https://www.humonegro.com/wp-content/GOJIRA-MAGMA.png"
              titulo="Gojira"
            />
            <ArtistCard
              img="https://www.humonegro.com/wp-content/NINE-INCH-NAILS-ADD-VIOLENCE.png"
              titulo="Nine Inch Nails"
            />
            <ArtistCard
              img="https://pm1.narvii.com/6353/f1ce6b83775293f7f078532b4a587dc5d3c883e1_00.jpg"
              titulo="Rammstein"
            />
            <ArtistCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu9ZCG7C0C3baylijBdnXqrbCOCk7Wcp30_g&usqp=CAU"
              titulo="Radiohead"
            />
            <ArtistCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE6GnwC0QKu52vAavbJMSjMLr5Fl-cY1kU8w&usqp=CAU"
              titulo="A Perfect Circle"
            />
            <ArtistCard
              img="https://los40es00.epimg.net/los40/imagenes/2010/03/26/actualidad/1269558000_296377_1273518960.jpg"
              titulo="The Strokes"
            /> */}
          </div>
          <h1>{this.props.busqueda}</h1>
        </div>
      </React.Fragment>
    );
  }
}
export default SearchResult;
