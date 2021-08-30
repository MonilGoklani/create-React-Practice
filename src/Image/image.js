import React from "react";
import "./style.css";

// const Image = ({imgUrl}) => {
//     return(
//         <div>
//             <img className = 'baby1' src = {imgUrl} alt = 'grogu'></img>
//         </div>

//     )
// }

class Image extends React.Component {
  constructor({ imgUrl }) {
    super();
    this.state = {
      images: imgUrl,
    };
    //this.repeatImg = this.repeatImg.bind(this);
  }

  componentDidMount() {
    // this.imgId = setInterval(() => {
    //     this.repeatImg()
    //   }, 2000)
  }

  componentWillUnmount() {
    // clearInterval(this.imgId);
  }

//   repeatImg() {
//     this.setState({
//       images: [...this.state.images, this.props.imgUrl],
//     });
//   }

  render() {
    // const { images } = this.state;
    //if(!this.props.warning) return null
    const { imgUrl } = this.props
    return (
      <div>
        <img className="baby1" src={imgUrl} alt="grogu"></img>
        {/* {images.map((imageUrl) => (
          <img className="baby1" src={imageUrl} alt="grogu"></img>
        ))} */}
      </div>
    );
  }
}
export default Image;
