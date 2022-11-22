let allChat = document.getElementById("allChat");

async function getLocalStorageValue(key) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.get(key, function (value) {
        resolve(value);
      });
    } catch (ex) {
      reject(ex);
    }
  });
}

const result = getLocalStorageValue("numberChat");
const chats = getLocalStorageValue("chats");

if (result) {
  result.then((res) => {
    let value = 0;
    value = res["numberChat"];
    console.log(value);
    allChat.innerHTML = value;
  });
  console.log(allChat);
}
var csvFileData = [];
if (chats) {
  chats.then((res) => {
    csvFileData = res["chats"];
  });
  function download_csv_file() {
    //define the heading for each row of the data
    var csv = "Nom,Date\n";

    //merge the data with CSV
    csvFileData.forEach(function (row) {
      csv += row.join(",");
      csv += "\n";
    });

    var hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenElement.target = "_blank";

    //provide the name for the CSV file to be downloaded
    hiddenElement.download = "chat.csv";
    hiddenElement.click();
  }
}

let csvButton = document.getElementById("csv");
csvButton.addEventListener("click", () => {
  download_csv_file();
});
