// Any reproduction or modification of this macro must include this credit to Boifubá

const myContent = `<style>
    .callheader {
      background-color: black;
      font-family: Roboto, sans-serif;
      color: white;
      text-align: center;
      vertical-align: middle;
      line-height: 50px;
      margin-bottom: 10px;
      border-radius: 0.375rem;
      font-size: 18px;
      text-decoration: none;
    }

   .grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
}
.grid-item {
      padding: 1px;

 }


  </style>
  <div class="callheader">Codfish is enough!</div>


  
 
  
 <div class="grid-container">

         <div class="grid-item">
         <label for="startColor"">Start Color:</label>

    <input type="color" id="startColor" name="startColor" value="#800080"><br><br>
         </div>
            <div class="grid-item">
            <label for="endColor"">End Color:</label>
    <input type="color" id="endColor" name="endColor" value="#FFFF00"><br><br>
            </div>
  </div> 
     <button class="generateColorsButton">Change colors</button>


`;

const macro = this;
new Dialog({
  title: "GURPS UselessMacro",
  content: myContent,
  buttons: {},
  render: async (html) => listeners(html),
}).render(true);


async function listeners(html) {



  html.click(async function (event) {
    if (event.target.className === "generateColorsButton") {
       const startColor = html.find("#startColor").val();
       const endColor =  html.find("#endColor").val();
    
const numIntervals = game.folders.contents.length


function getColorsInRange(startColor, endColor, numIntervals) {
  const startArr = startColor.match(/[A-Za-z0-9]{2}/g).map(channel => parseInt(channel, 16));
  const endArr = endColor.match(/[A-Za-z0-9]{2}/g).map(channel => parseInt(channel, 16));

  const intervalArr = [];
  for (let i = 0; i < startArr.length; i++) {
    intervalArr.push((endArr[i] - startArr[i]) / numIntervals);
  }

  const colorsArr = [startArr];
  for (let i = 1; i < numIntervals; i++) {
    const prevColor = colorsArr[i - 1];
    const newColor = prevColor.map((channel, index) => channel + intervalArr[index]);
    colorsArr.push(newColor);
  }
  colorsArr.push(endArr);

  const colorsHexArr = colorsArr.map(color => {
    const hexArr = color.map(channel => Math.round(channel).toString(16).padStart(2, '0'));
    return `#${hexArr.join('')}`;
  });

  return colorsHexArr;
}

const colorsArr = getColorsInRange(startColor, endColor, numIntervals);
console.log(colorsArr);

const updates = game.folders.map((folder, index) => {
  return {
    _id: folder.id,
    color: colorsArr[index]
  };
});

await Folder.updateDocuments(updates);
    }
  });
  await Folder.updateDocuments(updates);

}
