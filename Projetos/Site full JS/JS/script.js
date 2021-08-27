const body = document.querySelector('body')
body.style.margin = '0px'
body.style.padding = '0px'


const classeJs = document.querySelector('.sessao-01');
classeJs.style.margin = '0px auto';
classeJs.style.padding = '0px';
classeJs.style.maxWidth = '1350px';




const headerMenu = document.createElement('section')
const containerMenu = document.createElement('div')

headerMenu.style.background = '#3DBEFF'




classeJs.appendChild(headerMenu)
headerMenu.appendChild(containerMenu)
/* klaljshdlajkshndlk n */
const logoMenu = document.createElement('div');
const menuList = document.createElement('div');

containerMenu.appendChild(logoMenu);
containerMenu.appendChild(menuList);

  let img = document.createElement('img')
  img.src = 'images/logo.svg';
  img.style.width = '150px'
  img.style.height = '30px'

  logoMenu.appendChild(img)

let lista = ['About','Services','Projects','Contact',]

let ul = document.createElement('ul');

  lista.forEach((i) => { 
    a = document.createElement('a')
    li = document.createElement('li');
    li.style.listStyle = "none"
    li.style.padding = "10px 20px"
    li.style.color = "#ffffff"
    li.style.fontSize = '18px'
    li.style.fontWeight = 'bold'
    
    a.innerHTML = i;
 
    li.appendChild(a);
    ul.appendChild(li); 
    menuList.appendChild(ul);
  })

  ul.style.marginTop = '-5px'
  containerMenu.style.display = 'flex'
  containerMenu.style.justifyContent = 'space-between'
  ul.style.display = 'flex'
  containerMenu.style.padding = '50px'
  

// Segunda Sessão  -------------------------------------


const sessao2 = document.createElement('section')
const h1 = document.createElement('h1')
sessao2.style.height = '750px'
sessao2.style.background = 'url(../images/desktop/image-header.jpg) no-repeat center';
sessao2.style.backgroundSize = '1350px 750px'

h1.innerText = 'We are creatives'

classeJs.appendChild(sessao2)
sessao2.appendChild(h1)

// estilização  do  H1  -------------------------------------

h1.style.margin = '0'
h1.style.paddingTop = '250px'
h1.style.fontSize = '48px'
h1.style.letterSpacing = '5px'
h1.style.color = '#fff'
h1.style.textAlign = 'center'

// Terceira Sessão  -------------------------------------

const sessao3 = document.createElement('section')
const divInfo = document.createElement('div')
const divInfoImg = document.createElement('div')

classeJs.appendChild(sessao3)
sessao3.appendChild(divInfo)
sessao3.appendChild(divInfoImg)


sessao3.style.background = '#fff'
sessao3.style.height = '400px'
sessao3.style.marginTop = '-50px'
sessao3.style.marginBottom = '100px'
sessao3.style.display = 'flex'



divInfo.style.height = '600px'
divInfo.style.maxWidth = '675px'
divInfo.style.width = '675px'
divInfo.style.background = '#fff'



let h1Info1 = document.createElement('h1')
divInfo.appendChild(h1Info1)
h1Info1.innerText = 'Transform your brand'
h1Info1.style.color = '#252e3b'
h1Info1.style.fontSize = '48px'
h1Info1.style.marginBottom = '40px'
h1Info1.style.marginTop = '150px'
h1Info1.style.marginLeft = '100px'
h1Info1.style.marginRight = '200px'
h1Info1.style.fontWeight = 'bold'

let pInfo1 = document.createElement('p')
divInfo.appendChild(pInfo1)
pInfo1.innerText = 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you'
pInfo1.style.fontSize = '18px'
pInfo1.style.letterSpacing = '1.2px'
pInfo1.style.color = '#89888f'
pInfo1.style.fontWeight = '500'
pInfo1.style.marginBottom = '40px'
pInfo1.style.marginLeft = '100px'
pInfo1.style.marginRight = '150px'



let aInfo1 = document.createElement('a')
divInfo.appendChild(aInfo1)
aInfo1.innerText = 'Learn more'
aInfo1.style.fontSize = '22px'
aInfo1.style.fontWeight = 'bold'
aInfo1.style.color = '#252e3b'
aInfo1.style.marginLeft = '100px'


divInfoImg.style.background = 'url(../images/desktop/image-transform.jpg) no-repeat'
divInfoImg.style.height = '600px'
divInfoImg.style.maxWidth = '675px'
divInfoImg.style.width = '675px'
divInfoImg.style.inlineSize = webkitCancelAnimationFrame = '675px'



// Quarta Sessão  -------------------------------------

const sessao4 = document.createElement('section')
classeJs.appendChild(sessao4)
sessao4.style.height = '400px'
sessao4.style.display = 'flex'


