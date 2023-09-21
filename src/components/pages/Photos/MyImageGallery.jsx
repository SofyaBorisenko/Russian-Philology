import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './MyImageGallery.css';
import '../../../App.css';

const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  function MyImageGallery() {
    return (
      <main className="my-custom-gallery">
        <ImageGallery items={images} />
      </main>
    );
  }

export default MyImageGallery;