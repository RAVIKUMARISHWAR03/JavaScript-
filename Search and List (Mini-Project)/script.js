let userContainer = document.querySelector(".userContainer")
let searchInput = document.querySelector("#searchInput")
console.log(searchInput.value);

const users = [
  {
    profileUrl: "https://pbs.twimg.com/media/GRf52_kaYAAmZSS.jpg:large",
    name: "Rohit Sharma",
    email: "rohitsharma45@.com",
  },
  {
    profileUrl:
      "https://www.deccanchronicle.com/h-upload/2025/07/16/1938706-gv-dmoxkaaz9is.webp",
    name: "Virat Kohli",
    email: "vk18@.com",
  },
  {
    profileUrl:
      "https://assets.telegraphindia.com/telegraph/2024/Jan/1704461025_dhoni.jpg",
    name: "Thala",
    email: "msdhoni07@.com",
  },
  {
    profileUrl:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/21600/21640.jpg",
    name: "Lala Amarnath",
    email: "lalaamarnath12@.com",
  },
  {
    profileUrl:
      "https://static.cricbuzz.com/a/img/v1/i1/c209134/world-cup-winner-yashpal-sharma-passes-away-aged-66.jpg?d=low&p=det",
    name: "Yashpal Sharma",
    email: "yashpalsharma68@.com",
  },
  {
    profileUrl:
      "https://images.news18.com/ibnlive/uploads/2022/06/madan-lal-1.jpg",
    name: "Madan Lal",
    email: "madanlal73@.com",
  }
]

function renderUsers(arr) {

    userContainer.innerHTML = ''

    arr.map(function (obj) {
        let { profileUrl, name, email } = obj

        let divElem = document.createElement('div');
        divElem.className = 'userItem'
        divElem.innerHTML = `
            <div class="image">
                <img src=${profileUrl} alt="error loading image">
            </div>
            <div class="userDetails">
                <h3>${name}</h3>
                <p>${email}</p>
            </div>
        `
        userContainer.append(divElem);
    })
}

renderUsers(users); // initial render

function handleSearch(e) {
    let searchValue = e.target.value;
    let filteredUsers = users.filter(obj => {
        return (
            obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            obj.email.toLowerCase().includes(searchValue.toLowerCase())
        )
    })
    renderUsers(filteredUsers)
}

searchInput.addEventListener('input', handleSearch)

