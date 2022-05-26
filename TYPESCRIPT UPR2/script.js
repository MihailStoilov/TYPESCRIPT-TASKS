var createRobot = document.querySelector("#create-robot");
var robotName = document.querySelector("#robot-name");
var robotType = document.querySelector("#robot-type");
var robotColor = document.querySelector("#robot-color");
var robotJump = document.querySelector("#jump");
var robotTalk = document.querySelector("#talk");
var robotBlink = document.querySelector("#blink");
var robotPhrase = document.querySelector("#robot-phrase");
var body = document.querySelector("body");
var btns = document.querySelector(".btns");
var btn = document.querySelectorAll(".btn");
var btnNext = document.querySelector(".next-btn");
var btnPrev = document.querySelector(".prev-btn");
var btnClearLocalStorage = document.querySelector("#clear-local-storage");
var sectionCreateRobotEl = document.querySelector(".section-create-robot");
var showRobotBtn = document.querySelector("#show-robot");
var storageTableText = document.createElement("p");
var storageTable = document.createElement("table");
var storageTHead = document.createElement("thead");
var storageThName = document.createElement("th");
var storageThType = document.createElement("th");
var storageThColor = document.createElement("th");
var storageThOptions = document.createElement("th");
var storageTR = document.createElement("tr");
var storageTableBody = document.createElement("tbody");
var indexR = localStorage.length;
// Get data from localstorage
if (localStorage.length > 0) {
    storageTableText.textContent = "Local Storage";
    body.appendChild(storageTableText);
    body.appendChild(storageTable);
    storageTable.appendChild(storageTHead);
    storageTable.appendChild(storageTableBody);
    storageTHead.appendChild(storageTR);
    storageThName.textContent = "Name";
    storageThType.textContent = "Type";
    storageThColor.textContent = "Color";
    storageThOptions.textContent = "Options";
    storageTR.appendChild(storageThName);
    storageTR.appendChild(storageThType);
    storageTR.appendChild(storageThColor);
    storageTR.appendChild(storageThOptions);
    for (var i_1 = 0; i_1 < localStorage.length; i_1++) {
        var str = "".concat(localStorage.key(i_1));
        var currob = "".concat(localStorage.getItem(str));
        var myObject = JSON.parse(currob);
        var newObj = {
            name: myObject.name,
            type: myObject.type,
            color: myObject.color,
            jump: myObject.jump === true,
            blink: myObject.blink === true
        };
        createLocalStorage(newObj);
    }
}
function createLocalStorage(newObj) {
    var tableBodyTr = document.createElement("tr");
    storageTableBody.appendChild(tableBodyTr);
    var robotNameTd = document.createElement("td");
    robotNameTd.textContent = newObj.name;
    tableBodyTr.appendChild(robotNameTd);
    var robotTypeTd = document.createElement("td");
    robotTypeTd.textContent = newObj.type;
    tableBodyTr.appendChild(robotTypeTd);
    var robotColorTd = document.createElement("td");
    tableBodyTr.appendChild(robotColorTd);
    var colorBoxEl = document.createElement("td");
    colorBoxEl.textContent = newObj.color;
    robotColorTd.appendChild(colorBoxEl);
    var robotOptionsTd = document.createElement("td");
    robotOptionsTd.textContent = "".concat(newObj.jump, " ").concat(newObj.blink);
    tableBodyTr.appendChild(robotOptionsTd);
}
var RobotType;
(function (RobotType) {
    RobotType["Male"] = "Male";
    RobotType["Female"] = "Female";
})(RobotType || (RobotType = {}));
var robots = [];
var copyOfRobots = [];
var robot = {
    name: "",
    color: "",
    jump: false,
    blink: false
};
function getType(robotType) {
    if (robotType === "Male") {
        return RobotType.Male;
    }
    else {
        return RobotType.Female;
    }
}
function dynamicRobot() {
    robot = {
        name: robotName.value,
        type: getType(robotType.value),
        color: robotColor.value,
        jump: robotJump.checked,
        blink: robotBlink.checked
    };
    // Set robot to localstorage
    localStorage.setItem("robot-".concat(indexR), JSON.stringify(robot));
    indexR++;
    if (robots.length === 0) {
        var newSection = document.createElement("section");
        newSection.classList.add("factory-section", "active");
        newSection.setAttribute("id", "slide-".concat(robots.length + 1));
        var createSection = document.querySelector(".header");
        createSection.insertAdjacentElement("afterend", newSection);
    }
    var factoryEl = document.querySelector(".factory-section");
    var containerEl = document.createElement("div");
    containerEl.classList.add("container");
    containerEl.setAttribute("id", "slide-".concat(robots.length + 1));
    factoryEl.appendChild(containerEl);
    var newSecionHeader = document.createElement("div");
    newSecionHeader.classList.add("section-header");
    containerEl.appendChild(newSecionHeader);
    var newHeading = document.createElement("div");
    newHeading.classList.add("heading");
    newSecionHeader.appendChild(newHeading);
    var newSecondaryHeading = document.createElement("h2");
    newSecondaryHeading.classList.add("secondary-heading");
    newSecondaryHeading.textContent =
        robotType.options[robotType.selectedIndex].text;
    newHeading.appendChild(newSecondaryHeading);
    var newArr = document.createElement("div");
    newArr.classList.add("arr1");
    newHeading.appendChild(newArr);
    var newWrapper = document.createElement("div");
    newWrapper.classList.add("content-wrapper");
    containerEl.appendChild(newWrapper);
    var robotSide = document.createElement("div");
    robotSide.classList.add("robot-side");
    newWrapper.appendChild(robotSide);
    var robotBox = document.createElement("div");
    robotBox.classList.add("robot");
    robotSide.appendChild(robotBox);
    var robotHead = document.createElement("div");
    robotHead.classList.add("head");
    robotBox.appendChild(robotHead);
    var robotEyes = document.createElement("div");
    robotEyes.classList.add("eyes");
    robotHead.appendChild(robotEyes);
    var robotEye1 = document.createElement("div");
    robotEye1.classList.add("eye");
    robotEyes.appendChild(robotEye1);
    var robotEye2 = document.createElement("div");
    robotEye2.classList.add("eye");
    robotEyes.appendChild(robotEye2);
    var robotMouth = document.createElement("div");
    robotMouth.classList.add("mouth");
    robotHead.appendChild(robotMouth);
    var robotBody = document.createElement("div");
    robotBody.classList.add("robot-body");
    robotBox.appendChild(robotBody);
    var robotChest = document.createElement("div");
    robotChest.classList.add("chest");
    robotChest.style.borderTop = "5vw solid ".concat(robot.color);
    robotBody.appendChild(robotChest);
    var robotRightHand = document.createElement("div");
    robotRightHand.classList.add("right-hand");
    robotBody.appendChild(robotRightHand);
    var robotLeftHand = document.createElement("div");
    robotLeftHand.classList.add("left-hand");
    robotBody.appendChild(robotLeftHand);
    if (robot.type === "Female") {
        var robotSkirt = document.createElement("div");
        robotSkirt.classList.add("skirt");
        robotSkirt.style.borderBottom = "2.5vw solid ".concat(robot.color);
        robotBox.appendChild(robotSkirt);
    }
    var robotLegs = document.createElement("div");
    robotLegs.classList.add("legs");
    robotBox.appendChild(robotLegs);
    var robotLeftLeg = document.createElement("div");
    robotLeftLeg.classList.add("left-leg", "leg");
    robotLegs.appendChild(robotLeftLeg);
    var robotRightLeg = document.createElement("div");
    robotRightLeg.classList.add("right-leg", "leg");
    robotLegs.appendChild(robotRightLeg);
    var robotNameEl = document.createElement("p");
    robotNameEl.classList.add("robot-name");
    robotNameEl.textContent = robot.name;
    robotSide.appendChild(robotNameEl);
    var robotEyeEl = document.querySelector(".eyes")
        .firstElementChild;
    if (robotBlink.checked) {
        robotEyeEl.classList.add("blink");
    }
    if (robotJump.checked) {
        var robotLegs_1 = document.querySelectorAll(".leg");
        robotLegs_1.forEach(function (leg) {
            leg.classList.add("jump");
        });
    }
    var bubble = document.createElement("div");
    function showBubble() {
        bubble.classList.add("remove");
        robotMouth.classList.remove("speak");
    }
    if (robotTalk.checked) {
        bubble.classList.add("bubble");
        robotBox.appendChild(bubble);
        var bubbleText = document.createElement("p");
        bubbleText.classList.add("bubble-text");
        robot.phrase = robotPhrase.value;
        bubbleText.textContent = robot.phrase;
        bubble.appendChild(bubbleText);
        robotMouth.classList.add("speak");
        setTimeout(showBubble, 10000);
    }
    var textSide = document.createElement("div");
    textSide.classList.add("text-side");
    newWrapper.appendChild(textSide);
    var sendMsgBox = document.createElement("div");
    sendMsgBox.classList.add("send-msg-box");
    textSide.appendChild(sendMsgBox);
    var inputLineEl = document.createElement("div");
    inputLineEl.classList.add("input-line");
    sendMsgBox.appendChild(inputLineEl);
    var labelEl = document.createElement("label");
    labelEl.setAttribute("for", "send-message");
    labelEl.textContent = "Send message:";
    inputLineEl.appendChild(labelEl);
    var inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("name", "send-message");
    inputEl.setAttribute("id", "send-message");
    inputEl.setAttribute("id", "input-".concat(robots.length + 1));
    inputEl.setAttribute("placeholder", "write message here");
    inputEl.required = true;
    inputLineEl.appendChild(inputEl);
    var btnSubmitEl = document.createElement("button");
    btnSubmitEl.setAttribute("type", "submit");
    btnSubmitEl.classList.add("btn-send-message");
    btnSubmitEl.textContent = "Send";
    sendMsgBox.appendChild(btnSubmitEl);
    var lastMessagesEl = document.createElement("p");
    lastMessagesEl.classList.add("last-messages");
    lastMessagesEl.textContent = "Last Messages";
    textSide.appendChild(lastMessagesEl);
    var messagesBoxEl = document.createElement("div");
    messagesBoxEl.classList.add("messages");
    textSide.appendChild(messagesBoxEl);
    robots.push(robot);
    copyOfRobots.push(robot);
    robotName.value = "";
    robotType.value = "";
    robotColor.value = "#e96126";
    robotPhrase.value = "";
    btnSubmitEl.addEventListener("click", function (event) {
        if (inputEl.value === "") {
            alert("Please type message");
        }
        else {
            var currentDate = new Date();
            var currentTime_1 = currentDate.getHours() + ":" + currentDate.getMinutes();
            var whichInput = Number(inputEl.getAttribute("id").slice(-1));
            var whichRobot_1 = robots[whichInput - 1];
            document.querySelectorAll(".messages").forEach(function (m) {
                var messageEl = document.createElement("div");
                messageEl.classList.add("message");
                m.insertAdjacentElement("afterbegin", messageEl);
                var robotMessageEl = document.createElement("p");
                robotMessageEl.classList.add("robot-message");
                var spanMessage = document.createElement("span");
                var messageContentEl = document.createElement("p");
                messageContentEl.classList.add("msg-content");
                messageEl.appendChild(robotMessageEl);
                messageEl.appendChild(messageContentEl);
                robotMessageEl.style.color = whichRobot_1.color;
                robotMessageEl.textContent = whichRobot_1.name;
                messageContentEl.textContent = inputEl.value;
                spanMessage.textContent = "  ".concat(currentTime_1);
                robotMessageEl.appendChild(spanMessage);
            });
            var sound = new Audio("sound.mp3");
            sound.play();
            inputEl.value = "";
        }
        event.preventDefault();
    });
}
robotTalk.addEventListener("change", function () {
    robotTalk.checked
        ? (robotPhrase.disabled = false)
        : (robotPhrase.disabled = true);
});
// Create robot
createRobot === null || createRobot === void 0 ? void 0 : createRobot.addEventListener("click", function (event) {
    if (robotName.value === "" ||
        robotType.value === "" ||
        robotColor.value === "") {
        alert("You need to fill all the required fields (*)");
    }
    else if (robotTalk.checked && robotPhrase.value === "") {
        alert("Please input a phrase");
    }
    else {
        dynamicRobot();
        if (robots.length >= 1) {
            btns === null || btns === void 0 ? void 0 : btns.classList.add("btns-active");
        }
        if (robots.length <= 1) {
            btn.forEach(function (b) {
                b.setAttribute("disabled", "");
            });
        }
        else {
            btn.forEach(function (b) {
                b.removeAttribute("disabled");
            });
        }
        slides = document.querySelectorAll(".container");
        maxSlide++;
        curSlide++;
        goToSlide();
        i++;
    }
    event.preventDefault();
});
var slides;
var curSlide = 0;
var maxSlide = 0;
function goToSlide() {
    for (var i_2 = 0; i_2 < slides.length; i_2++) {
        var slide = slides[i_2];
        slide.style.transform = "translateX(".concat(100 * (i_2 - curSlide + 1), "%)");
    }
}
// Next slide
function nextSlide() {
    maxSlide = slides.length;
    if (curSlide === maxSlide) {
        curSlide = 1;
    }
    else {
        curSlide++;
    }
    goToSlide();
}
// Prev slide
function prevSlide() {
    if (curSlide === 1) {
        curSlide = maxSlide;
    }
    else {
        curSlide--;
    }
    goToSlide();
}
// robots-num box
var robotsNum = document.createElement("div");
robotsNum.classList.add("robots-num");
sectionCreateRobotEl.appendChild(robotsNum);
var robotsNumText = document.createElement("p");
robotsNum.appendChild(robotsNumText);
// table
var tableEl = document.createElement("table");
var tableHead = document.createElement("thead");
var tableBody = document.createElement("tbody");
var tableTr = document.createElement("tr");
var thName = document.createElement("th");
var thType = document.createElement("th");
var thColor = document.createElement("th");
var thOptions = document.createElement("th");
thName.textContent = "Name";
thType.textContent = "Type";
thColor.textContent = "Color";
thOptions.textContent = "Options";
var i = 0;
function showRobot() {
    function robotOptions() {
        var robotOptions = [];
        robotTalk.checked === true ? robotOptions.push("can talk") : "";
        robotBlink.checked === true ? robotOptions.push("can blink") : "";
        robotJump.checked === true ? robotOptions.push("can jump") : "";
        return robotOptions.join(", ");
    }
    if (i > 0) {
        copyOfRobots.forEach(function (robot) {
            robotsNumText.textContent = "".concat(i, " robots found");
            createRow(robot);
        });
        sectionCreateRobotEl.appendChild(tableEl);
        tableEl.appendChild(tableHead);
        tableHead.appendChild(tableTr);
        tableTr.appendChild(thName);
        tableTr.appendChild(thType);
        tableTr.appendChild(thColor);
        tableTr.appendChild(thOptions);
        tableEl.appendChild(tableBody);
    }
    else {
        robotsNumText.textContent = "No robots created yet";
    }
    function createRow(robot) {
        var tableBodyTr = document.createElement("tr");
        tableBody.appendChild(tableBodyTr);
        var robotNameTd = document.createElement("td");
        robotNameTd.textContent = robot.name;
        tableBodyTr.appendChild(robotNameTd);
        var robotTypeTd = document.createElement("td");
        robotTypeTd.textContent = "".concat(robot.type);
        tableBodyTr.appendChild(robotTypeTd);
        var robotColorTd = document.createElement("td");
        tableBodyTr.appendChild(robotColorTd);
        var colorBoxEl = document.createElement("div");
        colorBoxEl.classList.add("color-box");
        colorBoxEl.style.backgroundColor = robot.color;
        robotColorTd.appendChild(colorBoxEl);
        var robotOptionsTd = document.createElement("td");
        robotOptionsTd.textContent = robotOptions();
        tableBodyTr.appendChild(robotOptionsTd);
    }
    copyOfRobots = [];
}
function clearLocalStorage() {
    localStorage.clear();
    storageTable.remove();
    storageTableText.remove();
}
btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);
showRobotBtn.addEventListener("click", showRobot);
btnClearLocalStorage.addEventListener("click", clearLocalStorage);
