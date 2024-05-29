const row = document.getElementById("row");

const render = () => {
  axios
    .get("https://d90acc4e338622f6.mokky.dev/card")
    .then((res) => {
      console.log(res.data);
      const bestcard = res.data;

      row.innerHTML = ""; // InnerHTML ni tozalash

      bestcard.forEach((item) => {
        row.innerHTML += `
          <div class="mt-5 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
            <div class="section_card position-relative">
              <div class="d-flex sdf w-100 align-items-center">
                <span class="spank">${item.data}</span>
              </div>
              <img src="${item.img}" alt="" width="100%"/>
              <div class="content">
                <h4 class="content_title">${item.name}</h4>
                <div class="des">
                  <p class="content_subtitle">${item.desc}</p>
                  <div class="d-flex align-items-center justify-content-between">
                    <a style="text-decoration: none;" href="./kirish.html">
                      <button class="btton text-white d-flex align-items-center content_button">
                        Korish
                        <i class="me-3 fa-solid fa-play content_icon" style="color: #ffffff;"></i>
                      </button>
                    </a>
                    <i id="heart-${item.id}" onclick="basket(${item.id})" class="animatsiya fa-solid fa-heart psd" style="color: #ffffff"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const basket = (itemId) => {
  const heartIcon = document.getElementById(`heart-${itemId}`);

  if (heartIcon.style.color === "rgb(254, 10, 10)") {
    heartIcon.style.color = "#ffffff";
  } else {
    heartIcon.style.color = "rgb(254, 10, 10)";
  }
};

render();