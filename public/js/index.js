/*用CSSㄉ方法找標籤*/
const bigBtn = document.querySelector("#big-btn")
const localNum = document.querySelector("#local-num")
const globalNum = document.querySelector("#global-num")
const fisheyeBtn = document.querySelector("#fisheye-btn")
const descModal = document.querySelector("#desc-modal")
const descModalCloseBtn = document.querySelector("#desc-modal__close-btn")
const mainElement = document.querySelector("main")
const sitdInput = document.querySelector("#sitd-input")
const taco = document.querySelector("#taco")
const lightContainer = document.querySelector("#light-container")

const bgMap = {
    500:"/images/indeximg/背圖1apng.png",

}

const fbButton = document.querySelector("#fb-btn")
const igButton = document.querySelector("#ig-btn")

const pushImgs = [
    "indeximg/小章魚.png",
    "indeximg/蝦子.png",
    "indeximg/水母.png",
    "indeximg/鯊鯊.png"
]

const fbList = [
    "https://www.facebook.com/profile.php?id=100088206966002" ,
    "https://www.facebook.com/profile.php?id=100088093861331" ,
    "https://www.facebook.com/profile.php?id=100083238861209" ,
    "https://www.facebook.com/profile.php?id=100087824322754" ,
    "https://www.facebook.com/profile.php?id=100088112653395" ,
    "https://www.facebook.com/Upadana.112" ,
    "https://www.facebook.com/ShirogeStudio" ,
    "https://www.facebook.com/profile.php?id=100087810563073&mibextid=LQQJ4d" ,
    "https://www.facebook.com/profile.php?id=100088032291470" ,
    "https://www.facebook.com/CLASHLW" ,
    "https://www.facebook.com/profile.php?id=100087912147749" ,
    "https://www.facebook.com/profile.php?id=100087090514536" ,
    "https://www.facebook.com/profile.php?id=100087500725204" ,
    "https://www.facebook.com/profile.php?id=100086623507220" ,
    "https://www.facebook.com/Allatsea.Studio12" ,
    "https://www.facebook.com/profile.php?id=100087810563073" ,
    "https://www.facebook.com/profile.php?id=100087914780218" ,
    "https://www.facebook.com/HeatAndHit/" ,
    "https://www.facebook.com/profile.php?id=100087839451345" ,
    "https://www.facebook.com/profile.php?id=100087669527095" ,
    "https://www.facebook.com/profile.php?id=100087734656064" ,
    "https://www.facebook.com/profile.php?id=100088051598070" ,
    "https://www.facebook.com/profile.php?id=100087885205307" ,
    "https://www.facebook.com/profile.php?id=100088233662997" ,
    "https://www.facebook.com/profile.php?id=100088103149639" ,
    "https://www.facebook.com/profile.php?id=100088109948356" ,
]

const igList = [
    "https://www.instagram.com/atg_112/" ,
    "https://www.instagram.com/handsup_matut/" ,
    "https://www.instagram.com/bleaver_1/" ,
    "https://www.instagram.com/karnival_tut/" ,
    "https://www.instagram.com/the_origin_of_tablewares_/" ,
    "https://www.instagram.com/upadana_112/" ,
    "https://www.instagram.com/moirae_shiroge_studio/" ,
    "https://www.instagram.com/ncku.arg.game/" ,
    "https://www.instagram.com/flora_fairies/" ,
    "https://www.instagram.com/clash_lw/" ,
    "https://www.instagram.com/skull06133/" ,
    "https://www.instagram.com/mountain_sprite/" ,
    "https://www.instagram.com/b_reverse_w/" ,
    "https://www.instagram.com/all.at.sea_/" ,
    "https://www.instagram.com/ncku.arg.game/" ,
    "https://www.instagram.com/lamplighter.112/" ,
    "https://www.instagram.com/heat_and_hit/" ,
    "https://www.instagram.com/guai_zai_2023/" ,
    "https://instagram.com/whokilledtheunicorn?igshid=YmMyMTA2M2Y=" ,
    "https://instagram.com/_f_o_r_l_i_f_e_?igshid=YmMyMTA2M2Y=" ,
    "https://www.instagram.com/fight_virus2022/" ,
    "https://www.instagram.com/real_trueorfalse/" ,
    "https://www.instagram.com/dekoboko_yorozuya/" ,
    "https://www.instagram.com/tieh_ding_sing/" ,
    "https://www.instagram.com/bus_station112/" ,
]