const divInfoImg4 = document.createElement('div')
sessao4.appendChild(divInfoImg4)

divInfoImg4.style.background = 'url(../images/desktop/image-stand-out.jpg)'
divInfoImg4.style.height = '600px'
divInfoImg4.style.maxWidth = '675px'
divInfoImg4.style.inlineSize = webkitCancelAnimationFrame = '675px'

const divInfo4 = document.createElement('div')
sessao4.appendChild(divInfo4)

divInfo4.style.height = '600px'
divInfo4.style.background = '#fff'
divInfo4.style.maxWidth = '675px'
divInfo4.style.width = '675px'

const h1Info4 = document.createElement('h1')
divInfo4.appendChild(h1Info4)

h1Info4.innerHTML = 'Stand out to the right audience'
//h1Info4.style.padding = '0px'
//h1Info4.style.margin = '0px'

h1Info4.style.color = '#252e3b'
h1Info4.style.fontSize = '48px'
h1Info4.style.marginBottom = '40px'
h1Info4.style.marginTop = '150px'
h1Info4.style.marginLeft = '100px'
h1Info4.style.marginRight = '200px'
h1Info4.style.fontWeight = 'bold'

const pInfo4 = document.createElement('p')
divInfo4.appendChild(pInfo4)
pInfo4.innerText = 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
pInfo4.style.fontSize = '18px'
pInfo4.style.letterSpacing = '1.2px'
pInfo4.style.color = '#89888f'
pInfo4.style.fontWeight = '500'
pInfo4.style.marginBottom = '40px'
pInfo4.style.marginLeft = '100px'
pInfo4.style.marginRight = '150px'

const aInfo4 = document.createElement('a')
divInfo4.appendChild(aInfo4)
aInfo4.innerText = 'Learn more'
aInfo4.style.fontSize = '22px'
aInfo4.style.fontWeight = 'bold'
aInfo4.style.color = '#252e3b'
aInfo4.style.marginLeft = '100px'


// Quinta Sessão  -------------------------------------

const sessao5 = document.createElement('section')
classeJs.appendChild(sessao5)
sessao5.style.height = '800px'
sessao5.style.display = 'flex'

const divInfo5 = document.createElement('div')
sessao5.appendChild(divInfo5)

divInfo5.style.height = '1000px'
divInfo5.style.maxWidth = '675px'
divInfo5.style.width = '675px'
divInfo5.style.background = 'url(../images/desktop/image-graphic-design.jpg) no-repeat center'


// Sexta Sessão  -------------------------------------

const divInfo6 = document.createElement('div')
sessao5.appendChild(divInfo6)

divInfo6.style.height = '1000px'
divInfo6.style.maxWidth = '675px'
divInfo6.style.width = '675px'
divInfo6.style.background = 'url(../images/desktop/image-photography.jpg) no-repeat center'

const h1Info5 = document.createElement('h1')
divInfo5.appendChild(h1Info5)
h1Info5.innerText = 'Graphic design'
h1Info5.style.fontSize = '28px'
h1Info5.style.textAlign = 'center'
h1Info5.style.fontWeight = 'bold'
h1Info5.style.marginTop = '580px'

const h1Info6 = document.createElement('h1')
divInfo6.appendChild(h1Info6)
h1Info6.innerText = 'Graphic design'
h1Info6.style.fontSize = '28px'
h1Info6.style.textAlign = 'center'
h1Info6.style.fontWeight = 'bold'
h1Info6.style.marginTop = '580px'

const pInfo5 = document.createElement('p')
divInfo5.appendChild(pInfo5)

pInfo5.innerText = 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
pInfo5.style.fontSize = '16px'
pInfo5.style.textAlign = 'center'
pInfo5.style.padding = '0 180px'
pInfo5.style.letterSpacing = '1px'
pInfo5.style.fontWeight = '400'

const pInfo6 = document.createElement('p')
divInfo6.appendChild(pInfo6)

pInfo6.innerText = 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
pInfo6.style.fontSize = '16px'
pInfo6.style.textAlign = 'center'
pInfo6.style.padding = '0 180px'
pInfo6.style.letterSpacing = '1px'
pInfo6.style.fontWeight = '400'

const sessao6 = document.createElement('section')
classeJs.appendChild(sessao6)

sessao6.style.height = '200px'
sessao6.style.background = '#fff'

const h1Sessao6 = document.createElement('h1')
sessao6.appendChild(h1Sessao6)

h1Sessao6.innerText = 'Client testimonials'
h1Sessao6.style.letterSpacing = '8px'
h1Sessao6.style.fontSize = '25px'
h1Sessao6.style.fontWeight = 'bold'
h1Sessao6.style.color = '#a6a5a8'
h1Sessao6.style.padding = '100px 0 50px 0'
h1Sessao6.style.textAlign = 'center'

