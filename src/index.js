const $links = document.getElementById('links'); //aca vamos a obtener del dom
const $names = document.querySelector('h1');

const data = {
    name: "Estanislao Valdez",
    
    description: "...",
    avatar: "...",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/ValdezEsta88082",
        username: "",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/estani_valdez/",
        username: "",
      },
    ],
    links: [
      {
        name: "blog",
        url: "https://example.com/",
        color: "red",
        emoji: "📖",
      },
      {
        name: "podcast",
        url: "https://example.com/",
        color: "yellow",
        emoji: "💬",
      },
    ],
    footer: "Made with Love on Colombia",
  };

const main = () =>{ //funcion que va a leer este archivo de data,crear elemento del dom
  let name = document.createTextNode(data?.name);
  let links = data?.links?.map((links)=>{//links de redes sociales que voy a tener
    return `<div class="bg-${links.color}-200 px-4 py-5 w-full flex justify-between">
    <a class="text-sm font-bold text-${links.color}-600 text-center hover:text-${links.color}-800 cursor-pointer"
      href="${links.url}" target="_blank">
      ${links.name}
    </a>
    <span>${links.emoji}</span>
  </div>`;
  }).join('');
  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $names.appendChild(name) //cambio del h1 
}

main()