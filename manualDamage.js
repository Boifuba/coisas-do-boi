//this is a fragment of code from GURPS Game Aid.
//there's no reason to use it but you may like it.

const myContent = `<div class="gga-group">
					<h4> Wounding Modifiers</h4>

					<section id="wound-modifier-table">
						<div name="wounding-modifiers">
							<div class="gurps-3col gurps-radio-col">
								

								<div><label><input type="radio" name="woundmodifier" value="burn">&nbsp;Burning</label>
								</div>
								<div>
									burn
								</div>
								<div name="burn">
									×1
								</div>
								<div><label><input type="radio" name="woundmodifier" value="cor">&nbsp;Corrosive</label>
								</div>
								<div>
									cor
								</div>
								<div name="cor">
									×1
								</div>
								<div><label><input type="radio" name="woundmodifier" value="cr">&nbsp;Crushing</label>
								</div>
								<div>
									cr
								</div>
								<div name="cr">
									×1
								</div>
								<div><label><input type="radio" name="woundmodifier" checked="" value="cut">&nbsp;Cutting</label>
								</div>
								<div>
									cut
								</div>
								<div name="cut">
									×1.5
								</div>
								<div><label><input type="radio" name="woundmodifier" value="fat">&nbsp;Fatigue</label>
								</div>
								<div>
									fat
								</div>
								<div name="fat">
									×1
								</div>
								<div><label><input type="radio" name="woundmodifier" value="imp">&nbsp;Impaling</label>
								</div>
								<div>
									imp
								</div>
								<div name="imp">
									×2
								</div>
								<div><label><input type="radio" name="woundmodifier" value="pi-">&nbsp;Small Piercing</label>
								</div>
								<div>
									pi-
								</div>
								<div name="pi-">
									×0.5
								</div>
								<div><label><input type="radio" name="woundmodifier" value="pi">&nbsp;Piercing</label>
								</div>
								<div>
									pi
								</div>
								<div name="pi">
									×1
								</div>
								<div><label><input type="radio" name="woundmodifier" value="pi+">&nbsp;Large Piercing</label>
								</div>
								<div>
									pi+
								</div>
								<div name="pi+">
									×1.5
								</div>
								<div><label><input type="radio" name="woundmodifier" value="pi++">&nbsp;Huge Piercing</label>
								</div>
								<div>
									pi++
								</div>
								<div name="pi++">
									×2
								</div>
								<div><label><input type="radio" name="woundmodifier" value="tox">&nbsp;Toxic</label>
								</div>
								<div>
									tox
								</div>
								<div name="tox">
									×1
								</div>
								<div><label><input type="radio" name="woundmodifier" value="dmg">&nbsp;Damage</label>
								</div>
								<div>
									dmg
								</div>
								<div name="dmg">
									×1
								</div>
								<div><label><input type="radio" name="woundmodifier" value="injury">&nbsp;Injury</label>
								</div>
								<div>
									injury
								</div>
								<div name="injury">
									×1
								</div>
								<div><label><input type="radio" name="woundmodifier" value="kb">&nbsp;Knockback only</label>
								</div>
								<div>
									kb
								</div>
								<div name="kb">
									×1
								</div>
								<div><label><input type="radio" name="woundmodifier" value="ctrl">&nbsp;Control Points</label>
								</div>
								<div>
									ctrl
								</div>
								<div name="ctrl">
									×1
								</div>
							</div>
						</div>
					</section>
					
<label>
</label>
					&nbsp;
					<div class="grid grid-2col flex-between">
						<label>Damage:</label>
						<input type="text" name="dices" id="addmodifier" >
					</div>
					&nbsp;
  <button class="banana-set-size" role="button">Roll Damage</button>

				</div>


`;


const macro = this;
new Dialog({
	title: "GURPS Manual Damage",
	content: myContent,
	buttons: {},
	render: async (html) => listeners(html)
}).render(true);


async function listeners(html) {
	html.click(async function (event) {
		if (event.target.className === "banana-set-size") {
			let typeDamage = document.querySelector('input[name="woundmodifier"]:checked').value;
			let dices = document.querySelector('input[name="dices"]').value;
			console.log(typeDamage);
			GURPS.executeOTF(`/roll [${dices} ${typeDamage} ]`);
		}
	});
}