const actions = {
    "呷麵黑白切" : () => {
        randomShow("keyword/呷麵黑白切.png")
    },
    "All at sea" : () => {
        randomShow("keyword/All at sea.png")
    },
    "Bleaver" : () => {
        randomShow("keyword/Bleaver.png")
    },
    "CLASH" : () => {
        randomShow("keyword/CLASH.png")
    },
    "一起對抗病毒吧" : () => {
        randomShow("keyword/fight!一起對抗病毒吧!.png")
    },
    "Flora" : () => {
        randomShow("keyword/Flora.png")
    },
    "For Life" : () => {
        randomShow("keyword/For Life-細菌星球.png")
    },
    "HANDS UP" : () => {
        randomShow("keyword/HANDS_UP.png")
    },
    "KARNIVAL" : () => {
        randomShow("keyword/KARNIVAL.png")
    },
    "Moirae" : () => {
        randomShow("keyword/Moirae：紡生之樓的人偶.png")
    },
    "Real" : () => {
        randomShow("keyword/Real.png")
    },
    "Upādāna" : () => {
        randomShow("keyword/Upādāna.png")
    },
    "Who’s crying" : () => {
        randomShow("keyword/Who’s crying.png")
    },
    "山靈" : () => {
        randomShow("keyword/山靈.png")
    },
    "惡相善行" : () => {
        randomShow("keyword/公車站.png")
    },
    "凸凹萬事屋" : () => {
        randomShow("keyword/凸凹萬事屋.png")
    },
    "地底之上" : () => {
        randomShow("keyword/地底之上- ABOVE THE GROUND.png")
    },
    "妮好嗎" : () => {
        randomShow("keyword/妮好嗎.png")
    },
    "怪哉" : () => {
        randomShow("keyword/怪哉.png")
    },
    "是誰殺了獨角獸" : () => {
        randomShow("keyword/是誰殺了獨角獸.png")
    },
    "成大人之道" : () => {
        randomShow("keyword/穿梭東門三百年Game On The Path of NCKU.png")
    },
    "真真的奇妙之旅" : () => {
        randomShow("keyword/踏溯穿梭三百年Jen's Fantastic Journey.png")
    },
    "趁熱打鐵" : () => {
        randomShow("keyword/趁熱打鐵.png")
    },
    "阿東的發明" : () => {
        randomShow("keyword/餐具的起源.png")
    },
    "點燈人" : () => {
        randomShow("keyword/點燈人.png")
    },
    "鐵・定型" : () => {
        randomShow("keyword/鐵・定型.png")
    },
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

/*onreadystatechange = 會在網頁讀取完後執行*/
document.onreadystatechange = async () => {
    setIntervalImmediately(() => {
        updateGlobalNum("/get")
    },5000)/*5000是毫秒*/
    updateLocalNum()
    checkSitd()
    
}

localNum.addEventListener("click" , () => {
    if((Number(localStorage.getItem("click")) || 0) >= 100){
        sitdInput.hidden = !sitdInput.hidden
    }
})

bigBtn.addEventListener("click" , async () => {
    /*clickNum += 1 點擊後加一*/
    /*localNum.innerHTML = clickNum 更新點擊後需顯示的數字*/
    
    updateGlobalNum("/add")
    updateLocalNum(1)
    checkSitd()
    randomShow(pushImgs[Math.floor(Math.random()*pushImgs.length)])
    
    /*const res = await fetch("/add",{
        method:"GET",GET代表想查資料 有增刪改查 他是查
        headers:{
            "Content-Type":"application/json"json是檔案類型
        }
    })*/
})

fisheyeBtn.addEventListener("click", () => {
    if(descModal.hidden){
        showDescModal()
    }
    else{
        closeDescModal()
    }
})

sitdInput.addEventListener("keydown" , (e) => {
    if((Number(localStorage.getItem("click")) || 0) >=100 && e.keyCode === 13){
        actions[sitdInput.value] && actions[sitdInput.value]()
    }
})

descModalCloseBtn.addEventListener("click", () => {
    closeDescModal()
})

function setIntervalImmediately(callback, ms) {
    const interval = setInterval(callback, ms);
    callback(interval);
    return interval;
}

function htmlToElement(html) {
    let template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstElementChild;
}

async function updateGlobalNum(path) {
    const res = await fetch(path,{
        method:"GET",/*GET代表想查資料 有增刪改查 他是查*/
        headers:{
            "Content-Type":"application/json"/*json是檔案類型*/
        }
    })
    /*await就是等待 像安全保障*/
    const num = (await res.json()).num
    globalNum.innerHTML = num.toLocaleString("en" , {useGrouping:true})
    changebg(num)
    spawnLight(num)
}

function updateLocalNum(offset = 0){
    let clickNum = Number(localStorage.getItem("click")) || 0
    clickNum += offset
    localNum.innerHTML = clickNum.toLocaleString("en" , {useGrouping:true}) /*更新點擊後需顯示的數字*/
    localStorage.setItem("click",clickNum)
}

function randomShow(imgName){
    const e = htmlToElement(`<img class="random-image" />`)
    mainElement.appendChild(e)
    e.style.left = `${Math.floor(Math.random() * 100)}%`
    e.style.top = `${Math.floor(Math.random() * 100)}%`
    e.src=`/images/${imgName}`
    const t = setTimeout(() => {
        e.remove()
        clearTimeout(t)
    } , 1000)
}

function showDescModal(){
    fisheyeBtn.querySelector("img:nth-child(1)").src = "/images/indeximg/展覽魚閉眼.png"
    fisheyeBtn.querySelector("img:nth-child(2)").src = "/images/indeximg/展覽魚閉眼-.png"
    mainElement.classList.add("blur")
    descModal.hidden = false
}

function closeDescModal(){
    fisheyeBtn.querySelector("img:nth-child(1)").src = "/images/indeximg/展覽魚睜眼.png"
    fisheyeBtn.querySelector("img:nth-child(2)").src = "/images/indeximg/展覽魚睜眼-.png"
    mainElement.classList.remove("blur")
    descModal.hidden = true
}

function checkSitd(){
    if((Number(localStorage.getItem("click")) || 0) >= 100){
        localNum.classList.add("glow")
    }
}

fbButton.addEventListener("click" , () => {
    window.open(fbList[Math.floor(Math.random() * fbList.length)] , "_blank") 
   
    // for (var link of fbList){
    //     window.open(link , "_blank")
    // }
})

igButton.addEventListener("click" , () => {
    window.open(igList[Math.floor(Math.random() * igList.length)] , "_blank")

    // for (var link of igList){
    //     window.open(link , "_blank")
    // }
})

function changebg(num){
    if(num >= 100000){
        mainElement.dataset.stage=2
    }
    else{
        mainElement.dataset.stage=1
    }
}

mainElement.addEventListener("click" , () =>{
    if(descModal.hidden === false){
        closeDescModal()
    }
})

function spawnLight(num){
    const count = Math.floor(num/10000)
    const newCount = count-lightContainer.children.length
    for(let i = 0; i < newCount ; i ++){
        const light = htmlToElement(`<img src="/images/indeximg/亮亮-.png" class="light">`)
        light.style.left = `${(Math.random() * 100)}%`
        light.style.top = `${(Math.random() * 100)}%`
        lightContainer.appendChild(light)
    }
}