// Setima Sessão  -------------------------------------

const sessao7 = document.createElement('section')
classeJs.appendChild(sessao7)

sessao7.style.height = 'auto'
sessao7.style.display = 'flex'



// DIV CLIENTE  ------------------------------


const divClient1 = document.createElement('div')
sessao7.appendChild(divClient1)

divClient1.style.height = '600px'
divClient1.style.width = '450px'


const imgClient1 = document.createElement('img')
divClient1.appendChild(imgClient1)
imgClient1.src = 'images/image-emily.jpg'
imgClient1.style.display = 'block'
imgClient1.style.width = '80px'
imgClient1.style.borderRadius = '50%'
imgClient1.style.margin = '0 auto'

const pClient1 = document.createElement('p')
divClient1.appendChild(pClient1)

pClient1.innerText = 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
pClient1.style.lineHeight = '35px'
pClient1.style.textAlign = 'center'
pClient1.style.color = '#525355'
pClient1.style.padding = '0 50px'
pClient1.style.fontSize = '18px'
pClient1.style.fontWeight = '600'

const nomeClient = document.createElement('p')
divClient1.appendChild(nomeClient)

nomeClient.innerText = 'Emily R.'
nomeClient.style.marginTop = '50px'
nomeClient.style.textAlign = 'center'
nomeClient.style.fontSize = '20px'
nomeClient.style.fontWeight = 'bold'
nomeClient.style.color = '#272f3a'

const profClient = document.createElement('p')
divClient1.appendChild(profClient)

profClient.innerText = 'Marketing Director'
profClient.style.textAlign = 'center'
profClient.style.color = '#ababab'
profClient.style.margin = '10px 0 200px 0'


// DIV CLIENTE 2 ------------------------------




const divClient2 = document.createElement('div')
sessao7.appendChild(divClient2)


divClient2.style.height = '800px'
divClient2.style.width = '450px'


const imgClient2 = document.createElement('img')
divClient2.appendChild(imgClient2)
imgClient2.src = 'images/image-thomas.jpg'
imgClient2.style.display = 'block'
imgClient2.style.width = '80px'
imgClient2.style.borderRadius = '50%'
imgClient2.style.margin = '0 auto'

const pClient2 = document.createElement('p')
divClient2.appendChild(pClient2)

pClient2.innerText = 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
pClient2.style.lineHeight = '35px'
pClient2.style.textAlign = 'center'
pClient2.style.color = '#525355'
pClient2.style.padding = '0 50px'
pClient2.style.fontSize = '18px'
pClient2.style.fontWeight = '600'

const nomeClient2 = document.createElement('p')
divClient2.appendChild(nomeClient2)

nomeClient2.innerText = 'Thomas S.'
nomeClient2.style.marginTop = '50px'
nomeClient2.style.textAlign = 'center'
nomeClient2.style.fontSize = '20px'
nomeClient2.style.fontWeight = 'bold'
nomeClient2.style.color = '#272f3a'

const profClient2 = document.createElement('p')
divClient2.appendChild(profClient2)

profClient2.innerText = 'Chief Operating Officer'
profClient2.style.textAlign = 'center'
profClient2.style.color = '#ababab'
profClient2.style.margin = '10px 0 200px 0'

// DIV CLIENTE 3 ------------------------------

const divClient3 = document.createElement('div')
sessao7.appendChild(divClient3)


divClient3.style.height = '800px'
divClient3.style.width = '450px'


const imgClient3 = document.createElement('img')
divClient3.appendChild(imgClient3)
imgClient3.src = 'images/image-jennie.jpg'
imgClient3.style.display = 'block'
imgClient3.style.width = '80px'
imgClient3.style.borderRadius = '50%'
imgClient3.style.margin = '0 auto'

const pClient3 = document.createElement('p')
divClient3.appendChild(pClient3)

pClient3.innerText = 'SuIncredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
pClient3.style.lineHeight = '35px'
pClient3.style.textAlign = 'center'
pClient3.style.color = '#535355'
pClient3.style.padding = '0 50px'
pClient3.style.fontSize = '18px'
pClient3.style.fontWeight = '600'

const nomeClient3 = document.createElement('p')
divClient3.appendChild(nomeClient3)

nomeClient3.innerText = 'Jennie F.'
nomeClient3.style.marginTop = '50px'
nomeClient3.style.textAlign = 'center'
nomeClient3.style.fontSize = '20px'
nomeClient3.style.fontWeight = 'bold'
nomeClient3.style.color = '#272f3a'

const profClient3 = document.createElement('p')
divClient3.appendChild(profClient3)

profClient3.innerText = 'Business Owner'
profClient3.style.textAlign = 'center'
profClient3.style.color = '#ababab'
profClient3.style.margin = '10px 0 200px 0'
