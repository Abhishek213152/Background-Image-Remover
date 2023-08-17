import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Remove.css'; // Make sure to import your CSS file

const Remove = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (imageUrl) {
      // Scroll to the bottom of the page when imageUrl is set
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }, [imageUrl]);

  function submitHandler(event) {
    event.preventDefault(); // Prevent default form submission
    const fileInput = document.getElementById('fileInput');
    const image = fileInput.files[0];
    const formData = new FormData();
    formData.append('image_file', image);
    formData.append('size', 'auto');

    const apiKey = 'SMDy68YFCyYXi252ipuwsuSu';

    setIsLoading(true);

    fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: {
        'X-Api-Key': apiKey,
      },
      body: formData,
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }

  function downloadFile() {
    if (imageUrl) {
      var a = document.createElement('a');
      a.href = imageUrl;
      a.download = 'removed-background.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  return (
    <section className="r-wrapper">
      <div className="flex5 innerWidth r-container">
        <div className="r-left">
          <span>Upload an image <br /> to remove the <br /> background</span>
        </div>
        <div className="baby">
          <img src="./baby.jpg" alt="" />
        </div>
        <div className="r-right">
          <form className="flex11 form" onSubmit={submitHandler}>
            <div className="flex input">
              <input type="file" id="fileInput" />
            </div>
            <button className={`button3 ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Upload'}
            </button>
          </form>
        </div>
      </div>
      {imageUrl && (
        <section id="work" className="flex1">
          <div>
            <Link to="/">
              <i style={{ fontSize: '1.4rem', color: 'white', position: 'absolute', right: '7.6rem' }} className="bi bi-x-lg"></i>
            </Link>
          </div>
          <div className="r-image-container">
            <img src={imageUrl} alt="Background removed" className="r-image" />
          </div>
          <div onClick={downloadFile} className="bg-red-800 mt-3 w-25 h-10 rounded flex justify-center items-center cursor-pointer r-download">
            <button style={{ color: 'white' }}>Download</button>
          </div>
        </section>
      )}
    </section>
  );
}

export default Remove;
