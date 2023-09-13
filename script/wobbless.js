var circles = document.querySelector('#circles')
var items = document.querySelectorAll('.item');



// function pop (el) {
//   let amount = 60;
//   var client = el.getBoundingClientRect();
//   var clientX = client.left;
//   var clientY = client.top;
//     for (let i = 0; i < amount; i++) {
//       createParticle(clientX, clientY);
//     }
  
// }
function createParticle (x, y) {
  const particle = document.createElement('span');
  particle.classList.add("particle")
  circles.appendChild(particle);
  let width = Math.floor(Math.random() * 30 + 8);
  let height = width;
  let destinationX = (Math.random() - 0.5) * 300;
  let destinationY = (Math.random() - 0.5) * 300;
  let rotation = Math.random() * 520;
  let delay = Math.random() * 200;

  var color = `hsl(${Math.random() * 90 + 90}, 70%, 50%)`;
  particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}`;
  particle.style.background = color;
  particle.style.borderRadius = '50%';
  width = height = Math.random() * 5 + 4 * 9;

  
  particle.style.width = `${width}px`;
  particle.style.height = `${height}px`;
  const animation = particle.animate([
    {
      transform: `translate(${x}px, ${y}px) rotate(0deg)`,
      opacity: 1
    },
    {
      transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
      opacity: 0
    }
  ], {
    duration: Math.random() * 1000 + 5000,
    easing: 'cubic-bezier(0, .9, .57, 1)',
    delay: delay
  });
  animation.onfinish = removeParticle;
}
function removeParticle (e) {
  e.srcElement.effect.target.remove();
}

if (document.body.animate) {
  items.forEach((option, i) => (option.index = i + 1));
  items.forEach((option) => option.addEventListener("click", function name() {
    // alert("yes");
    // option.index = i + 1;
    let amount = 60;
    let client = this.getBoundingClientRect();
    let clientX1 = client.left;
    let clientY1 = client.top;
  
    let main = Array.from(items);
    let index = main.indexOf(this);
    let rest = main.splice(index, 1);
    let again = Array.from(rest);

    // rest.ariaHidden = "false";
    console.dir(again)
    main.forEach(aye => {
      aye.setAttribute("aria-hidden", "true");
      aye.style.backgroundColor = '#24b0e9';
      aye.style.boxShadow = "none";
    })

    again.forEach(ay => {
      ay.setAttribute("aria-hidden", "false");
      this.style.backgroundColor = 'white';
      this.style.boxShadow = "0 0 6px 6px #0edff6";
       
      // else {
      //   this.style.backgroundColor = 
      // }
    })


    for (let i = 0; i < amount; i++) {

      createParticle(clientX1, clientY1);
    }
    
  }))

}






