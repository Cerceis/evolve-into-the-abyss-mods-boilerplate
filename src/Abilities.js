/**
 * Add your abilities here.
 */
export const Abilities = {
    "0000":{
        id: "0000",
        name: "God Mode",
        description: "10% to remaining hp will be added as physical damage.",
        stackable: true,
        effects:{
            "onAdded":[
                async(player) => {
                    player.modPhysicalDmg += Math.round(player.hp * .1);
                }
            ],
            "onEvent": [
                async(player) => {
                    player.modPhysicalDmg -= Math.round(player.previous.hp[1] * .1);
                    player.modPhysicalDmg += Math.round(player.previous.hp[0] * .1);
                }
            ],
            "onRemoved":[
                async(player) => {
                    player.modPhysicalDmg -= Math.round(player.hp * .1);
                }
            ],
        }
    },
}