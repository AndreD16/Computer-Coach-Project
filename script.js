const reviews = [
    {
      text: "Review 1",
      image: "image1.jpg"
    },
    {
      text: "Review 2",
      image: "image2.jpg"
    },
    {
      text: "Review 3",
      image: "image3.jpg"
    },
    {
      text: "Review 4",
      image: "image4.jpg"
    }
  ];
  
  function changeReview(index) {
    const reviewText = document.getElementById("review-text");
    const reviewImage = document.getElementById("review-image");
    reviewText.innerHTML = `<p>${reviews[index].text}</p>`;
    reviewImage.innerHTML = `<img src="${reviews[index].image}" alt="${reviews[index].text}">`;
  }
  