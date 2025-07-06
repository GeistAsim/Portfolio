let change = document.querySelector(".container")
const templates = {
    0: `<div class="me me-home flex">
                    <div class="see">
                        <div class="see-0">
                            <div class="see-1">
                                <div class="Intro">
                                    Hi, I'm
                                </div>
                                <div class="name">
                                    Asim Saifi
                                </div>
                                <div class="role">
                                    > Front-end Developer
                                </div>
                                <div class="Intro">// find my profile on GitHub:</div>
                                <div class="github">
                                    <span>const</span>
                                    <span>githubLink</span>
                                    =
                                    <span>"<a href="https://github.com/asimsaifioffical"
                                            target="_blank">https://github.com/asimsaifioffical</a>";</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`,  //home

    1: `<div class="side flex">
                    <div class="file">
                        <div class="about-side">
                            <div class="about flex">
                                <div class="about-1 flex">
                                    <img src="images/svg/down_arrow.svg" alt="" class="direct">
                                    <div>Personal-info</div>
                                </div>
                                <div class="border-2"></div>
                            </div>
                            <div class="edu">
                                <div class="edu-1 flex">
                                    <img src="images/svg/right_arrow.svg" alt="" class="direct">
                                    <img src="images/svg/folder_icon_1.svg" alt="" class="direct">
                                    <span>bio</span>
                                </div>
                                <div class="edu-1 flex">
                                    <img src="images/svg/right_arrow.svg" alt="" class="direct">
                                    <img src="images/svg/folder_icon_2.svg" alt="" class="direct">
                                    <span>interests</span>
                                </div>
                                <div class="edu-1 flex">
                                    <img src="images/svg/right_arrow.svg" alt="" class="direct">
                                    <img src="images/svg/folder_icon_3.svg" alt="" class="direct">
                                    <span>education</span>
                                </div>
                            </div>
                            <div class="border-2"></div>
                        </div>
                        <div class="about flex">
                            <div class="about-1 flex">
                                <img src="images/svg/down_arrow.svg" alt="" class="direct">
                                <div>Contacts</div>
                            </div>
                            <div class="border-2"></div>
                        </div>
                        <div class="mail flex">
                            <div class="mail-1 flex">
                                <img src="images/svg/mail.svg" alt="E-Mail" class="direct">
                                <span>asimsaifioffical12@gmail.com</span>
                            </div>
                            <div class="mail-1 flex">
                                <img src="images/svg/phone.svg" alt="E-Mail" class="direct">
                                <span>+91 9024714087</span>
                            </div>
                        </div>
                    </div>
                    <div class="border-1">
                    </div>
                </div>
                <div class="me me-about flex">
                    <div class="see">
                        <div class="bio">
                            <div>/*</div>
                            <p>
                                Hey there! I'm a front-end web developer with expertise in HTML, CSS, and JavaScript,
                                and
                                I've built hands-on projects that look great on any device. Whether you need a brand-new
                                website or want to revamp an existing one from scratch, I've got you covered. I can
                                create
                                your dream website tailored to your needs and requirements—designed or redesigned just
                                the
                                way you envision. Let's team up and bring your dream website to life!
                            </p>
                            <div>*/</div>
                        </div>
                    </div>
                </div>`,  //about

    2: `<div class="side flex">
                    <div class="file">
                        <div class="about-side">
                            <div class="about flex">
                                <div class="about-1 flex">
                                    <img src="images/svg/down_arrow.svg" alt="" class="direct">
                                    <div>projects</div>
                                </div>
                                <div class="border-2"></div>
                            </div>
                            <div class="edu">
                                <div class="lang-name flex">
                                    <label class="custom-checkbox">
                                        <input type="checkbox" name="Language" id="tickbox" class="tickbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <img src="images/Language Icon/html.png" class="icon">
                                    <label for="name">HTML</label>
                                </div>
                                <div class="lang-name flex">
                                    <label class="custom-checkbox">
                                        <input type="checkbox" name="Language" id="tickbox" class="tickbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <img src="images/Language Icon/css.png" class="icon">
                                    <label for="name">CSS</label>
                                </div>
                                <div class="lang-name flex">
                                    <label class="custom-checkbox">
                                        <input type="checkbox" name="Language" id="tickbox" class="tickbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <img src="images/Language Icon/JavaScript.png" class="icon">
                                    <label for="name">JavaScript</label>
                                </div>
                                <div class="lang-name flex">
                                    <label class="custom-checkbox">
                                        <input type="checkbox" name="Language" id="tickbox" class="tickbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <img src="images/Language Icon/python.png" class="icon">
                                    <label for="name">Python</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-1">
                    </div>
                </div>
                <div class="post flex">
                    <div class="box flex">
                        <div class="head flex">
                            <div class="heading">
                                <span>Project 1</span>
                                <span>// EchoJuction</span>
                            </div>
                        </div>
                        <div class="tile flex">
                            <div class="mid">
                                <a href="">
                                    <img src="images/Project/EchoJunction/cover.jpg" alt="">
                                </a>
                            </div>
                            <div class="last flex">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quibusdam?</p>
                                <button class="btn">
                                    view-project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`,  //projects

    3: `<div class="side flex">
                    <div class="file">
                        <div class="about flex">
                            <div class="about-1 flex">
                                <img src="images/svg/down_arrow.svg" alt="" class="direct">
                                <div>Contacts</div>
                            </div>
                            <div class="border-2"></div>
                        </div>
                        <div class="mail flex">
                            <div class="mail-1 flex">
                                <img src="images/svg/mail.svg" alt="E-Mail" class="direct">
                                <span>asimsaifioffical12@gmail.com</span>
                            </div>
                            <div class="mail-1 flex">
                                <img src="images/svg/phone.svg" alt="E-Mail" class="direct">
                                <span>+91 9024714087</span>
                            </div>
                        </div>
                    </div>
                    <div class="border-1">
                    </div>
                </div>
                <div class="me me-about flex">
                    <div class="see">
                        <form action="" class="form flex">
                            <div class="form-box flex">
                                <div class="frm-ele flex">
                                    <label for="name" class="lbl">_name:</label>
                                    <input type="text" name="name" class="person-1" autocomplete="off" required>
                                </div>
                                <div class="frm-ele flex">
                                    <label for="name" class="lbl">_email:</label>
                                    <input type="email" name="name" class="person-1" autocomplete="off" required>
                                </div>
                                <div class="frm-ele flex">
                                    <label for="name" class="lbl">_message</label>
                                    <textarea type="text" name="name" class="person-1 message"
                                            placeholder="Your message here..." required></textarea>
                                </div>
                                <button class="btn" id="submit-msg">
                                    Submit-Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>`  //contact    
}

