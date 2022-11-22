window.addEventListener("load", myMain, false);

function myMain(evt) {
  var jsInitChecktimer = setInterval(checkForJS_Finish, 111);

  function checkForJS_Finish() {
    if (
      typeof SOME_GLOBAL_VAR != "undefined" ||
      document.getElementsByClassName("_3uIPm WYyr1")[0]
    ) {
      clearInterval(jsInitChecktimer);
      const list = document.getElementsByClassName("_3uIPm WYyr1");
      const all = document.getElementsByClassName("_3vPI2");
      if (list) {
        const nbChat = list[0].getAttribute("aria-rowcount");
        let chats = [];
        if (list[0].hasChildNodes()) {
          for (var i = 0; i < all.length; i++) {
            const text = all[i].outerText;
            const arr = text.split("\n");
            chats.push(arr);
          }
        }
        console.log(chats);
        chrome.storage.sync.set({ numberChat: nbChat }, function () {
          console.log("Value is set to " + nbChat);
        });
        chrome.storage.sync.set({ chats: chats }, function () {
          console.log("Value is set to " + chats);
        });
      }
    }
  }
}