function main() {

    // humburger activating click
    let hmbrgr = document.querySelector(".menu")
    hmbrgr.addEventListener("click", () => {
        console.log("humburger");
        let show = document.querySelector(".nav-right")
        show.style.right = "1px"
    })

    // add event listner to close side bar
    let cls = document.querySelector(".cls")
    cls.addEventListener("click", () => {
        console.log("close");
        let show = document.querySelector(".nav-right")
        show.style.right = "-110%"
    })

    // add event listner on the nav bar and change the caontainer elements
    let change = document.querySelector(".container")

    let elements = document.querySelector(".r-left")
    console.log(elements);

    let itemEle = elements.children

    // Highlight Home on page load (index 0)
    window.addEventListener("DOMContentLoaded", () => {
        itemEle[0].style.color = "#FFA1AD";
        itemEle[0].style.borderBottom = "1px solid #FFA1AD";
        change.innerHTML = templates[0]; // Optional: load home content
    });

    // dynamic item click on nav btn and its color, border changing
    Array.from(itemEle).forEach((item, i) => {
        // console.log(item);
        item.addEventListener("click", () => {

            let templateFn = templates[i];
            change.innerHTML = templateFn

            // change the nav bar botton color on click

            // Reset all colors first
            Array.from(itemEle).forEach(ele => {
                ele.style.color = "";
                ele.style.borderBottom = ""
            });

            item.style.color = "#FFA1AD"
            item.style.borderBottom = "1px solid #FFA1AD"
        })
    })

}

main()